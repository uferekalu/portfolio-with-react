import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomePage.css';
import Footer from '../Footer/Footer.js';

class HomePage extends Component {
    render() {
        return (
            <section className="home">
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h2>Hello! My Name Is</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 className="home__name">
                                Ufere <span className="home__name--last">Kalu</span>
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} class>
                            <h2>
                                Web Developer, Designer and Programmer. Proficient in Solidworks and AutoCAD
                            </h2>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </section>
        );
    }
}

export default HomePage;