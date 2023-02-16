import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
// createSlice는 state를 만드는 용도, reducer는  configureStore에 만든 state 등록

type Todo = {
  id: number,
  title: string,
}

interface initialState {
  todos: Todo[]
}

const initialState: initialState = {
  todos: [{id: 1, title: '할 일'}]
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        {id: Date.now() , title: action.payload},
        ...state.todos
      ]
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos
      = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const {addTodo, deleteTodo} = todosSlice.actions

export const store = configureStore({
  reducer: {
    getTodos: todosSlice.reducer
  }
})


