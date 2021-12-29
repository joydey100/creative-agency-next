import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import DashComp from "../../components/DashComp";
import { WithProtected } from "../../components/WithProtected";

const AddReview = () => {
  const [reviewData, setReviewData] = useState({
    feedback: "",
    job: "",
  });

  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      name: auth.user.displayName,
      img: auth.user.photoURL,
      ...reviewData,
    };

    // post Review Data
    fetch("http://localhost:5000/reviewlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setReviewData({ feedback: "", job: "" });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const review = { ...reviewData };
    review[name] = value;
    setReviewData(review);
  };

  return (
    <DashComp>
      {" "}
      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            className="p-3"
            readOnly
            value={auth?.user?.displayName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Your Job (Designation) </Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Designation"
            required
            className="p-3"
            name="job"
            onChange={handleChange}
            value={reviewData?.job}
          />
        </Form.Group>

        {/* Requirements */}
        <Form.Group className="mb-4">
          <Form.Label> Your Feedback </Form.Label>
          <Form.Control
            as="textarea"
            required
            placeholder="Your Feedback"
            style={{ height: "200px" }}
            className="p-3"
            name="feedback"
            value={reviewData?.feedback}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          type="submit"
          className="d-block w-100 py-3 text-white border-0"
          style={{ background: "#664BDF" }}
        >
          Submit
        </Button>
      </Form>
    </DashComp>
  );
};

export default WithProtected(AddReview);
