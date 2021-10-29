import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/header-logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const { user, logOut, setIsLoading } = useAuth()
    const history = useHistory()
    const handleSignOut = () => {
        logOut()
            .then(() => {
                history.push('/')
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div>
            <Navbar className="header-bg" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home/#top">
                        <img
                            src={logo}
                            width="300"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='ms-5'>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/appointment"><span className="item-color">Make Appointment</span></Nav.Link>
                            <Nav.Link as={Link} to="/about"><span className="item-color">About US</span></Nav.Link>
                        </Nav>
                        <Nav>
                            {user.email ?
                                <Button onClick={handleSignOut} variant='light'>Sign-Out</Button> :
                                <Nav.Link as={Link} to="/signin"><span className="item-color">Sign-In</span></Nav.Link>
                            }
                            {user.displayName &&
                                <Navbar.Text className='ms-2'>
                                    <span className='item-color'><i className="far fa-user"></i> <span className='border-bottom'>{user.displayName}</span></span>
                                </Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
