import React from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../../images/images/Banner-1.jpg";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="banner" />
          <Carousel.Caption>
            <h3>Here's the Great Deal</h3>
            <p>Grab your hidden beast</p>
            <button style={{backgroundColor: 'orangeRed'}} className="btn rounded-pill text-white w-25">Book Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
