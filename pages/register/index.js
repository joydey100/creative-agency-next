import Link from "next/link";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import registerImage from "../../public/register.gif";
import { authRegister } from "../../redux/slices/authSlice";
import { authGoogleLogin } from "../../redux/slices/authSlice";

const index = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // State for user
  const [loginData, setLoginData] = useState({
    name: "",
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

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const registerUser = dispatch(authRegister(loginData));
    console.log(registerUser.promiseState);
    if (registerUser?.requestId) {
      setLoginData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  console.log(auth);

  return (
    <>
      <Header />
      <section style={{ padding: "180px 0" }}>
        <Container>
          <Row>
            <Col md={6}>
              <div className="register-content">
                <h2 className="mb-4" style={{ fontWeight: "600" }}>
                  {" "}
                  Register{" "}
                </h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    {/* Name */}
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        required
                        className="p-3"
                        name="name"
                        onChange={handleChange}
                        value={loginData?.name}
                      />
                    </Form.Group>

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
                  <Button
                    type="submit"
                    className="d-block w-100 py-3 main-btn border-0"
                  >
                    Register
                  </Button>
                </Form>
                <br />
                <Link href="/login">
                  <a className="text-center d-block">
                    Already Have an account? Please Login
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
                  Sign in With Google{" "}
                </button>
              </div>
            </Col>
            <Col md={6}>
              <img src={registerImage.src} alt="login-image" />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default index;
