import React from 'react';
import {GetProduct} from '../Tools';
import styles from './RestaurantManagerMenuAdd.module.css';

export default function RestaurantManagerMenuAdd({menuData}) {
    const product = GetProduct(menuData);

    return (
        <div className={styles.container}>
            <div>
                {product.name}
            </div>

            <div>
                {product.category}
            </div>

            <div>
                {product.description}
            </div>

            <div>
                {product.image}
            </div>

            <div>
                {product.price}
            </div>

            <button className={styles.buttonRemove}>
                Delete
            </button>
        </div>
    )
}
