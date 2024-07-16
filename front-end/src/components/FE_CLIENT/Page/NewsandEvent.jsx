import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const News = () => {
  const NewsData = [
    {
      img: "https://nhakhoakim.com/wp-content/uploads/2024/07/NKK_THUMB-nieng-rang-2-tr-01-scaled-768x432.jpg",
      title: "Niềng răng chỉ với 2 triệu/tháng tại Nha Khoa Kim",
      date:'15/07/2024'
      
    },
    {
      img: "https://nhakhoakim.com/wp-content/uploads/2024/07/NKK_BannerKT-NT-1200x628-01.jpg",
      title: "Khai trương Nha Khoa Kim 350 Nguyễn Trãi, Quận 5 – Tặng vàng tri ân",
      date:'15/07/2024'
    },
    {
      img: "https://nhakhoakim.com/wp-content/uploads/2024/06/NKK_thumbweb_khai-truong-pk-NTMK-01-1-555x312.jpg",
      title: "Nha Khoa Kim chuẩn bị khai trương phòng khám mới tại Quận 3, TP.HCM",
      date:'15/07/2024'
    },
  ];

  return (
    <>
      <Container>
        <h2 className="h2 section-title text-center">Bài viết gần đây</h2>
        <Row xs={1} md={3} className="g-4">
          {NewsData.map((news, index) => (
            <Col key={index} >
              <Card >
                <Card.Img src={news.img} alt="Cras accumsan nulla nec lacus ultricies placerat." />
                <Card.Body>
                <Card.Title as="h3">
                    <p>{news.title}</p>
                  </Card.Title>
                  <Card.Text>{news.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small >{news.date}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default News;
