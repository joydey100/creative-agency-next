import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import loginImage from "../../public/login.gif";
import { useDispatch, useSelector } from "react-redux";
import { authGoogleLogin, authLoginEmail } from "../../redux/slices/authSlice";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const index = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // State for user
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // handle Change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const loginObj = { ...loginData };
    loginObj[name] = value;
    setLoginData(loginObj);
  };

  // Submit Login Form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLoginEmail(loginData));
  };

  return (
    <>
      <Header />
      <section style={{ padding: "180px 0" }}>
        <Container>
          <Row>
            <Col md={6}>
              <div className="login-content">
                <h2 className="mb-4" style={{ fontWeight: "600" }}>
                  {" "}
                  Login{" "}
                </h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      className="p-3"
                      name="email"
                      onChange={handleChange}
                      value={loginData?.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      required
                      placeholder="Password"
                      className="p-3"
                      name="password"
                      onChange={handleChange}
                      value={loginData?.password}
                    />
                  </Form.Group>
                  <button
                    type="submit"
                    className="d-block w-100 py-3 main-btn border-0"
                  >
                    Login
                  </button>
                </Form>
                <br />
                <Link href="/register">
                  <a className="text-center d-block">
                    Don't Have an account? Please Register
                  </a>
                </Link>
                <br />
                <p className="text-center"> or </p>
                <button
                  className="d-block w-100 mx-auto py-3"
                  onClick={() => dispatch(authGoogleLogin())}
                >
                  {" "}
                  <img
                    src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                    className="google-icon me-2"
                    style={{ width: "40px" }}
                    alt="google-icon"
                  />{" "}
                  Login With Google{" "}
                </button>
              </div>
            </Col>
            <Col md={6}>
              <img src={loginImage.src} alt="login-image" />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default index;
