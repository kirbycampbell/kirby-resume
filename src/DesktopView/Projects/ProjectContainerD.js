import React from "react";
import { projects } from "../../Kirby_Info/SkillsData";
import "./ProjectContainerD.css";

const ProjectContainerD = () => {
  return (
    <div>
      {" "}
      <div className="project-containerD">
        <div className="Row1">
          <div className="project-row-left">
            {projects.portfolio.name1}
            <br /> Framework: {projects.portfolio.framework1}
            <br /> Backend: {projects.portfolio.backend1}
            <br /> Hosted On: {projects.portfolio.hosted1}
          </div>

          <div className="project-row-left">
            {projects.portfolio.name4}
            <br /> Framework: {projects.portfolio.framework4}
          </div>
          <div className="project-row-left">
            {projects.portfolio.name5}
            <br /> Framework: {projects.portfolio.framework5}
          </div>
        </div>
        <div className="Row1">
          <div className="project-row-left">
            {projects.portfolio.name2}
            <br /> Framework: {projects.portfolio.framework2}
            <br /> Backend: {projects.portfolio.backend2}
            <br /> Hosted On: {projects.portfolio.hosted2}
          </div>
          <div className="project-row-left">
            {projects.portfolio.name3}
            <br /> Framework: {projects.portfolio.framework3}
            <br /> Backend: {projects.portfolio.backend3}
            <br /> Hosted On: {projects.portfolio.hosted3}
          </div>
          <div className="project-row-left">
            Extras
            <br /> From Flatiron Bootcamp
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainerD;
