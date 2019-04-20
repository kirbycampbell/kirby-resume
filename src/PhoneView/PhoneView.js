import React, { useState } from "react";
import "./Contacts.css";
import Contacts from "./Contacts";
import SkillList from "./SkillList";
import ProjectContainer from "./ProjectContainer";
import NavBar from "./NavBar";

const PhoneView = () => {
  const [projectShow, setProjectShow] = useState(false);
  const [skillShow, setSkillShow] = useState(false);

  const handleSkillShow = () => {
    setSkillShow(!skillShow);
  };

  const handleProjectShow = () => {
    setProjectShow(!projectShow);
  };
  return (
    <div className="App">
      <div className="border" />
      <NavBar />
      <Contacts />
      {/*::::::::: SKILL SECTION ::::::::: */}
      <div className="divider" />
      <div className="skills-title" onClick={handleSkillShow}>
        Skills
      </div>
      <div className="divider" />
      <div className="skill-container">
        <div className="phone-skills">{skillShow && <SkillList />}</div>
      </div>
      {/*::::::::: PROJECT SECTION ::::::::: */}
      <div className="divider" />
      <div className="project-title" onClick={handleProjectShow}>
        Projects
      </div>
      <div className="divider" />
      {projectShow && <ProjectContainer />}
      {!projectShow && <div className="skill-container" />}
      {/*:::::::::: EDUCATION SECTION :::::::::: */}
      <div className="divider" />
      <div className="education-title">Education</div>
      <div className="divider" />
    </div>
  );
};

export default PhoneView;
