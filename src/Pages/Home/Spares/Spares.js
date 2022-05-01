import React, { useEffect, useState } from "react";
import Spare from "../Spare/Spare";
import './Spares.css'

const Spares = () => {
  const [spares, setSpares] = useState([]);

  useEffect(() => {
    fetch("parts.json")
      .then((res) => res.json())
      .then((data) => setSpares(data));
  }, []);
  return (
    <div className="container">
      <div>
      <h2 className="text-center">Spare & Parts</h2>
      <hr />
      </div>
      <div className="spares-container mt-4 mb-5">
        {spares.map((spare) => (
          <Spare key={spare.id} spare={spare}></Spare>
        ))}
      </div>
    </div>
  );
};

export default Spares;
