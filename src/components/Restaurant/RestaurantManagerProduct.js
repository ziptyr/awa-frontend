import React from 'react';
import { useParams } from 'react-router';
import {GetProduct} from '../Tools';
import styles from './RestaurantManagerProduct.module.css';

export default function RestaurantManagerProduct({requestGetMenu}) {

    const params = useParams();

    const menu = requestGetMenu.getStateVar();

    let product = menu.find((p) => p.productId == params.productId);
    if (typeof product === 'undefined') {
        product = {
            'name': '',
            'category': '',
            'description': '',
            'image': '',
            'price': ''
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>Name:</div>
            <div className={styles.right}>{product.name}</div>

            <div className={styles.left}>Category:</div>
            <div className={styles.right}>{product.category}</div>

            <div className={styles.left}>Description:</div>
            <div className={styles.right}>{product.description}</div>

            <div className={styles.left}>Image:</div>
            <div className={styles.right}>{product.image}</div>
        
            <div className={styles.left}>Price:</div>
            <div className={styles.right}>{product.price}</div>
        </div>
    )
}
