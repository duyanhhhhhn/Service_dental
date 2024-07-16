import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import '../assets/css/Services.css'

const Customercomman = () => {
  const ServiceData = [
    {
      img_src:
        "https://nhakhoakim.com/wp-content/uploads/2024/06/YoutubeShort-FN-new_bang-nhi-01-update.jpg",
    },
    {
      img_src:
        "https://nhakhoakim.com/wp-content/uploads/2024/06/YoutubeShort-FN-Thu-Ha-01.jpg",
    },
    {
      img_src:'https://nhakhoakim.com/wp-content/uploads/2024/05/YoutubeShort-FN-kim-an-02.jpg'
    },
    
  ];

  return (
    <>
        <Container>
          <h2 className="h1 section-title text-center" style={{paddingTop:'30px'}}>Cảm nhận của khách hàng</h2>
          <ul className="service-list list-unstyled">
            <Row>
              {ServiceData.map((service, index) => (
                <Col md={4} className="d-flex justify-content-center mb-4" key={index}>
                    <Card className="service_info" >
                        <Image src={service.img_src}  className="w-100" loading="lazy" />
                    </Card>
                </Col>
              ))}
            </Row>
          </ul>
        </Container>
    </>
  );
};

export default Customercomman;
