import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Footer from "../Footer/Footer.js";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {
        title: "BACKGROUND",
        text:
          "A passionate web developer with 3+ years progressive working experience using such technologies as HTML5, CSS3, SASS, JavaScript, Node Js, React Js, Next Js, Python, Django, MySQL, AWS, Firebase etc., in building web solutions that are mobile-friendly, user-oriented among other client requirements. I have keen interest in collaborating and contributing to development teams.."
      },
      aboutProjects: [],
      loading: false
    };
  }

  componentDidMount() {
    axios
      .get("https://ufere-project-api.herokuapp.com/api/about")
      .then((data) => {
        this.setState({
          aboutProjects: data.data,
          loading: false
        });
        console.log("The about project", data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { aboutProjects } = this.state
    return (
      <section className="about">
        <Container>
          <Row className="about__bio-image">
            <Col xs={12} md={12} className="about__bio">
              <h2 className="text-secondary">{this.state.about.title}</h2>
              <p>{this.state.about.text}</p>
            </Col>
          </Row>
          {aboutProjects.map((project, index) => (
            <Row className="jobs" key={index}>
              {project.projects.map((pro, index) => (
                <Col xs={12} md={12} className="jobs__job" key={index} style={{ padding: "20px"}}>
                  <h2 className="project-date">{pro.date}</h2>
                  <h3>{pro.name}</h3>
                  <h6>{pro.nature}</h6>
                  <p>{pro.description}</p>
                </Col>
              ))}
            </Row>
          ))}
        </Container>
        <Footer />
      </section>
    );
  }
}

export default About;
