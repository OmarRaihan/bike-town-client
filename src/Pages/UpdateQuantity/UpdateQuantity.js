import React from "react";
import { Button, Form } from "react-bootstrap";
import './UpdateQuantity.css'

const UpdateQuantity = () => {
  const handleUpdate = (event) => {
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
    <div className="update-form mx-auto my-5">
      <div style={{ backgroundColor: "#a8dadc"}} className="py-5 rounded-3">
        <h4 className="text-center mb-3">Update Stock</h4>
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

export default UpdateQuantity;
