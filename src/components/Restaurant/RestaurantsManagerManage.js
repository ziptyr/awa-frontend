import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import styles from './RestaurantsManagerManage.module.css';

export default function RestaurantsManagerManage({restaurants}) {

    const index = useParams(); 

    let restaurant = restaurants.find(restaurant => restaurant.id === index.id );
    if ( restaurant == null) {
        restaurant = {name: "", address: "", opens: "", closes: "", image: ""};
    }

    console.log(restaurant)

    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                <div>Name:</div>
                <div><input type='text' value={restaurant.name} /></div>

                <div>Address:</div>
                <div><input type='text' value={restaurant.address} /></div>

                <div>Opens:</div>
                <div><input type='time' value={restaurant.opens} /></div>

                <div>Closes:</div>
                <div><input type='time' value={restaurant.opens} /></div>

                <div>Image:</div>
                <div><input type='url' value={restaurant.image} /></div>

                <div>Type:</div>
                <div>
                    <select name='type' id='cars'>
                        <option value='casual'>Casual</option>
                        <option value='fine_dining'>Fine dining</option>
                        <option value='buffet'>Buffet</option>
                        <option value='fast_food'>Fast food</option>
                    </select>
                </div>

                <div>Pricing:</div>
                <div><input type='range' min='0' max='5' /></div>
            </div>

            <div className={styles.buttons}>
                <Link to='../..'><div>OK</div></Link>
                <Link to='../..'><div>Cancel</div></Link>
            </div>
        </div>
    )
}
