import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css';
import Footer from '../Footer/Footer.js';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          details: [
                {
                    info: {
                        mail:{
                            title: 'Email',
                        },
                        relate:{
                            link: 'dekalusha@yahoo.com',  
                        }, 
                        icon:{
                            link: 'fas fa-envelope',
                        },
                        cName:{
                            class: 'contact__email',
                        }, 
                    },
                },
                {
                    info: {
                    mail:{
                        title: 'Phone',
                    },
                    relate:{
                        link: '08130149426', 
                    }, 
                    icon:{
                        link: 'fas fa-mobile-alt',
                    },
                    cName:{
                        class: 'contact__phone',
                    } 
                },
                },
                {
                    info: {
                    mail:{
                        title: 'Address',
                    },
                    relate:{
                        link: 'Lagos',  
                    }, 
                    icon:{
                        link: 'fas fa-marker-alt',
                    },
                    cName:{
                        class: 'contact__address',
                    } 
                },
            }
        
            ]
        }
    }
    
    render() {
        return (
            <section className="contact">
                <Container>
                    <h2>Contact Me..</h2>
                    {this.state.details.map((item, index) => {
                        return (
                            <Row className="contact__list" key={index}>
                                <Col xs={12} sm={6} md={3} className={item.info.cName.class}>
                                    <i className={item.info.icon.link}></i> {item.info.mail.title}
                                    <Col className="text-secondary">{item.info.relate.link}</Col>
                                </Col>
                            </Row>
                        );
                    })}
                    <Footer />
                </Container>
            </section>
        );
    }
}

export default Contact;