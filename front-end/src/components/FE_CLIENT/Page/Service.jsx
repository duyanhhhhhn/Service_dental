import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import axios from "axios";
import '../assets/css/Service.css';

const Service = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const toast = useRef(null);

  useEffect(() => {
    (async () => await loadServices())();
  }, []);

  async function loadServices() {
    try {
      const result = await axios.get(`/services`);
      setServices(result.data);
    } catch (err) {
      showError(err.message);
    }
  }

  const showError = (e) => {
    if (toast.current) {
      toast.current.show({ severity: 'error', summary: 'ERROR', detail: e ? e : "Too many requests", life: 1000 });
    }
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4">Services</h1>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.id} className="mb-4">
            <Card style={{ border: '1px solid #ccc' }} onClick={() => handleCardClick(service)}>
              <Card.Img variant="top" src={service.thumbnail} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center fw-bold">{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4} className="d-flex justify-content-center">
              <img src={selectedService?.thumbnail} alt={selectedService?.title} className="img-fluid" />
            </Col>
            <Col md={8}>
              <p>{selectedService?.description}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-success" variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Service;
