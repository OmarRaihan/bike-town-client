import React from "react";
import { Button, Carousel, Form, FormControl } from "react-bootstrap";
import banner from "../../../images/images/Banner-1.jpg";
import Bikes from "../Bikes/Bikes";

const Home = () => {
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
      <div>
        <Bikes />
      </div>
    </div>
  );
};

export default Home;
