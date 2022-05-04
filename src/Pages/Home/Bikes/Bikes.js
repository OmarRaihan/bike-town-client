import React, { useEffect, useState } from "react";
import Bike from "../Bike/Bike";
import './Bikes.css'

const Bikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("https://limitless-mountain-78144.herokuapp.com/bike")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center my-5">Bike Collection</h2>
      <div className="bikes-container my-5">
        {bikes.map((bike) => (
          <Bike key={bike._id} bike={bike}></Bike>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
