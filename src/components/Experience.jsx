import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles.css";
import experienceLight from "../media/experience-light.png";
import experienceDark from "../media/experience-dark.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Experience = ({ darkMode }) => {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <Fade>
        <Container align="">
          <h1 className="lead" align="center">
            <b> Experience </b>
          </h1>
          <Row>
            <Col lg={8} align="">
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title>
                    <h2 className="lead">Professional Summary</h2>
                  </Card.Title>
                  <br></br>
                  <Card.Text>
                    <p>
                      {" "}
                      An experienced Full-Stack Web Developer, specializing in
                      building scalable web applications using React.JS and
                      JavaScript and working with MaterialUI. Proficient in web
                      technologies and dedicated to delivering efficient and
                      maintainable code. Have a successful project delivery
                      record and keep up with emerging technologies to
                      contribute to any team.
                    </p>
                  </Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Title>
                    <h2 className="lead">Professional Experience</h2>
                  </Card.Title>
                  <br></br>
                  <Card.Text>
                    <p>
                      {" "}
                      Working as a Software Development Engineer for a team that
                      built a workspace management application, I was
                      responsible for developing, integrating, and testing new
                      features according to product requirements. Some of my key
                      accomplishments include:
                    </p>
                    <ul>
                      <li>
                        Creating the reusable components for the applications.
                      </li>
                      <li>UI/UX part on Front-End.</li>
                      <li>
                        Worked with Tranes for air quality Dashboard creation.
                      </li>
                      <li>
                        Worked with Kores to develop a conference room booking
                        app in which users are able to book rooms for meeting
                      </li>
                      <li>
                        Worked with designers and design tools such as figma.
                      </li>
                      <li>
                        Good Knowledge on Agile Scrum Process, Sprint planning
                        meeting, Scrum meeting, Sprint closure meeting etc.
                      </li>
                      <li>
                        Hands on experience in React.js, MaterialUI, Nodejs
                        ExpressJs
                      </li>
                    </ul>
                  </Card.Text>
                  {/* <div className="button-space">
                    <a href={resume} target="_blank" rel="noreferrer noopener">
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="a"
                      >
                        <FontAwesomeIcon
                          className="dark"
                          size="lg"
                          icon={faFile}
                        />{" "}
                        View Resume
                      </Button>
                    </a>

                    <a href={resume} download>
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="a"
                      >
                        <FontAwesomeIcon
                          className="dark"
                          size="lg"
                          icon={faFile}
                        />{" "}
                        Download Resume
                      </Button>
                    </a>
                  </div> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} align="center">
              <Card className="nbcard">
                <img
                  src={darkMode ? experienceDark : experienceLight}
                  alt="experience"
                  className="experience-img"
                />
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
          <br></br>
        </Container>
      </Fade>
    </div>
  );
};

export default Experience;
