import React from 'react'
import styles from './Restaurants.module.css';
import Restaurant from './Restaurant';


export default function Restaurants(props) {

    return (
        <div className={styles.container}>
            {props.restaurants.map((data, key) => {
                function matchStrings(s1) {
                    return s1.toLowerCase().includes(props.search.toLowerCase());
                }

                let result = [
                    data.restaurantName,
                    data.priceLevel.toString(),
                    data.closes,
                    data.opens,
                    data.type,
                    data.address
                ];

                if (result.some(matchStrings)) {
                    return (
                      <Restaurant
                          key={key}
                          data={data}
                          requestGetMenu={data.requestGetMenu} />
                    );
                } else {
                    return (null);
                }
            })}
        </div>
    )
}