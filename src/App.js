import React from "react";

import Bookings from "./components/Bookings";
import "./App.css";
//import SearchButton from "./components/SearchButton";
import Heading from "./heading";
import TouristInfoCards from "./components/TouristInfoCards";
import SearchResults from "./components/SearchResults";
import Footer from "./Footer";
import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
