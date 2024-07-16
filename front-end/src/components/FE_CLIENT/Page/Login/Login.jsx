import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import CSS file for custom styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('API_URL/login', {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);

      navigate('/home');
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.');
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f4f9' }}>
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col md={8} lg={6} xl={5}>
            <Card className="shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <Card.Body className="p-5 text-center">

                <h3 className="mb-5">Sign in</h3>

                <Form onSubmit={handleLogin}>
                  <Form.Group className="form-outline mb-4" controlId="typeEmailX-2">
                    <Form.Control
                      type="email"
                      className="form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder='email'
                    />
                  </Form.Group>

                  <Form.Group className="form-outline mb-4" controlId="typePasswordX-2">
                    <Form.Control
                      type="password"
                      className="form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder='password'
                    />
                  </Form.Group>

                  <Form.Group className="form-check d-flex justify-content-start mb-4">
                    <Form.Check
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      label="Remember password"
                    />
                  </Form.Group>

                  {error && <p style={{ color: 'red' }}>{error}</p>}

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
};

export default Login;
