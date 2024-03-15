import React from "react";
import { BsTrashFill } from "react-icons/bs";

function FoodItem(props) {
  // Function to delete the food item from the cart
  const deleteFoodFromCart = () => {};

  // Function to increment the quantity of the food item
  const increment = () => {};

  // Function to decrement the quantity of the food item
  const decrement = () => {};

  return (
    <>
      {/* Food item details */}
      <div className="flex items-center justify-between">
        {/* Food name */}
        <h5>{props.name}</h5>
        {/* Quantity controls */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            {/* Total price for the quantity */}
            <small>${parseInt(props.price) * parseInt(props.quantity)}</small>
            {/* Quantity controls */}
            <div className="px-1 bg-zomato-400 text-white rounded flex items-center gap-1">
              {/* Decrement button */}
              <button
                onClick={decrement}
                className="p-1 bg-zomato-400 text-white rounded"
              >
                -
              </button>
              {/* Quantity */}
              <small>{props.quantity}</small>
              {/* Increment button */}
              <button
                onClick={increment}
                className="p-1 bg-zomato-400 text-white rounded"
              >
                +
              </button>
            </div>
          </div>
          {/* Delete button */}
          <BsTrashFill
            onClick={deleteFoodFromCart}
            className="text-zomato-400 text-lg md:text-xl"
          />
        </div>
      </div>
    </>
  );
}

export default FoodItem;
