import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, store } from './store';
import ToDo from './ToDo';


const App = () => {
  const [input, setInput] = useState('')
  const todos = useSelector((state: ReturnType<typeof store.getState>) => state.getTodos.todos)
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={input} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map(todo =><ToDo key={todo.id} text={todo.title} id={todo.id}/>)}
      </ul>
    </>
  );
};

export default App;

