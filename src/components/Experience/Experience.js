import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Badge } from "react-bootstrap";
import "../../Assets/CSS/Experience.css";
import loopback from "../../Assets/icons/loopback.png";

const Experience = () => {
  const resumeExperience = [
    {
      company: "E-Tech Service Pvt. Ltd.",
      position: "MEAN Stack Developer",
      icon: "devicon-angularjs-plain",
      timePeriod: "1.2020 - Present",
      mainTechStack: ["Angular 6,7,8", "LoopBack 3.x"],
      technologies: ["Angular 8", "LoopBack 3.x", "TypeScript" , "MongoDb"],
    },
    {
      company: "Planify Consultancy India Pvt. Ltd.",
      position: "Front-End Developer",
      image: loopback,
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
  const RandomColour = () => {
    return "#" + ((1<<24)*Math.random() | 0).toString(16)
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
                background: `${RandomColour()}`,
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
    </section>
  );
};

export default Experience;
