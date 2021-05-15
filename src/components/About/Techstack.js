import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Techstack(prop) {
  return (
    <div>
      <Tilt>
      <Col xs={4} md={2} className="tech-icons">
        <i className={`${prop.iconName} tech-icon-images`}></i>
      </Col>
      </Tilt>
    </div>
  );
}

export default Techstack;
