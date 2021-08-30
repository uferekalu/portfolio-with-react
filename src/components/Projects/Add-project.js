import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddProject = () => {
  const [newProject, setNewProject] = useState({
    name: "",
    weburl: "",
    webtitle: "",
    repourl: "",
    repotitle: "",
    description: "",
    img: "",
    submitted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", newProject.img);
    formData.append("weburl", newProject.weburl);
    formData.append("webtitle", newProject.webtitle);
    formData.append("repourl", newProject.repourl);
    formData.append("repotitle", newProject.repotitle);
    formData.append("repotitle", newProject.description);
    formData.append("name", newProject.name);

    axios
      .post("http://localhost:5000/api/add/", formData)
      .then((res) => {
        setNewProject({
          submitted: true
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetProject = () => {
    setNewProject({
      name: "",
      weburl: "",
      webtitle: "",
      repourl: "",
      repotitle: "",
      description: "",
      img: "",
      submitted: false
    });
  };

  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleImg = (e) => {
    setNewProject({ ...newProject, img: e.target.files[0] });
  };

  return (
    <Container className="mb-5">
      {newProject.submitted ? (
        <div>
          <h4 className="project-title ">You submitted successfully!</h4>
          <button className="btn btn-success" onClick={resetProject}>
            Add
          </button>
        </div>
      ) : (
        <>
          <h1 className="project-title mt-4 mb-3">Add a Project</h1>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the name of the project"
                    name="name"
                    value={newProject.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Web url</Form.Label>
                  <Form.Control
                    type="text"
                    name="weburl"
                    placeholder="Enter web url"
                    onChange={handleChange}
                    value={newProject.weburl}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Web title</Form.Label>
                  <Form.Control
                    type="text"
                    name="webtitle"
                    placeholder="Enter web title"
                    onChange={handleChange}
                    value={newProject.webtitle}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Repo url</Form.Label>
                  <Form.Control
                    type="text"
                    name="repourl"
                    placeholder="Enter repo url"
                    onChange={handleChange}
                    value={newProject.repourl}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Repo title</Form.Label>
                  <Form.Control
                    type="text"
                    name="repotitle"
                    placeholder="Enter repo title"
                    onChange={handleChange}
                    value={newProject.repotitle}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Project description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={newProject.description}
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Select image for your site</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".png, .jpg, .jpeg, .gif"
                    name="img"
                    onChange={handleImg}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs={12}>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="md" type="submit">
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </>
      )}
    </Container>
    //     <form onSubmit={handleSubmit} encType="multipart/form-data">
    //       <input
    //         type="file"
    //         accept=".png, .jpg, .jpeg"
    //         name="img"
    //         onChange={handleImg}
    //       />

    //       <input
    //         type="text"
    //         placeholder="name"
    //         name="name"
    //         value={newProject.name}
    //         onChange={handleChange}
    //       />

    //       <input
    //         name="weburl"
    //         placeholder="Enter web url"
    //         onChange={handleChange}
    //         value={newProject.weburl}
    //       />
    //       <input
    //         name="webtitle"
    //         placeholder="Enter web title"
    //         onChange={handleChange}
    //         value={newProject.webtitle}
    //       />
    //       <input
    //         name="repourl"
    //         placeholder="Enter repo url"
    //         onChange={handleChange}
    //         value={newProject.repourl}
    //       />
    //       <input
    //         name="repotitle"
    //         placeholder="Enter repo title"
    //         onChange={handleChange}
    //         value={newProject.repotitle}
    //       />

    //       <input type="submit" />
    //     </form>
  );
};

export default AddProject;
