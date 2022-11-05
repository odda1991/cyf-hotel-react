import React, { useStete } from "react";

const RestaurantButton = props => {
  const handleClicked = props.handleClicked;
  return (
    <div>
      <button onClick={handleClicked} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
