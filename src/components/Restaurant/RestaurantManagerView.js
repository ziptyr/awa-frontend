import { React, useState} from 'react'
import {GetRestaurant, GetNewOrders, GetInProgressOrders} from '../Tools';
import { Link } from 'react-router-dom';
import styles from './RestaurantManagerView.module.css'


export const RestaurantManagerView = ({menuData, restaurants, orders}) => {

    const restaurant = GetRestaurant(restaurants);
    if (restaurant === null) return (<div>No restaurant found</div>);

    const newOrders = GetNewOrders(orders);
    const inProgressOrders = GetInProgressOrders(orders);

    //const menu = GetMenu(menuData, restaurant);
    //if (menu === null) return (<div>No menu found</div>);

    const orderPrettyKeys = {
        'orderId': 'Order ID',
        'restaurantId': 'Restaurant ID',
        'username': 'Customer',
        'orderStatus': 'Order Status',
        'orderDate': 'Date',
        'total': 'Price',
        'deliveryAddress': 'Address'
    };

    const newOrderKeys = [
        'orderId',
        'username',
        'orderDate',
        'total',
        'deliveryAddress'
    ];

    const inProgressOrderKeys = [
        'orderId',
        'username',
        'orderStatus',
        'orderDate',
        'total',
        'deliveryAddress'
    ];

    const newOrderPrettyKeys = newOrderKeys.map((k) => orderPrettyKeys[k]);
    const inProgressOrderPrettyKeys = inProgressOrderKeys.map((k) => orderPrettyKeys[k]);

    const MapKeys = ({keys}) => {
        return (
            keys.map((name, i) => (
                <div key={i} className={styles.header}>
                    {name}
                </div>
            ))
        )
    }

    const MapOrderDetails = ({orders, keys}) => {
        return (orders.map((order, orderIndex) =>
            keys.map((key, keyIndex) => {
                return (
                    <Link to={'' + order.details.orderId} className={styles.link}>
                        <div key={orderIndex + '-' + keyIndex}>
                            <div>{order.details[key]}</div>
                        </div>
                    </Link>
                )
            })
        ))
    }

    return (
        <div className={styles.container}>
            <h2>New Orders</h2>
            <div className={styles.newOrders}>
                <MapKeys keys={newOrderPrettyKeys} />
                <MapOrderDetails keys={newOrderKeys} orders={newOrders} />
            </div>

            <h2>In Progress</h2>
            <div className={styles.inProgressOrders}>
                <MapKeys keys={inProgressOrderPrettyKeys} />
                <MapOrderDetails keys={inProgressOrderKeys} orders={inProgressOrders} />
            </div>
        </div>                  
    )
}