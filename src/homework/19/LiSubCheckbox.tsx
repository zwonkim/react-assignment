import React, { SetStateAction, useEffect, useState } from "react";

interface ISubCheckboxProps {
  id:string
  checkedItems:string[]
  setCheckedItems:React.Dispatch<SetStateAction<string[]>>
}

const SubCheckbox = ({id,checkedItems,setCheckedItems}: ISubCheckboxProps) => {
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    if(checked) {
      setCheckedItems(prev => [...prev, id])
    } else {
      setCheckedItems(checkedItems.filter(el => el !== id))
    }
  }

  return (
    <li>
      <input 
        type='checkbox'
        onChange={handleChecked}
        checked={checkedItems.includes(id) ? true : false}
      />
      자식선택
    </li>
  );
};

export default SubCheckbox;
