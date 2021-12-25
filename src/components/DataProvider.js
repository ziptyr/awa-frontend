import React, { createContext, useState, useContext } from 'react';

import { isExpired, decodeToken } from 'react-jwt';


const DataContext = createContext();
export const useData = () => useContext(DataContext);

const jwtFromStorage = window.localStorage.getItem('userJwt');


export default function DataProvider({children}) {

  const [ codedToken ] = useState(jwtFromStorage);

  const decodedToken = decodeToken(codedToken);
  //const tokenExpired = isExpired(jwtFromStorage);

  const [ restaurants, setRestaurants ] = useState([]);

  const role = (() => {
    if (decodedToken) return decodedToken.role;
    else return null;
  });

  const jwtHeaders = {
    'headers': {
      'Authorization': 'Bearer ' + codedToken
    }
  };


  return (
    <DataContext.Provider value={{
      restaurants,
      setRestaurants,
      role,
      jwtHeaders
    }}>
      {children}
    </DataContext.Provider>
  )
}
