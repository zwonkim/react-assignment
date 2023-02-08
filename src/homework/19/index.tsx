import React, { useEffect, useState } from "react";
import LiSubCheckbox from "./LiSubCheckbox";

type MyData = {
  id: string;
  text: string
}

const myData: MyData[] = [
  {
    id: "list1",
    text: "item1",
  },
  {
    id: "list2",
    text: "item2",
  },
  {
    id: "list3",
    text: "item3",
  },
];

const Homework = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    if(checked) {
      const newArr: string[] = []
      myData.forEach(data => newArr.push(data.id))
      setCheckedItems(newArr)
    } else {
      setCheckedItems([])
    }
  }
  

  return (
    <>
      <header>
        <input 
          type='checkbox' 
          onChange={handleAllChecked}
          checked={checkedItems.length === myData.length? true : false}
        />
        전체선택
      </header>
      <main>
        <ul>
          {myData.map((item) => (
            <LiSubCheckbox 
              key={item.id}
              id={item.id}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
              />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Homework;
