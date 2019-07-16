import React from "react";
import { rank } from "../../Kirby_Info/RankBalls.js";
import { codeSkills } from "../../Kirby_Info/SkillsData.js";
import "./SkillList.css";

const SkillList = () => {
  return (
    <div>
      <h5>FullStack Web Development</h5>
      <div className="skill-key">
        {rank.two} = Familiar || {rank.three} = Comfortable || {rank.four} =
        Skilled || {rank.five} = Expert
      </div>
      <div className="skillRow">
        <div className="skillItem">{codeSkills[1]}</div> {/* JavaScript */}
        <div className="skillItem">{codeSkills[3]}</div> {/* HTML/CSS */}
        <div className="skillItem">{codeSkills[7]}</div> {/* Vue */}
        <div className="skillItem">{codeSkills[13]}</div> {/* C++ */}
        <div className="skillItem">{codeSkills[5]}</div> {/* Redux */}
        <div className="skillItem">{codeSkills[15]}</div> {/* Express.js */}
        <div className="skillItem">{codeSkills[9]}</div> {/* LINUX */}
        <div className="skillItem">{codeSkills[11]}</div> {/* AWS */}
      </div>
      <div className="skillRow">
        <div className="skillItem">{rank.five}</div> {/* JavaScript */}
        <div className="skillItem">{rank.five}</div> {/* HTML/CSS */}
        <div className="skillItem">{rank.four}</div> {/* Vue */}
        <div className="skillItem">{rank.four}</div> {/* C++ */}
        <div className="skillItem">{rank.four}</div> {/* Redux */}
        <div className="skillItem">{rank.four}</div> {/* Express.js */}
        <div className="skillItem">{rank.four}</div> {/* LINUX */}
        <div className="skillItem">{rank.three}</div> {/* AWS */}
      </div>
      <div className="skillRow">
        <div className="skillItem">{codeSkills[0]}</div> {/* React */}
        <div className="skillItem">{codeSkills[6]}</div> {/* Rails */}
        <div className="skillItem">{codeSkills[2]}</div> {/* GraphQL */}
        <div className="skillItem">{codeSkills[8]}</div> {/* SQL */}
        <div className="skillItem">{codeSkills[4]}</div> {/* MongoDb */}
        <div className="skillItem">{codeSkills[10]}</div> {/* React Native */}
        <div className="skillItem">{codeSkills[12]}</div> {/* Node.js */}
        <div className="skillItem">{codeSkills[14]}</div> {/* jQuery */}
      </div>
      <div className="skillRow">
        <div className="skillItem">{rank.five}</div> {/* React */}
        <div className="skillItem">{rank.four}</div> {/* Rails */}
        <div className="skillItem">{rank.three}</div> {/* GraphQL */}
        <div className="skillItem">{rank.three}</div> {/* SQL */}
        <div className="skillItem">{rank.three}</div> {/* MongoDb */}
        <div className="skillItem">{rank.three}</div> {/* React Native */}
        <div className="skillItem">{rank.three}</div> {/* Node.js */}
        <div className="skillItem">{rank.three}</div> {/* jQuery */}
      </div>
    </div>
  );
};

export default SkillList;
