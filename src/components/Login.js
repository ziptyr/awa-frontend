import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { loginFunc } from '../loginFunc';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';




export default function Login() {
       

    // const inputPassword;
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                    <div className={styles.headerContainer}>
                        <div className={styles.header}>Welcome!</div>
                        <div >Log In or</div>
                        <div><Link to="/signup">Sign up</Link></div>
                    </div>
                    <div className={styles.textContainer}>
                    <form>
                        <label>
                            <div>Username:</div>
                            <input type="text" />
                        </label>
                        <label>
                            <div>Password:</div>
                            <input type="password" />
                        </label>
                        <div>
                            <button className={styles.logInBtn} type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



