import React, {useState, useEffect, useContext} from 'react'
import styles from './RestaurantsManager.module.css';
import RestaurantManager from './RestaurantManager';
import RestaurantManagerAdd from './RestaurantManagerAdd';
import { Context } from '../Context'

const axios = require('axios').default;
const HEROKU = 'https://awa-2021-t35.herokuapp.com';
const restaurantPath = '/manager/restaurants';


export default function Restaurants() {

    const [restaurants, setRestaurants] = useState([]);
    const context = useContext(Context);

    const AXIOS_HEADERS = {headers: {'Authorization': 'Bearer ' + context.userJWT}};

    useEffect(() => {
        axios.get(HEROKU + restaurantPath, AXIOS_HEADERS)
            .then(function (response) {
            // handle success
            //console.log(response);
            console.log(response.data)
            //restaurants = response.data;
            setRestaurants([...response.data])
        })
            .catch(function (error) {
            // handle error
            console.log(error);
        })
            .then(function () {
            // always executed
        });
    }, []);

    console.log(restaurants)

    return (
        <div className={styles.container}>
            {restaurants.map((data, key) => <RestaurantManager key={key} data={data} />)}
            <RestaurantManagerAdd />
        </div>
    )
}