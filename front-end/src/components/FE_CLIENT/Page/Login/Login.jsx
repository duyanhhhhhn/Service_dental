import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import CSS file for custom styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn chặn sự kiện mặc định của form submit
    try {
      const response = await axios.post('/login', {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      setShowToast(true); // Hiển thị Toast thông báo thành công
      setTimeout(() => {
        setShowToast(false);
        navigate('/dashboard'); // Chuyển hướng sau khi đăng nhập thành công
      }, 2000);
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
      <Toast 
        onClose={() => setShowToast(false)} 
        show={showToast} 
        delay={3000} 
        autohide 
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        <Toast.Body>Đăng nhập thành công!</Toast.Body>
      </Toast>
    </section>
  );
};

export default Login;
