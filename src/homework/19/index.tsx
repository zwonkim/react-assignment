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

  const handleAllChecked = (checked: boolean) => {
    if(checked) {
      const allId: string[] = []
      myData.forEach((data) => allId.push(data.id))
      // console.log(allId)
      setCheckedItems(allId)
    } else {
      setCheckedItems([])
    }
  }

  return (
    <>
      <header>
        <input 
          type='checkbox' 
          onChange={(event) => handleAllChecked(event.target.checked)}
          checked={checkedItems.length === myData.length ? true: false}
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
