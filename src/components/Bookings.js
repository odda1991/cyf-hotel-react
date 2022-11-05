import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";
console.log(FakeBookings);
const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  function setBookings() {
    const [bookings, setBookings] = useState(FakeBookings);
    console.log(setBookings(bookings));
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
