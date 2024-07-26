import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        axios.get(`/news/${id}`)
            .then(response => {
                setNews(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the news!", error);
            });
    }, [id]);

    if (!news) {
        return (
            <Container className="text-center py-5">
                <h3>404 ERROR: News Not Found</h3>
            </Container>
        );
    }

    return (
        <Container className="news-details py-5">
            <Row>
                <Col>
                    <h1 className="news-title">{news.title}</h1>
                    <p className="news-date">Published on {new Date(news.created_at).toLocaleDateString()}</p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={8}>
                    <img src={news.thumbnail} alt={news.title} className="img-fluid news-image" />
                    <div className="news-content mt-4">
                        <p>{news.content}</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="author-box p-4">
                        <h4>About the Author</h4>
                        <p>{news.author}</p>
                    </div>
                    <div className="related-articles mt-4 p-4">
                        <h4>Related Articles</h4>
                        <ul>
                            <li><a href="/news/1">Dental Health Tips for Kids</a></li>
                            <li><a href="/news/2">How to Prevent Gum Disease</a></li>
                            <li><a href="/news/3"> Maintain Good Oral Hygiene Brush Regularly</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Details;
