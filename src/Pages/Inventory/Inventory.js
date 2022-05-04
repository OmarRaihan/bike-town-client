import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [product, setProduct] = useState({});
  const [update, setUpdate] = useState(0);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const url = `http://localhost:7000/bike/${inventoryId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [inventoryId]);

  const handleDeliver = () =>{
    setUpdate(update - 1)
  }


  // Update button
  const handleUpdate = event =>{
    event.preventDefault();
    // const quantity = event.target.quantity.value;
    // const product = {quantity};
  };

  // // send data to server
  // fetch('http://localhost:7000/bike', {
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

          <button onClick={handleDeliver} style={{ backgroundColor: "orangeRed" }} className="btn text-white w-25 ms-2">
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