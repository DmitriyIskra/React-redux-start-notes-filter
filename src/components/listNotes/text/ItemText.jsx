import styles from './css/style.module.css';

import React from 'react'

export default function ItemText({text}) {
  return (
    <div className={styles.itemText}>{text}</div>
  )
}
