import styles from './css/style.module.css';

import React from 'react'

export default function Item({children, id}) {
  return (
    <li className={styles.item} id={id}>
      {children}
    </li>
  )
}
