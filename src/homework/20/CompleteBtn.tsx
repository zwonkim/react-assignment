import React from 'react'
import styled from "styled-components";
import useCustomMutation from './useCustomMutation';
import { editTodos } from './api';

const Btn = styled.div`
  background-color: #ccc;
  border: 1px solid black;
  border-radius: 3px;
  padding: 1px;
  display: inline-flex;
  cursor: pointer;
`;

interface ICompleteBtnProps {
  id: string,
  title: string,
  setEditValue: React.Dispatch<React.SetStateAction<string>>,
  setIsEdit: React.Dispatch<React.SetStateAction<string>>,
}

const CompleteBtn = ({id, title, setEditValue, setIsEdit}:ICompleteBtnProps) => {
  const { mutate:editTodoBy } = useCustomMutation(editTodos)
  const handleClick = () => {
    editTodoBy([id, title])
    setEditValue('')
    setIsEdit('')
  }
  return (
    <Btn onClick={handleClick}>
      Complete
    </Btn>
  )
}

export default CompleteBtn
