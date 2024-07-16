import React from "react";
import { Container, Row, Col, ListGroup, Image,  } from "react-bootstrap";
import Banner from "./Banner";
import dentalImg from "../Layouts/img/dentalImg.jpg"
import teeth1 from "../Layouts/img/teeth1.jpg"
import Services from "./Services";
import News from "./NewsandEvent";
import Customercomman from "./Customercomman";
const Home = () => {
  return (
    <>
       <Banner />
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
             Nha Khoa - Hệ thống nha khoa uy tín Việt Nam với hơn 30 phòng khám trải dài khắp 6 tỉnh thành trên toàn quốc.
            </p>
            <Row className="d-flex justify-content-between">
              <Col lg={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                    <span className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                      Đội ngũ nhân viên được đào tạo
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                    <span className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                    Chúng tôi cung cấp điều trị chất lượng
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                    <span className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                     Giá tốt nhất
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={6} className="d-flex justify-content-center align-items-center">
                <Image src={teeth1} fluid />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Services />
      <News />
      <Customercomman/>
      <div style={{paddingBottom:'50px'}}></div>
    </>
  
  );
};

export default Home;
