import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

function MenuCollection(props) {
  // State variables to manage image viewer visibility and current image index
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Function to close the image viewer
  const closeViewer = () => setIsMenuOpen(false);

  // Function to open the image viewer
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {/* Conditionally render the image viewer when it's open */}
      {isMenuOpen && (
        <ImageViewer
          src={props.image} // Array of menu images
          currentIndex={currentImage} // Index of the current image being viewed
          displayScroll={false} // Disable scroll display
          onClose={closeViewer} // Callback function to close the viewer
        />
      )}
      {/* Render the menu collection */}
      <div
        className="w-32 h-32 md:w-48 flex flex-col md:h-48"
        onClick={openViewer} // Open the image viewer when clicked
      >
        {/* Render the first menu image */}
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.image[0]} // Display the first menu image
            alt="menu"
            className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
          />
        </div>
        {/* Display menu title and number of pages */}
        <div>
          <strong>{props.menuTitle}</strong>
          <p>{props.pages} Pages</p>
        </div>
      </div>
    </>
  );
}

export default MenuCollection;
