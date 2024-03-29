import React from "react";
import Slider from "react-slick"; // Importing Slider component from react-slick library

// components
import DeliveryCategory from "./DeliveryCategory"; // Importing DeliveryCategory component
import { NextArrow, PrevArrow } from "../carouselArrow"; // Importing NextArrow and PrevArrow components

function DeliveryCarousel() {
  // Array containing food categories with image and title
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      title: "biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
      title: "Kesari Bath",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
      title: "Cake",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/06a/af146087e76aed8c0baa90a84a6f206a.jpg",
      title: "Sagu",
    },
  ];

  // Settings for the Slider component
  const settings = {
    className: "center",
    centerMode: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for responsiveness
        settings: {
          slidesToShow: 5, // Adjusting slides to show for larger screens
        },
      },
    ],
  };

  return (
    <>
      {/* Heading for the carousel */}
      <h1 className="text-xl mb-4 font-semibold">
        Taste the Tradition - Order with a Click!
      </h1>
      {/* Rendering food categories for small screens */}
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} /> // Rendering DeliveryCategory component for each category
        ))}
      </div>
      {/* Rendering Slider component for large screens */}
      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} /> // Rendering DeliveryCategory component as slides
          ))}
        </Slider>
      </div>
    </>
  );
}

export default DeliveryCarousel; // Exporting DeliveryCarousel component
