import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Container, Row, Col, Card, Button } from "react-bootstrap";

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('products').then(resp => setProducts(resp.data));
    }, []);
    return (
        <Container>
            <Row>
                {products?.map((item, index) => (
                    <Col key={index} md={4} className="mb-4 my-5">
                        <Card className="h-100" style={{border:'1px solid #333'}}>
                            <Image src={item.thumbnail} alt="product" fluid className="card-img-top" style={{border:'1px solid #ccc'}}/>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    <span className="text-primary">{item.price}$</span>
                                    <br />
                                    <span className="text-gray-500">{item.description}</span>
                                </Card.Text>
                                <Button  className="btn btn-primary btn-block">
                                  Add to cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
