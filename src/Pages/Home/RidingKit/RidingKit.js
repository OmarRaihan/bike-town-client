import React from "react";
import './RidingKit.css'

const RidingKit = ({ kit }) => {
  const { id, img, name, price, quantity } = kit;
  return (
    <div className="card-container mx-auto">
      <div className="card border-0 rounded-lg shadow-lg p-2" style={{ width: "19rem" }}>
        <img className="rounded" src={img} alt="" />
        <div className="kits-info ms-1 mt-4">
          <h6 className="mb-4" style={{color: 'navy'}}>{name}</h6>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default RidingKit;
