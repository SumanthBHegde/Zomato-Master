import React from "react";
import { TiStar } from "react-icons/ti";

function MenuSimilarRestaurantCard(props) {
  return (
    <>
      {/* Container for the restaurant card */}
      <div className="mx-2 my-2">
        <div className="bg-white shadow rounded-md">
          {/* Restaurant image */}
          <div className="w-full h-48">
            <img
              src={props.image} // Image source
              alt="food item"
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          {/* Restaurant details */}
          <div className="flex flex-col gap-2 p-3">
            {/* Restaurant title */}
            <h3 className="font-semibold text-lg">{props.title}</h3>
            {/* Ratings for dining and delivery */}
            <div className="flex items-center justify-start text-sm gap-2">
              {/* Dining rating */}
              <span className="flex items-center justify-between text-sm">
                <span className="flex text-xs items-center gap-1 bg-green-700 text-white px-2 py-1 rounded">
                  30 <TiStar /> {/* Rating icon */}
                </span>
                Dining
              </span>
              {/* Divider */}
              <span style={{ width: "1px" }} className="h-4 bg-gray-500" />
              {/* Delivery rating */}
              <span className="flex items-center gap-1">
                <span className="flex text-xs items-center gap-1 bg-green-700 text-white px-2 py-1 rounded">
                  400 <TiStar /> {/* Rating icon */}
                </span>
                Delivery
              </span>
            </div>
            {/* Cuisine details */}
            <h4>Street Food, Beverages, Tea</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuSimilarRestaurantCard;
