import styles from './Account.module.css';
import React from 'react'
import { useData } from '../DataProvider';
import { Link, Outlet } from 'react-router-dom';
//import { Context } from './Context'


export default function Account(props) {

    const { jwtDecoded } = useData();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerA}>
                    Role: {jwtDecoded.role}
                        <Link to='history'>
                            <div>Order History</div>
                        </Link>
                        
                        <Link to='payment'>
                            <div>Payment</div>
                        </Link>
                    </div>
                

                <div className={styles.containerB}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
