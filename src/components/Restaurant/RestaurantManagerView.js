import { React, useState, useReducer} from 'react'
import { useParams } from 'react-router'
import styles from './RestaurantManagerView.module.css'


export const RestaurantManagerView = ({menuData, restaurants}) => {

    //Finding the correct restaurant to display using useParams().
    const index = useParams(); 

    const restaurant = restaurants.find(restaurant => restaurant.id === index.id );
    if ( restaurant == null) {
        return <div>No matching restaurant</div>
    }

    //Filtering the correct menu to display using the above function result.
    const specificMenu = menuData.filter(menu => 
        menu.restaurant === restaurant.name
    )

    console.log(menuData)
    console.log(restaurant)

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
