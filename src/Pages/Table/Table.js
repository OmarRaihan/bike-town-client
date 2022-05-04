import React from "react";
import useBikes from "../../hooks/useBikes";
import "./Table.css";

const Table = () => {
  const [bikes, setBikes] = useBikes();

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


  return (
    <div>
      <div className="container-table">
        <h2 className="mt-5 mb-3">Inventory Items</h2>
        <div>
          <ul className="responsive-table">
            {/* Table Header */}
            <li className="table-header">
              <div className="col col-2">Image</div>
              <div className="col col-2">Name</div>
              <div className="col col-3">Description</div>
              <div className="col col-1">Price</div>
              <div className="col col-1">Quantity</div>
              <div className="col col-1">Supplier</div>
              <div className="col col-1">Manage</div>
            </li>
            {/* Data */}
            {bikes.map((bike) => (
              <div>
                <li className="table-row">
                  <div className="col col-2" data-label="Image">
                    <img style={{ width: "100px" }} className="img-fluid" src={bike.img} alt="" />
                  </div>
                  <div className="col col-2" data-label="Name">
                    {bike.name}
                  </div>
                  <div className="col col-3" data-label="Description">
                    {bike.description.slice(0, 80)}
                  </div>
                  <div className="col col-1" data-label="Price">
                    {bike.price}
                  </div>
                  <div className="col col-1" data-label="Quantity">
                    {bike.quantity}
                  </div>
                  <div className="col col-1" data-label="Supplier">
                    {bike.supplier}
                  </div>
                  <div className="col col-1" data-label="Manage">
                    <button
                      style={{ backgroundColor: "orangeRed" }}
                      className="btn fw-bold text-white my-2 ms-2 "
                      onClick={() => handleDelete(bike._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Table;
