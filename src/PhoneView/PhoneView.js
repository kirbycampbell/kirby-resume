import React from "react";
import { contact } from "../Kirby_Info/ContactData";
import "./Contacts.css";
import Contacts from "./Contacts";
import SkillList from "./SkillList";
import { projects } from "../Kirby_Info/SkillsData";

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
      <div className="project-title">Projects</div>
      <div className="project-container">
        <div className="Row1">
          <div className="project-row-left">
            {projects.portfolio.name1}
            <br /> {projects.portfolio.framework1} {projects.portfolio.backend1}{" "}
            {projects.portfolio.hosted1}
          </div>
          <div className="project-row-left">
            {projects.portfolio.name3}
            <br /> {projects.portfolio.framework3} {projects.portfolio.backend3}{" "}
            {projects.portfolio.hosted3}
          </div>
        </div>
        <div className="Row1">
          <div className="project-row-left">
            {projects.portfolio.name2}
            <br /> {projects.portfolio.framework2} {projects.portfolio.backend2}{" "}
            {projects.portfolio.hosted2}
          </div>
          <div className="project-row-left">
            {projects.portfolio.name4}
            <br /> {projects.portfolio.framework4} {projects.portfolio.backend4}{" "}
            {projects.portfolio.hosted4}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneView;
