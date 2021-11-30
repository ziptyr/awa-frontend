import React, { useContext } from 'react'
import styles from './Login.module.css';
import { Link } from 'react-router-dom';




export default function Login() {
    
    const handleSignupSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.username.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
    }



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
                    <form onSubmit={handleSignupSubmit}>
                        <div
                            >Username: <br />
                            <input type="text" name="username"/>
                        </div>
                        <div
                            >Email: <br />
                            <input type="text" name="email"/>
                        </div>
                        <div>  
                            Password: <br />
                            <input type="password" name="password"/>
                        </div>
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



