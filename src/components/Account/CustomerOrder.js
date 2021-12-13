import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { RequestGet } from '../../Tools/requestClasses';
import { useData } from '../DataProvider';
import styles from './CustomerOrder.module.css';

export default function CustomerOrder() {

    const { userJWT } = useData();
    const params = useParams();
    const requestGetOrders = new RequestGet([]);
    const [ order, setOrder ] = useState();
    const requestGetOrder = new RequestGet(order, setOrder);

    useEffect(() => {
        requestGetOrders.request(userJWT, '/customer/orders');
        requestGetOrder.request(userJWT, '/customer/orders/' + params.id)
        console.log('order', requestGetOrder)
    }, [])

    const foundOrder = requestGetOrders.getStateVar().map((o) => o.orderId == params.id);
    if (typeof foundOrder === 'undefined') {
        return (
            <div>
                Order not found
            </div>
        )
    }

    return (
        <div>
            customer order
        </div>
    )
}
