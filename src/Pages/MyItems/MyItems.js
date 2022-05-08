import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useBikes from "../../hooks/useBikes";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const [bikes, setBikes] = useBikes();
  const navigate = useNavigate();

  useEffect(() => {
    const getNewItem = async () => {
      const email = user?.email;
      const url = `http://localhost:7000/bike?email=${email}`;
      console.log(url);
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getNewItem();
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      console.log("deleted", id);
      const url = `http://localhost:7000/newItem/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = bikes.filter((bike) => bikes._id !== id);
            setBikes(remaining);
          }
        });
    }
    window.location.reload();
  };

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="container">
      <div className="my-5">
        <h2 className="text-center">My Items ({myItems.length})</h2>
        <hr />
      </div>
      <div className="items-container my-5">
        {myItems.map((bike) => (
          <div key={bike._id}>
            <div className="item-card card mx-auto border-0 rounded-lg shadow-lg p-2">
              <img className="img-fluid" src={bike?.img} alt="" />
              <div className="info mt-4">
                <h4 style={{ color: "orange" }}>{bike?.name}</h4>
                <p>{bike.description.slice(0, 80)}</p>
                <h5>Price: ${bike?.price}</h5>
                <h6>Quantity: {bike?.quantity}</h6>
                <h6>Supplier: {bike?.supplier}</h6>
              </div>
              <div>
                <button style={{ backgroundColor: "orangeRed" }} className="btn fw-bold text-white my-2 " onClick={() => handleDelete(bike._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
