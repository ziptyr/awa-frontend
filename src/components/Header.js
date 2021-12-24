import React from 'react'

import { Link } from 'react-router-dom';

import styles from './Header.module.css';


export default function Header({search, setSearch}) {

  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          Home
        </Link>
      </div>

      <div>
        <Link to="/restaurants">
          Restaurants
        </Link>
      </div>

      <div>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div>
      </div>

      <div>
        hello
      </div>
    </div>
  )
}
