import { React, useState, useReducer} from 'react'
import { useParams } from 'react-router'
import {GetRestaurant, GetMenu} from '../Tools';
import styles from './RestaurantManagerView.module.css'


export const RestaurantManagerView = ({menuData, restaurants}) => {

    const restaurant = GetRestaurant(restaurants);
    if (restaurant === null) return (<div>No restaurant found</div>);

    //const menu = GetMenu(menuData, restaurant);
    //if (menu === null) return (<div>No menu found</div>);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.restaurantInfoContainer}>
                    <div className={styles.restaurantName}>
                        {restaurant.name}
                    </div>
                </div>

                <div className={styles.categoriesWrapper}>
                    <div className={styles.categoriesContainer}>
                        asdfasdfölkj
                    </div>
                </div>

                <div className={styles.menuContainer}>
                    <div className={styles.menuHeader}>
                        asd
                    </div>
                </div>    

            </div>
        </div>                  
    )
}
