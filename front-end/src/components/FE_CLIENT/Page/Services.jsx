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
      title: "Điều trị nha",
      description: "Hãy cứu lấy chiếc răng",
    },
    {
      id: 2,
      img_src:
        "https://d3t5ai5vcxyqte.cloudfront.net/media/xerhpggjxuxmfpsu.svg",
      title: "Tẩy trắng răng",
      description: "Bạn muốn có hàm răng trắng hơn?",
    },
    {
      id: 3,
      img_src:
        "https://d3t5ai5vcxyqte.cloudfront.net/media/xckdqmsbqpdhzlhvwood.svg",
      title: "Cấy ghép Implant",
      description: "Làm cho ghép implant của bạn kéo dài cả đời.",
    },
    {
      id: 4,
      img_src: "https://d3t5ai5vcxyqte.cloudfront.net/media/ztyabpe.svg",
      title: "Răng giả",
      description: "Tìm hiểu loại răng giả phù hợp với bạn.",
    },
    {
      id: 5,
      img_src:
        "https://d3t5ai5vcxyqte.cloudfront.net/media/pegjpxeakmijzlnklbubfsfun.svg",
      title: "Lấp đầy lỗ răng",
      description: "Sửa chữa sự hư hỏng với vật liệu lấp đầy hài hòa.",
    },
    {
      id: 6,
      img_src: "https://d3t5ai5vcxyqte.cloudfront.net/media/znrdvnh.svg",
      title: "Điều trị chỉnh nha/niềng răng",
      description: "Đừng bao giờ ngại cười.",
    },
  ];

  return (
    <>
      <section id="service" aria-label="service">
        <Container>
          <p className="section-subtitle text-center">Dịch vụ của chúng tôi</p>
          <h2 className="h2 section-title text-center">Những gì chúng tôi cung cấp</h2>
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
