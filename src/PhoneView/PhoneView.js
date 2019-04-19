import React from "react";
import { contact } from "../Kirby_Info/ContactData";
import { rank } from "../Kirby_Info/RankBalls.js";
import { codeSkills } from "../Kirby_Info/SkillsData.js";
import "./Contacts.css";
import Contacts from "./Contacts";

const PhoneView = () => {
  return (
    <div className="App">
      <div className="border" />
      <div className="backgroundTop">
        <img
          className="pic-banner"
          src="https://i.imgur.com/vQ74c4y.jpg"
          alt="ocean"
        />
        <div className="name-pic">
          <img
            className="phone-prof-pic"
            src="https://pbs.twimg.com/profile_images/1106256070492614657/Qra_Davu_400x400.jpg"
            alt="prof-pic"
          />
          <h1>{contact.name}</h1>
          <i className="fas fa-bars phone-bars" />
        </div>
      </div>
      <Contacts />
      <div className="skill-container">
        <div className="phone-skills">
          <div className="skills-title">Skills</div>

          <div>
            <h5>FullStack Web Development</h5>
            <div className="skill-key">
              {rank.two} = Familiar || {rank.three} = Comfortable || {rank.four}{" "}
              = Skilled || {rank.five} = Expert
            </div>
            <div className="skillRow">
              <div className="skillItem">{codeSkills[0]}</div> {/* React */}
              <div className="skillItem">{codeSkills[4]}</div> {/* GitHub */}
              <div className="skillItem">{codeSkills[6]}</div> {/* Rails */}
              <div className="skillItem">{codeSkills[2]}</div> {/* GraphQL */}
              <div className="skillItem">{codeSkills[8]}</div> {/* SQL */}
              <div className="skillItem">{codeSkills[10]}</div> {/* AppSync */}
              <div className="skillItem">{codeSkills[12]}</div> {/* Heroku */}
              <div className="skillItem">{codeSkills[14]}</div> {/* jQuery */}
            </div>
            <div className="skillRow">
              <div className="skillItem">{rank.five}</div> {/* React */}
              <div className="skillItem">{rank.five}</div> {/* GitHub */}
              <div className="skillItem">{rank.four}</div> {/* Rails */}
              <div className="skillItem">{rank.three}</div> {/* GraphQL */}
              <div className="skillItem">{rank.three}</div> {/* SQL */}
              <div className="skillItem">{rank.three}</div> {/* AppSync */}
              <div className="skillItem">{rank.three}</div> {/* Heroku */}
              <div className="skillItem">{rank.three}</div> {/* jQuery */}
            </div>
            <div className="skillRow">
              <div className="skillItem">{codeSkills[1]}</div>{" "}
              {/* JavaScript */}
              <div className="skillItem">{codeSkills[3]}</div> {/* HTML/CSS */}
              <div className="skillItem">{codeSkills[13]}</div> {/* Ruby */}
              <div className="skillItem">{codeSkills[5]}</div> {/* Redux */}
              <div className="skillItem">{codeSkills[9]}</div> {/* Amplify */}
              <div className="skillItem">{codeSkills[11]}</div> {/* Firebase */}
              <div className="skillItem">{codeSkills[15]}</div> {/* C++ */}
              <div className="skillItem">{codeSkills[7]}</div> {/* Vue */}
            </div>
            <div className="skillRow">
              <div className="skillItem">{rank.five}</div> {/* JavaScript */}
              <div className="skillItem">{rank.five}</div> {/* HTML/CSS */}
              <div className="skillItem">{rank.four}</div> {/* Ruby */}
              <div className="skillItem">{rank.four}</div> {/* Redux */}
              <div className="skillItem">{rank.four}</div> {/* Amplify */}
              <div className="skillItem">{rank.three}</div> {/* Firebase */}
              <div className="skillItem">{rank.three}</div> {/* C++ */}
              <div className="skillItem">{rank.two}</div> {/* Vue */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneView;
