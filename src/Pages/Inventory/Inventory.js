import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useBikes from "../../hooks/useBikes";
import UpdateQuantity from "../UpdateQuantity/UpdateQuantity";
import "./Inventory.css";

const Inventory = () => {
  const [bikes] = useBikes();
  const { quantity } = bikes;
  const { inventoryId } = useParams();
  const [product, setProduct] = useState({});
  const [updateQuantity, setUpdateQuantity] = useState(quantity);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const url = `https://limitless-mountain-78144.herokuapp.com/bike/${inventoryId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [inventoryId]);

  // ------------------------------------------------------

  useEffect(() => {
    setUpdateQuantity(quantity);
  }, [quantity]);

  const handleQuantity = () => {
    console.log(updateQuantity);
    setUpdateQuantity(updateQuantity - 1);
    fetch(`https://limitless-mountain-78144.herokuapp.com/bike/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updateQuantity: updateQuantity }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1 className="text-center my-5">Inventory Item</h1>

      <div className="card border-0 shadow mx-auto p-3">
        <div className="">
          <div>
            <img className="img-fluid" src={product.img} alt="" />
          </div>
          <div className="info mt-4">
            <h4>Name: {product.name}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Supplier: {product.supplier}</p>
          </div>
          <div className="deliver-button">
            <button onClick={handleQuantity} style={{ backgroundColor: "orangeRed" }} className="btn text-white">
              Delivered
            </button>
          </div>
        </div>
      </div>
      <hr />

      {/* Update Stock */}
      <div>
        <UpdateQuantity />
      </div>
    </div>
  );
};

export default Inventory;
