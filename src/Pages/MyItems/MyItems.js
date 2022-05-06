import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const url = `https://limitless-mountain-78144.herokuapp.com/bike?email=${email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);

  return (
    <div className="container">
      <div className="my-5">
        <h2 className="text-center">My Items ({myItems.length})</h2>
        <hr />
      </div>
      <div className="items-container container my-5">
        {myItems.map((bike) => (
          <div key={bike._id}>
            <div className="item-card card mx-auto border-0 rounded-lg shadow-lg p-2">
              <img className="rounded" src={bike.img} alt="" />
              <div className="info mt-4">
                <h4 style={{ color: "orange" }}>{bike.name}</h4>
                <p>{bike.description.slice(0, 80)}</p>
                <h5>Price: ${bike.price}</h5>
                <h6>Quantity: {bike.quantity}</h6>
                <h6>Supplier: {bike.supplier}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
