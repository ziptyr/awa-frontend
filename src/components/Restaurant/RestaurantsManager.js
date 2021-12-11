import React from 'react'
import styles from './RestaurantsManager.module.css';
import RestaurantManager from './RestaurantManager';
import RestaurantManagerAdd from './RestaurantManagerAdd';
import {useData} from '../DataProvider';


export default function RestaurantsManager() {

    const {restaurants} = useData();

    return (
        <div className={styles.container}>
            {restaurants.map((data, key) => <RestaurantManager data={data} key={key} />)}
            <RestaurantManagerAdd />
        </div>
    )

    return (null)
}