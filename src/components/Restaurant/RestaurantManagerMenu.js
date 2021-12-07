import React from 'react';
import { useParams } from 'react-router';
import {Link, Outlet} from 'react-router-dom';
import styles from './RestaurantManagerMenu.module.css';

export default function RestaurantsManagerMenu({restaurants, menuData}) {
    //Finding the correct restaurant to display using useParams().
    const index = useParams();

    const restaurant = restaurants.find(restaurant => restaurant.id === index.id );
    if ( restaurant == null) {
        return <div>No matching restaurant</div>
    }

    //Filtering the correct menu to display using the above function result.
    const menu = menuData.filter(menu =>
        menu.restaurant === restaurant.name
    )

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
