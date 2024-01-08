import styles from './css/style.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonEdit({id}) {
  return (
    <Link className={styles.button} to={`/notes/edit/${id}`}>Edit</Link>
  )
}
