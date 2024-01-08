import styles from './css/style.module.css';

import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_DATA_FILTER } from '../../../redux/actions/actions';

import Item from '../item/Item';
import ItemText from '../text/ItemText';
import ItemSum from '../sum/ItemSum';
import ButtonEdit from '../buttonEdit/ButtonEdit';
import ButtonDelete from '../buttonDelete/ButtonDelete';

import { v4 } from 'uuid'; 

export default function List() {
  const dispatch = useDispatch();

  // данные по всем записям массив
  const state = useSelector( state => state.notes )
  // данные по фильтру
  const { data, value } = useSelector( (state) => state.filter );

  useEffect(() => {
    // после создания новой записи обновляем состояние фильтра
    // для последующей отрисовки новой записи в списке
    // обновляем в соответствии с введенными в фильтр данными
    const arr = state.filter( item => item.text.includes(value));

    dispatch({
      type: CHANGE_DATA_FILTER,
      payload: [...arr],
    })
  }, [state])

  return ( 
    <>
      { data.length > 0 
        && 
        <ul className={styles.list}>
          { 
            data.map( item => {
              return (
                <Item key={v4()} id={item.id}>
                  <ItemText text={item.text} />
                  <ItemSum sum={item.sum} />
                  <ButtonEdit id={item.id} />
                  <ButtonDelete />
                </Item>
              )
            }) 
          }
        </ul> 
      }
    </>
  )
}
