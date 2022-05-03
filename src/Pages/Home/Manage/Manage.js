import React, { useState } from 'react';
import './Manage.css'

const Manage = ({manage}) => {
    const { img, name, description, price, quantity, supplier } = manage;
    const [manages, setManages] = useState([]);

    const handleDelete =(id) =>{
        const proceed = window.confirm('Are you sure to delete?');
        if(proceed){
            console.log("deleted", id);
            const url = `http://localhost:7000/bike/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = manage.filter(manage => manages._id !== id);
                    setManages(remaining)
                }
            })
        }
    }

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
          <button style={{ backgroundColor: "orangeRed" }} className="btn fw-bold text-white w-50 my-2 ms-2" onClick={() => handleDelete(manage._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
    );
};

export default Manage;