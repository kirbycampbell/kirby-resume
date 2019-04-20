import React from "react";
import { contact } from "../Kirby_Info/ContactData";
import "./Contacts.css";
import Contacts from "./Contacts";
import SkillList from "./SkillList";

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

          <SkillList />
        </div>
      </div>
      <div className="divider" />
      <div className="project-container">Projects here</div>
    </div>
  );
};

export default PhoneView;
