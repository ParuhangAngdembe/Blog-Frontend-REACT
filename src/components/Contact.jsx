import React, { useState } from "react";
import { Col, Form, Row, Button, FloatingLabel } from "react-bootstrap";

const Contact = () => {
  // useState as JS Object
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    contactnumber: "",
    address: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    // Previous Value
    setInputs((preVal) => {
      return {
        // spread operator, Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${inputs.fullname}`);
    // `` template literals
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  name="fullname"
                  value={inputs.fullname}
                  onChange={InputEvent}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={inputs.email}
                  onChange={InputEvent}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridContact">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Contact Number"
                  name="contactnumber"
                  value={inputs.contactnumber}
                  onChange={InputEvent}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  name="address"
                  value={inputs.address}
                  onChange={InputEvent}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Comments"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    name="message"
                    value={inputs.message}
                    onChange={InputEvent}
                  />
                </FloatingLabel>
              </>

              <Button className="mb-2" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
