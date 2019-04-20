import React from "react";
import "./Education.css";
import { education } from "../Kirby_Info/SkillsData.js";

const Education = () => {
  return (
    <div className="outer-education">
      <div className="edu-item">
        <div className="inner-education">{education.coding.date}</div>
        <div className="inner-right-edu">
          {education.coding.name}
          <br />
          {education.coding.explain}
        </div>
      </div>
      <div className="edu-item">
        <div className="inner-education">{education.college.date}</div>
        <div className="inner-right-edu">
          {education.college.name}
          <br />
          {education.college.explain}
        </div>
      </div>
    </div>
  );
};

export default Education;
