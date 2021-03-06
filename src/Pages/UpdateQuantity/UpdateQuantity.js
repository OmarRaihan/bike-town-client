import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useBikes from "../../hooks/useBikes";
import "./UpdateQuantity.css";

const UpdateQuantity = () => {
  const [updateQuantity, setUpdateQuantity] = useState({});
  const { quantity } = useBikes();
  const { id } = useParams();

  const oldQuantity = quantity;

  const handleUpdateQuantity = (event) => {
    event.preventDefault();

    const quantity = event.target.quantity.value;
    // const oldQuantity = parseInt(updateQuantity.quantity)
    const product = quantity + oldQuantity;
    // const newProduct = product + oldQuantity;

    // send data to server
    // If there is no data on database, PUT method will add data. If there is data on database, PUT will update it.
    const url = `https://limitless-mountain-78144.herokuapp.com/bike/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Quantity added successfully!!");
        event.target.reset();
      });
  };

  return (
    <div className="update-form mx-auto my-5">
      <div style={{ backgroundColor: "#a8dadc" }} className="py-5 rounded-3">
        <h4 className="text-center mb-3">Update Stock</h4>
        <Form onClick={handleUpdateQuantity} className="update-input mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="number" name="quantity" placeholder="Product Quantity" />
          </Form.Group>

          <Button style={{ backgroundColor: "orangeRed" }} className="w-100 mb-1 border-0" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateQuantity;
