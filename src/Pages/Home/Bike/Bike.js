import React from "react";
import "./Bike.css";

const Bike = ({ bike }) => {
  const { id, img, name, description, price, quantity, supplier } = bike;
  return (
    <div>
      <div className="card mx-auto border-0 rounded-lg shadow-lg p-2" style={{ width: "23.5rem" }}>
        <img className="rounded" src={img} alt="" />
        <div className="info ms-2 mt-4">
          <h4 style={{color: "orange"}}>{name}</h4>
          <p>{description.slice(0, 80)}</p>
          <h5>Price: ${price}</h5>
          <h6>Quantity: {quantity}</h6>
          <h6>Supplier: {supplier}</h6>
        </div>
        <div className="button btn">{/* <button onClick={() => navigateServiceDetail(id)}>Get Service</button> */}</div>
      </div>
    </div>
  );
};

export default Bike;
