import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../assets/css/Service.css';
import icon_1 from "../img/icon-1.png";
import icon_2 from "../img/icon-2.webp";
import icon_3 from "../img/icon-3.png";
import icon_4 from "../img/icon-4.png";
import icon_5 from "../img/icon-5.png";
import icon_6 from "../img/icon-6.png";
import icon_7 from "../img/icon-7.png";
import icon_8 from "../img/icon-8.png";
import icon_9 from "../img/icon-9.webp";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Dental Crowns",
    image: icon_1,
  },
  {
    id: 2,
    title: "Implant Dentures",
    image: icon_2,
  },
  {
    id: 3,
    title: "Cosmetic Braces",
    image: icon_3,
  },
  {
    id: 4,
    title: "Veneer",
    image: icon_4,
  },
  {
    id: 5,
    title: "Teeth Whitening",
    image: icon_5,
  },
  {
    id: 6,
    title: "Wisdom Tooth Extraction",
    image: icon_6,
  },
  {
    id: 7,
    title: "Periodontal Disease",
    image: icon_7,
  },
  {
    id: 8,
    title: "Root Canal Treatment",
    image: icon_8,
  },
  {
    id: 9,
    title: "Tooth Filling",
    image: icon_9,
  },
  // Add more services as needed
];

const Service = () => {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Services</h1>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.id} className="mb-4">
            <Link to={service.link} className="service-link">
              <Card style={{ border: '1px solid #ccc' }}>
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Service;
