import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container w-50 mx-auto my-5">
      <h4 className="text-center mb-3">Add New Product</h4>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2 rounded-1 p-2" placeholder="Name" {...register("name", { required: true })} />

        <textarea className="mb-2 rounded-1 p-2" placeholder="Description" {...register("description")} />

        <input className="mb-2 rounded-1 p-2" placeholder="Price" type="number" {...register("price")} />

        <input className="mb-2 rounded-1 p-2" placeholder="Quantity" type="number" {...register("quantity")} />

        <input className="mb-2 rounded-1 p-2" placeholder="Supplier" {...register("supplier", { required: true })} />

        <input className="border-0 rounded-1 p-3 text-white" style={{ backgroundColor: "orangeRed" }} type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddItem;
