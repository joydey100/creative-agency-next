import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import DashComp from "../../components/DashComp";
import { WithProtected } from "../../components/WithProtected";

const Index = () => {
  const auth = useSelector((state) => state.auth);
  const { email } = auth?.user;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orderlist/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);

  console.log(orders);
  return (
    <DashComp>
      <main>
        <Container>
          <Row>
            {orders?.map((order) => (
              <Col md={6} key={order._id}>
                <div className="box shadow-lg p-3">
                  <div className="d-flex justify-content-between">
                    <div className="img-box">
                      <img
                        src={order.img}
                        alt="order-img"
                        style={{ width: "100px" }}
                      />
                    </div>
                    <div className="status">
                      <span
                        style={{
                          display: "inline-block",
                          padding: "8px",
                          background: "#edc6c7",
                          color: "#C4010B",
                        }}
                      >
                        {" "}
                        {order.status}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="order-info">
                    <h4 className="my-3"> {order.service} </h4>
                    <p> {order.desc} </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </DashComp>
  );
};

export default WithProtected(Index);
