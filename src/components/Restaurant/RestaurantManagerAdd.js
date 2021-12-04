import React from 'react'
import styles from './RestaurantManager.module.css'

export default function RestaurantManagerAdd() {
    return (
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
    )
}
