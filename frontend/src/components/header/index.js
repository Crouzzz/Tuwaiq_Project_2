import React from 'react';
import {Navbar,Container,Button,Nav,Card} from 'react-bootstrap'
import {  Link } from "react-router-dom";

const Header = () => {
	return <div className="App">
   
<Navbar bg="light" expand="lg">
  <Container>
  <img  variant="top" id="logo" src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" />
  <Link to="/" id="link">  <Navbar.Brand href="">Home</Navbar.Brand> </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">About Tawakkalna</Nav.Link>
        <Nav.Link href="#link">Tawakkalna Services</Nav.Link>
		<Nav.Link href="#link2">How Tawakkalna Works</Nav.Link>
		<Nav.Link href="#link3">FAQs</Nav.Link>
		<Nav.Link href="#link4">Contact Us</Nav.Link>
    <Link to="/login" id="link"><Button > Login</Button> </Link>
      </Nav>
    </Navbar.Collapse>
    
    
  </Container>
</Navbar>

	</div>;
};

export default Header;
