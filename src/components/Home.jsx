import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import helloLight from "../media/home-light-orange.png";
import helloDark from "../media/home-dark.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

const Home = ({ darkMode }) => {
  return (
    <div>
      <AttentionSeeker shakeX>
        <Row>
          <Col lg={12} xs={12}>
            <h1 className="display-3 hello" align="center">
              HELLO!<code> I'm Abhishek</code>
            </h1>
            <h2 className="lead" align="center">
              I
              <span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ " am a Full-Stack Web  Developer.", " love coding.", " am working on Problem Solving.", " am a learner for life!" ]'
              ></span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Container align="center">
            <Col lg={12} xs={12}>
              <img
                src={darkMode ? helloDark : helloLight}
                alt="hello"
                className="hello-img"
              />
            </Col>
          </Container>
        </Row>
      </AttentionSeeker>
      <br></br>
      <hr></hr>
    </div>
  );
};

export default Home;
