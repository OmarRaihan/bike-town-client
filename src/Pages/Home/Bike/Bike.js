import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Bike.css";

const Bike = ({ bike }) => {
  const { _id, img, name, description, price, quantity, supplier } = bike;

  const navigate = useNavigate();
  const navigateToInventory = () => {
    navigate("/inventory/");
  };
  return (
    <div>
      <div className="card mx-auto border-0 rounded-lg shadow-lg p-2" style={{ width: "23rem" }}>
        <img className="rounded" src={img} alt="" />
        <div className="info ms-2 mt-4">
          <h4 style={{ color: "orange" }}>{name}</h4>
          <p>{description.slice(0, 80)}</p>
          <h5>Price: ${price}</h5>
          <h6>Quantity: {quantity}</h6>
          <h6>Supplier: {supplier}</h6>
        </div>
        <div>
          <button style={{ backgroundColor: "orangeRed" }} className="btn fw-bold text-white w-50 my-2 ms-2" onClick={navigateToInventory}>
            Manage
          </button>

          {/* <Link to="/inventory">
            <button style={{ backgroundColor: "orangeRed" }} className="btn fw-bold text-white w-50 my-2 ms-2">
              Manage
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Bike;
