import styles from './css/style.module.css';

import { useDispatch } from 'react-redux';
import { CHANGE_INPUT_TEXT } from '../../../redux/actions/actions';

export default function NoteText({text}) {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={styles.label} htmlFor='inputText'>НАИМЕНОВАНИЕ</label>
      <input 
      className={styles.noteText} 
      type='text' name='text' 
      value = { text }
      id="inputText"
      onChange = { e => { 
        dispatch({
          type: CHANGE_INPUT_TEXT,
          payload: e.target.value,
        }) 
      }}
      />
    </div>
    
  )
}
