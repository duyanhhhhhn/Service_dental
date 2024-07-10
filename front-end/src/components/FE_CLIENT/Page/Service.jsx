import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Banner from "./Banner";
import icon_boc_rang_su_1 from "../Layouts/img/icon-boc-rang-su-1.png"
const services = [
  {
    title: "Dịch vụ 1",
    description: "Mô tả dịch vụ 1",
    imgSrc: {icon_boc_rang_su_1},
  },
  {
    title: "Dịch vụ 2",
    description: "Mô tả dịch vụ 2",
    imgSrc: {icon_boc_rang_su_1}
  },
  // Thêm các dịch vụ khác vào đây
];

const Service = () => {
  return (
    <>  
      <Container className="py-4">
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="service-card">
                <Image src={service.imgSrc} fluid />
                <h3 className="mt-3">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Service;
