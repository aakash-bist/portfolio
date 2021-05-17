import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import "../../Assets/CSS/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";

function About() {
  return (
    <section>
      <Particle />
      <Container fluid className="about_section">
      <Container>
        <h1 className="section_title">
          Professional <span>Skillset </span>
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Techstack iconName="devicon-angularjs-plain" label="Angular" />
          <Techstack iconName="devicon-javascript-plain" label="JavaScript"/>
          <Techstack iconName="devicon-typescript-plain" label="TypeScript"/>
          <Techstack iconName="devicon-nodejs-plain-wordmark" label="Node.js"/>
          <Techstack iconName="devicon-express-original-wordmark" label="Express.js"/>
          <Techstack iconName="devicon-react-original-wordmark" label="React.js"/>
          <Techstack iconName="devicon-mongodb-plain-wordmark" label="MongoDb"/>
          <Techstack iconName="devicon-git-plain-wordmark" label="Git"/>
          <Techstack iconName="devicon-bootstrap-plain-wordmark" label="Bootstrap"/>
        </Row>
        <h1 className="section_title mt-0">
          <span>Tools</span> I use
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Techstack iconName="cib-visual-studio-code" label="VS Code"/>
          <Techstack iconName="cib-postman" label="Postman" />
          <Techstack iconName="devicon-npm-original-wordmark" label="NPM" />
          <Techstack iconName="cib-heroku" label="Heroku"/>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default About;
