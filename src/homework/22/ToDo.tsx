import React from "react";
import { deleteTodo } from './store';
import { useDispatch } from 'react-redux';

const ToDo = ({ text, id }: any) => {
  const dispatch = useDispatch()
  const onBtnClick = () => {
    dispatch(deleteTodo(id))
  }
  return (
    <li>
      <span>{text}</span>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

export default ToDo;
