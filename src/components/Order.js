import React, { useState } from "react";
import RestaurantButton from "./ResturantButton";

const Order = props => {
  const orderType = props.orderType;
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton handleClicked={orderOne} />
    </li>
  );
};

export default Order;
