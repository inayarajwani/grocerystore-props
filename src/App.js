import logo from './logo.svg';
import GroceryItem from './GroceryItem';
import React from 'react';
// import './App.css';
import './style.css';

  //In App.js, return four instances of the GroceryItem component with names such as Eggs, Banana, Strawberry, or Bread. 

function App() {
  
  //create an event handler where every time a user clicks on a button it should alert that the thing they’ve clicked on has been added to the cart via an alert message.
  function addToCartHandler(itemName){
    alert(`${itemName} has been added to the cart!`)
  }

  //return four instances of the GroceryItem component with names such as Eggs, Banana, Strawberry, or Bread. 
  return (
    <div>
      <h1>Online Grocery Store</h1>
      <GroceryItem itemName="Eggs" inCart={addToCartHandler} />
      <GroceryItem itemName="Banana" inCart={addToCartHandler} />
      <GroceryItem itemName="Strawberry" inCart={addToCartHandler} />
      <GroceryItem itemName="Bread" inCart={addToCartHandler} />
    </div>
  );
}

export default App;
