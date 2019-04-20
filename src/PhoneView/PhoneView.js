import React, { useState } from "react";
import "./Contacts.css";
import Contacts from "./Contacts";
import SkillList from "./SkillList";
import ProjectContainer from "./ProjectContainer";
import NavBar from "./NavBar";
import Education from "./Education";
import Personality from "./Personality/Personality";
import Programs from "./Programs/Programs";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";

const PhoneView = () => {
  const [projectShow, setProjectShow] = useState(false);
  const [skillShow, setSkillShow] = useState(false);
  const [educationShow, setEducationShow] = useState(false);
  const [personalityShow, setPersonalityShow] = useState(false);
  const [programShow, setProgramShow] = useState(false);
  const [experienceShow, setExperienceShow] = useState(false);

  const handleSkillShow = () => {
    setSkillShow(!skillShow);
  };

  const handleProjectShow = () => {
    setProjectShow(!projectShow);
  };

  const handleEducationShow = () => {
    setEducationShow(!educationShow);
  };

  const handlePersonalityShow = () => {
    setPersonalityShow(!personalityShow);
  };

  const handleProgramShow = () => {
    setProgramShow(!programShow);
  };

  const handleExperienceShow = () => {
    setExperienceShow(!experienceShow);
  };
  return (
    <div className="App">
      <div className="above-footer">
        <NavBar />
        <Contacts />
        {/*::::::::: SKILL SECTION ::::::::: */}
        <div className="divider" />
        <div className="titles" onClick={handleSkillShow}>
          Skills
        </div>
        <div className="divider" />
        <div className="skill-container">
          <div className="phone-skills">{skillShow && <SkillList />}</div>
        </div>
        {/*::::::::: PROJECT SECTION ::::::::: */}
        <div className="divider" />
        <div className="titles" onClick={handleProjectShow}>
          Projects
        </div>
        <div className="divider" />
        {projectShow && <ProjectContainer />}
        {!projectShow && <div className="skill-container" />}
        {/*:::::::::: EDUCATION SECTION :::::::::: */}
        <div className="divider" />
        <div className="titles" onClick={handleEducationShow}>
          Education
        </div>
        <div className="divider" />
        {educationShow && <Education />}
        {!educationShow && <div className="skill-container" />}
        {/*:::::::::: PERSONALITY SECTION :::::::::: */}
        <div className="divider" />
        <div className="titles" onClick={handlePersonalityShow}>
          Personality
        </div>
        <div className="divider" />
        {personalityShow && <Personality />}
        {!personalityShow && <div className="skill-container" />}
        {/*:::::::::: PROGRAMS SECTION :::::::::: */}
        <div className="divider" />
        <div className="titles" onClick={handleProgramShow}>
          Programs & Apps
        </div>
        <div className="divider" />
        {programShow && <Programs />}
        {!programShow && <div className="skill-container" />}
        {/*:::::::::: EXPERIENCE SECTION :::::::::: */}
        <div className="divider" />
        <div className="titles" onClick={handleExperienceShow}>
          Experience
        </div>
        <div className="divider" />
        {experienceShow && <Experience />}
        {!experienceShow && <div className="skill-container" />}
      </div>
      <Footer />
    </div>
  );
};

export default PhoneView;
