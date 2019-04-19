import React, { useState } from "react";
import { contact } from "../Kirby_Info/ContactData";
import { rank } from "../Kirby_Info/RankBalls.js";
import { codeSkills } from "../Kirby_Info/SkillsData.js";
import "./Contacts.css";
import Contacts from "./Contacts";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const PhoneView = () => {
  const [inProp, setInProp] = useState(false);
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
          <h1>Skills</h1>
          <div>
            <h5>FullStack Web Development</h5>
            <div className="skillRow">
              <div className="skillItem">{codeSkills[0]}</div>

              <div className="skillItem">{codeSkills[2]}</div>
              <div className="skillItem">{codeSkills[4]}</div>
            </div>
            <div className="skillRow">
              <div className="skillItem">{rank.five}</div>

              <div className="skillItem">{rank.three}</div>
              <div className="skillItem">{rank.five}</div>
            </div>
            <div className="skillRow">
              <div className="skillItem">{codeSkills[1]}</div>

              <div className="skillItem">{codeSkills[3]}</div>
              <div className="skillItem">{codeSkills[5]}</div>
            </div>
            <div className="skillRow">
              <div className="skillItem">{rank.five}</div>

              <div className="skillItem">{rank.five}</div>
              <div className="skillItem">{rank.four}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneView;
