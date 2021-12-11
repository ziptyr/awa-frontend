import React, {createContext, useState, useContext} from 'react';
import axios from 'axios';
import Constants from './Constants';
import jwt from 'jsonwebtoken';
import { Context } from './Context';

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const jwtFromStorage = window.localStorage.getItem("userJWT");


export default function DataProvider({children}) {

    //CLASSES
    //CLASSES END

    //CONSTANTS
    const [userJWT, setUserJWT] = useState(jwtFromStorage);
    const jwtDecoded = jwt.decode(userJWT);

    const [restaurants, setRestaurants] = useState([]);
    //CONSTANTS END

    //FUNCTIONS
    //function getRestaurant(id) {
    //    let result = restaurants.find((restaurant) => restaurant.restaurantId == id);

    //    if (typeof result === 'undefined') {
    //        result = {
    //            'found': false,
    //            'restaurantName': '',
    //            'address': '',
    //            'opens': '',
    //            'closes': '',
    //            'image': '',
    //            'type': 'Casual',
    //            'priceLevel': 0
    //        }
    //    } else {
    //        result = {'found': true, ...result};
    //    }

    //    return result;
    //}
    //FUNCTIONS END

    React.useEffect(() => {
        function getRestaurantsRoute() {
            let restaurantsUrl;

            if (jwtDecoded == null) {
                restaurantsUrl = '/public/restaurants';
            } else if (jwtDecoded.role === 'CUSTOMER') {
                restaurantsUrl = '/public/restaurants';
            } else if (jwtDecoded.role === 'MANAGER') {
                restaurantsUrl = '/manager/restaurants';
            }

            return restaurantsUrl;
        }

        let axiosHeaders = {'headers': {'Authorization': 'Bearer ' + userJWT}};

        axios.get(Constants.API_ADDRESS + getRestaurantsRoute(), axiosHeaders)
            .then((response) => {
                setRestaurants(response.data);
            })
            .catch((error) => {
                console.log('DataProvider: ', error);
            })
            .then(() => {
                console.log('DataProvider: ' + Constants.API_ADDRESS + getRestaurantsRoute());
            });
    }, []);

    return (
        <DataContext.Provider value={{
            userJWT,
            restaurants,
            setRestaurants
        }}>
            {children}
        </DataContext.Provider>
    )
}