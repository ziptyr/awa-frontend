import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserAuthContext } from './components/Contexts';

import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import RestaurantsManager from './components/Restaurants/Manager/Restaurants';
import RestaurantsPublic from './components/Restaurants/Public/Restaurants';


const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App() {

  const initialAuthData = {
    jwt: jwtFromStorage,
    login: (newValueForJwt) => {
      const newAuthData = { ...userAuthData,
          jwt: newValueForJwt
        };
      window.localStorage.setItem('appAuthData', newValueForJwt);
      setUserAuthData(newAuthData);
    },
    logout: () => {
      window.localStorage.removeItem('appAuthData');
      setUserAuthData({...initialAuthData});
    }
  };

  const [ userAuthData, setUserAuthData ] = useState({...initialAuthData});

  const [ search, setSearch ] = useState('');

  let authRoutes = <>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
  </>

  let restaurantRoutes = <>
      <Route path='/restaurants' element={<RestaurantsPublic />} />
  </>

  if(userAuthData.jwt) {
    authRoutes = <>
    </>

    restaurantRoutes = <>
      <Route path='/restaurants' element={<RestaurantsManager />} />
    </>
  }

  return (
    <UserAuthContext.Provider value={
        userAuthData
    }>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main
              search={search}
              setSearch={setSearch} />}>

            <Route path="" element={<Home />} />
            { authRoutes }
            { restaurantRoutes }
            <Route path="*" element={<Home />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </UserAuthContext.Provider>
  );
}

export default App;