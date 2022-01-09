import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home2() {
  return (
    <Container fluid className="home_about_section" id="about">
      <Container>
        <h1 className="section_title">About Me</h1>
        <Row className="align-items-center">
          <Col md={4} className="home_about_image">
          <Card>
              <div className="image_outer_layer">
              <Card.Img variant="top" src={myImg} />
              </div>
            <Card.Body className="home_about_card_body">
               <Row>
          <Col md={12} className="home_about_social">
            <ul className="home_about_social_links">
              <li className="social_icons">
                <a
                  href="https://github.com/aakash-bist"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home_social_icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social_icons">
                <a
                  href="https://twitter.com/aakash2me"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home_social_icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social_icons">
                <a
                  href="https://www.linkedin.com/in/aakash-bist-015ab6159/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home_social_icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social_icons">
                <a
                  href="https://www.instagram.com/goodbetterbist/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home_social_icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>

  </Card.Body>
</Card>

              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
          </Col>
          <Col md={7} className="offset-md-1">
            <div className="about_card">
              <div className="about_card_dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="about_content">
                <h4>Hi :)</h4>
                <p>I'm Aakash. Passionate about software development who focuses on writing clean, elegant and efficient code.</p>
              </div>
            </div>
          </Col>
        </Row>
              </Container>
    </Container>
  );
}
export default Home2;
