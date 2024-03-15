import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// component
import PhotoCollection from "./PhotoCollection";

function Photos() {
  // State for managing photos
  const [photos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/1/19490811/d1b9d5fa9d2d5563debeca8b1df9834c.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/19490811/bf50a02d59e276a70b9490901e24d7e4.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/378/898f269f6704a7ef3f787489fe1e5109.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/378/285ed4164c2fdebbd3dcf15422b1d210.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/378/1d5abbb32f170b6ac114f0f191a30827.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/8/378/b8e14bd3f1a5f406d843e9cbf3f10e2c.jpg",
  ]);
  // State for managing image viewer
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Function to close image viewer
  const closeViewer = () => setIsMenuOpen(false);
  // Function to open image viewer
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {/* Image viewer component */}
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {/* Map each photo to PhotoCollection component */}
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            openViewer={openViewer}
            index={index}
            image={photo}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
  );
}

export default Photos;
