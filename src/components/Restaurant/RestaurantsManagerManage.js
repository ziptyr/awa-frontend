import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {GetRestaurant} from '../Tools';
import styles from './RestaurantsManagerManage.module.css';

export default function RestaurantsManagerManage({restaurants}) {

    const restaurant = {...GetRestaurant(restaurants)};
    if (typeof restaurant === 'undefined') {
        restaurant.name = "";
        restaurant.address = "";
        restaurant.opens = "";
        restaurant.closes = "";
        restaurant.image = "";
        restaurant.price = "";
    }

    const [name, setName] = useState(restaurant.name);
    const [address, setAddress] = useState(restaurant.address);
    const [opens, setOpens] = useState(restaurant.opens);
    const [closes, setCloses] = useState(restaurant.closes);
    const [image, setImage] = useState(restaurant.image);
    const [type, setType] = useState(restaurant.type);
    const [price, setPrice] = useState(restaurant.price);

    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                <div>
                    Name:
                </div>
                <div>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    Address:
                </div>
                <div>
                    <input
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div>
                    Opens:
                </div>
                <div>
                    <input
                        type='time'
                        value={opens}
                        onChange={(e) => setOpens(e.target.value)} />
                </div>

                <div>
                    Closes:
                </div>
                <div>
                    <input
                        type='time'
                        value={closes}
                        onChange={(e) => setCloses(e.target.value)} />
                </div>

                <div>
                    Image:
                </div>
                <div>
                    <input
                        type='url'
                        value={image}
                        onChange={(e) => setImage(e.target.value)} />
                </div>

                <div>
                    Type:
                </div>
                <div>
                    <select
                        name='type'
                        id='cars'
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                            <option value='casual'>Casual</option>
                            <option value='fine_dining'>Fine dining</option>
                            <option value='buffet'>Buffet</option>
                            <option value='fast_food'>Fast food</option>
                    </select>
                </div>

                <div>
                    Price:
                </div>
                <div>
                    <input
                        type='range'
                        min='0'
                        max='5'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
            </div>

            <div className={styles.buttons}>
                <Link to='../..'>
                    <button className={styles.button}>
                        OK
                    </button>
                </Link>
                <Link to='../..'>
                    <button className={styles.button}>
                        Cancel
                    </button>
                </Link>
            </div>
        </div>
    )
}
