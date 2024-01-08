import React from 'react';
import styles from './css/css.module.css';
import { Outlet } from 'react-router-dom';

import List from '../components/listNotes/list/List';
import Filter from '../components/filter/Filter';

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <Outlet />
        <Filter />
        <List />
      </div>
    </div>
  )
}
