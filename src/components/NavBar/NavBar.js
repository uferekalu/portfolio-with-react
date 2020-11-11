import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './NavBar.css';

class NavbarComponent extends Component {
    render() {
        return (
                <Navbar collapseOnSelect expand="lg" className="navBar">
                    <Navbar.Brand href="#home" className="navBrand">
                    My Profile
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="navBarCollapse">
                        <Nav className="ml-auto navLink">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/about">About</Link>
                            <Link className="link" to="/projects">Projects</Link>
                            <Link className="link" to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default NavbarComponent;