import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brand1 from "../../../assets/Brands/brand1.jpg";
import brand2 from "../../../assets/Brands/brand2.jfif";
const CarouselBrand = () => {
  return (
    <div className="bg-primary">
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "150px" }}
            className="d-block w-100"
            src={brand1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "150px" }}
            className="d-block w-100"
            src={brand2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBrand;
