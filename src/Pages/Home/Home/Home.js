import { Button, Carousel, Form, FormControl } from "react-bootstrap";
import useBikes from "../../../hooks/useBikes";
import banner from "../../../images/images/Banner-5.jpg";
import Bike from "../Bike/Bike";
import RidingKits from "../RidingKits/RidingKits";
import Spares from "../Spares/Spares";
import "./Home.css";

const Home = () => {
  const [bikes] = useBikes();
  return (
    <div>
      <div className="search-bar my-5 mx-auto">
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search Products..." className="me-2 rounded-pill" aria-label="Search" />
          <Button className="rounded-pill" variant="outline-warning">
            Search
          </Button>
        </Form>
      </div>

      {/* <div className="my-5">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={banner} alt="banner" />
            <Carousel.Caption>
              <h3>Here's the Great Deal</h3>
              <>Grab the beast</>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}

      {/* Banner Image */}
      <div>
        <img className="img-fluid" src={banner} alt="" />
      </div>

      {/* Bike Collection */}
      <div id="home-bike" className="container">
        <div className="mt-5">
          <h2 className="text-center">Bike Collection</h2>
          <hr className="w-75 mx-auto" />
        </div>
        <div className="bikes-container">
          {bikes.slice(0, 6).map((bike) => (
            <Bike key={bike._id} bike={bike}></Bike>
          ))}
        </div>
      </div>

      {/* Riding Kits */}
      <div>
        <RidingKits />
      </div>

      {/* Spares & Parts */}
      <div>
        <Spares />
      </div>
    </div>
  );
};

export default Home;
