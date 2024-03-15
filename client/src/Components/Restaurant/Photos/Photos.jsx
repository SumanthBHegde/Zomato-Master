import React, { useState, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";

// component
import PhotoCollection from "./PhotoCollection";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../../../Redux/Reducers/Image/image.action";

function Photos() {
  // State for managing photos
  const [photos, setPhotos] = useState([]);

  // State for managing image viewer
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Function to close image viewer
  const closeViewer = () => setIsMenuOpen(false);
  // Function to open image viewer
  const openViewer = () => setIsMenuOpen(true);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState)
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        console.log(images);
        setPhotos(images);
      });
  }, [reduxState]);

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
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
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
