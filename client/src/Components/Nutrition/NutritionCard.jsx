import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"; // Importing star icons from react-icons/bs
import ReactStars from "react-rating-stars-component"; // Importing ReactStars component

function NutritionCard(props) {
  return (
    /* Container for the card, responsive width */
    <div className="w-full p-4 md:w-1/2 lg:w-1/3">
      {/* Card container */}
      <div className="w-full h-full bg-white rounded-2xl shadow-lg">
        {/* Image container with dynamic background color */}
        <div
          className={`w-full p-4 h-72 md:h-56 lg:h-48 rounded-t-2xl bg-${props.bg}-100`}
        >
          <img
            src={props.image}
            alt="supplements"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Content container */}
        <div className="p-3 flex flex-col gap-2">
          {/* Rating section */}
          <div className="flex mt-2 items-center gap-3">
            <div className="w-4 h-4">
              <img
                src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" // Veg symbol image
                alt=""
                className="w-full h-full"
              />
            </div>
            <ReactStars
              count={5}
              size={16}
              isHalf={true}
              value={3}
              emptyIcon={<BsStar />}
              halfIcon={<BsStarHalf />}
              fullIcon={<BsStarFill />}
            />
            {/* Number of reviews */}
            <span className="text-gray-400">15</span>
          </div>
          <h3 className="text-xl font-bold text-gray-400">
            Burn - Weight Balance
          </h3>
          <p className="text-sm font-light text-gray-400">
            This is a description of the product. This is a description of the.
          </p>
          <div className="mt-4">
            {/* Divider */}
            <hr />
          </div>
          <div>
            <span>
              <s className="text-gray-300 font-light mt-3">$600</s>
              <strong>$320</strong>
            </span>
            <p>Monthly pack - 30 capsules</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionCard;
