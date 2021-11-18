import { useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import  { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Home from './pages/Home';
import { Restaurant } from './components/Restaurant';
import  Restaurants  from './components/Restaurants';
import { RestaurantMenu } from './components/RestaurantMenu';
import { menuData } from './data.menu';
import { restaurantData } from './data.restaurants';
import  Login  from './components/Login';
import { UserContext } from './UserContext';
import Main from './Main';
import Footer from './components/Footer';

function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser}), [user, setUser]);

  const updatedRestaurants = restaurantData.map( data => {
   return { ...data, id: uuidv4()}
  });

  const menuDataIds = menuData.map( data => {
    return { ...data, id: uuidv4()}
  });
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Header />
          <Routes>
              <Route path="/" element={<Main />}>
                    <Route path="/home" element={<Home />}/>  
                    <Route path="/login" element={<Login />}/>
                    <Route path="/restaurants" element={<Restaurants updatedRestaurants={updatedRestaurants} />}>
                      <Route path="" element={<Restaurant />}/>
                      <Route path=":id" element={<RestaurantMenu  updatedRestaurants={updatedRestaurants} menuData={menuDataIds}  />}/>
                    </Route>
                </Route>
            </Routes>
        <Footer />
    </UserContext.Provider>
  </BrowserRouter>
  );
}

export default App;
