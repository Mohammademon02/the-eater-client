import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const navLinkStyle = ({ isActive }) => {
        return {
            background: isActive ? '#EAFCE4' : ""
        }
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='fw-bold' href="/">The Eater</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink style={navLinkStyle} className="text-decoration-none text-black px-3 py-2" to="/">Home</NavLink>
                            <NavLink style={navLinkStyle} className="text-decoration-none text-black px-3 py-2" to="/blog">Blog</NavLink>
                            <Nav>
                                {user ?
                                    <NavLink style={navLinkStyle} className="d-none text-decoration-none text-black px-3 py-2" to="/register">Register</NavLink> :
                                    <NavLink style={navLinkStyle} className="text-decoration-none text-black px-3 py-2" to="/register">Register</NavLink>
                                }
                            </Nav>
                        </Nav>
                        <Nav>
                            {
                                user && <div >
                                    {
                                        user.photoURL && user.displayName ? <img className='rounded-circle' style={{ height: '40px' }} src={user.photoURL} data-toggle="tooltip" data-placement="left" title={user.displayName} alt="" /> :
                                            <p><FaUserCircle style={{ fontSize: '40px' }}></FaUserCircle></p>
                                    }
                                </div>
                            }

                            {user ?
                                <Link><Button className='ms-2'  onClick={handleLogOut} variant="success">Logout</Button></Link> :
                                <Link to="/login">
                                    <Button variant="success">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;