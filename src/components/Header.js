import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { UserContext } from '../UserContext'


export default function Header(props) {


  return (
    <header>
        <div className={styles.container}>
            <Link to="/">Home</Link>
                <Link to="/restaurants">Restaurants</Link>
            <input className={styles.search} type='text' />
                
            {props.userJWT ? 
            <>  
              <div className={styles.loginButtons}>
                <div><Link to="/account">Account</Link></div>
                <div><button className={styles.btn} onClick={ props.logOut }>Log out</button></div>
                <div><Link to="/shoppingcart"><img src="/images/cart.png" alt=""/></Link></div>
                </div>
            </>
            : 
            <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </>
            } 
        </div>

      
    </header>
  )
}
