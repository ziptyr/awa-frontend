import React, { useContext } from 'react'
import { Context } from './Context';
import styles from './ShoppingCart.module.css'
import {useData} from './DataProvider';



export default function ShoppingCart({requestPostOrder}) {
    
    const context = useContext(Context);

    const {userJWT} = useData();


    let productIds = context.cart.map((item) => { 
    return item.productId })
    
    
    const counts = [];
    
    productIds.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts)
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.shoppingCartContainer}>
                    <div className={styles.cartHeader}>
                        <h1>Shopping Cart</h1>
                    </div>
                        <div className={styles.cartItems}>
                        {context.cart.map((data, key) => <div className={styles.cartItemsFlex} key={key}>
                            <div>{data.name}</div>
                                <div>{data.price}€</div>
                                    <button onClick={() => context.remove(data)}>-</button>
                                        <button onClick={() => context.add(data)}>+</button>
                                    </div>)} 
                                        <div className={styles.cartInfo}>
                                            <span>Cart Total: </span>
                                    <div>{context.getTotal(context.cart)}€  </div>
                            <button onClick={() => context.empty(context.data)}>Empty Cart</button>
                        </div>
                        <button className={styles.orderButton}
                            onClick={() => {
                                var cart = {
                                    "products": {
                                            
                                    },
                                    "deliveryAddress": null
                                };
                                // const course = {
                                //     name: 'JavaScript'  
                                //   };
                                //   const grade = {
                                //     score: 92  
                                //   };
                                //   const finalResult = Object.assign(course,grade);
                                //   console.log(finalResult);
                                let order;
                                (counts.map((id, index) => {
                                    console.log( index, id)
                                    
                                        }
                                    ))
                                        console.log(order)

                                    // "products": {
                                    //     "4":2,
                                    //     "3":3,
                                    // },
                                    // "deliveryAddress":null
                                

                                requestPostOrder.request(userJWT, '/customer/buy', cart);
                            }}>
                                Confirm Order
                        </button>
                                 

                        </div>
                        
                    </div>
                </div>
        </div>
    )
}
