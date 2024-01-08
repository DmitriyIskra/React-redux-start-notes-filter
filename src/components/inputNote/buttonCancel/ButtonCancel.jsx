import styles from './css/style.module.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CANCEL_INPUT } from '../../../redux/actions/actions';

export default function ButtonCancel() {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch({
      type: CANCEL_INPUT,
      payload: '',
    }) 
  }

  return (
    <Link className={styles.button} to='/main' onClick={handler}>Cancel</Link> 
  )
}
