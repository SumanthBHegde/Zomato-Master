import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

// redux
import { useSelector } from "react-redux";

function CheckoutNavbar() {
  // State to manage user information
  const reduxState = useSelector((globalState) => globalState.user.user);

  return (
    <>
      {/* Navigation bar */}
      <nav className="flex items-center w-full p-4 bg-white shadow-md">
        <div className="container px-4 mx-auto md:px-20">
          <div className="flex items-center justify-between w-full">
            {/* Left arrow icon for navigation back */}
            <AiOutlineArrowLeft />
            {/* Logo */}
            <div className="w-28">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            {/* User profile section */}
            <div className="flex items-center gap-3">
              {/* User profile image */}
              <div className="w-12 h-12 border border-gray-300 rounded-full text-zomato-400">
                <img
                  src="https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg"
                  alt={reduxState.user?.email}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              {/* User full name */}
              {reduxState?.fullName}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CheckoutNavbar;
