import { Carousel, Col, Container, Row } from "react-bootstrap";
import data from "../fakeData/BannerData";
import styles from "../styles/Home.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <Container>
        <Carousel interval="2200">
          {data.map((data) => (
            <Carousel.Item key={data.id}>
              <Row>
                <Col lg={6} className="d-flex align-items-center">
                  <div className="banner-content">
                    <h2 className={`${styles.banner_title}`}>{data.name}</h2>
                    <p> {data.desc} </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <img
                    src={data.img}
                    alt="bannerImg"
                    className={styles.banner_img}
                  />
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Banner;
