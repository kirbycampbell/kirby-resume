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
        <div className="skillItemPhone">{codeSkills[0]}</div> {/* React */}
        <div className="skillItemPhone">{codeSkills[4]}</div> {/* GitHub */}
        <div className="skillItemPhone">{codeSkills[6]}</div> {/* Rails */}
        <div className="skillItemPhone">{codeSkills[2]}</div> {/* GraphQL */}
        <div className="skillItemPhone">{codeSkills[8]}</div> {/* SQL */}
        <div className="skillItemPhone">{codeSkills[10]}</div> {/* AppSync */}
        <div className="skillItemPhone">{codeSkills[12]}</div> {/* Heroku */}
        <div className="skillItemPhone">{codeSkills[14]}</div> {/* jQuery */}
      </div>
      <div className="skillRow">
        <div className="skillItemPhone">{rank.five}</div> {/* React */}
        <div className="skillItemPhone">{rank.five}</div> {/* GitHub */}
        <div className="skillItemPhone">{rank.four}</div> {/* Rails */}
        <div className="skillItemPhone">{rank.three}</div> {/* GraphQL */}
        <div className="skillItemPhone">{rank.three}</div> {/* SQL */}
        <div className="skillItemPhone">{rank.three}</div> {/* AppSync */}
        <div className="skillItemPhone">{rank.three}</div> {/* Heroku */}
        <div className="skillItemPhone">{rank.three}</div> {/* jQuery */}
      </div>
      <div className="skillRow">
        <div className="skillItemPhone">{codeSkills[1]}</div> {/* JavaScript */}
        <div className="skillItemPhone">{codeSkills[3]}</div> {/* HTML/CSS */}
        <div className="skillItemPhone">{codeSkills[13]}</div> {/* Ruby */}
        <div className="skillItemPhone">{codeSkills[5]}</div> {/* Redux */}
        <div className="skillItemPhone">{codeSkills[9]}</div> {/* Amplify */}
        <div className="skillItemPhone">{codeSkills[11]}</div> {/* Firebase */}
        <div className="skillItemPhone">{codeSkills[15]}</div> {/* C++ */}
        <div className="skillItemPhone">{codeSkills[7]}</div> {/* Vue */}
      </div>
      <div className="skillRow">
        <div className="skillItemPhone">{rank.five}</div> {/* JavaScript */}
        <div className="skillItemPhone">{rank.five}</div> {/* HTML/CSS */}
        <div className="skillItemPhone">{rank.four}</div> {/* Ruby */}
        <div className="skillItemPhone">{rank.four}</div> {/* Redux */}
        <div className="skillItemPhone">{rank.four}</div> {/* Amplify */}
        <div className="skillItemPhone">{rank.three}</div> {/* Firebase */}
        <div className="skillItemPhone">{rank.three}</div> {/* C++ */}
        <div className="skillItemPhone">{rank.two}</div> {/* Vue */}
      </div>
    </div>
  );
};

export default SkillList;
