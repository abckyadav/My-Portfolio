import React from "react";
import { Slide } from "react-awesome-reveal";
import skillsLight from "../media/skills-light-orange.png";
import skillsDark from "../media/skills-dark.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faNodeJs,
  faHtml5,
  faJs,
  faReact,
  faGit,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
const Skills = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Slide>
        <Container>
          <Row>
            <Col lg={4} xs={8}>
              <h1 className="display-3 skill-h">
                I can work <p className="with">with</p>
              </h1>
              <img
                src={darkMode ? skillsDark : skillsLight}
                alt="skills"
                className="skills-img img-fluid animated"
              />
            </Col>
            <Col lg={2} xs={4}>
              <br></br>
              <Card className="nbcard">
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faHtml5}
                    alt="HTML"
                  />
                </Button>
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faCss3Alt}
                  />
                </Button>
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faJs} />
                </Button>
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faReact} />
                </Button>
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faNodeJs}
                  />
                </Button>
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faGit} />
                </Button>
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faBootstrap}
                  />
                </Button>
              </Card>
            </Col>
            <Col lg={6} xs={12} className="skill-nboard-Container">
              <br></br>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Programming Language & Framework</Card.Title>
                  <Card.Text>JavaScript, ReactJs</Card.Text>
                </Card.Body>
              </Card>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Frontend</Card.Title>
                  <Card.Text>HTML, CSS, Bootstrap</Card.Text>
                </Card.Body>
              </Card>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Backend</Card.Title>
                  <Card.Text>NodeJs, ExpressJs, MongoDB</Card.Text>
                </Card.Body>
              </Card>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Tools</Card.Title>
                  <Card.Text>MS Office, Postman, VS Code</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
        </Container>
      </Slide>
    </div>
  );
};

export default Skills;
