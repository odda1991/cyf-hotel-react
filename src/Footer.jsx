import React from "react";

const Footers = () => {
  const prop = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul>
      {prop.map((footer, index) => (
        <li key={index}>{footer}</li>
      ))}
    </ul>
  );
};

export default Footers;
