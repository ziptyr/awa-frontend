import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import  { v4 as uuidv4 } from 'uuid';


import Header from './components/Header';
import Home from './components/Home';
import Restaurants from './components/Restaurants';
import RestaurantsManager from './components/Restaurant/RestaurantsManager';
import { RestaurantMenu } from './components/RestaurantMenu';
import { RestaurantManagerView } from './components/Restaurant/RestaurantManagerView';
import { menuData } from './data.menu';
import { restaurantData } from './data.restaurants';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Account from './components/Account';
import ShoppingCart from './components/ShoppingCart'
import Footer from './components/Footer';

const jwtFromStorage = window.localStorage.getItem("userJWT");

function App() {

  const [userJWT, setUserJWT] = useState(jwtFromStorage);

  const restaurants = restaurantData.map( data => {
   return { ...data, id: uuidv4()}
  });

  const menuDataIds = menuData.map( data => {
    return { ...data, id: uuidv4()}
  });

  let authRoutes = <>
        <Route path="/login" element={ <Login login={ (newJWT) => {
            setUserJWT(newJWT)
            window.localStorage.setItem("userJWT", newJWT)
            } }/>} />
        <Route path="/signup" element={ <SignUp />} />
    </>

    if(userJWT != null) {
        authRoutes =  <>
        <Route path="/account" element={ <Account jwt={userJWT} />  } />
        <Route parth="/shoppingcart" element={ <ShoppingCart />} />
        </>
    }

  
  return (
    <BrowserRouter>
      
        <Header userJWT={userJWT != null} logOut={() => {
            setUserJWT(null)
            window.localStorage.removeItem("userJWT");
            }} />

        <Routes>
            <Route path="/" element={ <Home /> } />
                { authRoutes }
                <Route path="/public/restaurants">
                    <Route path="" element={ <Restaurants restaurants={restaurants} /> }/>
                    <Route path=":id" element={
                        <RestaurantMenu  restaurants={restaurants} menuData={menuDataIds} />
                    } />
                </Route>

                <Route path="/manager/restaurants">
                    <Route path="" element={ <RestaurantsManager restaurants={restaurants} /> }/>
                    <Route path=":id" element={
                        <RestaurantManagerView  restaurants={restaurants} menuData={menuDataIds} />
                    } />
                </Route>
                <Route path="*" element={ <Home /> } />
            </Routes>

        {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
