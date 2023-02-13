import React from 'react'
import styled from "styled-components";

interface IEditBtnProps {
  id: string,
  setIsEdit: React.Dispatch<React.SetStateAction<string>>
}

const Btn = styled.div`
  background-color: #ccc;
  border: 1px solid black;
  border-radius: 3px;
  padding: 1px;
  display: inline-flex;
  cursor: pointer;
`;

const EditBtn = ({id, setIsEdit}:IEditBtnProps) => {
  
  const handleClick = () => {
    setIsEdit(id)
  }

  return (
    <Btn onClick={handleClick}>
      Edit
    </Btn>
  )
}

export default EditBtn
