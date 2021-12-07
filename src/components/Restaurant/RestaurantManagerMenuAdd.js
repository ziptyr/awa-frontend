import React from 'react';
import styles from './RestaurantManagerMenuAdd.module.css';

export default function RestaurantManagerMenuAdd({menuData}) {

    return (
        <div className={styles.container}>
            <div>
                Name:
                <input type="text" />
            </div>

            <div>
                Category:
                <input type="text" />
            </div>

            <div>
                Description:
                <input type="text" />
            </div>

            <div>
                Image:
                <input type="url" />
            </div>

            <div>
                Price:
                <input type="number" step="0.01" min="0" />
            </div>

            <button>
                Save product
            </button>
        </div>
    )
}
