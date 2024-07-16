import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Import CSS file for custom styles

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      // Kiểm tra phản hồi từ API
      console.log(response);

      if (response.status === 201) {
        setSuccess('Registration successful! You can now log in.');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      console.log(err.response); // Log the error response for debugging
      if (err.response && err.response.data && err.response.data.message) {
        setError(`Registration failed: ${err.response.data.message}`);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <Container className="h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col md={9} lg={7} xl={6}>
              <Card style={{ borderRadius: '15px' }}>
                <Card.Body className="p-5">
                  <h2 className="text-uppercase text-center mb-5">Register</h2>
                  <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-4" controlId="form3Example1cg">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        size="lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="form3Example3cg">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        size="lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="form3Example4cg">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        size="lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="form3Example4cdg">
                      <Form.Label>Repeat your password</Form.Label>
                      <Form.Control
                        type="password"
                        size="lg"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}

                    <Form.Group className="mb-5 d-flex justify-content-center">
                      <Form.Check type="checkbox" id="form2Example3cg" label="I agree all statements in" />
                      <a href="#!" className="text-body ms-1"><u>Terms of service</u></a>
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                      <Button variant="success" size="lg" className="gradient-custom-4 text-body" type="submit">Register</Button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login" className="fw-bold text-body"><u>Login here</u></a></p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Register;
