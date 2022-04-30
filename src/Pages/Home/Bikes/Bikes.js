import React, { useEffect, useState } from "react";
import Bike from "../Bike/Bike";
import './Bikes.css'

const Bikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("bikes.json")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <div>
      <h1 className="text-center my-5">Bike Collection</h1>
      <div className="container bikes-container my-5">
        {bikes.slice(0, 6).map((bike) => (
          <Bike key={bike.id} bike={bike}></Bike>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
