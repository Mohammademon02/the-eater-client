import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">The Eater</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/">Home</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/register">Register</Link>
                        </Nav>
                        <Nav>
                            {
                                user && <div>
                                    {
                                        user.photoURL ? <img className='rounded-circle' style={{ height: '40px' }} src={user.photoURL} alt="" /> :
                                            <p><FaUserCircle style={{ fontSize: '40px' }}></FaUserCircle></p>
                                    }
                                </div>
                            }

                            {user ?
                                <Link><Button onClick={handleLogOut} variant="secondary">Logout</Button></Link> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='container'>
                <h1>this is banner</h1>
            </div>
        </div>
    );
};

export default Header;