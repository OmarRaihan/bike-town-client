import React, { useEffect, useState } from "react";
import RidingKit from "../RidingKit/RidingKit";
import "./RidingKits.css";

const RidingKits = () => {
  const [kits, setKits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/kit")
      .then((res) => res.json())
      .then((data) => setKits(data));
  }, []);
  return (
    <div className="container">
      <div className="">
        <h2 className="text-center mt-5">Riding Kits</h2>
        <hr className="w-75 mx-auto" />
      </div>
      <div className="ridingKits-container mt-4 mb-5">
        {kits.map((kit) => (
          <RidingKit key={kit._id} kit={kit}></RidingKit>
        ))}
      </div>
    </div>
  );
};

export default RidingKits;
