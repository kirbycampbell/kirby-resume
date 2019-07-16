import React from "react";
import { projects } from "../../Kirby_Info/SkillsData";
import "./ProjectContainerD.css";

const ProjectContainerD = () => {
  return (
    <div>
      {" "}
      <div className="project-containerD">
        <div className="Row1">
          {/* ::: Medium Clone ::: */}
          <a
            href={projects.portfolio.website}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row-desk"
          >
            {projects.portfolio.name1}
            <div className="showDetails-desk">
              <br /> Framework: {projects.portfolio.framework1}
              <br />
              Backend: {projects.portfolio.backend1}{" "}
              {projects.portfolio.hosted1}
            </div>
          </a>
          {/* ::: News Jounal ::: */}
          <a
            href={projects.portfolio.website4}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row-desk"
          >
            {projects.portfolio.name4}
            <div className="showDetails-desk">
              Framework: {projects.portfolio.framework4}
            </div>
          </a>
          {/* ::: Meditation Timer ::: */}
          <a
            href={projects.portfolio.website5}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row-desk"
          >
            {projects.portfolio.name5}

            <div className="showDetails-desk">
              Framework: {projects.portfolio.framework5}
              <br />
              Backend: {projects.portfolio.backend5}
            </div>
          </a>
        </div>
        <div className="Row1">
          {/* ::: Whatsapp Clone ::: */}
          <a
            href={projects.portfolio.website2}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row-desk"
          >
            {projects.portfolio.name2}
            <div className="showDetails-desk">
              Framework: {projects.portfolio.framework2}
              <br /> Backend: {projects.portfolio.backend2}{" "}
              {projects.portfolio.hosted2}
            </div>
          </a>
          {/* ::: Beverage Manager ::: */}
          <a
            href={projects.portfolio.website3}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row-desk"
          >
            {projects.portfolio.name3}
            <div className="showDetails-desk">
              Framework: {projects.portfolio.framework3}
              <br /> Backend: {projects.portfolio.backend3}{" "}
              {projects.portfolio.hosted3}
            </div>
          </a>
          {/* ::: Extras ::: */}
          <a
            href={projects.portfolio.website6}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row-desk"
          >
            {projects.portfolio.name6}
            <div className="showDetails-desk">
              Framework: {projects.portfolio.framework6}
              <br /> Backend: {projects.portfolio.backend6}{" "}
              {projects.portfolio.hosted6}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainerD;
