import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import design from "../../public/design.gif";
import graphic from "../../public/graphic.gif";
import development from "../../public/development.gif";
import { useSelector } from "react-redux";
import { WithProtected } from "../../components/WithProtected";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/pricing");
  const data = await res.json();

  const paths = data.map((data) => {
    return {
      params: { id: data._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:5000/pricing/" + id);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const OrderPricing = ({ data }) => {
  const auth = useSelector((state) => state.auth);
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");

  console.log(data);

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // get all data
    const orderUser = {
      name: auth.user.displayName,
      email: auth.user.email,
      service: data.name,
      price: data.price,
      img: data.img,
      status: "Pending",
      desc: data.desc,
      phone,
      req: requirement,
    };

    // posting Data
    fetch("http://localhost:5000/orderlist", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.insertedId) {
          setPhone("");
          setRequirement("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Header />
      <section>
        <h2 className="text-center my-5 title">
          {" "}
          Purchase Your{" "}
          <span
            style={{
              color:
                data?.id === 1
                  ? "#664bdf"
                  : data?.id === 2
                  ? "#27ab70"
                  : "#ff595c",
            }}
          >
            Plan{" "}
          </span>{" "}
        </h2>
        <h4 className="text-center my-2"> {data?.name} </h4>
        <h4
          className="text-center mb-5 mt-3"
          style={{
            color:
              data?.id === 1
                ? "#664bdf"
                : data?.id === 2
                ? "#27ab70"
                : "#ff595c",
            fontWeight: "600",
          }}
        >
          {" "}
          ${data?.price}.00{" "}
        </h4>
        <Container>
          <Row>
            <Col md={6}>
              {data?.id === 1 && <img src={design.src} alt="design" />}
              {data?.id === 2 && <img src={graphic.src} alt="graphic" />}
              {data?.id === 3 && (
                <img src={development.src} alt="web development" />
              )}
              <h4
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontSize: "30px",
                }}
                className="text-secondary"
              >
                {" "}
                {data?.name}{" "}
              </h4>
            </Col>
            <Col md={6}>
              <Form onSubmit={handleSubmit}>
                {/* Name */}
                <Form.Group className="mb-4">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="p-3"
                    value={auth?.user?.displayName}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    className="p-3"
                    name="email"
                    value={auth?.user?.email}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Service</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    className="p-3"
                    value={data?.name}
                    readOnly
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    required
                    className="p-3"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Your Requirements</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    style={{ height: "200px" }}
                    className="p-3"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="d-block w-100 py-3 border-0"
                  style={{
                    background:
                      data?.id === 1
                        ? "#664bdf"
                        : data?.id === 2
                        ? "#27ab70"
                        : "#ff595c",
                  }}
                >
                  Purchase Now
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default WithProtected(OrderPricing);
