import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { loginFunc } from '../loginFunc';
import styles from './Login.module.css';


const Login = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <div className={styles.container}>
            {user ? (
            <div className={styles.title}>Hello {(user.username)}</div>
            ) : (
                <div className={styles.title}>Hello </div>)}
            
            {user ? (
                <button className={styles.button}
                onClick={() => {
                    setUser(null);
                }}
                >
                Log out
                </button>
            ) : (
            <button className={styles.button}
            onClick={async () => {
                const user = await loginFunc();
                setUser(user);
            }}
            >
            Log in
            </button>
            )}
        </div>
    )
}

export default Login
