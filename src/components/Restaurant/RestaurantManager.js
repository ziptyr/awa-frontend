import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RestaurantManager.module.css'


export default function RestaurantManager({data}) {

    return (
        <div className={styles.box}>
            <div key={data.id} style={{position: 'relative'}}>
                <Link to={'' + data.restaurantId} style={{ textDecoration: 'none' }} >
                    <img src={data.image} alt={data.image} width="225px" />
                </Link>
        
                <Link to={'manage/' + data.restaurantId}>
                    <button className={styles.buttonEdit}>
                        E
                    </button>
                </Link>
        
                <Link to={'' + data.restaurantId}>
                    <div className={styles.title}>
                        {data.restaurantName}
                    </div>
          
                    <div className={styles.marginDiv} />
                </Link>
        
                <Link to={'menu/' + data.restaurantId}>
                    <button className={styles.buttonMenu}>
                        Menu
                    </button>
                </Link>
        
                <Link to={'' + data.restaurantId}>
                    <div className={styles.marginDiv} />
          
                    <div className={styles.restInfo}>
                        <div>
                            Orders: X
                            <br />
                            New Orders: Y
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}