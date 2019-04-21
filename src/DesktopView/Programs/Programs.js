import React from "react";
import "./Programs.css";
import { programs } from "../../Kirby_Info/SkillsData";

const Programs = () => {
  return (
    <div>
      <div className="program-container">
        <div className="outer-program">
          <div className="prog-item">{programs[0]}</div>
        </div>
        <div className="outer-program">
          <div className="prog-item">{programs[1]}</div>
        </div>
      </div>
      <div className="program-container">
        <div className="outer-program">
          <div className="prog-item">{programs[2]}</div>
        </div>
        <div className="outer-program">
          <div className="prog-item">{programs[3]}</div>
        </div>
      </div>
      <div className="program-container">
        <div className="outer-program">
          <div className="prog-item">{programs[4]}</div>
        </div>
        <div className="outer-program">
          <div className="prog-item">{programs[5]}</div>
        </div>
      </div>
      <div className="program-container">
        <div className="outer-program">
          <div className="prog-item">{programs[6]}</div>
        </div>
        <div className="outer-program">
          <div className="prog-item">{programs[7]}</div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
