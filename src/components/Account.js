import jwt from 'jsonwebtoken';
import styles from './Account.module.css';
import {React, useContext} from 'react'
import { Context } from './Context'


export default function Account(props) {

    const context = useContext(Context);
   console.log(context.jwtDecoded);
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerA}>
                Role: {context.jwtDecoded.user.role}
                <div>Account Settings</div>
                <div>Profile</div>
                <div>Order History</div>
                <div>Payment</div>
                </div>
            
            <div className={styles.containerB}>Example text</div>
            <div className={styles.containerC}>example text</div>
        </div>
    )
}
