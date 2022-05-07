import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const { inventoryId } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  if (!user) {
    navigate("/login");
  }

  const handleAddItem = (event) => {
    event.preventDefault();

    const newItem = {
      inventoryId: inventoryId,
      img: event.target.img.value,
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value,
      supplier: event.target.supplier.value,
      email: user?.email,
    };

    // Item Added to bike collection
    axios.post("http://localhost:7000/bike", newItem);
    axios.post("http://localhost:7000/newItem", newItem).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("Product is added in bike.");
        toast("Product is added in New Item.");
      }
    });

    // const url = `http://localhost:7000/newItem`;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log("success", result);
    //   });
  };

  return (
    <div style={{ backgroundColor: "#a8dadc", padding: "1.3rem" }} className="add-item-form mx-auto my-5 rounded-3">
      <h4 className="text-center mb-3">Add New Product</h4>
      <form className="d-flex flex-column" onSubmit={handleAddItem}>

        <input
          className="mb-2 border-0 rounded-1 p-2"
          placeholder="Photo URL"
          type="text"
          name="img"
          autoComplete="off"
          {...register("img", { required: true })}
        />

        <input
          className="mb-2 border-0 rounded-1 p-2"
          placeholder="Name"
          type="text"
          name="name"
          autoComplete="off"
          {...register("name", { required: true })}
        />

        <textarea className="mb-2 border-0 rounded-1 p-2" placeholder="Description" type="text" name="description" {...register("description")} />

        <input className="mb-2 border-0 rounded-1 p-2" placeholder="Price" type="number" name="price" {...register("price")} />

        <input
          className="mb-2 border-0 rounded-1 p-2"
          placeholder="Quantity"
          type="number"
          name="quantity"
          autoComplete="off"
          {...register("quantity")}
        />

        <input
          className="mb-2 border-0 rounded-1 p-2"
          placeholder="Supplier"
          type="text"
          name="supplier"
          autoComplete="off"
          {...register("supplier", { required: true })}
        />

        <input
          className="mb-2 border-0 rounded-1 p-2"
          placeholder="Email"
          type="email"
          name="email"
          value={user?.email}
          disabled
          {...register("email", { required: true })}
        />

        <input className="border-0 rounded-1 p-3 text-white fs-5" style={{ backgroundColor: "orangeRed" }} type="submit" value="Add" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItem;
