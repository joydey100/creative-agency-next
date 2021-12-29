import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/reviewlist");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

const FeedBack = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviewlist")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section>
      <h2 className="text-center my-5 title">
        {" "}
        Client's <span className="violate">Feedback </span>{" "}
      </h2>
      <Container>
        <Row className="g-4">
          {data.map((data) => (
            <Col md={4} key={data._id}>
              <div className="feedback-content p-4 rounded shadow-lg">
                <div className="client-top d-flex align-items-center h-100">
                  <div className="client-img">
                    <img
                      src={data.img}
                      alt="person-img"
                      style={{
                        width: "70px",
                        display: "block",
                        height: "70px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="client-info ms-2 h-100">
                    <h5 style={{ fontWeight: "600" }}>{data.name}</h5>
                    <p>{data.job}</p>
                  </div>
                </div>
                <p className="mt-3 text-secondary"> {data.feedback} </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeedBack;
