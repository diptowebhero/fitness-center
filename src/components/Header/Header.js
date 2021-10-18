import React from 'react';
import './Header.css'
import logo from '../../assets/images/logo.png'
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar style={{background:"#e9e9e9"}} expand="lg">
                <Container>
                    <Navbar.Brand className="logo" href="#home"><img src={logo} alt="" />FITNESS CENTER </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto header">
                            <Nav.Link as={Link} to="/home" href="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" href="#link">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className="">
                            <Nav.Link as={Link} to="/login" className="btn-regulars mx-2">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signUp" className="btn-regulars">Sign Up</Nav.Link>
                            <NavDropdown className="drop" title="Dipto Das" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;