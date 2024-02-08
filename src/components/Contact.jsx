import { useState, React } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import contactLight from "../media/contact-light-ornage.png";
import contactDark from "../media/contact-dark.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = ({ darkMode }) => {
  const [templateParams, setTemplateParams] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const onInputChange = (e) => {
    setTemplateParams({ ...templateParams, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_wz42ps8",
        "template_v5vn79b",
        templateParams,
        "bT0djKPmPJKEZe92l"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    swal({
      title: "Sent Successfully!",
      text: "Glad to hear from you! I will get back to you as soon possible",
      icon: "success",
    });
    setTemplateParams({
      from_name: "",
      from_email: "",
      message: "",
    });
  };

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Container>
        <Row>
          <Col lg={2}>
            <img
              src={darkMode ? contactDark : contactLight}
              alt="contact"
              className="contact-img img-fluid"
            />
          </Col>
          <Col lg={4}>
            <br></br>
            <h2 className="lead">Contact me!</h2>
            <p className="contact-text">
              Drop a suggestion, feedback, opportunities or we can colaborate on
              a project. Please mention your contact details if you are
              expecting a reply.
            </p>

            <div>
              <p>
                Abhishek Kumar,<br></br>Poonam Bhawan Subhash Nagar, <br></br>
                Near Gali 10A Dehri On Sone, <br></br>Rohtas Bihar 821305,
              </p>

              <p>9074116911</p>
              <p>abhishek961007@gmail.com</p>
            </div>

            <div className="button-space">
              <a
                href="https://www.linkedin.com/in/abckyadav/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="a"
                >
                  <FontAwesomeIcon
                    className="dark"
                    size="lg"
                    icon={faLinkedin}
                  />
                </Button>
              </a>
              <a
                href="https://github.com/abckyadav"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                  <FontAwesomeIcon className="dark" size="lg" icon={faGithub} />
                </Button>
              </a>
            </div>

            <br></br>
            {/* <img
              src={darkMode ? contactDark : contactLight}
              alt="contact"
              className="contact-img img-fluid"
            /> */}
          </Col>
          <Col lg={6}>
            <br></br>
            <Form onSubmit={(e) => onSubmit(e)}>
              <Form.Group>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.from_name}
                  name="from_name"
                  className="ph name"
                  type="name"
                  placeholder="Enter your name"
                  required
                />
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.from_email}
                  name="from_email"
                  className="ph name"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.message}
                  name="message"
                  as="textarea"
                  rows={8}
                  className="ph msg"
                  placeholder="Enter your message"
                  required
                />
              </Form.Group>
              <Button
                variant={darkMode ? "outline-light" : "outline-dark"}
                type="submit"
                className="emailBtn"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>
  );
};

export default Contact;
