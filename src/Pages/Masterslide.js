import React from 'react';
import {   Carousel } from 'react-bootstrap';

const Masterslide = () => {
  return (
    <Carousel>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_1280.jpg"
        alt="First slide"
        style={{ height: "500px" }}

      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={700}>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg"
        alt="Second slide"
        style={{ height: "500px" }}

      />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2019/07/24/23/09/car-4361321_1280.jpg"
        alt="Third slide"
        style={{ height: "500px" }}

      />
      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default Masterslide;
