import React from "react";
import './Spare.css'

const Spare = ({spare}) => {
  const { id, img, name, price, quantity } = spare;
  return (
    <div className="card-container mx-auto">
      <div className="card border-0 rounded-lg shadow-lg p-2" style={{ width: "18.5rem", height: "25rem" }}>
        <img className="rounded" src={img} alt="" />
        <div className="spare-info mt-auto ms-1 mt-4">
          <h6 className="mb-4" style={{ color: "navy" }}>{name}</h6>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Spare;
