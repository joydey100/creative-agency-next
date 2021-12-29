import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/portfolio");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    <>
      <Header />
      <section>
        <Container>
          <h2 className="my-5 text-center title">
            Our <span style={{ color: "#2DA66E" }}> Portfolio</span>
          </h2>

          <Row className="g-3">
            {data.map((data) => (
              <Col md={4} key={data._id}>
                <div className="portfolio-box shadow-lg h-100">
                  <img src={data.img} alt="images" />
                  <div className="content p-3">
                    <h4 className="mt-3"> {data.name} </h4>
                    <p className="text-secondary mt-1">{data.desc}</p>
                    <Link href={`/portfolio/${data.id}`}>
                      <Button className="main-btn"> Details Info </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default index;
