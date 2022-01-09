import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Badge } from "react-bootstrap";
import "../../Assets/CSS/Experience.css";
import algoscale from "../../Assets/logo/algoscale.png";
import etech from "../../Assets/logo/etech.png";
import planify from "../../Assets/logo/planify.png";

const Experience = () => {
  const resumeExperience = [
    {
      company: "Algoscale Technologies Pvt. Ltd.",
      position: "Software Developer",
      image: algoscale,
      timePeriod: "8.2020 - Present",
      mainTechStack: ["Angular", "MySQL", "ElasticSearch", "NodeJS"],
      technologies: ["Angular 4,8,12", "MySQL 8", "NodeJS", "TypeScript" , "ElasticSearch 7+"],
    },
    {
      company: "E-Tech Service Pvt. Ltd.",
      position: "MEAN Stack Developer",
      image: etech,
      timePeriod: "1.2020 - 8.2020",
      mainTechStack: ["Angular", "LoopBack"],
      technologies: ["Angular 6,7,8,10,12", "LoopBack 3.x", "TypeScript" , "MongoDb"],
    },
    {
      company: "Planify Consultancy India Pvt. Ltd.",
      position: "Front-End Developer",
      image: planify, //icon:"devicon-angularjs-plain"
      timePeriod: "8.2019 - 11.2019",
      mainTechStack: ["Angular 6"],
      technologies: ["Angular 6", "Bootstrap 4", "TypeScript"],
    },
  ];
  const MainTechStack = (item) => {
    return (
      <div>
        {item.map((tech, techIndex) => (
          <span key={techIndex}>
            <Badge variant="primary" className={"badge"}>{tech}</Badge>
          </span>
        ))}
      </div>
    );
  };
  
  const TechnologyBadges = (item) => {
    return (
      <div>
        {item.map((tech, techIndex) => (
          <span key={techIndex}>
            <Badge variant="light" className={"badge"}>{tech}</Badge>
          </span>
        ))}
      </div>
    );
  };
  return (
    <section className={"main_section"}>
       <h1 className="section_title">
          Work <span>Experience</span>
        </h1>
      <VerticalTimeline>
        {resumeExperience.map((item, i) => (
            <VerticalTimelineElement
            key={i}
              className="vertical-timeline-element--work"
              date={item.timePeriod}
              iconStyle={{
                background: "#FFF",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                item.icon ? <i className={`${item.icon} tech_icon`}></i> : <img src={item.image} className={"tech_images"} alt={item.image} />
            //   <i className="fab fa-angular experience-icon"></i>
            }
            >
              <div style={{ textAlign: "left", marginBottom: "4px" }}>
                {MainTechStack(item.mainTechStack)}
              </div>

              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                {item.position}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                {item.company}
              </h4>
              <div style={{ textAlign: "left", marginTop: "15px" }}>
                {TechnologyBadges(item.technologies)}
              </div>
            </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <VerticalTimeline>
            {/* {work} */}
            <VerticalTimelineElement
              className="lastExperienceIcon"
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>

    </section>
  );
};

export default Experience;
