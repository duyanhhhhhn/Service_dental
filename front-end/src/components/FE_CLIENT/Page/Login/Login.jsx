import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';

export default function Login() {
  useEffect(() => {
    document.title = 'Admin-Login';
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useRef(null);
  
  useEffect(() => {
    if (Cookies.get('login')) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      login(event); 
    }
  };

  const showError = (message) => {
    toast.current.show({ severity: 'error', summary: 'ERROR', detail: message || "Too many requests", life: 3000 });
  };

  const showSuccess = (message) => {
    toast.current.show({ severity: 'success', summary: 'SUCCESS', detail: message || "Login successful", life: 3000 });
  };

  async function login(e) {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email: email,
        password: password
      });
      Cookies.set('login', response.data.accessToken, { expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000) });
      showSuccess('Login successful');
      setTimeout(() => {
        navigate('/admin');
      }, 1000);
    } catch (err) {
      showError('Email or password invalid');
    }
  }

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f4f9' }}>
      <Container className="py-5 h-100">
        <Toast ref={toast} />
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col md={8} lg={6} xl={5}>
            <Card className="shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <Card.Body className="p-5 text-center">
                <h3 className="mb-5">Login</h3>
                <Form className='mb-5' onSubmit={login}>
                  <Form.Group className="form-outline mb-4" controlId="typeEmailX-2">
                    <Form.Control
                      type="email"
                      className="form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder='Email'
                    />
                  </Form.Group>
                  <Form.Group className="form-outline mb-4" controlId="typePasswordX-2">
                    <Form.Control
                      type="password"
                      className="form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder='Password'
                      onKeyDown={handleKeyDown}
                    />
                  </Form.Group>
                  <Button
                    className="btn-lg btn-block"
                    variant="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
