import styles from './css/style.module.css';

import { useDispatch } from 'react-redux';
import { CHANGE_INPUT_SUM } from '../../../redux/actions/actions';

export default function NoteSum({sum}) {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={styles.label} htmlFor='inputText'>СУММА</label>
      <input 
      className={styles.noteSum} 
      type='number' 
      name='sum' 
      value={sum}
      onChange = { e => { 
        dispatch({
          type: CHANGE_INPUT_SUM,
          payload: e.target.value,
        })
      }}
      />
    </div>
    
  )
}
