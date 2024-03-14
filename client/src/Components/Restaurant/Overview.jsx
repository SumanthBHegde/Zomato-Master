import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// components
import { NextArrow, PrevArrow } from "../carouselArrow";
import MenuCollection from "./MenuCollection";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import ReviewCard from "./Reviews/ReviewCard";
import MapView from "./Mapview";

function Overview() {
  // State for menu images, reviews, cuisine, and average cost
  const [menuImages, setMenuImages] = useState({
    images: [
      "https://b.zmtcdn.com/data/menus/506/19119506/2d28e4999d61f37c8a19e852284abfbf.jpg",
      "https://b.zmtcdn.com/data/menus/506/19119506/57f429b03c18238a20e583aaaf247834.jpg",
      "https://b.zmtcdn.com/data/menus/506/19119506/5deb7f5c08dd9c554fe86d4e2fa0a782.jpg",
    ],
  });
  const [reviews, setReviews] = useState([
    {
      isRestaurantReview: false,
      createAt: "2020-05-01",
      fullName: "John Doe",
      reviewText: "Food was good, but service was slow",
    },
    {
      isRestaurantReview: false,
      createAt: "2020-09-01",
      fullName: "John Doe",
      reviewText: "Food was good, but service was slow",
    },
    {
      isRestaurantReview: false,
      createAt: "2021-05-01",
      fullName: "John Doe",
      reviewText: "Food was good, but service was slow",
    },
  ]);
  const [cuisine, setCuisine] = useState(["Modern Indian", "Bar Food"]);
  const averageCost = 200;

  const { id } = useParams(); // Get the restaurant ID from URL params

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
              pages="3"
              image={menuImages.images}
            />
          </div>
          {/* Cuisine section */}
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {cuisine.map((cuisineName, index) => (
              <span
                key={index}
                className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full"
              >
                {cuisineName}
              </span>
            ))}
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
