import styles from './css/style.module.css';

import React from 'react'

export default function ItemSum({sum}) {
  return (
    <div className={styles.itemSum}>{sum}</div>
  )
}
