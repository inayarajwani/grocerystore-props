//Create a simple online grocery store with reusable React function components. 
//Your store should provide users with at least four buttons for possible items they can purchase. 
//Every time a user clicks on a button it should alert that the thing they’ve clicked on has been added to the cart via an alert message.
import React from "react";

function GroceryItem(props){
    //The component should accept props and return a button that displays the grocery item’s name and contain an event handler for the onClick event.
    //The component should be used to render the four grocery items, passing in the appropriate props.
    const {itemName, inCart} = props;
    
    //handle onClick -- item in cart
    function handleClick(){
        inCart(itemName);
    }

    //retrn items
    return(
        <button onClick={handleClick}>
            {itemName}
        </button>
    );
}

export default GroceryItem;