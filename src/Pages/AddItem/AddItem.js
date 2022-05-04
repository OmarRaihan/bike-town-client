import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const url = `http://localhost:7000/bike`;
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
    <div style={{ backgroundColor: "#a8dadc", width: "35rem", padding: "1.3rem" }} className="container w-50 mx-auto my-5 rounded-2">
      <h4 className="text-center mb-3">Add New Product</h4>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2 border-0 rounded-1 p-2" placeholder="Name" type="text" {...register("name", { required: true })} />

        <textarea className="mb-2 border-0 rounded-1 p-2" placeholder="Description" type="text" {...register("description")} />

        <input className="mb-2 border-0 rounded-1 p-2" placeholder="Price" type="number" {...register("price")} />

        <input className="mb-2 border-0 rounded-1 p-2" placeholder="Quantity" type="number" {...register("quantity")} />

        <input className="mb-2 border-0 rounded-1 p-2" placeholder="Supplier" type="text" {...register("supplier", { required: true })} />

        <input className="mb-2 border-0 rounded-1 p-2" placeholder="Photo URL" type="text" {...register("img", { required: true })} />

        <input className="border-0 rounded-1 p-3 text-white fs-5" style={{ backgroundColor: "orangeRed" }} type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddItem;
