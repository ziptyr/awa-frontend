import axios from 'axios';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Constants from './Constants.json';

import styles from './SignUp.module.css';




export default function SignUp() {

  const [ signupProcessState, setSignupProcessState ] = useState('idle');
  const [ username, setUsername ] = useState('');
  const [ role, setRole ] = useState('CUSTOMER');
  const [ address, setAddress ] = useState('');
  const [ password, setPassword ] = useState('');

  let navigate = useNavigate();

  const sendSignUp = async(event) => {
    event.preventDefault();
    setSignupProcessState('processing');

    try {
      const result = await axios.post(
          Constants.API_ADDRESS + '/public/users',
          {
            'username': username,
            'role': role,
            'address': address,
            'password': password
          }
        )

        console.log(result);
        setSignupProcessState('success');
        setUsername('');
        setRole('CUSTOMER');
        setAddress('');
        setPassword('');

        setTimeout(() => {
          setSignupProcessState('idle')
          navigate('/login', {replace: true});
        }, 1500);
    } catch (error) {
      console.log(error);
      setSignupProcessState('error');
      setTimeout(() => setSignupProcessState('idle'), 1500);
    }
  }

  let signupUiControls = null;

  switch(signupProcessState) {
    case 'idle':
      signupUiControls = <button type='submit'>Sign Up</button>
      break;

    case 'processing':
      signupUiControls = <span style={{color: 'blue'}}>Processing signup...</span>
      break;

    case 'success':
      signupUiControls = <span style={{color: 'green'}}>User created</span>
      break;

    case 'error':
      signupUiControls = <span style={{color: 'red'}}>Error</span>
      break;

    default:
      signupUiControls = <button type='submit'>Sign Up</button>
  }

  return (
    <div className={styles.container}>
      <form onSubmit={ sendSignUp }>
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

      <div>
        { signupUiControls }
      </div>
      </form>
    </div>
  );
}