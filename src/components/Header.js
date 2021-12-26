import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserAuthContext } from './Contexts';
import styles from './Header.module.css';

export default function Header({search, setSearch}) {

  const UserAuthContextValue = useContext(UserAuthContext);
  console.log(UserAuthContextValue)

  function userManagement() {
    if (UserAuthContextValue.jwt) {
      return (
        <>
          <div>
            <a onClick={UserAuthContextValue.logout}>
              Log Out
            </a>
          </div>

          <div>
            <Link to='/account'>
              Account
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <Link to='/login'>
              Login
            </Link>
          </div>

          <div>
            <Link to='/signup'>
              Sign Up
            </Link>
          </div>
        </>
      );
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <Link to='/'>
          Home
        </Link>
      </div>

      <div>
        <Link to='/restaurants'>
          Restaurants
        </Link>
      </div>

      <div>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
      </div>

      { userManagement() }
    </div>
  )
}
