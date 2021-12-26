import React, { useState } from 'react';
import axios from 'axios';

import styles from './SignUp.module.css';
import Constants from './Constants.json';
import { useNavigate } from 'react-router-dom';


export default function SignupView() {
  let navigate = useNavigate();
  const [ signupProcessState, setSignupProcessState ] = useState('idle');

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setSignupProcessState('processing');
    try {
      const result = await axios.post(
        Constants.API_ADDRESS + '/public/users', {
          username: event.target.username.value,
          address: event.target.address.value,
          role: event.target.role.value,
          password: event.target.password.value
        }
      )
      console.log(result);
      setSignupProcessState('success');
      setTimeout(() => {
        setSignupProcessState('idle')
        navigate('/login', { replace: true });
      }, 1500);
    } catch (error) {
      console.error(error);
      setSignupProcessState('error');
      setTimeout(() => setSignupProcessState('idle'), 1500);
    }
  };

  let signupUIControls = null;
  switch(signupProcessState) {
    case 'idle':
      signupUIControls = <button type='submit'>Sign up</button>
      break;

    case 'processing':
      signupUIControls = <span style={{color: 'blue'}}>
        Processing signup...
      </span>
      break;

    case 'success':
      signupUIControls = <span style={{color: 'green'}}>User created</span>
      break;

    case 'error':
      signupUIControls = <span style={{color: 'red'}}>Error</span>
      break;

    default:
      signupUIControls = <button type='submit'>Sign up</button>
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={ handleSignupSubmit }>
        <div>
          Username<br />
          <input type='text' name='username' />
        </div>

        <div>
          Address<br />
          <input type='text' name='address' />
        </div>

        <div>
          Role<br />
          <select name='role' id='role-select'>
            <option value=''>Please select a role</option>
            <option value='CUSTOMER'>Customer</option>
            <option value='MANAGER'>Manager</option>
          </select>
        </div>

        <div>
          Password<br />
          <input type='password' name='password' />
        </div>

        <div>
          { signupUIControls }
        </div>
      </form>
    </div>
  )
}