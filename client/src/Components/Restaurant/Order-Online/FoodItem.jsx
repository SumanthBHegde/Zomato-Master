import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";

// redux
import { useDispatch } from "react-redux";
import { getFood } from "../../../Redux/Reducers/Food/food.action";
import { getImage } from "../../../Redux/Reducers/Image/image.action";

function FoodItem(props) {
  const [food, setFood] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFood(props._id)).then((data) => {
      setFood(data.payload.foods);
      dispatch(getImage(data.payload.foods.photos)).then((data) => {
        const { images } = data.payload;
        images.length &&
          setFood((prev) => ({ ...prev, image: images[0].location }));
      });
    });
  }, []);

  return (
    <>
      {/* Food item card */}
      <div className="flex items-start gap-2">
        {/* Check if food item has name */}
        {food?.name && (
          <div className="flex items-start gap-4 w-full p-1">
            {/* Check if food item has image */}
            {food?.image && (
              <div className="w-3/2 h-24 w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden">
                {/* Food item image */}
                <img
                  src={food?.image}
                  alt="food item"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            {/* Food item details */}
            <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                {/* Food item name */}
                <h3 className="text-xl font-semibold">{food?.name}</h3>
                {/* Add to cart button (visible on mobile only) */}
                <button className="md:hidden flex items-center gap-2 text-zomato-300 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg">
                  {food.isAddedToCart ? (
                    "Added"
                  ) : (
                    <>
                      <AiOutlinePlus /> Add
                    </>
                  )}
                </button>
              </div>
              {/* Food item rating */}
              <ReactStars count={5} value={food?.rating} />
              {/* Food item price */}
              <h5>${food?.price}</h5>
              {/* Food item description */}
              <p>{food?.description}</p>
            </div>
            {/* Add to cart button (visible on desktop) */}
            <div className="hidden md:block w-2/12">
              <button className="flex items-center gap-2 text-zomato-300 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg">
                {food.isAddedToCart ? (
                  "Added"
                ) : (
                  <>
                    <AiOutlinePlus /> Add
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FoodItem;
