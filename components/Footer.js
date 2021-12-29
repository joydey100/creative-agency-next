import React from "react";
import { Container } from "react-bootstrap";
import data from "../fakeData/FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import logo from "../public/logos/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "100px",
        backgroundColor: "#ddd",
      }}
      className="pb-3"
    >
      <Container>
        <div className="footer-logo mb-5">
          <img src={logo.src} alt="footer-logo" style={{ width: "260px" }} />
        </div>
        <div className="social-icons mb-5">
          {data.map((data) => (
            <Link
              href={data.link}
              key={data.id}
              passHref
              style={{ cursor: "pointer" }}
            >
              <a style={{ color: "#222" }}>
                <FontAwesomeIcon
                  icon={data.img}
                  style={{
                    fontSize: "40px",
                    width: "40px",
                    marginRight: "18px",
                  }}
                />{" "}
              </a>
            </Link>
          ))}
        </div>
        <div className="copyright pb-5">
          &copy; Copyright reserved by Creative Agency
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
