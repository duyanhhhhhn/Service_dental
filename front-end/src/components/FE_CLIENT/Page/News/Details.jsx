import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Details = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        axios.get(`/news/${id}`)
            .then(response => {
                setNews(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the news detail!', error);
            });
    }, [id]);

    if (!news) {
        return <Container>
            <h3 className='text-center py-5'>404 ERROR</h3>
        </Container>;
    }

    return (
       <Container className="py-4 d-flex flex-column align-items-center" >
            
            <h1>{news.title}</h1>
            <hr width="100%" size="2" color="black" />
            <img 
                src={news.thumbnail} 
                alt="product" 
                className="card-img-top" 
                style={{ width: "100%", maxHeight: "700px" }} 
            />
            <p className='text-center '>Picture for {news.title}</p>
            <hr width="100%" size="2" color="black" />
            <p style={{ fontSize: "25px" }}>{news.content}</p>

        </Container>
    );
}

export default Details;