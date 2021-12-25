import axios from 'axios';
import React, { useState } from 'react';

import Constants from './Constants.json';

import styles from './SignUp.module.css';


function sendSignUp(
    username,
    setUsername,
    role,
    setRole,
    address,
    setAddress,
    password,
    setPassword) {

  axios.post(
      Constants.API_ADDRESS + '/public/users',
      {
        'username': username,
        'role': role,
        'address': address,
        'password': password
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      setUsername('');
      setRole('CUSTOMER');
      setAddress('');
      setPassword('');
    })
}


export default function SignUp() {

  const [ username, setUsername ] = useState('');
  const [ role, setRole ] = useState('CUSTOMER');
  const [ address, setAddress ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.inputLine}>
        <div className={styles.inputLabel}>
          Username
        </div>

        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>
      </div>

      <div className={styles.inputLine}>
        <div className={styles.inputLabel}>
          Role
        </div>

        <div>
          <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}>
            <option value="CUSTOMER">Customer</option>
            <option value="MANAGER">Manager</option>
          </select>
        </div>
      </div>

      <div className={styles.inputLine}>
        <div className={styles.inputLabel}>
          Address
        </div>

        <div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)} />
        </div>
      </div>

      <div className={styles.inputLine}>
        <div className={styles.inputLabel}>
          Password
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

      <button
        onClick={() => {
          sendSignUp(
            username,
            setUsername,
            role,
            setRole,
            address,
            setAddress,
            password,
            setPassword)}
        }>
        Sign Up
      </button>
    </div>
  );
}