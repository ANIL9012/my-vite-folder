import React, { useState } from 'react';

export default function FruitList() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % fruits.length);
  };

  return (
    <>
      <h1>{fruits[index]}</h1>
      <button onClick={handleClick}>Show Next Fruit</button>
    </>
  );
}
