import React, { useEffect, useState } from "react";
import { Button, Carousel, Form, FormControl } from "react-bootstrap";
import banner from "../../../images/images/Banner-1.jpg";
import Bike from "../Bike/Bike";
import RidingKits from "../RidingKits/RidingKits";
import Spares from "../Spares/Spares";
import "./Home.css";

const Home = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/bike")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return (
    <div>
      <div className="my-5 w-50 mx-auto">
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search Products..." className="me-2 rounded-pill" aria-label="Search" />
          <Button className="rounded-pill" variant="outline-warning">
            Search
          </Button>
        </Form>
      </div>

      <div className="my-5">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={banner} alt="banner" />
            <Carousel.Caption>
              <h3>Here's the Great Deal</h3>
              <p>Grab your hidden beast</p>
              <button style={{ backgroundColor: "orangeRed" }} className="btn rounded-pill text-white w-25">
                Deal Now
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Bike Collection */}
      <div className="container">
        <div className="my-5">
        <h2 className="text-center">Bike Collection</h2>
        <hr />
        </div>
        <div className="bikes-container my-5">
          {bikes.slice(0, 6).map((bike) => (
            <Bike key={bike.id} bike={bike}></Bike>
          ))}
        </div>
      </div>

      {/* Riding Kits */}
      <div>
      <RidingKits />
      </div>

      {/* Spares & Parts */}
      <div>
        <Spares/>
      </div>
    </div>
  );
};

export default Home;
