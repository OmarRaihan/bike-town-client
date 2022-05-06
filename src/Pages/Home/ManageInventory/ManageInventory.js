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

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="container">
      <div className="my-5">
        <h2 className="text-center">Manage Items ({bikes.length})</h2>
        <hr />
      </div>
      <div className="inventory-container container my-5">
        {bikes.map((bike) => (
          <div key={bike._id}>
            <div className="manage-card card mx-auto border-0 rounded-lg shadow-lg p-2">
              <img className="rounded" src={bike.img} alt="" />
              <div className="info mt-4">
                <h4 style={{ color: "orange" }}>{bike.name}</h4>
                <p>{bike.description.slice(0, 80)}</p>
                <h5>Price: ${bike.price}</h5>
                <h6>Quantity: {bike.quantity}</h6>
                <h6>Supplier: {bike.supplier}</h6>
              </div>
              <div>
                <button
                  style={{ backgroundColor: "orangeRed" }}
                  className="btn fw-bold text-white  my-2 ms-2 "
                  onClick={() => handleDelete(bike._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-5">
        <button onClick={navigateToAddItem} style={{ backgroundColor: "orangeRed" }} className="btn text-white">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ManageInventory;
