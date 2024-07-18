import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./News.css";

const newsData = [
  {
    id: 1,
    title: "Tin tức 1",
    description: "Mô tả ngắn về tin tức 1.",
    image: "path_to_image_1.jpg",
    link: "/tin-tuc-1"
  },
  {
    id: 2,
    title: "Tin tức 2",
    description: "Mô tả ngắn về tin tức 2.",
    image: "path_to_image_2.jpg",
    link: "/tin-tuc-2"
  },
  {
    id: 3,
    title: "Tin tức 3",
    description: "Mô tả ngắn về tin tức 3.",
    image: "path_to_image_3.jpg",
    link: "/tin-tuc-3"
  },
  // Thêm các tin tức khác nếu cần
];

const News = () => {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Tin Tức</h1>
      <Row>
        {newsData.map((news) => (
          <Col md={4} key={news.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={news.image} />
              <Card.Body>
                <Card.Title>
                  <Link to={news.link} className="news-link">
                    {news.title}
                  </Link>
                </Card.Title>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
