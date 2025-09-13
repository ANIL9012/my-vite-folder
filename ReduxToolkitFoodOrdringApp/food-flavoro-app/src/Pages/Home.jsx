import React from 'react'
import Header from '../Components/Header';
import CategoryMenu from '../Components/CategoryMenu';
import FoodItems from '../Components/FoodItems';
import Cart from '../Components/Cart';

function Home() {
  return (
    <>
     <Header /> 
     <CategoryMenu/>
     <FoodItems/>
     <Cart/>
    </>
  )
}

export default Home;
