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
      <div className="my-3 flex flex-col gap-3">
        {/* Header section */}
        <div className="flex items-center justify-between">
          {/* User avatar and details */}
          <div className="flex items-center gap-2">
            {/* User avatar */}
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg" // Avatar image source
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
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
          <button className="text-zomato-300 border border-zomato-400 py-2 rounded-lg px-4">
            Follow
          </button>
        </div>
        {/* Review details */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {/* Star rating */}
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <TiStarFullOutline /> {/* Star icon */}
            </span>
            {/* Review type and date */}
            <h5 className="font-regular uppercase">
              {props.isRestaurantReview ? "Dining" : "Delivery"}{" "}
              {/* Review type */}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createAt).format("DD-MM-YYYY")} {/* Review date */}
            </small>
          </div>
          {/* Review text */}
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              {props.reviewText} {/* Review content */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
