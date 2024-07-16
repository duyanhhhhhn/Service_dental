import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import '../assets/css/Service.css'
import icon_1 from "../img/icon-1.png"
import icon_2 from "../img/icon-2.webp"
import icon_3 from "../img/icon-3.png"
import icon_4 from "../img/icon-4.png"
import icon_5 from "../img/icon-5.png"
import icon_6 from "../img/icon-6.png"
import icon_7 from "../img/icon-7.png"
import icon_8 from "../img/icon-8.png"
import icon_9 from "../img/icon-9.webp"
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Bọc răng sứ",
    image: icon_1,
    link : "/"
  },
  {
    id: 2,
    title: "Cấy ghép implant",
    image: icon_2,
    link : "/"
  },
  {
    id: 3,
    title: "Niềng răng thẩm mỹ",
    image: icon_3,
    link : "/"
  },
  {
    id: 4,
    title: "Mặt dán sứ Veneer",
    image: icon_4,
    link : "/"
  },
  {
    id: 5,
    title: "Tẩy trắng răng",
    image: icon_5,
    link : "/"
  },
  {
    id: 6,
    title: "Nhổ răng khôn",
    image: icon_6,
    link : "/"
  },
  {
    id: 7,
    title: "Bệnh lý nha chu",
    image: icon_7,
    link : "/"
  },
  {
    id: 8,
    title: "Điều trị tủy",
    image: icon_8,
    link : "/"
  },
  {
    id: 9,
    title: "Hàn trám răng",
    image: icon_9,
    link : "/"
  },
  // Add more services as needed
];

const Service = () => {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Services </h1>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.id} className="mb-4">
            <Link to={service.link} className="service-link">
            <Card>
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
