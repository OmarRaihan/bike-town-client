import React, { useEffect, useState } from "react";
import RidingKit from "../RidingKit/RidingKit";
import "./RidingKits.css";

const RidingKits = () => {
  const [kits, setKits] = useState([]);

  useEffect(() => {
    fetch("kits.json")
      .then((res) => res.json())
      .then((data) => setKits(data));
  }, []);
  return (
    <div className="container">
      <div className="my-5">
        <h2 className="text-center">Riding Kits</h2>
        <hr />
      </div>
      <div className="ridingKits-container my-5">
        {kits.map((kit) => (
          <RidingKit key={kit.id} kit={kit}></RidingKit>
        ))}
      </div>
    </div>
  );
};

export default RidingKits;
