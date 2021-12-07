import React from 'react';
import styles from './RestaurantManager.module.css';
import { Link } from 'react-router-dom';


export default function RestaurantManagerAdd() {

    return (
        <Link to='manage' style={{ textDecoration: 'none' }} >
            <div className={styles.box}>
                <div className={styles.buttonAddRestaurant}>
                    +
                </div>
            </div>
        </Link>
    )
}
