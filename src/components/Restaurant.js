import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import styles from './Restaurant.module.css'

export const Restaurant = () => {
    return (
        <div className={styles.container}>
            <Link to="/restaurants"><h1>Restaurants List</h1></Link>

             {/* <Outlet />  */}
            
        </div>
    )
}
