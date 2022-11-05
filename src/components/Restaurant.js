//import React, { useState } from 'react';
//import RestaurantButton from './ResturantButton';
import Order from "./Order";

const Restaurant = () => {
  const orderType = "pizzas";
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={orderType} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate Cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
