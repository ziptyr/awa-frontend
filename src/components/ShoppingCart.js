import React, { useContext } from 'react'
import { Context } from './Context';
import styles from './ShoppingCart.module.css'

export default function ShoppingCart(props) {
    
    const context = useContext(Context);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.shoppingCartContainer}>
                    <div className={styles.cartHeader}>
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className={styles.cartInfo}>
                        <div>{context.getTotal(context.cart)}€</div>
                            <button onClick={() => context.empty(context.data)}>Empty Cart</button>
                    </div>
                        <div className={styles.cartItems}>
                        {context.cart.map((data) => <div className={styles.cartItemsFlex}>
                        <div>{data.name}</div>
                        <span>{data.price}€</span>
                        <button onClick={() => context.remove(data)}>-</button>
                        <button onClick={() => context.add(data)}>+</button>
                        </div>)} 
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}
