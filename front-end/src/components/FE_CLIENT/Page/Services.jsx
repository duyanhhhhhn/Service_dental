import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../assets/css/Services.css'
import servicesbanner from "../Layouts/img/service-banner.png";

const Services = () => {
  const ServiceData = [
    {
      id: 1,
      img_src:
        "https://d3t5ai5vcxyqte.cloudfront.net/media/jtklaazjieqhljbboiyao.svg",
      title: "Dental Treatment",
      description: "Save your tooth",
    },
    {
      id: 2,
      img_src:
        "https://d3t5ai5vcxyqte.cloudfront.net/media/xerhpggjxuxmfpsu.svg",
      title: "Teeth Whitening",
      description: "Want whiter teeth?",
    },
    {
      id: 3,
      img_src:
        "https://d3t5ai5vcxyqte.cloudfront.net/media/xckdqmsbqpdhzlhvwood.svg",
      title: "Implant Placement",
      description: "Make your implant last a lifetime.",
    },
    {
      id: 4,
      img_src: "https://d3t5ai5vcxyqte.cloudfront.net/media/ztyabpe.svg",
      title: "Dentures",
      description: "Find the right dentures for you.",
    },
    {
      id: 5,
      img_src:
        "https://d3t5ai5vcxyqte.cloudfront.net/media/pegjpxeakmijzlnklbubfsfun.svg",
      title: "Cavity Filling",
      description: "Repair damage with harmonious fillings.",
    },
    {
      id: 6,
      img_src: "https://d3t5ai5vcxyqte.cloudfront.net/media/znrdvnh.svg",
      title: "Orthodontic Treatment/Braces",
      description: "Never be afraid to smile.",
    },
  ];

  return (
    <>
      <section id="service" aria-label="service">
        <Container>
          <p className="section-subtitle text-center">Our Services</p>
          <h2 className="h2 section-title text-center">What We Offer</h2>
          <ul className="service-list list-unstyled">
            <Row>
              {ServiceData.map((service, index) => (
                <Col md={4} className="d-flex justify-content-center mb-4" key={index}>
                  <li>
                    <div className="service_info" data-aos="fade-right" data-aos-duration="1000">
                      <div className="card-icon">
                        <Image src={service.img_src} width="100" height="100" alt="service icon" className="w-100" loading="lazy" />
                      </div>
                      <div>
                        <h3 className="service__title">{service.title}</h3>
                        <p className="service_detail_info">{service.description}</p>
                      </div>
                    </div>
                  </li>
                </Col>
              ))}
              <Col md={12} className="d-flex justify-content-center">
                <li className="service-banner">
                  <figure>
                    <Image src={servicesbanner} width="409" height="467" alt="service banner" className="w-100" loading="lazy" />
                  </figure>
                </li>
              </Col>
            </Row>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default Services;
