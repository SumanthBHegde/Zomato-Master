import React from "react";
import { useParams } from "react-router-dom";

//Components
import Delivery from "../Components/Delivery";

function HomePage() {
  const { type } = useParams();
  return (
    <>
      <div className="my-5">{type === "delivery" && <Delivery />}</div>
      Hello
    </>
  );
}

export default HomePage;
