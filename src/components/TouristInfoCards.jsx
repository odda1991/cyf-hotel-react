import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="d-flex">
      <div className="card-body">
        <img
          src="https://www.glasgow.gov.uk/media/image/k/7/Buchanan_Street_busy.jpg"
          className="card-img-top"
        />
        <h5 className="card-title">Glasgow</h5>
        <p className="card-text" />
        <a href="peoplemakeglasgow.com" className="btn btn-primary">
          More Information
        </a>
      </div>

      <div className="card-body">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1"
          className="card-img-top"
        />
        <h5 className="card-title">Manchester</h5>
        <p className="card-text" />
        <a href="visitmanchester.com" className="btn btn-primary">
          More Information
        </a>
      </div>

      <div className="card-body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/640px-London_Big_Ben_Phone_box.jpg"
          className="card-img-top"
        />
        <h5 className="card-title">London</h5>
        <p className="card-text" />
        <a href="visitlondon.com" className="btn btn-primary">
          More Information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
