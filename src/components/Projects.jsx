import { React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import shoppersstop from "../media/shoppersstop.jpg";
import koovs from "../media/koovs.jpg";
import asos from "../media/asos.jpg";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

const Projects = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h1 className="lead" align="center">
            <b> Projects </b>
          </h1>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={asos} />
                          <Card.Body>
                            <Card.Title align="center">Asos Clone</Card.Title>
                            <Card.Text>
                              <p align="center">
                                A web application to shop daily fashion needs.
                              </p>
                              <p>Tech Stack: HTML, CSS, JAVASCRIPT</p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            Features:<br></br>● Login and Signup Authentication
                            using Masai API.<br></br>● Sorting & filtering
                            features
                            <br></br>● Product Catalogue with Hover Effects and
                            Animation. <br></br> ● Add to cart & Checkout
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div className="button-space">
                    <a
                      href="https://asos-clone.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/abckyadav/asos-clone"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={shoppersstop} />
                          <Card.Body>
                            <Card.Title align="center">
                              Shoppersstop Clone
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Shoppers Stop website is for apparels, footwear,
                                home décor & furnishings etc.
                                <p>Tech Stack: HTML, CSS, JAVASCRIPT</p>
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            Features:<br></br>● Product display carousel.
                            <br></br>● Sorting & filtering features
                            <br></br>● Product Catalogue with Hover Effects and
                            Animation. <br></br> ● Device responsive.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div className="button-space">
                    <a
                      href="https://team-shoppersstop.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/abckyadav/Shoppersstop-team-project"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={koovs} />
                          <Card.Body>
                            <Card.Title align="center">Koovs Clone</Card.Title>
                            <Card.Text>
                              <p align="center">
                                KOOVS is the one-stop online fashion destination
                                for all your fashion needs.
                                <br></br>
                                <p>Tech Stack: HTML, CSS, JAVASCRIPT</p>
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            Developed a Shopping Web App where people can buy
                            daily fashion needs
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div className="button-space">
                    <a
                      href="https://koovs-clone-6ujuhqhy2-abckyadav.vercel.app"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/abckyadav/Koovs-Clone"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
        </Container>
      </Fade>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Projects;
