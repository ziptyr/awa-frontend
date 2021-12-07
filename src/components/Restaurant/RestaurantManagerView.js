import { React, useState} from 'react'
import {GetRestaurant, GetNewOrders, GetInProgressOrders} from '../Tools';
import styles from './RestaurantManagerView.module.css'


export const RestaurantManagerView = ({menuData, restaurants, orders}) => {

    const restaurant = GetRestaurant(restaurants);
    if (restaurant === null) return (<div>No restaurant found</div>);

    const newOrders = GetNewOrders(orders);
    const inProgress = GetInProgressOrders(orders);

    //const menu = GetMenu(menuData, restaurant);
    //if (menu === null) return (<div>No menu found</div>);

    const orderKeyNames = [
        'Order ID',
        'Restaurant ID',
        'Customer',
        'Order Status',
        'Date',
        'Price',
        'Address'
    ]

    const MapKeys = ({keys}) => {
        return (keys.map((name, i) => (
            <div key={i} className={styles.header}>
                {name}
            </div>
        )))
    }

    const MapOrderDetails = ({orders}) => {
        return (orders.map((order, orderIndex) =>
            Object.values(order.details).map((e, detailIndex) => {
                return (
                    <div key={orderIndex + '-' + detailIndex}>
                        <div>{e}</div>
                    </div>
                )
            })
        ))
    }

    return (
        <div className={styles.container}>
            <h2>New Orders</h2>
            <div className={styles.newOrders}>
                <MapKeys keys={orderKeyNames} />
                <MapOrderDetails orders={newOrders} />
            </div>

            <h2>In Progress</h2>
            <div className={styles.newOrders}>
                <MapKeys keys={orderKeyNames} />
                <MapOrderDetails orders={inProgress} />
            </div>
        </div>                  
    )
}