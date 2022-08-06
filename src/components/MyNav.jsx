import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';




function MyNav() {
  return (
 
    <Navbar bg="dark" variant="dark">
    <Container>
      
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  )
}

export default MyNav