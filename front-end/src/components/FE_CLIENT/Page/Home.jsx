import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Banner from "./Banner";
import dentalImg from "../Layouts/img/dentalImg.jpg"
import teeth from "../Layouts/img/teeth.jpg"
const Home = () => {
  return (
    <>
      <div>
       <Banner />  
      </div>
     <Container className="py-16">
        <Row className="d-flex flex-lg-row flex-column-reverse">
          <Col lg={6} className="d-flex justify-content-center align-items-center">
            <Image src={dentalImg} fluid />
          </Col>
          <Col lg={6} className="ml-lg-8">
            <h1 className="text-3xl font-Poppins font-semibold">
            Về Nha Khoa 
            </h1>
            <p className="py-8">
             Nha Khoa Kim - Hệ thống nha khoa uy tín Việt Nam với hơn 30 phòng khám trải dài khắp 6 tỉnh thành trên toàn quốc.
            </p>
            <Row className="d-flex justify-content-between">
              <Col lg={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                    <span className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                      Trained Staff
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                    <span className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                      We provide quality Treatment
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                    <span className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                      Best Price
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={6} className="d-flex justify-content-center align-items-center">
                <Image src={teeth} fluid />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Home;
