import { Col, Container, Row } from "react-bootstrap";
import data from "../fakeData/ServiceBoxData";

const ServiceSection = () => {
  return (
    <section>
      <h2 className="my-5 text-center title">
        {" "}
        Provide Awesome <span style={{ color: "#2DA66E" }}> Services</span>{" "}
      </h2>
      <Container>
        <Row>
          {data.map((data) => (
            <Col md={4} key={data.id}>
              <div className="box p-4 text-center shadow-lg h-100">
                <img
                  src={data.img}
                  alt=""
                  className="w-25 d-block mb-4 mx-auto"
                />
                <h4> {data.name} </h4>
                <p className="text-secondary"> {data.desc} </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
