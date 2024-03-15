import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../../Redux/Reducers/Image/image.action";
import { getReviews } from "../../Redux/Reducers/Review/review.action";

// components
import { NextArrow, PrevArrow } from "../carouselArrow";
import MenuCollection from "./MenuCollection";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import ReviewCard from "./Reviews/ReviewCard";
import MapView from "./Mapview";

function Overview() {
  // State for menu images, reviews, cuisine, and average cost
  const [menuImages, setMenuImages] = useState({ images: [] });
  const [reviews, setReviews] = useState([]);

  const { id } = useParams(); // Get the restaurant ID from URL params

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        setMenuImages(images);
      });

      dispatch(getReviews(reduxState?._id)).then((data) =>
        setReviews(data.payload.reviews)
      );
    }
  }, [reduxState]);

  // Settings for the slider component displaying similar restaurants
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to handle rating change
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  // Function to extract latitude and longitude from map address
  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <>
      {/* Main content */}
      <div className="flex flex-col gap-5 md:flex-row relative">
        {/* Restaurant details */}
        <div className="w-full md:w-8/12">
          {/* Menu section */}
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-300">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              pages={menuImages.length}
              image={menuImages}
            />
          </div>
          {/* Cuisine section */}
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {reduxState?.cuisine.map((cuisineName, index) => (
              <span
                key={index}
                className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full"
              >
                {cuisineName}
              </span>
            ))}
          </div>
          {/*Average section */}
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>${reduxState?.averageCost} for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and cahrges, if any
            </small>
          </div>
          <div className="flex flex-col-reverse">
            {/* Rate your delivery experience */}
            <div className="my-4">
              <h4 className="text-lg font-medium">
                Rate your delivery experience
              </h4>
              {/* ReactStars component */}
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              {/* Map over reviews and render ReviewCard */}
              {reviews.map((review, index) => (
                <ReviewCard {...review} key={index} />
              ))}
            </div>
            {/* Similar Restaurants */}
            <div className="my-4">
              <h4 className="text-lg font-medium">Similar Restaurants</h4>
              <div>
                {/* Slider component with MenuSimilarRestaurantCard */}
                <Slider {...settings}>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                  {/* More MenuSimilarRestaurantCard components */}
                </Slider>
              </div>
            </div>
            {/* Mobile MapView */}
            <div className="my-4 w-full md:hidden flex flex-col gap-4">
              {/* Render MapView component */}
              <MapView
                title="McDonald's"
                phno="+919234345634"
                mapLocation={getLatLong("28.64435706075414, 77.11929960209767")}
                address="Shop 52, Plot 8, 9 & 10, G-8, Ground Floor, DDA Market, J-Block, Community Centre, Rajouri Garden, New Delhi"
              />
            </div>
          </div>
        </div>
        {/* Aside section - sticky on medium and large screens */}
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-10 bg-white p-3 shadow-md flex-col gap-4"
        >
          <MapView
            title="McDonald's"
            phno="+919234345634"
            mapLocation={getLatLong("28.64435706075414, 77.11929960209767")}
            address="Shop 52, Plot 8, 9 & 10, G-8, Ground Floor, DDA Market, J-Block, Community Centre, Rajouri Garden, New Delhi"
          />
        </aside>
      </div>
    </>
  );
}

export default Overview;
