import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import Experience from "../Experience/Experience";
const Home=() => {
  return (
    <section>
      <Container fluid className="home-section">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div>
                <Type />
              </div>
              
              <h1 style={{ paddingBottom: 15 }} className="section_heading">
                Hello, I'm <span>Aakash</span> welcome to my world.
              </h1>

            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
      <Experience />
    </section>
  );
}

export default Home;
