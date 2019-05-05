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
          {/* :::::::::::::::::::::: Item 1 :::::::::::::::::::::: */}
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projItem.name1)}
            onMouseLeave={() => mouseLeave(projItem.name1)}
          >
            <div
              className={`${
                style.proj === projItem.name1 && style.in
                  ? "hiddenProject"
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
                  : "hiddenDetails"
              }`}
            >
              <span> Framework: {projItem.framework1}</span>
              <span>Backend: {projItem.backend1}</span>
              <span> Hosted On: {projItem.hosted1}</span>
            </div>
          </div>

          {/* :::::::::::::::::::::: Item 1 :::::::::::::::::::::: */}
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projItem.name4)}
            onMouseLeave={() => mouseLeave(projItem.name4)}
          >
            <div
              className={`${
                style.proj === projItem.name4 && style.in
                  ? "hiddenProject"
                  : "showProject"
              }`}
            >
              {" "}
              {projItem.name4}
            </div>

            <div
              className={`${
                style.proj === projItem.name4 && style.in
                  ? "showDetails"
                  : "hiddenDetails"
              }`}
            >
              <span> Framework: {projItem.framework4}</span>
              <span>Backend: {projItem.backend4}</span>
              <span> Hosted On: {projItem.hosted4}</span>
            </div>
          </div>
          {/* :::::::::::::::::::::: Item 1 :::::::::::::::::::::: */}
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projItem.name5)}
            onMouseLeave={() => mouseLeave(projItem.name5)}
          >
            <div
              className={`${
                style.proj === projItem.name5 && style.in
                  ? "hiddenProject"
                  : "showProject"
              }`}
            >
              {" "}
              {projItem.name5}
            </div>

            <div
              className={`${
                style.proj === projItem.name5 && style.in
                  ? "showDetails"
                  : "hiddenDetails"
              }`}
            >
              <span> Framework: {projItem.framework5}</span>
              <span>Backend: {projItem.backend5}</span>
              <span> Hosted On: {projItem.hosted5}</span>
            </div>
          </div>
        </div>
        <div className="RowPhone">
          {/* :::::::::::::::::::::: Item 1 :::::::::::::::::::::: */}
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projItem.name2)}
            onMouseLeave={() => mouseLeave(projItem.name2)}
          >
            <div
              className={`${
                style.proj === projItem.name2 && style.in
                  ? "hiddenProject"
                  : "showProject"
              }`}
            >
              {" "}
              {projItem.name2}
            </div>

            <div
              className={`${
                style.proj === projItem.name2 && style.in
                  ? "showDetails"
                  : "hiddenDetails"
              }`}
            >
              <span> Framework: {projItem.framework2}</span>
              <span>Backend: {projItem.backend2}</span>
              <span> Hosted On: {projItem.hosted2}</span>
            </div>
          </div>
          {/* :::::::::::::::::::::: Item 1 :::::::::::::::::::::: */}
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter(projItem.name3)}
            onMouseLeave={() => mouseLeave(projItem.name3)}
          >
            <div
              className={`${
                style.proj === projItem.name3 && style.in
                  ? "hiddenProject"
                  : "showProject"
              }`}
            >
              {" "}
              {projItem.name3}
            </div>

            <div
              className={`${
                style.proj === projItem.name3 && style.in
                  ? "showDetails"
                  : "hiddenDetails"
              }`}
            >
              <span> Framework: {projItem.framework3}</span>
              <span>Backend: {projItem.backend3}</span>
              <span> Hosted On: {projItem.hosted3}</span>
            </div>
          </div>
          {/* :::::::::::::::::::::: Item 1 :::::::::::::::::::::: */}
          <div
            className="project-row-phone"
            onMouseEnter={() => mouseEnter("Flatiron")}
            onMouseLeave={() => mouseLeave("Flatiron")}
          >
            <div
              className={`${
                style.proj === "Flatiron" && style.in
                  ? "hiddenProject"
                  : "showProject"
              }`}
            >
              {" "}
              {"Flatiron"}
            </div>

            <div
              className={`${
                style.proj === "Flatiron" && style.in
                  ? "showDetails"
                  : "hiddenDetails"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
