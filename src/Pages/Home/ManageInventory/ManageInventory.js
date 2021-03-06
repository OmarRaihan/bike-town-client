import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useBikes from "../../../hooks/useBikes";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [bikes, setBikes] = useBikes();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      console.log("deleted", id);
      const url = `https://limitless-mountain-78144.herokuapp.com/bike/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = bikes.filter((bike) => bikes._id !== id);
            setBikes(remaining);
          }
        });
    }
    window.location.reload();
  };

  const navigateToAddItem = () => {
    navigate("/addItem");
  };

  if (!user) {
    navigate("/login");
  }

  return (
    <div>
      <div className="table-container my-5">
        <div>
          <h2 className="text-center">Manage Items ({bikes.length})</h2>
          <hr />
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Supplier</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike) => (
              <tr key={bike._id} className="data-row">
                <td>
                  {" "}
                  <img style={{ width: "120px" }} className="img-fluid" src={bike.img} alt="" />
                </td>
                <td>{bike.name}</td>
                <td>${bike.price}</td>
                <td>{bike.quantity}</td>
                <td>{bike.supplier}</td>
                <td>
                  <div>
                    <button style={{ backgroundColor: "orangeRed" }} className="btn fw-bold text-white my-2 " onClick={() => handleDelete(bike._id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center my-5">
          <button onClick={navigateToAddItem} style={{ backgroundColor: "orangeRed" }} className="add-item-btn btn text-white py-2">
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
