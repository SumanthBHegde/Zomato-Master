import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

function CheckoutNavbar() {
  // State to manage user information
  const [user] = useState({
    fullName: "John Doe",
    image:
      "https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg",
  });

  return (
    <>
      {/* Navigation bar */}
      <nav className="p-4 flex bg-white shadow-md  w-full items-center">
        <div className="container px-4 md:px-20 mx-auto">
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
              <div className="border border-gray-300 text-zomato-400 w-12 h-12 rounded-full">
                <img
                  src={user?.image}
                  alt={user?.email}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* User full name */}
              {user?.fullName}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CheckoutNavbar;
