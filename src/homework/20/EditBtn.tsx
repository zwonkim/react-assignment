import React from 'react'
import styled from "styled-components";
import { editTodos } from './api';
import useCustomMutation from './useCustomMutation';
import { IDeleteBtnProps } from './DeleteBtn';

interface IEditBtnProps extends IDeleteBtnProps {
  title: string;
}

const Btn = styled.div`
  background-color: #ccc;
  border: 1px solid black;
  border-radius: 3px;
  padding: 1px;
  display: inline-flex;
  cursor: pointer;
`;

const EditBtn = ({id, title, refetch}:IEditBtnProps) => {
  const { data, isLoading, mutate:editTodoBy } = useCustomMutation(editTodos)
  const handleClick = () => {
    editTodoBy(id, title)
  }
  return (
    <Btn onClick={handleClick}>
      Edit
    </Btn>
  )
}

export default EditBtn
