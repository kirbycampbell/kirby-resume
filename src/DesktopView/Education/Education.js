import React from "react";
import "./Education.css";
import { education } from "../../Kirby_Info/SkillsData.js";

const Education = () => {
  return (
    <div className="outer-education">
      <div className="edu-item">
        <div className="inner-education">{education.coding.date}</div>
        <div className="inner-right-edu">
          {education.coding.name}

          <div className="explain">{education.coding.explain}</div>
        </div>
      </div>
      <div className="edu-item">
        <div className="inner-education">{education.college.date}</div>
        <div className="inner-right-edu">
          {education.college.name}

          <div className="explain">{education.college.explain}</div>
        </div>
      </div>
      <div className="edu-item">
        <div className="inner-education">{education.Udacity.date}</div>
        <div className="inner-right-edu">
          {education.Udacity.name}

          <div className="explain">{education.Udacity.explain}</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
