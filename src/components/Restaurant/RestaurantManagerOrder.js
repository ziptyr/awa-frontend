import { React, useEffect, useState} from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import styles from './RestaurantManagerOrder.module.css'
import {useData} from '../DataProvider';


export default function RestaurantManagerOrder({
    requestGetRestaurants,
    requestGetOrders,
    requestPostOrders
}) {

    const {userJWT} = useData();
    const params = useParams();
    //const [orders, setOrders] = useState([]);
    const [eta, setEta] = useState();

    let restaurant = requestGetRestaurants.getStateVar().find((r) => r.restaurantId = params.id);
    if (typeof restaurant === 'undefined') {
        restaurant = null;
    }

    let order = requestGetOrders.getStateVar().find((o) => o.orderId = params.orderId);
    if (typeof order === 'undefined') {
        order = {
            'deliveryAddress': '',
            'eta': '',
            'orderDate': '',
            'orderStatus': '',
            'restaurantId': params.id,
            'total': 0,
            'username': ''
        };
    }

    console.log('order', order)

    const orderKeys = {
        'orderId': 'ID',
        'username': 'Customer',
        'status': 'Status',
        'orderDate': 'Date',
        'total': 'Total',
        'deliveryAddress': 'Address',
        'eta': 'ETA'
    };

    const productKeys = {
        'amount': 'Amount',
        'orderId': 'Order ID',
        'productId': 'Product ID',
        'productPrice': 'Price'
    }

    const orderStatuses = {
        0: 'Received',
        1: 'Preparing',
        2: 'Ready for delivery',
        3: 'Delivering',
        4: 'Delivered'
    }

    return (
        <div>
            <div className={styles.orderValues}>
                {Object.keys(orderKeys).map((key) => {
                    return (
                        <div className={styles.orderCol}>
                            <div>
                                {orderKeys[key]}
                            </div>
                            <div>
                                {order[key]}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.headersRow}>
                {Object.values(productKeys).map((key) => {
                    return (
                        <div className={styles.headersCol}>
                            {key}
                        </div>
                    )
                })}
            </div>


            {(order.orderStatus == 0) ? (
                    <>
                        <input
                            type="time"
                            value={eta}
                            onChange={(e) => setEta(e.target.value)} />
                        <br />
                    </>
                ) : null}

            <button onClick={() => {
                alert('status ' + (order.orderStatus + 1) + ' eta ' + eta);
            }}>
                Status to: {orderStatuses[order.orderStatus + 1]}
            </button>
        </div>
    )
}