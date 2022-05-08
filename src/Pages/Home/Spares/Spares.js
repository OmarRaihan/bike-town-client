import React, { useEffect, useState } from "react";
import Spare from "../Spare/Spare";
import "./Spares.css";

const Spares = () => {
  const [spares, setSpares] = useState([]);

  useEffect(() => {
    fetch("https://limitless-mountain-78144.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setSpares(data));
  }, []);
  return (
    <div className="container">
      <div>
        <h2 className="text-center mt-5">Spare & Parts</h2>
        <hr className="w-75 mx-auto" />
      </div>
      <div className="spares-container mb-5">
        {spares.map((spare) => (
          <Spare key={spare._id} spare={spare}></Spare>
        ))}
      </div>
    </div>
  );
};

export default Spares;
