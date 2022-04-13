import React from "react";
import { Carousel } from "react-bootstrap";
import slider_1 from '../../../Images/SliderImg/slider_1.png'
import slider_2 from '../../../Images/SliderImg/slider_2.png'
import slider_3 from '../../../Images/SliderImg/slider_3.png'

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider_1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Wired Over-Ear Gaming Headphones with USB</h3>
            <h4>Only <span className="text-danger fw-bold display-4">$190</span></h4>
            <button className=" btn btn-light my-2">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider_2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Canon EF 85mm f/1.8 USM Medium Telephoto Lens</h3>
            <h4>Only <span className="text-danger fw-bold display-4 ">$99</span></h4>
            <button className=" btn btn-light my-2">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider_3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Microsoft Surface Laptop 3-15” Touch-Screen</h3>
            <h4>Only <span className="text-danger fw-bold display-4">$799</span></h4>
            <button className=" btn btn-light my-2">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
