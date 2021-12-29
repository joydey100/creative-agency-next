import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const SinglePricing = ({ name, price, _id, item, level }) => {
  return (
    <Col lg={4} sm={12} className="priceContainer">
      <div className="pricingTable h-100">
        <div className="pricingTable-header">
          <h4 className="my-3 pricing-name"> {name} </h4>
          <div className="price-value">
            <h2>${price}.00</h2>
          </div>
        </div>
        <h3 className="heading mt-4">{level}</h3>
        <div className="pricing-content">
          <ul>
            {item.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Link href={`/pricing/${_id}`}>
          <div className="pricingTable-signup">
            <a href="#">Order Now</a>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default SinglePricing;
