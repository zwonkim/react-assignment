import React from "react";
import styled from "styled-components";
import { deleteTodos } from "./api";
import useMutation from "./useCustomMutation";

const Btn = styled.div`
  background-color: #ccc;
  border: 1px solid black;
  border-radius: 3px;
  padding: 1px;
  display: inline-flex;
  cursor: pointer;
`;

export interface IDeleteBtnProps {
  id: string;
  refetch: () => void;
}

const DeleteBtn = ({id, refetch}:IDeleteBtnProps) => {
  const { mutate: deleteTodoBy } = useMutation(deleteTodos);
  const handleClick = async () => {
    await deleteTodoBy([id])
    refetch()
  };
  return <Btn onClick={handleClick}>del</Btn>;
};

export default DeleteBtn;
