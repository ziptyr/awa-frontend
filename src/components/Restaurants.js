import React from 'react'
import styles from './Restaurants.module.css';
import { Link } from 'react-router-dom';



export default function Restaurants(props) {
    
    
  
    


    return (
        <div className={styles.container}>
               {props.updatedRestaurants.map((data, key) => {
                   return (
                    <Link to={data.id } style={{ textDecoration: 'none' }} ><div className={styles.box}>
                       <div key={data.id}>
                           <img src={data.image} alt=""/>
                                <div className={styles.title}>
                                    {data.name}  
                                </div>
                           <div className={styles.restInfo}>
                                 <div>
                                    {data.address}
                                </div>
                                <div>
                                    Avoinna: {data.openHrs}
                                </div>
                                <div>
                                    Hinta: {data.price}
                                </div>
                                <div>
                                    Tyyli: {data.type}
                                </div>
                            </div>
                        </div>
     
                    </div> 
                    </Link>
                    
                   );
                     
               })}
        </div>
    )
}
