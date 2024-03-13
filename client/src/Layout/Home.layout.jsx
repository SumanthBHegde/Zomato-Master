import React from "react";
import Navbar from "../Components/Navbar";

function HomeLayout({ props, children }) {
  return (
    <div>
      <Navbar />
      <div className="container px-4 mx-auto lg:px-20">{children}</div>
    </div>
  );
}

export default HomeLayout;
