import React from "react";
import Particle from "../Particle";
import "../../style.css";
import "../../Assets/CSS/Projects.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import mrAskImg1 from "../../Assets/Projects/mr_ask_plus/detailed_result.PNG";
import mrAskImg2 from "../../Assets/Projects/mr_ask_plus/create_test.PNG";
import mrAskImg3 from "../../Assets/Projects/mr_ask_plus/results_userend.PNG";
import shlc1 from "../../Assets/Projects/SHLC/course.PNG";
import shlc2 from "../../Assets/Projects/SHLC/company_creation.PNG";
import shlc3 from "../../Assets/Projects/SHLC/dashboard.PNG";
import shlc4 from "../../Assets/Projects/SHLC/performance.PNG";
import caretogether1 from "../../Assets/Projects/Caretogether/caretogether1.jpeg";
import caretogether2 from "../../Assets/Projects/Caretogether/caretogether2.jpeg";
import caretogether3 from "../../Assets/Projects/Caretogether/caretogether3.jpeg";
import caretogether4 from "../../Assets/Projects/Caretogether/caretogether4.jpeg";
import STETAdmin1 from "../../Assets/Projects/STET_ADMIN/STETAdmin1.jpeg";
import STETAdmin2 from "../../Assets/Projects/STET_ADMIN/STETAdmin2.jpeg";
import STETAdmin3 from "../../Assets/Projects/STET_ADMIN/STETAdmin3.jpeg";
import STETAdmin4 from "../../Assets/Projects/STET_ADMIN/STETAdmin4.jpeg";
import STETAdmin5 from "../../Assets/Projects/STET_ADMIN/STETAdmin5.jpeg";
import STETAdmin6 from "../../Assets/Projects/STET_ADMIN/STETAdmin6.jpeg";
import STETAdmin7 from "../../Assets/Projects/STET_ADMIN/STETAdmin7.jpeg";
import STETAdmin8 from "../../Assets/Projects/STET_ADMIN/STETAdmin8.jpeg";
import STETAdmin9 from "../../Assets/Projects/STET_ADMIN/STETAdmin9.jpeg";
import STETAdmin10 from "../../Assets/Projects/STET_ADMIN/STETAdmin10.jpeg";
import STETAdmin11 from "../../Assets/Projects/STET_ADMIN/STETAdmin11.jpeg";
import STETAdmin12 from "../../Assets/Projects/STET_ADMIN/STETAdmin12.jpeg";
import STETWEB1 from "../../Assets/Projects/STET_WEB/STETWEB1.jpeg";
import STETWEB2 from "../../Assets/Projects/STET_WEB/STETWEB2.jpeg";
import STETWEB3 from "../../Assets/Projects/STET_WEB/STETWEB3.jpeg";
import STETWEB4 from "../../Assets/Projects/STET_WEB/STETWEB4.jpeg";
import STETWEB5 from "../../Assets/Projects/STET_WEB/STETWEB5.jpeg";
import STETWEB6 from "../../Assets/Projects/STET_WEB/STETWEB6.jpeg";
import STETWEB7 from "../../Assets/Projects/STET_WEB/STETWEB7.jpeg";
import STETWEB8 from "../../Assets/Projects/STET_WEB/STETWEB8.jpeg";
import STETWEB9 from "../../Assets/Projects/STET_WEB/STETWEB9.jpeg";
import STETWEB10 from "../../Assets/Projects/STET_WEB/STETWEB10.jpeg";
import STETWEB11 from "../../Assets/Projects/STET_WEB/STETWEB11.jpeg";
import { Badge } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import DetailModal from "./DetailModal";
function Projects() {
  const projects = [
    {
      title: "MR ASK+",
      startDate: "2020",
      description:
        "MR ASK+ is a robust online exam software which offers impeccable assessmemt through which one can conduct online examinations with ease.",
      images: [mrAskImg1, mrAskImg2, mrAskImg3],
      url: "www.mraskplus.com",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-nodejs-plain",
          name: "Node.js",
        },
      ],
    },
    {
      title: "Caretogether",
      startDate: "2021",
      description:
        "Covid19 Support Resources for all over India has been curated in one site where providers are verified and update consumers about the stocks availability.",
      images: [caretogether4, caretogether2, caretogether3,caretogether1],
      url: "caretogether.in",
      technologies: [
        {
          class: "devicon-react-original",
          name: "React",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-nodejs-plain",
          name: "Node.js",
        },
      ],
    },
    {
      title: "STET Admin Panel",
      startDate: "2021",
      description:
        "It's an admin panel which moniters and controls the Sikkim Teachers Eligibility Test Website.",
      images: [STETAdmin9, STETAdmin2, STETAdmin3, STETAdmin4, STETAdmin5, STETAdmin6, STETAdmin7, STETAdmin8, STETAdmin1, STETAdmin10, STETAdmin11, STETAdmin12],
      url: "caretogether.in",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-nodejs-plain",
          name: "Node.js",
        },
      ],
    },
    {
      title: "STET Sikkim",
      startDate: "2020",
      description:
        "STET Sikkim is a platform for all the teachers in the Sikkim where they can register themselves for the test.",
      images: [STETWEB10,STETWEB2,STETWEB3,STETWEB4,STETWEB5,STETWEB6,STETWEB7,STETWEB8,STETWEB9,STETWEB1,STETWEB11],
      url: "caretogether.in",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-nodejs-plain",
          name: "Node.js",
        },
      ],
    },
    {
      title: "SHLC",
      startDate: "2020",
      description:
        "SHLC provides assistance in documentation, consultation and training services to help organizations comply with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal).",
      images: [shlc3, shlc4, shlc1, shlc2],
      url: "elearning.shlc.in",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-nodejs-plain",
          name: "Node.js",
        },
      ],
    },
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [projectDetails, setProjectDetails] = React.useState({});
  return (

    <Container className="pb-5">
      <DetailModal showModal={showModal} setShowModal={setShowModal} projectDetails={projectDetails} />
      <Particle />
      <h1 className="section_title">
        My <span>Projects</span>
      </h1>
      <Row className="justify-content-center align-items-center">
        {projects.map((project, i) => (
          <Col md={4} className="mb-4" key={i}>
            <Tilt>
              <Card className="project_card" onClick={()=>{setShowModal(true);setProjectDetails(project)}}>
                <Badge variant="secondary" className={"startDate"}>
                  {project.startDate}
                </Badge>
                <div className="image_outer_layer">
                  <Card.Img variant="top"  className={"project_card_img"} src={project.images[0]} />
                </div>
                <Card.Body style={{ padding: "0.65rem" }}>
                  <Row>
                    <Col md={12} className="project_title">
                      {project.title}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Tilt>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
