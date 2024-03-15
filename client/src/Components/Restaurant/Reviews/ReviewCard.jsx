import React, { useState, useEffect } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import dayjs from "dayjs";

// Redux
import { useDispatch } from "react-redux";
import { getUser } from "../../../Redux/Reducers/User/user.action";

function ReviewCard(props) {
  // State for the user name
  const [user, setUser] = useState("Sumu");

  const dispatch = useDispatch();

  useEffect(() => {
    if (props) {
      dispatch(getUser(props.user)).then((data) => {
        setUser(data.payload.user.fullName);
      });
    }
  }, []);

  return (
    <>
      {/* Container for the review card */}
      <div className="flex flex-col gap-3 my-3">
        {/* Header section */}
        <div className="flex items-center justify-between">
          {/* User avatar and details */}
          <div className="flex items-center gap-2">
            {/* User avatar */}
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg" // Avatar image source
                alt="avatar"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            {/* User details */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{user}</h3>
              {/* User full name */}
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers{" "}
                {/* User review count and followers */}
              </small>
            </div>
          </div>
          {/* Follow button */}
          <button className="px-4 py-2 border rounded-lg text-zomato-300 border-zomato-400">
            Follow
          </button>
        </div>
        {/* Review details */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {/* Star rating */}
            <span className="flex items-center gap-1 px-2 py-1 text-xs text-white bg-green-700 rounded-lg">
              {props.rating} <TiStarFullOutline /> {/* Star icon */}
            </span>
            {/* Review type and date */}
            <h5 className="uppercase font-regular">
              {props.isRestaurantReview ? "Dining" : "Delivery"}{" "}
              {/* Review type */}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createAt).format("DD-MM-YYYY")} {/* Review date */}
            </small>
          </div>
          {/* Review text */}
          <div className="w-full">
            <p className="w-full text-base font-light text-gray-600">
              {props.reviewText} {/* Review content */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
