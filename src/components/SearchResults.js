import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const fakeBookings = props.results;
  const [color, setColor] = useState("none");
  const [light, setLight] = useState("red");

  function highlighted() {
    setColor("red");
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {fakeBookings.map((booking, index) => {
          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          const calculate = checkOut.diff(checkIn, "days");
          return (
            <tr onClick={highlighted} key={index}>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{calculate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
