import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Techstack(props) {
  return (
    <div>
      <Tilt>
      <Col xs={4} md={2} className="tech_icons">
        <div className="d-flex align-items-center flex-column">
        <i className={`${props.iconName} tech_icon_images`}></i>
        <span>{props.label}</span>
        </div>
      </Col>
      </Tilt>
    </div>
  );
}

export default Techstack;
