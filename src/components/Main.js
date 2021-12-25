import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from './Header';
import styles from './Main.module.css';


export default function Main(props) {

  return (
    <div className={styles.app}>
      <header>
        <Header {...props} />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
