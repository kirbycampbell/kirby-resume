import React, { useState } from "react";
import "./ProjectContainer.css";
import { projects } from "../../Kirby_Info/SkillsData";

const ProjectContainer = () => {
  const [style, setFadeIn] = useState({
    proj: "",
    in: false,
    style: "project-row-phone"
  });
  const projItem = projects.portfolio;

  const mouseEnter = name => {
    setFadeIn({ proj: name, in: true });
  };
  const mouseLeave = name => {
    setFadeIn({ proj: name, in: false });
  };

  return (
    <div>
      {" "}
      <div className="project-container">
        <div className="RowPhone">
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projItem.name1)}
            onMouseLeave={() => mouseLeave(projItem.name1)}
          >
            <div
              className={`${
                style.proj === projItem.name1 && style.in
                  ? "hidden"
                  : "showProject"
              }`}
            >
              {" "}
              {projItem.name1}
            </div>

            <div
              className={`${
                style.proj === projItem.name1 && style.in
                  ? "showDetails"
                  : "hidden"
              }`}
            >
              <br /> Framework: {projItem.framework1}
              <br /> Backend: {projItem.backend1}
              <br /> Hosted On: {projItem.hosted1}{" "}
            </div>
          </div>

          <div
            className={
              "project-row-phone " +
              `${
                style.proj === projItem.name4 && style.in ? "hovered" : "normal"
              }`
            }
            onMouseEnter={() => mouseEnter(projItem.name4)}
            onMouseLeave={() => mouseLeave(projItem.name4)}
          >
            {projItem.name4}
            <br /> Framework: {projItem.framework4}
          </div>
          <div
            className={
              "project-row-phone " +
              `${style.proj === projItem.name5 ? "hovered" : null}`
            }
            onMouseEnter={() => mouseEnter(projItem.name5)}
            onMouseLeave={() => mouseLeave(projItem.name5)}
          >
            {projItem.name5}
            <br /> Framework: {projItem.framework5}
          </div>
        </div>
        <div className="RowPhone">
          <div
            className={
              "project-row-phone " +
              `${style.proj === projItem.name2 ? "hovered" : null}`
            }
            onMouseEnter={() => mouseEnter(projItem.name2)}
            onMouseLeave={() => mouseLeave(projItem.name2)}
          >
            {projItem.name2}
            <br /> Framework: {projItem.framework2}
            <br /> Backend: {projItem.backend2}
            <br /> Hosted On: {projItem.hosted2}
          </div>
          <div
            className={
              "project-row-phone " +
              `${style.proj === projItem.name3 ? "hovered" : null}`
            }
            onMouseEnter={() => mouseEnter(projItem.name3)}
            onMouseLeave={() => mouseLeave(projItem.name3)}
          >
            {projItem.name3}
            <br /> Framework: {projItem.framework3}
            <br /> Backend: {projItem.backend3}
            <br /> Hosted On: {projItem.hosted3}
          </div>
          <div
            className={
              "project-row-phone " +
              `${style.proj === "Flatiron" ? "hovered" : null}`
            }
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
