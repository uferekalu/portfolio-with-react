import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import Footer from '../Footer/Footer.js';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {
                title: 'BACKGROUND',
                text: 'A web developer with cognate experience in React Js for building reusable ' +
                    'frontend components. Proficient with HTML, CSS, SASS and JavaScript. ' + 
                    'Proficient with Python and Django with Rest Framework for backend development. ' +
                    'I studied Mechanical Engineering with draughting experience in SolidWorks and AutoCAD design.'
            },
            progLang: {
                date: '2019 - Current',
                name: 'React js',
                nature: 'Freelance',
                description: 'Have been working on projects with React js. As a result, this app is built with React Js.' +
                        'Built another app which uses React Js to consume Unsplash API and display the photos and details in a presentable fashion. ' +
                        'In a bid to further my proficiency in React Js, I always follow up some rich tutorials online and would like to express my gratitude to Unsplash for ' +
                        'providing consumable API resources.',
            },
            progLang1: {
                date: '2018 - 2019',
                name: 'Python and Django',
                nature: 'Freelance',
                description: 'Developed a Tutorial App using Python and Django. This app is all about recording students account details based on the amount ' +
                'and number of courses registered.',
            },
            progLang2: {
                date: '2017 - 2018',
                name: 'PHP and MySQL',
                nature: 'Freelance',
                description: 'Proficient in PHP and MySQL',
            },
            progLang3: {
                date: '2016 - 2017',
                name: 'HTML, CSS and JAVASCRIPT',
                nature: 'Freelance',
                description: 'Proficient in HTML, CSS and JavaScript',
            }
        }
    }
    
    render() {
        return (
            <section className="about">
                <Container>
                    <Row className="about__bio-image">
                        <Col xs={12} md={12} className="about__bio">
                            <h2 className="text-secondary">{this.state.about.title}</h2> 
                            <p>{this.state.about.text}</p>
                        </Col>
                    </Row>
                    <Row className="jobs">
                        <Col xs={12} md={12} className="jobs__job">
                            <h2 className="project-date">{this.state.progLang.date}</h2>
                            <h3>{this.state.progLang.name}</h3>
                            <h6>{this.state.progLang.nature}</h6>
                            <p>{this.state.progLang.description}</p>
                        </Col>
                        <Col xs={12} md={12} className="jobs__job">
                            <h2 className="project-date">{this.state.progLang1.date}</h2>
                            <h3>{this.state.progLang1.name}</h3>
                            <h6>{this.state.progLang1.nature}</h6>
                            <p>{this.state.progLang1.description}</p>
                        </Col>
                        <Col xs={12} md={12} className="jobs__job">
                            <h2 className="project-date">{this.state.progLang2.date}</h2>
                            <h3>{this.state.progLang2.name}</h3>
                            <h6>{this.state.progLang2.nature}</h6>
                            <p>{this.state.progLang2.description}</p>
                        </Col>
                        <Col xs={12} md={12} className="jobs__job">
                            <h2 className="project-date">{this.state.progLang3.date}</h2>
                            <h3>{this.state.progLang3.name}</h3>
                            <h6>{this.state.progLang3.nature}</h6>
                            <p>{this.state.progLang3.description}</p>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </section>
        );
    }
}

export default About;