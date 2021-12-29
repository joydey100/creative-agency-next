import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SinglePricing from "../../components/SinglePricing";
import { Container, Row } from "react-bootstrap";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/pricing");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Index = ({ data }) => {
  console.log(data);
  return (
    <>
      <Header />
      <section>
        <h2 className="text-center my-5 title h1" style={{ fontWeight: 600 }}>
          {" "}
          Our <span className="violate">Pricing </span>{" "}
        </h2>
        <Container className="mt-5">
          <Row>
            {data.map((data) => (
              <SinglePricing key={data._id} {...data} />
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Index;
