import React from 'react';
import { useParams } from 'react-router';
import styles from './RestaurantManagerProduct.module.css';

export default function RestaurantManagerProduct({requestGetMenu}) {

    const params = useParams();

    const menu = requestGetMenu.getStateVar();

    let product = menu.find((p) => p.productId === parseInt(params.productId));
    if (typeof product === 'undefined') {
        return (
            <div>
                Product not found
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <div className={styles.foodName}>{product.name}</div>
                <div className={styles.tag}>Price</div>
                <div >{product.price}</div>
                <div className={styles.tag}>Category</div>
                <div >{product.category}</div>
                <div className={styles.tag}>Description</div>
                <div >{product.description}</div>
                <img src={product.image} alt={product.image} />
            </div>

        </div>
    )
}
