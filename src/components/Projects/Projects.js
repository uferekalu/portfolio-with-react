import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Projects.css";
import Footer from "../Footer/Footer.js";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: false
    };
  }

  componentDidMount() {
    axios
      .get("https://ufere-project-api.herokuapp.com/api/projects")
      .then((data) => {
        this.setState({
          projects: data.data,
          loading: false
        });
        console.log("The projects", data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { projects } = this.state;
    return (
      <section className="projects">
        <Container className="overflow-hidden">
          <Link to="/add" className="back-to-home mb-3">
            Add Project
          </Link>
          <h1 className="text-secondary mb-5">PROJECTS</h1>
          <Row>
            {projects.map((project, index) => {
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  className="projects__item"
                  key={index}
                >
                  {" "}
                  {project.img ===
                  "40ae1e7e-6173-46ce-b530-5e9586941e51-1630042644259.gif" ? (
                    <img
                      src="/assets/images/shopping.gif"
                      className="img-fluid inline-photo"
                      alt={project.name}
                    />
                  ) : (
                    <img
                      src="/assets/images/interview.png"
                      className="img-fluid inline-photo"
                      alt={project.name}
                    />
                  )}
                  <Row className="project-description">
                    <p>{project.description}</p>
                  </Row>
                  <Row className="projects__btns">
                    <Col xs={6} md={6}>
                      <a href={project.weburl} className="projects__btn">
                        <i className="fas fa-eye"></i>
                        {project.webtitle}
                      </a>
                    </Col>
                    <Col xs={6} md={6}>
                      <a href={project.repourl} className="projects__btn">
                        <i className="fab fa-github"></i> {project.repotitle}
                      </a>
                    </Col>
                  </Row>
                </Col>
              );
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
