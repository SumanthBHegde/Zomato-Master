import React from "react";
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      <FoodTab />
      <div className="container px-4 mx-auto lg:px-20">{children}</div>
    </div>
  );
}

export default HomeLayout;
