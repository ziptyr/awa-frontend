import { React, useEffect, useState} from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import styles from './RestaurantManagerView.module.css'
import {useData} from '../DataProvider';


export const RestaurantManagerView = ({requestGetRestaurants, requestGetOrders}) => {

    const {userJWT} = useData();
    const params = useParams();
    const [orders, setOrders] = useState([]);

    let restaurant = requestGetRestaurants.getStateVar().find((r) => r.restaurantId = params.id);
    if (typeof restaurant === 'undefined') {
        restaurant = null;
    }

    requestGetOrders.setStateVarFnc(setOrders);
    requestGetOrders.setStateVar(orders);

    useEffect(() => {
        requestGetOrders.request(
            userJWT,
            '/manager/restaurants/' + restaurant.restaurantId + '/orders');
    }, [])

    const leftOrderKeys = {
        'orderId': 'ID',
        'username': 'Name',
        'orderStatus': 'Status'
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.leftRowHeader}>
                    {Object.values(leftOrderKeys).map((key) => {
                        return (
                            <div className={styles.leftCellHeader}>
                                {key}
                            </div>
                        )
                    })}
                </div>

                {orders.map(order => {
                    return (
                        <Link to={'' + order.orderId}>
                            <div className={styles.leftRow}>
                                {Object.keys(leftOrderKeys).map((key) => {
                                    return (
                                        <div className={styles.leftCell}>
                                            {order[key]}
                                        </div>
                                    )
                                })}
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className={styles.right}>
                <Outlet />
            </div>
        </div>                  
    )
}