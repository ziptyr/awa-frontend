import React from 'react';
import styles from './RestaurantManager.module.css';
import { Link } from 'react-router-dom';


export default function RestaurantManagerAdd() {

    return (
        <Link to='manage' style={{ textDecoration: 'none' }} >
            <div className={styles.box}>
                <div style={{
                    width: '226px',
                    height: '292px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '150px'
                }}>
                    +
                </div>
            </div>
        </Link>
    )
}
