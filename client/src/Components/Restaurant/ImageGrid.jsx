import React from "react";
import { AiOutlineCamera } from "react-icons/ai"; // Importing AiOutlineCamera icon from react-icons/ai

function ImageGrid(props) {
  return (
    <>
      {/* Mobile Image */}
      <div className="w-full h-60 md:hidden">
        <img
          src={props.images.length && props.images[0].location} // Displaying the first image in the array
          alt="restaurant"
          className="w-full h-full object-cover object-center rounded-lg" // Image styling
        />
      </div>
      {/* Desktop Image Grid */}
      <div className="hidden w-full h-96 md:flex gap-1">
        {/* First Image */}
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.images.length && props.images[0].location} // Displaying the first image in the array
            alt="restaurant"
            className="w-full h-full object-cover object-center transform transition duration-700 hover:scale-110" // Image styling with hover effect
          />
        </div>
        {/* Second Image */}
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-2/4 overflow-hidden rounded-lg">
            <img
              src={props.images.length && props.images[1].location} // Displaying the second image in the array
              alt="restaurant"
              className="w-full h-full object-cover object-center rounded-lg transform transition duration-700 hover:scale-110" // Image styling with hover effect
            />
          </div>
          {/* Third Image */}
          <div className="w-full h-2/4 overflow-hidden rounded-lg">
            <img
              src={props.images.length && props.images[2].location} // Displaying the third image in the array
              alt="restaurant"
              className="h-full object-cover object-center rounded-lg transform transition duration-700 hover:scale-110" // Image styling with hover effect
            />
          </div>
        </div>
        {/* Fourth Image */}
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-2/4 relative">
            <img
              src={props.images.length && props.images[3].location} // Displaying the fourth image in the array
              alt="restaurant"
              className="w-full h-full object-cover rounded-lg" // Image styling
            />
            {/* Overlay for View Gallery */}
            <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg" />
            {/* Text for View Gallery */}
            <h4 className="absolute inset-y-2/4 z-20 w-full h-full text-center text-white font-semibold">
              View Gallery
            </h4>
          </div>
          {/* Fifth Image */}
          <div className="w-full h-2/4 relative">
            <img
              src={props.images.length && props.images[4].location} // Displaying the fifth image in the array
              alt="restaurant"
              className="w-full h-full object-cover rounded-lg" // Image styling
            />
            {/* Overlay for View Gallery */}
            <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg" />
            {/* View Gallery Icon and Text */}
            <div className="absolute flex flex-col items-center inset-y-1/4 z-20 w-full h-full text-center text-white font-semibold">
              <div className="bg-black p-3 rounded-full bg-opacity-50">
                <AiOutlineCamera className="text-white" />{" "}
                {/* View Gallery Icon */}
              </div>
              <h4>View Gallery</h4> {/* Text */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGrid;
