import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
    render() {
        return (
            <Container className="footer-social">
                    <Row>
                        <Col className="social-icons">
                            <a href="#!">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                            <a href="#!">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="#!">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="#!">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <footer>&copy; Copyright 2020</footer>
                    </Row>
            </Container>
        );
    }
}

export default Footer;