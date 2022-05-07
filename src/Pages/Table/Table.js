import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useBikes from "../../hooks/useBikes";
import Loading from "../Shared/Loading/Loading";
import "./Table.css";

const Table = () => {
  const [bikes, setBikes] = useBikes();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      console.log("deleted", id);
      const url = `http://localhost:7000/bike/${id}`;
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
  };

  const navigateToAddItem = () => {
    navigate("/addItem");
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    navigate("/login");
  }

  return (
    <div>
      <div className="table-container my-5">
        <div>
          <h2 className="text-center">Manage Items</h2>
          <hr />
        </div>
        <table >
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
                    <button style={{ backgroundColor: "orangeRed" }} className="btn fw-bold text-white  my-2 " onClick={() => handleDelete(bike._id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center my-5">
          <button onClick={navigateToAddItem} style={{ backgroundColor: "orangeRed" }} className="btn text-white py-2 w-25">
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
