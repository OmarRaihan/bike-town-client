import useBikes from "../../../hooks/useBikes";
import Bike from "../Bike/Bike";
import "./Bikes.css";

const Bikes = () => {
  const [bikes] = useBikes();

  return (
    <div className="container">
      <h2 className="text-center my-5">Bike Collection</h2>
      <div className="bikes-container my-5">
        {bikes.map((bike) => (
          <Bike key={bike._id} bike={bike}></Bike>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
