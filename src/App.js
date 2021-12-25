import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useData } from './components/DataProvider';
import Constants from './components/Constants.json';

import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import PublicRestaurants from './components/Restaurant/Public/Restaurants';


function App() {

  const axios = require('axios').default;

  const { restaurants, setRestaurants } = useData();
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    axios.get(Constants.API_ADDRESS + '/public/restaurants')
      .then((response) =>{
        console.log(response);
        setRestaurants(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log('axios');
      })
  }, [])

  let restaurantRoutes = <>
    <Route path="/restaurants" element={<PublicRestaurants />} />
  </>;

  let rightLinks = <>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
  </>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main search={search} setSearch={setSearch} />}>
          <Route path="" element={<Home />} />

          {restaurantRoutes}

          {rightLinks}

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;