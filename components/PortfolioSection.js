import { Container, Row, Col } from "react-bootstrap";
import data from "../fakeData/PortfolioData";

const PortfolioSection = () => {
  return (
    <section style={{ backgroundColor: "#130f40" }} className="mb-4">
      <h2 className="text-center title my-5 text-white">
        {" "}
        Here are Some of Our Works{" "}
      </h2>
      <Container>
        <Row className="g-4">
          {data.slice(0, 3).map((data) => (
            <Col md={4} key={data.id}>
              <img src={data.img} alt="portfolio-img" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
