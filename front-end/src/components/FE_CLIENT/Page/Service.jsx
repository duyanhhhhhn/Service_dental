import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import '../Layouts/Service.css'
const services = [
  {
    id: 1,
    title: "Dịch vụ 1",
    description: "Mô tả dịch vụ 1.",
    image: "path_to_image_1.jpg",
  },
  {
    id: 2,
    title: "Dịch vụ 2",
    description: "Mô tả dịch vụ 2.",
    image: "path_to_image_2.jpg",
  },
  {
    id: 3,
    title: "Dịch vụ 3",
    description: "Mô tả dịch vụ 3.",
    image: "path_to_image_3.jpg",
  },
  // Add more services as needed
];

const Service = () => {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Dịch vụ</h1>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary">Xem thêm</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Service;
