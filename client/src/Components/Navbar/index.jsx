import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

// components
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";

function MobileNav({ SignIn, SignUp }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setUser] = useState({});
  return (
    <div className="flex items-center justify-between w-full lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="relative flex items-center gap-3">
        <button className="px-3 py-2 text-white rounded-full bg-zomato-300">
          Use App
        </button>
        {user?.fullName ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="w-20 h-20 border border-gray-300 rounded-full text-zomato-300"
            >
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg"
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute z-20 flex flex-col w-full gap-2 py-3 bg-white shadow-lg -bottom-20 -right-4">
                <button>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="p-2 border border-gray-300 rounded-full text-zomato-400"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDownOpen && (
              <div className="absolute z-20 flex flex-col w-full gap-2 py-3 bg-white shadow-lg -bottom-20 -right-4">
                <button onClick={SignIn}>Sign In</button>
                <button onClick={SignUp}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function LargeNav({ SignIn, SignUp }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setUser] = useState({});
  return (
    <>
      <div className="container hidden px-20 mx-auto lg:inline">
        <div className="flex items-center justify-around w-full gap-4">
          <div className="w-20">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
            />
          </div>
          <div className="flex items-center w-3/4 gap-3 p-3 bg-white border border-gray-200 rounded shadow-md ">
            <div className="flex items-center gap-2 pr-2 border-r-2 border-gray-300">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Sirsi Hutgar"
                className="w-full focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center w-full gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          {user?.fullName ? (
            <div className="relative w-20">
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="w-full h-20 border border-gray-300 rounded-full text-zomato-400"
              >
                <img
                  src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg"
                  alt=""
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              {isDropDownOpen && (
                <div className="absolute z-20 flex flex-col w-full gap-2 py-3 bg-white shadow-lg -bottom-20 -right-4">
                  <button>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4 ">
              <button
                className="text-gray-500 text-xl hover:text-gray-800"
                onClick={SignIn}
              >
                Login
              </button>

              <button
                className="text-gray-500 text-xl hover:text-gray-800"
                onClick={SignUp}
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openSignInModal = () => setOpenSignIn(true);
  const openSignUpModal = () => setOpenSignUp(true);

  return (
    <>
      <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />

      <nav className="flex items-center w-full p-4 bg-white shadow-md lg:shadow-none">
        <MobileNav SignIn={openSignInModal} SignUp={openSignUpModal} />
        <LargeNav SignIn={openSignInModal} SignUp={openSignUpModal} />
      </nav>
    </>
  );
}

export default Navbar;
