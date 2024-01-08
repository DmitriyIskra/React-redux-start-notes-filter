import styles from './css/style.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_VALUE_FILTER, CHANGE_DATA_FILTER } from '../../redux/actions/actions';
import { useEffect } from 'react';

export default function Filter() {
    const state = useSelector( state => state.notes );
    const stateFilter = useSelector( state => state.filter )
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: CHANGE_DATA_FILTER,
            payload: [...state],
        })
    }, [])

    const handler = e => {
        const value = e.target.value;
        const arr = state.filter( item => item.text.includes(value));

        dispatch({
            type: CHANGE_VALUE_FILTER,
            payload: value,
        })
 
        dispatch({
            type: CHANGE_DATA_FILTER,
            payload: [...arr],
        })
    }

    return (
        <div className={styles.wrapper}>
            <label htmlFor='filter'>ФИЛЬТР</label>
            <input type="text" id="filter" onChange={handler} value={stateFilter.value}/>
        </div>
    )
}
