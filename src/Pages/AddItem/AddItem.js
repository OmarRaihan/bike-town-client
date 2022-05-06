import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useBikes from "../../hooks/useBikes";
import "./AddItem.css";

const AddItem = () => {
  const { inventoryId } = useParams();
  const [bikes] = useBikes(inventoryId);
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const url = `https://limitless-mountain-78144.herokuapp.com/bike`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("success", result);
      });
  };

  return (
    <div style={{ backgroundColor: "#a8dadc", padding: "1.3rem" }} className="add-item-form mx-auto my-5 rounded-3">
      <h4 className="text-center mb-3">Add New Product</h4>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 border-0 rounded-1 p-2"
          placeholder="Photo URL"
          type="text"
          autoComplete="off"
          {...register("img", { required: true })}
        />

        <input className="mb-2 border-0 rounded-1 p-2" placeholder="Name" type="text" autoComplete="off" {...register("name", { required: true })} />

        <textarea className="mb-2 border-0 rounded-1 p-2" placeholder="Description" type="text" {...register("description")} />

        <input className="mb-2 border-0 rounded-1 p-2" placeholder="Price" type="number" {...register("price")} />

        <input className="mb-2 border-0 rounded-1 p-2" placeholder="Quantity" type="number" autoComplete="off" {...register("quantity")} />

        <input
          className="mb-2 border-0 rounded-1 p-2"
          placeholder="Supplier"
          type="text"
          autoComplete="off"
          {...register("supplier", { required: true })}
        />

        <input
          className="mb-2 border-0 rounded-1 p-2"
          placeholder="Email"
          type="email"
          value={user?.email}
          disabled
          {...register("email", { required: true })}
        />

        <input className="border-0 rounded-1 p-3 text-white fs-5" style={{ backgroundColor: "orangeRed" }} type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddItem;
