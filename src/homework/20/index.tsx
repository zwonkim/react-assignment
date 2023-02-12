import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import useCustomQuery, { TFetcher } from "./useCustomQuery";
import useCustomMutation from "./useCustomMutation";
import { useForm } from "react-hook-form";
import DeleteBtn from "./DeleteBtn";
import { postTodos } from "./api";
import EditBtn from './EditBtn';

export interface ITodo {
  id: string;
  order: number;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

const Homework = () => {
  const [inputValue, setInputValue] = useState('')
  const [editValue, setEditValue] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const { data, refetch } = useCustomQuery()
  const { mutate: addTodo, isLoading } = useCustomMutation(postTodos)

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    setEditValue(event.target.value)
  }

  const handleSubmit = () => {
    addTodo(inputValue)
    refetch()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name='input' type='text' placeholder='new Todo' onChange={handleChange} value={inputValue}/>
        <button>추가</button>
      </form>
     {isLoading ? <span>{"todo 추가중..."}</span> : ''}
      <ul>
        {data &&
          data.map((todo) => 
           <li key={todo.id}>
            {todo.title}
            {isEdit ? <input name='editInput' type='text' placeholder='Edit Todo' onChange={handleChange} value={editValue}/> : ''}
            <DeleteBtn id={todo.id} refetch={refetch}/>
            <EditBtn id={todo.id} title={editValue} refetch={refetch}/>
          </li>
           )
        }
      </ul>
    </>
  );
};

export default Homework;