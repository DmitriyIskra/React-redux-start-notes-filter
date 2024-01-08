import styles from './css/style.module.css';

import { DELETE_NOTE } from '../../../redux/actions/actions';
import { CANCEL_INPUT } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// удаляет одну из записей
export default function ButtonDelete() {
  const dispatch = useDispatch();

  const handler = (e) => {
    const id = e.target.closest('li').id;

    dispatch({
      type: DELETE_NOTE,
      payload: id,
    })

    dispatch({
      type: CANCEL_INPUT,
      payload: '',
    }) 
  }

  return (
    <Link className={styles.button} type='button' onClick={handler} to='/main'>Del</Link>
  )
}
