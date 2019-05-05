import React, { useState } from "react";
import "./ProjectContainer.css";
import { projects } from "../../Kirby_Info/SkillsData";

const ProjectContainer = () => {
  const mouseEnter = name => {
    console.log(name);
  };
  const mouseLeave = name => {
    console.log(name);
  };
  return (
    <div>
      {" "}
      <div className="project-container">
        <div className="RowPhone">
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projects.portfolio.name1)}
            onMouseLeave={() => mouseLeave(projects.portfolio.name1)}
          >
            {projects.portfolio.name1}
            <br /> Framework: {projects.portfolio.framework1}
            <br /> Backend: {projects.portfolio.backend1}
            <br /> Hosted On: {projects.portfolio.hosted1}
          </div>

          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projects.portfolio.name4)}
            onMouseLeave={() => mouseLeave(projects.portfolio.name4)}
          >
            {projects.portfolio.name4}
            <br /> Framework: {projects.portfolio.framework4}
          </div>
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projects.portfolio.name5)}
            onMouseLeave={() => mouseLeave(projects.portfolio.name5)}
          >
            {projects.portfolio.name5}
            <br /> Framework: {projects.portfolio.framework5}
          </div>
        </div>
        <div className="RowPhone">
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projects.portfolio.name2)}
            onMouseLeave={() => mouseLeave(projects.portfolio.name2)}
          >
            {projects.portfolio.name2}
            <br /> Framework: {projects.portfolio.framework2}
            <br /> Backend: {projects.portfolio.backend2}
            <br /> Hosted On: {projects.portfolio.hosted2}
          </div>
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projects.portfolio.name3)}
            onMouseLeave={() => mouseLeave(projects.portfolio.name3)}
          >
            {projects.portfolio.name3}
            <br /> Framework: {projects.portfolio.framework3}
            <br /> Backend: {projects.portfolio.backend3}
            <br /> Hosted On: {projects.portfolio.hosted3}
          </div>
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter("Flatiron")}
            onMouseLeave={() => mouseLeave("Flatiron")}
          >
            Extras
            <br /> From Flatiron Bootcamp
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
