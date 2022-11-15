import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const fakeBookings = props.results;
  const [clickedRow, setClickedRow] = useState();
  const [customerId, setCustomerId] = useState(-1);

  function showProfile(id) {
    setCustomerId(id);
  }

  function highlighted(index) {
    setClickedRow(index);
    console.log(clickedRow);
  }

  return (
    <div>
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
            <td>Show profile</td>
          </tr>
        </thead>
        <tbody>
          {fakeBookings.map((booking, index) => {
            const checkIn = moment(booking.checkInDate);
            const checkOut = moment(booking.checkOutDate);
            const calculate = checkOut.diff(checkIn, "days");
            return (
              <tr
                key={index}
                onClick={() => highlighted(index)}
                className={clickedRow == index ? "highlight" : null}
              >
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{calculate}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => showProfile(booking.id)}
                  >
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {customerId > -1 ? <CustomerProfile id={customerId} /> : null}
    </div>
  );
};

export default SearchResults;
