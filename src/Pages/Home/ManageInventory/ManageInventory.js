import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Manage from '../Manage/Manage';
import './ManageInventory.css'

const ManageInventory = () => {
    const [manages, setManages] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:7000/bike")
      .then((res) => res.json())
      .then((data) => setManages(data));
  }, []);

  const navigateToAddItem = () =>{
      navigate('/addItem')
  }

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
        <div className='text-center my-5'>
            <button onClick={navigateToAddItem} style={{ backgroundColor: "orangeRed" }} className='btn text-white'>Add Item</button>
        </div>
      </div>
    );
};

export default ManageInventory;