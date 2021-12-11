import React, {useState} from 'react';
import { useParams } from 'react-router'
import styles from './RestaurantManagerMenuAdd.module.css';
import {useData} from '../DataProvider';

export default function RestaurantManagerMenuAdd({requestPostMenu, requestGetMenu}) {

    const {userJWT} = useData();
    const params = useParams();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    console.log(requestGetMenu)

    return (
        <>
            <div className={styles.container}>
                <div>Name:</div>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>Category:</div>
                <div>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}/>
                </div>

                <div>Description:</div>
                <div>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                </div>

                <div>Image:</div>
                <div>
                    <input
                        type="url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}/>
                </div>

                <div>Price:</div>
                <div>
                    <input
                        type="number"
                        value={price}
                        min="0.01"
                        step="0.01"
                        onChange={(e) => setPrice(e.target.value)}/>
                </div>

                <div>
                </div>
                <div>
                    <button
                        className={styles.buttonSave}
                        onClick={() => {
                            let newProduct = {
                                'name': name,
                                'category': category,
                                'description': description,
                                'image': image,
                                'price': parseFloat(price)
                            };

                            let route = '/manager/restaurants/'
                                + params.id
                                + '/products';

                            requestPostMenu.request(userJWT, route, newProduct);
                            requestGetMenu.request(userJWT, '/manager/restaurants');
                    }}>
                        Save product
                    </button>
                </div>
            </div>
        </>
    )
}
