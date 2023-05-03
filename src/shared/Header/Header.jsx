import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">The Eater</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/">Home</Link>
                        <Nav.Link to="/blog">Blog</Nav.Link>
                        <Link to="/register">Register</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="">profile</Nav.Link>
                        <Button variant="secondary">Logout</Button>
                        <Link to="/login">
                            <Button variant="secondary">Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;