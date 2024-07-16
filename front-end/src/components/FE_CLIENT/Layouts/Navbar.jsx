import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#2E6368" }} variant="light" className="header style1 clearfix">
      <Container>
        <Navbar.Brand href="/">
          <Image src="https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/logo-light.png" alt="Logo" style={{ height: "40px", width: "130px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" > 
            <Nav.Link href="#"  style={{ color: 'white' }}>About us</Nav.Link>
            <Nav.Link href="#"  style={{ color: 'white' }}>Doctor</Nav.Link>
            <Nav.Link href="http://localhost:3000/service"  style={{ color: 'white' }}>Services</Nav.Link>
            <NavDropdown title="Blog" id="blog-dropdown" color='white'>
              <NavDropdown.Item href="" >Blogs</NavDropdown.Item>
              <NavDropdown.Item href="" >Blogs 1</NavDropdown.Item>
              <NavDropdown.Item href="" >Blogs Single</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#"  style={{ color: 'white' }}>Appointment</Nav.Link>
            <Nav.Link href="#"  style={{ color: 'white' }}>Contact</Nav.Link>
            <Nav.Link href="#"  style={{ color: 'white' }}>Register</Nav.Link>
            <Nav.Link href="#"  style={{ color: 'white' }}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
