import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Projects.css';
import Footer from '../Footer/Footer.js';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
                caption: {
                    title: 'MY PROJECTS',
                },

            details: [
                {
                    project: {
                    img: {
                        src: '/assets/images/project-1.jpg',
                        alt: 'My Project',
                    },
                    links: {
                        web: {
                            url: '#!',
                            title: 'Preview',
                        },
                        repo: {
                            url: '#!',
                            title: 'Github',
                        },
        
                    },
                    },
                },
                {
                    project: {
                    img: {
                        src: '/assets/images/project-2.jpg',
                        alt: 'My Project',
                    },
                    links: {
                        web: {
                            url: '#!',
                            title: 'Preview',
                        },
                        repo: {
                            url: '#!',
                            title: 'Github',
                        },
        
                    },
                    },
                },
                {
                    project: {
                    img: {
                        src: '/assets/images/project-3.jpg',
                        alt: 'My Project',
                    },
                    links: {
                        web: {
                            url: '#!',
                            title: 'Preview',
                        },
                        repo: {
                            url: '#!',
                            title: 'Github',
                        },
        
                    },
                    },
                },
                {
                    project: {
                    img: {
                        src: '/assets/images/project-4.jpg',
                        alt: 'My Project',
                    },
                    links: {
                        web: {
                            url: '#!',
                            title: 'Preview',
                        },
                        repo: {
                            url: '#!',
                            title: 'Github',
                        },
        
                    },
                    },
                },
                { 
                    project: {
                    img: {
                        src: '/assets/images/project-5.jpg',
                        alt: 'My Project',
                    },
                    links: {
                        web: {
                            url: '#!',
                            title: 'Preview',
                        },
                        repo: {
                            url: '#!',
                            title: 'Github',
                        },
        
                    },
                    },
                },
                {
                    project: {
                        img: {
                            src: '/assets/images/project-6.jpg',
                            alt: 'My Project',
                        },
                        links: {
                            web: {
                                url: '#!',
                                title: 'Preview',
                            },
                            repo: {
                                url: '#!',
                                title: 'Github',
                            },
            
                        }
                    },
                }
           ]
        }
    }
    
    render() {
        return (
            <section className="projects">
                <Container className="overflow-hidden">
                    <h1 className="text-secondary">{this.state.caption.title}</h1>
                    <Row>
                        {this.state.details.map((item, index) => {
                            return (
                                    <Col xs={12} sm={6} md={4} className="projects__item" key={index}>
                                        <img src={`${item.project.img.src}`} className="inline-photo" alt={item.project.img.alt}/>
                                        <Row className="projects__btns">
                                            <Col xs={6} md={6}>
                                                <a href={item.project.links.web.url} className="projects__btn">
                                                    <i className="fas fa-eye"></i>{item.project.links.web.title} 
                                                </a>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <a href={item.project.links.repo.url} className="projects__btn">
                                                    <i className="fab fa-github"></i> {item.project.links.repo.title}
                                                </a>
                                            </Col>
                                        </Row>
                                    </Col>
                            )
                        })}
                    </Row>
                    <Footer />
            </Container>
                {/* <Container>
                    <div className="projects__bio-image">
                        <h1 className="text-secondary">{this.state.caption.title}</h1>
                    </div>
                    <div className="projects__items">
                        {this.state.details.map((item, index) => {
                            return (
                                <div className="projects__item" key={index}>
                                    <img src={`${item.project.img.src}`} alt={item.project.img.alt} />
                                    <div className="projects__btns">
                                        <a href={item.project.links.web.url} className="projects__btn">
                                        <i className="fas fa-eye"></i> {item.project.links.web.title} 
                                        </a>
                                        <a href={item.project.links.repo.url} className="projects__btn">
                                        <i className="fab fa-github"></i> {item.project.links.repo.title}
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <Footer />
                </Container> */}
            </section>
                
        );
    }
                
}
export default Projects;