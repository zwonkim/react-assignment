import React, { useEffect, useState } from "react";

interface ISubCheckboxProps {
  id: string
  checkedItems: string[]
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>
}

const SubCheckbox = ({id, checkedItems, setCheckedItems}: ISubCheckboxProps) => {

  const handleChecked = (checked: boolean) => {
    if(checked) {
      setCheckedItems(prev => [...prev, id])
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== id))
    }
  }

  return (
    <li>
      <input 
        type='checkbox'
        onChange={(event) => handleChecked(event.target.checked)}
        checked={checkedItems.includes(id) ? true : false}
      />
      자식선택
    </li>
  );
};

export default SubCheckbox;
