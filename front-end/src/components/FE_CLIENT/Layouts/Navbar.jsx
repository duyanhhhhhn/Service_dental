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
            <Nav.Link href="/about"  style={{ color: 'white' }}>About us</Nav.Link>
            <Nav.Link href="/services"  style={{ color: 'white' }}>Services</Nav.Link>
            <Nav.Link href="/appointment"  style={{ color: 'white' }}>Appointment</Nav.Link>
            <Nav.Link href="/products" style={{ color: 'white' }}>Products</Nav.Link>
            <Nav.Link href="/news" style={{ color: 'white' }}>News</Nav.Link>
            <Nav.Link href="/login"  style={{ color: 'white' }}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
