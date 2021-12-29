import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SingleItem = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`http://localhost:5000/portfolio/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, []);

  return (
    <>
      {" "}
      <Header />
      <section>
        <Container className="mt-5">
          <h2> {data?.name} </h2>
          <p> {data?.desc}</p>
          <img src={data?.img} alt="image" />
          <h4> Features</h4>
          {data?.features?.map((list) => (
            <li key={list}> {list} </li>
          ))}
          <h4> Technologies </h4>
          {data?.technologies?.map((list) => (
            <li key={list}> {list} </li>
          ))}
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default SingleItem;
