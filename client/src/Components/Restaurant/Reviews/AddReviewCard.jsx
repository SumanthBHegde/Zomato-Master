import React, { useState } from "react";

// component
import ReviewModal from "./ReviewModal";

function AddReviewCard() {
  // State for managing the modal open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    if (!localStorage.zomatoUser) {
      return alert("Please sign in to post a review");
    }

    setIsOpen(true);
  };

  return (
    <>
      {/* ReviewModal component to display review form */}
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Title */}
      <h3 className="text-xl font-medium">Rate your experience for</h3>
      {/* Radio buttons for selecting review type */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="dining" />
          <label htmlFor="dining">Dining</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>
      {/* Button to open the review modal */}
      <button onClick={openModal} className="text-zomato-300">
        Write a review
      </button>
    </>
  );
}

export default AddReviewCard;
