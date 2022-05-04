import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useBikes from "../../hooks/useBikes";

const Inventory = () => {
  const [bikes] = useBikes()
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



  // -------------------------------------
  // -------------------------------------
  // Update button
  const handleUpdate = (event) => {
    event.preventDefault();
    // const quantity = event.target.quantity.value;
    // const product = {quantity};
  };

  // // send data to server
  // fetch('https://limitless-mountain-78144.herokuapp.com/bike', {
  //   method: 'PUT',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.parse(product)
  // })
  // .then(res=> res.json())
  // .then(data => {
  //   console.log('success', data);
  //   alert('Quantity added successfully!!');
  //   // event.target.reset();
  // })

  return (
    <div>
      <h1 className="text-center my-5">Inventory Item</h1>

      <div style={{ width: "30rem" }} className="card border-0 shadow mx-auto p-3">
        <div className="row">
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
          <button onClick={handleQuantity} style={{ backgroundColor: "orangeRed" }} className="btn text-white w-25 ms-2">
            Delivered
          </button>
        </div>
      </div>
      <hr />

      {/* Update Product Quantity */}
      <div className="container my-5">
        <h1 className="text-center my-5">Update Stock</h1>
        <Form onClick={handleUpdate} className="w-50 mx-auto">
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

export default Inventory;
