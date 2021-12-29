import { Col, Container, Row } from "react-bootstrap";
import data from "../fakeData/SponsorData";

const Sponsor = () => {
  return (
    <Container>
      <Row>
        <div className="box d-md-flex flex-wrap justify-content-between">
          {data.map((data) => (
            <img
              src={data.img}
              alt="image"
              className="sponsor-img m-1 mb-5 mb-md-0 d-block"
              key={data.id}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default Sponsor;
