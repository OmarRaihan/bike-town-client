import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateQuantity from "../UpdateQuantity/UpdateQuantity";
import "./Inventory.css";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:7000/bike/${inventoryId}`;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
      
  }, [inventoryId]);

  // ------------------------------------------------------
  // ------------------------------------------------------

  // useEffect(() => {
  //   setUpdateQuantity(quantity);
  // }, [setUpdateQuantity]);

  const handleDeliver = () => {

    // // console.log(updateQuantity);
    // // setUpdateQuantity(quantity - 1);
    // let decrementQuantity = setUpdateQuantity(updateQuantity - 1);
    // // setUpdateQuantity(updateQuantity--)

    // if (updateQuantity <= 0) {
    //   decrementQuantity = () => setUpdateQuantity(1);
    // }

    // fetch(`http://localhost:7000/bike/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ decrementQuantity }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  return (
    <div>
      <h1 className="text-center my-5">Inventory Item</h1>

      <div className="inventory-card card border-0 shadow mx-auto p-3">
        <div className="">
          <div>
            <img className="img-fluid" src={product?.img} alt="" />
          </div>
          <div className="info mt-4">
            <h4>Name: {product?.name}</h4>
            <p>{product?.description}</p>
            <p>Price: ${product?.price}</p>
            <p>Quantity: {product?.quantity}</p>
            <p>Supplier: {product?.supplier}</p>
          </div>
          <div className="deliver-button">
            <button onClick={handleDeliver} style={{ backgroundColor: "orangeRed" }} className="btn text-white px-4">
              Deliver
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
