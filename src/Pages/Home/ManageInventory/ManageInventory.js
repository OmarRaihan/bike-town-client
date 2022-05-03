import React, { useEffect, useState } from 'react';
import Manage from '../Manage/Manage';
import './ManageInventory.css'

const ManageInventory = () => {
    const [manages, setManages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/bike")
      .then((res) => res.json())
      .then((data) => setManages(data));
  }, []);

    return (
        <div className="container">
        <div className="my-5">
        <h2 className="text-center">Inventory Items</h2>
        <hr />
        </div>
        <div className="inventory-container my-5">
          {manages.map((manage) => (
            <Manage key={manage._id} manage={manage}></Manage>
          ))}
        </div>
      </div>
    );
};

export default ManageInventory;