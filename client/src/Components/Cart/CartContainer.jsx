import React, { useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";

// component
import FoodItem from "./FoodItem";

function CartSM({ toggle }) {
  return (
    <>
      {/* Small screen cart */}
      <div className="md:hidden flex items-center justify-between">
        <div className="flex flex-col items-start">
          {/* Toggle button for expanding/collapsing cart */}
          <small className="flex items-cetner gap-1" onClick={toggle}>
            1 Item <IoMdArrowDropup />
          </small>
          {/* Total price */}
          <h4>
            $300 <sub>(plus tax)</sub>
          </h4>
        </div>
        {/* Continue button */}
        <button className="flex items-cetenr gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg">
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
}

function CartLG({ toggle }) {
  return (
    <>
      {/* Large screen cart */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex flex-col items-start">
          {/* Toggle button for expanding/collapsing cart */}
          <small className="flex items-center gap-1" onClick={toggle}>
            1 Item <IoMdArrowDropup />
          </small>
          {/* Total price */}
          <h4>
            $300 <sub>(plus tax)</sub>
          </h4>
        </div>
        {/* Continue button */}
        <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg">
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
}

function CartContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [foods, setFoods] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
      name: "Chilli Paneer Gravy",
      price: "157.50",
      rating: 4,
      descript:
        "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
      quantity: 1,
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
      name: "Chilli Paneer Gravy",
      price: "157.50",
      rating: 4,
      descript:
        "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
      quantity: 1,
    },
  ]);

  // Function to toggle the visibility of the cart
  const toggleCart = () => setIsOpen((prev) => !prev);
  // Function to close the cart
  const closeCart = () => setIsOpen(false);

  return (
    <>
      {/* Cart contents */}
      {isOpen && (
        <div className="fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-14 px-3">
          <div className="flex items-center justify-between md:px-20">
            <h3 className="text-xl font-semibold">Your Orders</h3>
            {/* Close cart button */}
            <IoCloseSharp onClick={closeCart} />
          </div>

          <hr className="my-2" />

          <div className="flex flex-col gap-2 md:px-20">
            {/* Display each food item in the cart */}
            {foods.map((food, index) => (
              <FoodItem key={index} {...food} />
            ))}
          </div>
        </div>
      )}

      {/* Bottom bar of the cart */}
      <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0  mx-auto lg:px-20">
        {/* Small screen cart */}
        <CartSM toggle={toggleCart} />
        {/* Large screen cart */}
        <CartLG toggle={toggleCart} />
      </div>
    </>
  );
}

export default CartContainer;
