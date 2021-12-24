import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useData } from './components/DataProvider';

import './App.css';
import Main from './components/Main';
import Home from './components/Home';

import PublicRestaurants from './components/Restaurant/Public/Restaurants';


function App() {

  const { restaurants, setRestaurants } = useData();
  const [ search, setSearch ] = useState('');

  let restaurantRoutes = <>
    <Route path="/restaurants" element={<PublicRestaurants />} />
  </>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main search={search} setSearch={setSearch} />}>
          <Route path="" element={<Home />} />

          {restaurantRoutes}

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;