import axios from 'axios';
import React, { useState } from 'react';

import Constants from './Constants.json';
import { useData } from './DataProvider';

import styles from './Login.module.css';


function sendLogin(jwtHeaders, username, password) {
  axios.post(
      Constants.API_HEADERS + '/login',
      {
        'auth': {
          'username': username,
          'password': password}
      },
      jwtHeaders
    )

    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log('login');
    })
}


export default function Login() {

  const { jwtHeaders } = useData();

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <>
      <div className={styles.container}>
        <div className={styles.line}>
          <div>
            Username
          </div>

          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>
        </div>

        <div className={styles.line}>
          <div>
            Password
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
      </div>

      <button onClick={() => sendLogin(username, password)}>
        Login
      </button>
    </>
  );
}