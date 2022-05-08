import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getNewItem = async () => {
      const email = user?.email;
      const url = `http://localhost:7000/newItem?email=${email}`;
      console.log(url);
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getNewItem();
  }, [user]);

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="container" style={{ height: "100vh" }}>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
