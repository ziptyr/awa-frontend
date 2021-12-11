import React, {useState, useEffect} from 'react';
import {Link, Outlet} from 'react-router-dom';
import styles from './RestaurantManagerMenu.module.css';
import {useData} from '../DataProvider';
import {useParams} from 'react-router';

export default function RestaurantsManagerMenu({requestGetMenu}) {

    const {userJWT, restaurants} = useData();
    const params = useParams();

    //TODO: test if moving useState() to previous component forces reloading data if chaged
    const [menu, setMenu] = useState([]);

    requestGetMenu.setStateVar(menu);
    requestGetMenu.setStateVarFnc(setMenu);

    useEffect(() => {
        requestGetMenu.request(userJWT, '/public/restaurants/' + params.id + '/menu');
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Link to="new">
                    <button className={styles.buttonAdd}>
                        Add
                    </button>
                </Link>

                {menu.map((item, i) =>
                    <Link key={i} to={'' + item.productId}>
                        <div>
                            {item.name}
                        </div>
                    </Link>
                )}
            </div>
                <Outlet />
            <div className={styles.right}>
            </div>
        </div>
    )
}