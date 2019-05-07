import React from "react";
import { projects } from "../../Kirby_Info/SkillsData";
import "./ProjectContainerD.css";

const ProjectContainerD = () => {
  return (
    <div>
      {" "}
      <div className="project-containerD">
        <div className="Row1">
          <div className="project-row-desk">
            {projects.portfolio.name1}
            <div className="showDetails-desk">
              <br /> Framework: {projects.portfolio.framework1}
              <br /> Backend: {projects.portfolio.backend1}{" "}
              {projects.portfolio.hosted1}
            </div>
          </div>

          <div className="project-row-desk">
            {projects.portfolio.name4}
            <div className="showDetails-desk">
              <br /> Framework: {projects.portfolio.framework4}
            </div>
          </div>
          <div className="project-row-desk">
            {projects.portfolio.name5}
            <div className="showDetails-desk">
              <br /> Framework: {projects.portfolio.framework5}
            </div>
          </div>
        </div>
        <div className="Row1">
          <div className="project-row-desk">
            {projects.portfolio.name2}
            <div className="showDetails-desk">
              <br /> Framework: {projects.portfolio.framework2}
              <br /> Backend: {projects.portfolio.backend2}{" "}
              {projects.portfolio.hosted2}
            </div>
          </div>
          <div className="project-row-desk">
            {projects.portfolio.name3}
            <div className="showDetails-desk">
              <br /> Framework: {projects.portfolio.framework3}
              <br /> Backend: {projects.portfolio.backend3}{" "}
              {projects.portfolio.hosted3}
            </div>
          </div>
          <div className="project-row-desk">
            Extras
            <div className="showDetails-desk">
              <br /> From Flatiron Bootcamp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainerD;
