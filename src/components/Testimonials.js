import React from "react";
import reviews from "../data/testimonials.json";
import { Carousel } from "react-bootstrap";

function Testimonials() {
  return (
    <div className="testimonial-container">
      <h3>Testimonials</h3>
      <Carousel variant="dark">
        {reviews.map((d) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="greybackground.avif"
                alt="First slide"
                height="500vh"
              />
              <Carousel.Caption>
                <h5>{d.parentName}</h5>
                <h6>{d.relationship}</h6>
                <p>{d.review}</p>
              </Carousel.Caption>
            </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
