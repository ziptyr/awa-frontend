import React from 'react'
import styles from './SignUp.module.css'

export default function SignUp() {
    
    const inputUsername = <form>
        <label>
            Name: <br/>
                <input type="text" name="name" />
            </label>
    </form>

    const inputPassword = <form>
        <label>
            Password: <br/>
                <input type="password" name="name" />
            </label>
    </form>
       

    // const inputPassword;
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                    <div className={styles.headerContainer}>
                        <div className={styles.header}>Welcome!</div>
                        <div >Create an Account</div>
                        
                    </div>
                    <div className={styles.textContainer}>
                    <form>
                        <label>
                            <div>Username:</div>
                            <input type="text" />
                        </label>
                        <label>
                            <div>Address:</div>
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
