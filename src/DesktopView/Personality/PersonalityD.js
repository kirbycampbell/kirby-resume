import React from "react";
import "./PersonalityD.css";
import { personality } from "../../Kirby_Info/SkillsData.js";

const PersonalityD = () => {
  return (
    <div className="outer-personality">
      <div className="personality-item">
        <div className="inner-personality">{personality.trait1.name}</div>
        <div className="inner-right-personality">{personality.trait1.desc}</div>
      </div>
      <div className="personality-item">
        <div className="inner-personality">{personality.trait2.name}</div>
        <div className="inner-right-personality">{personality.trait2.desc}</div>
      </div>
      <div className="personality-item">
        <div className="inner-personality">{personality.trait3.name}</div>
        <div className="inner-right-personality">{personality.trait3.desc}</div>
      </div>
    </div>
  );
};

export default PersonalityD;
