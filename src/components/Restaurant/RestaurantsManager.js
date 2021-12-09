import React from 'react'
import styles from './RestaurantsManager.module.css';
import RestaurantManager from './RestaurantManager';
import RestaurantManagerAdd from './RestaurantManagerAdd';


export default function RestaurantsManager({restaurants}) {

    return (
        <div className={styles.container}>
            {restaurants.map((data, key) => <RestaurantManager key={key} data={data} />)}
            <RestaurantManagerAdd />
        </div>
    )
}