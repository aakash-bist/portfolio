import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { col, Badge } from "react-bootstrap";
import "../../style.css";

const Experience = () => {
  const resumeExperience = [
    {
      company: "Planify Consultancy India Pvt. Ltd.",
      title: "Front-End Developer",
      timePeriod: "8.2019 - 11.2019",
      mainTechStack: ["Angular 6"],
      technologies: ["Angular 6", "Bootstrap 4", "TypeScript"],
    },
    {
      company: "E-Tech Service Pvt. Ltd.",
      title: "MEAN Stack Developer",
      timePeriod: "1.2020 - Present",
      mainTechStack: ["Angular 6,7,8"],
      technologies: ["Angular 8", "LoopBack 3.x", "TypeScript"],
    },
  ];

  return (
    <section>
      <VerticalTimeline>
        {resumeExperience.map((item, i) =>
          item.technologies.map((tech, techIndex) => (
            <div key={techIndex}>
              <div>
                <Badge variant="light">{tech}</Badge>
              </div>
              <div>{item.company}</div>
            </div>
          ))
        )}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="12-12"
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fab fa-angular experience-icon"></i>}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {"Angular"}
          </div>

          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {"Angular Dev"}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {"E-Tech"}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>
            {"Angular"}
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
