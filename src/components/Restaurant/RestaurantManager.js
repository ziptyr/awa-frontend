import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RestaurantManager.module.css'


export default function RestaurantManager({data}) {

    return (
        <div style={{position: 'relative'}}>
            <Link to={'' + data.restaurantId} style={{ textDecoration: 'none' }} >
                <div className={styles.box}>
                    <div style={{width: "231px", height: "231px"}}>
                        <img src={data.image} alt={data.image} width="225px" />
                    </div>
        
        
                    <div className={styles.title}>
                        {data.restaurantName}
                    </div>
        
                    <div className={styles.marginDiv} />
        
        
                    <div className={styles.marginDiv} />
        
                    <div className={styles.restInfo}>
                        <div>
                            Orders: X
                            <br />
                            New Orders: Y
                        </div>
                    </div>
                </div>
            </Link>

            <Link to={'manage/' + data.restaurantId}>
                <button className={styles.buttonEdit}>
                    E
                </button>
            </Link>

            <Link to={'menu/' + data.restaurantId}>
                <div className={styles.buttonMenuContainer}>
                    <button className={styles.buttonMenu}>
                        Menu
                    </button>
                </div>
            </Link>
        </div>
    )
}
