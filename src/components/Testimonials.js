import React, {useState} from "react";
import reviews from "../data/testimonials.json";
import { Carousel, Button, Modal } from "react-bootstrap";

function TestimonialModal({ review, show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <TestimonialBody review={review} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function TestimonialBody({ review, truncate, onModal }) {
  return (
    <>
      <h5>{review.parentName}</h5>
      <h6>{review.relationship}</h6>
      <p className={truncate ? "testimonial-review" : ""}>{review.review}</p>
      {truncate && (
        <div>
          <Button variant="primary" size="sm" onClick={onModal}>
            Read More...
          </Button>
        </div>
      )}
    </>
  );
}

function Testimonial({ review }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <TestimonialBody review={review} truncate={true} onModal={handleShow} />
      <TestimonialModal review={review} onHide={handleClose} show={show} />
    </>
  );
}

function Testimonials() {
  return (
    <div className="testimonial-container">
      <h3>Testimonials</h3>
      <Carousel variant="dark">
        {reviews.map((d) => (
          <Carousel.Item>
            <img
              className="d-block w-100 testimonial-image"
              src="greybackground.avif"
              alt="First slide"
            />
            <Carousel.Caption>
              <Testimonial review={d} />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
