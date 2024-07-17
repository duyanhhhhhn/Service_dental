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
            <Nav.Link href="/About"  style={{ color: 'white' }}>About us</Nav.Link>
            <Nav.Link href="/Services"  style={{ color: 'white' }}>Services</Nav.Link>
            <Nav.Link href="Appointment"  style={{ color: 'white' }}>Appointment</Nav.Link>
            <Nav.Link href="Products" style={{ color: 'white' }}>Products</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color: '#fff'}}>
              <NavDropdown.Item href="/News">News</NavDropdown.Item>
              <NavDropdown.Item href="/Cart">
              Cart
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="Login"  style={{ color: 'white' }}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
