import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import contact from "../public/contact.svg";

const Connect = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="text-center my-5 title">
        {" "}
        <span style={{ color: "#2DA66E" }}>Contact </span> Us
      </h2>
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <img src={contact.src} alt="contact-img" />
          </Col>
          <Col md={6}>
            <p className="text-secondary">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              adipisci deleniti incidunt facilis maxime reiciendis!
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Form style={{ flexGrow: 1 }}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="p-3"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    className="p-3"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Write your message"
                    style={{ height: "200px" }}
                    className="p-3"
                  />
                </Form.Group>
                <Button type="submit" className="main-btn w-100 py-3">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Connect;
