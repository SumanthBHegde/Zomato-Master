import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

// Component
import MenuListContainer from "./MenuListContainer";

function FloatMenuBtn(props) {
  // State to manage menu visibility
  const [isClicked, setIsClicked] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => setIsClicked((prev) => !prev);

  return (
    <>
      {/* Floating menu button */}
      <div className="fixed z-30 w-8/12 flex flex-col gap-3 items-end bottom-2 right-2 md:hidden">
        {/* Menu container */}
        {isClicked && (
          <div className="p-3 bg-white h-48 overflow-y-scroll">
            {/* Render menu items */}
            {props.menu.map((item, index) => (
              <MenuListContainer
                {...item}
                key={index}
                onClickHandler={props.onClickHandler}
                selected={props.selected}
              />
            ))}
          </div>
        )}
        {/* Button to toggle menu */}
        <button
          onClick={toggleMenu}
          className="text-white rounded-md flex items-center gap-2 bg-yellow-900 px-3 py-1"
        >
          {isClicked ? <MdClose /> : <HiMenu />} Menu
        </button>
      </div>
    </>
  );
}

export default FloatMenuBtn;
