import useBikes from "../../../hooks/useBikes";
import Bike from "../Bike/Bike";
import "./Bikes.css";

const Bikes = () => {
  const [bikes] = useBikes();

  return (
    <div className="container">
      <h2 className="text-center mt-5">Bike Collection ({bikes.length})</h2>
      <hr className="w-75 mx-auto" />
      <div className="bikes-container mt-">
        {bikes.map((bike) => (
          <Bike key={bike._id} bike={bike}></Bike>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
