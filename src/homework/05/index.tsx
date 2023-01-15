import React from "react";

interface IFruit {
  name: string;
  price: number;
}

class Fruits {
  fruits: IFruit[];
  constructor(inputFruit: IFruit[]) {
    this.fruits = inputFruit;
  }
  get () : IFruit[] {
    return this.fruits
  }
  set (newFruits:IFruit[]) : void {
    this.fruits = newFruits
  }
}

const oldFruits: IFruit[] = [
  { name: "apple", price: 1000 },
  { name: "orange", price: 2000 },
  { name: "banana", price: 3000 },
  { name: "melon", price: 4000 },
];
const newFruits: IFruit[] = [
  { name: "mango", price: 5000 },
  { name: "kiwi", price: 6000 },
  { name: "grape", price: 7000 },
  { name: "water melon", price: 8000 },
];

const Homework = () => {
  const myFruits = new Fruits(oldFruits);
  const oldOne = myFruits.get();
  myFruits.set(newFruits);
  const newOne = myFruits.get();
  
  return (
    <>
      <h2>old one</h2>
        <ul>
        {
          oldOne.map(fruit => <li key={fruit.name}>{fruit.name} / {fruit.price}</li>)
        }
        </ul>
      <h2>new one</h2>
      <ul>
        {
          newOne.map(fruit => <li key={fruit.name}>{fruit.name} / {fruit.price}</li>)
        }
        </ul>
    </>
  );
};

export default Homework;
