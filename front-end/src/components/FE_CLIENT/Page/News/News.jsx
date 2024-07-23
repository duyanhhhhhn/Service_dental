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
            <Link to={`${item.id}`} className="newsLink">
              <Card style={{border:'1px solid #ccc'}} className="h-100">
                <Image src={item.thumbnail} alt="product" fluid className="card-img-top"  />
                <Card.Body>
                  <Card.Title>
                    <p >
                      {item.title}
                    </p>
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                </Card>
              </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
