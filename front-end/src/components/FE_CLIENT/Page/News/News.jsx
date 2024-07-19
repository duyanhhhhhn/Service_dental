import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./News.css";
import axios from "axios";

const News = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
        axios.get('news').then(resp => setNews(resp.data));
  }, []);

  return (
    <Container className="py-4">
      <h1 className="mb-4">News</h1>
      <Row>
        {news?.map((item, index) => (
          <Col md={3} key={item.id} className="mb-4">
            <Card style={{border:'1px solid #ccc'}} className="h-100">
              <Image src={item.thumbnail} alt="News" fluid className="card-img-top"  />
              <Card.Body>
                <Card.Title>
                  <Link to={item.link} className="news-link">
                    {item.title}
                  </Link>
                </Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
