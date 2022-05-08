import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UpdateQuantity from "../UpdateQuantity/UpdateQuantity";
import "./Inventory.css";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://limitless-mountain-78144.herokuapp.com/bike/${inventoryId}`;

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
    // fetch(`https://limitless-mountain-78144.herokuapp.com/bike/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ decrementQuantity }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  const handleManageItem = () => {
    navigate("/manage");
  };

  return (
    <div>
      <h2 className="text-center mt-5">Inventory Item</h2>
      <hr style={{ width: "300px" }} className="mx-auto" />

      <div className="inventory-card card border-0 shadow mx-auto p-3">
        <div>
          <img className="img-fluid" src={product?.img} alt="" />
        </div>
        <div className="info mt-5">
          <h4>{product?.name}</h4>
          <p>{product?.description}</p>
          <p>Price: ${product?.price}</p>
          <p>Quantity: {product?.quantity}</p>
          <p>Supplier: {product?.supplier}</p>
        </div>

        {/* Button */}
        <div className="d-flex">
          <div className="">
            <button onClick={handleDeliver} style={{ backgroundColor: "orangeRed" }} className="deliver-btn btn text-white px-4 me-3">
              Deliver
            </button>
          </div>
          <div className="manage-btn">
            <button onClick={handleManageItem} style={{ backgroundColor: "orangeRed" }} className="btn px-3 text-white">
              Manage
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
