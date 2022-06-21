import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom'

const Header = () => {
  
    return (
        <Navbar bg="dark" expand="lg" className="text-light">
            <Container>
                <Navbar.Brand href="#home" style={{color:"#8F3EAD ",fontWeight:"bold",fontSize:"32px"}}>Purple</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="mx-3 text-light" style={{textDecoration:"none",fontWeight:"bold"}} >Home</Link>
                        <Link to="/about" className="mx-3 text-light" style={{textDecoration:"none",fontWeight:"bold"}}>About us</Link>
                        <Link to="/products" className="mx-3 text-light" style={{textDecoration:"none",fontWeight:"bold"}}>Products</Link>
                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;