import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_NOTE, UPDATE_NOTE, SAVE_INPUT, EDIT_INPUT } from '../../../redux/actions/actions';

import { v4 } from 'uuid';

import styles from './css/style.module.css';

import NoteText from '../noteText/NoteText';
import NoteSum from '../noteSum/NoteSum';
import ButtonSave from '../buttonSave/ButtonSave';
import ButtonCancel from '../buttonCancel/ButtonCancel';


// Компонент иожет быть использован как для создания записи, так и 
// для редактирования
export default function InputWrapper() {
  const dispatch = useDispatch();

  // состояние для управления input (заполнения, очитски и тд)
  // т.к. input переделаны в управляемые и в них используется
  // value а не defaultValue
  const stateInputText = useSelector( state => state.inputText);
  const { data } = useSelector( state => state.filter )
  
  const params = useParams();
  let idRef = useRef();
  
  if(params.id) {
    idRef.current = params.id;
  }
  
  
  useEffect(() => {
    if(params.id) {
      // Находим по id нужный объект в filter
      const arr = data.find( item => {
        return item.id === params.id
      });

      // Добавляем в input text
      dispatch({
        type: EDIT_INPUT,
        payload: {
          text: arr.text,
          sum: arr.sum,
        },
      })
    } 
  }, [idRef.current])
    
  
  
  // id используется для определения новая запись или старая
  const handlerSave = (e) => {
    e.preventDefault();

    const values = {
      text: e.target.text.value,
      sum: e.target.sum.value,
    }
    
    // для создания новой записи
    if(!params.id) {
      // проверка заполненности полей
      if(values.text === '' || values.sum === '') return;

      const data = { ...values, id: v4()};

      dispatch({
        type: CREATE_NOTE,
        payload: data,
      })

      // очищаем только при создании, что бы при редактировании
      // пользователю было понятно что это именно редактирование
      // e.target.text.value = '';
      
      dispatch({
        type: SAVE_INPUT,
        payload: '',
      })
    }

    // для редактирования старой записи
    if(params.id) {
      const data = { ...values, id: params.id};
      
      dispatch({
        type: UPDATE_NOTE,
        payload: data,
      })
    }
  }

  return (
    <form className={styles.wrapper} name='form' onSubmit={handlerSave}>
        <NoteText text={stateInputText.valueText} />
        <NoteSum sum={stateInputText.valueSum} />
        <ButtonSave />
        {params.id && <ButtonCancel />}
    </form>
  )
}
