import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const News = () => {
  const NewsData = [
    {
      img: "https://nhakhoakim.com/wp-content/uploads/2024/07/NKK_THUMB-nieng-rang-2-tr-01-scaled-768x432.jpg",
      title: "Braces for only 2 million VND/month at Kim Dental",
      date: '07/15/2024'
    },
    {
      img: "https://nhakhoakim.com/wp-content/uploads/2024/07/NKK_BannerKT-NT-1200x628-01.jpg",
      title: "Grand Opening of Kim Dental at 350 Nguyen Trai, District 5 – Gold Gifts as Gratitude",
      date: '07/15/2024'
    },
    {
      img: "https://nhakhoakim.com/wp-content/uploads/2024/06/NKK_thumbweb_khai-truong-pk-NTMK-01-1-555x312.jpg",
      title: "Kim Dental is preparing to open a new clinic in District 3, Ho Chi Minh City",
      date: '07/15/2024'
    },
  ];

  return (
    <>
      <Container>
        <h2 className="h2 section-title text-center">Recent Posts</h2>
        <Row xs={1} md={3} className="g-4">
          {NewsData.map((news, index) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Img src={news.img} alt="News Image" />
                <Card.Body>
                  <Card.Title as="h3">
                    <p>{news.title}</p>
                  </Card.Title>
                  <Card.Text>{news.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>{news.date}</small>
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
