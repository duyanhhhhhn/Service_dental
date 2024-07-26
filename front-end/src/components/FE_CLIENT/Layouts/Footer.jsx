import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../assets/css/Footer.css'
import { FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#2E6368" }} className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col lg={3}>
            <p> 31 Nguyen Dinh Chieu, Da Kao Ward, District 1</p>
            <p>101 Suong Nguyet Anh, Ben Thanh Ward, District 1</p>
            <p>345 Le Van Sy, Ward 13, District 3</p>
            <p>348-350 Nguyen Trai, Ward 8, District 5</p>
            <p>396 3 Thang 2 Street, Ward 12, District 10</p>
          </Col>
          <Col lg={3}>
            <p>0% Installment - Flexible Payment</p>
            <p>Strategic Partnerships</p>
            <p>Insurance Links</p>
            <p>Clinic System</p>
            <p>Careers</p>
          </Col>
          <Col lg={3}>
            <p>Dental Lab</p>
            <p>Quality Standards</p>
            <p>Cosmetic Braces</p>
            <p>Implant Dentures</p>
            <p>Cosmetic Crowns</p>
          </Col>
          <Col lg={3}>
            <h1 className="text-2xl">Connect with Us</h1>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="border-primary border px-4 py-3 rounded-l-md focus:outline-none"
              />
              <Button
                variant="primary"
                className="border-primary border border-l-0 rounded-r-md px-4 py-3 bg-primary text-white hover:bg-transparent hover:text-primary transition"
              >
                <FaSearch />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
