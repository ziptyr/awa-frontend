import React, { createContext, useState, useContext } from 'react';

import { isExpired, decodeToken } from 'react-jwt';


const DataContext = createContext();
export const useData = () => useContext(DataContext);

const jwtFromStorage = window.localStorage.getItem('userJwt');


export default function DataProvider({children}) {

  const [ restaurants, setRestaurants ] = useState([]);

  const decodedToken = decodeToken(jwtFromStorage);
  //const tokenExpired = isExpired(jwtFromStorage);
  const role = (() => {
    if (decodedToken) return decodedToken.role;
    else return null;
  });


  return (
    <DataContext.Provider value={{
      restaurants,
      setRestaurants,
      role
    }}>
      {children}
    </DataContext.Provider>
  )
}
