import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {GetRestaurant, GetMenu} from '../Tools';
import styles from './RestaurantManagerMenu.module.css';

export default function RestaurantsManagerMenu({restaurants, menuData}) {

    const restaurant = GetRestaurant(restaurants);
    const menu = GetMenu(menuData, restaurant);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Link to="new">
                    <button className={styles.buttonAdd}>
                        Add
                    </button>
                </Link>

                {menu.map((item, i) =>
                    <Link key={i} to={item.id}>
                        <div>
                            {item.name}
                        </div>
                    </Link>
                )}
            </div>

            <div className={styles.right}>
                <Outlet />
            </div>
        </div>
    )
}
