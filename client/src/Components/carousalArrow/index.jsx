import React from "react";

//Functional component for the next arrow button
export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgb(142 142 142)",
        borderRadius: "50%",
      }}
      onClick={props.onClick}
    />
  );
};

//Functional component for the previous arrow button
export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgb(142 142 142)",
        borderRadius: "50%",
      }}
      onClick={props.onClick}
    />
  );
};
