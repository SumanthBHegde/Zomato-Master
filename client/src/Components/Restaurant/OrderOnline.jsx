import React, { useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// Components
import FloatMenuBtn from "./Order-Online/FloatMenuBtn";
import MenuListContainer from "./Order-Online/MenuListContainer";

function OrderOnline() {
  // State to manage menu items and selected menu
  const [menu, setMenu] = useState([
    {
      name: "Recommended",
      items: [],
    },
    {
      name: "Momos",
      items: [],
    },
    {
      name: "Chinese Starters",
      items: [],
    },
    {
      name: "Breads",
      items: [],
    },
    {
      name: "Rice and Biryani",
      items: [],
    },
    {
      name: "Rolls",
      items: [],
    },
  ]);
  const [selected, setSelected] = useState("Recommended");

  // Function to handle menu item selection
  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className="w-full h-screen flex">
        {/* Menu sidebar */}
        <aside className="hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        {/* Main content */}
        <div className="w-full px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            {/* Header */}
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          {/* Section for displaying food items */}
          <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            {/* Food lists */}
          </section>
        </div>
      </div>
      {/* Floating menu button */}
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
}

export default OrderOnline;
