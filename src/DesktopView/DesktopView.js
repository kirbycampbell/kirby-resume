import React from "react";
import "./DesktopView.css";
import SkillList from "./Skills/SkillList";
import ProjectContainerD from "./Projects/ProjectContainerD";
import Education from "./Education/Education";
import ExperienceD from "./Experience/Experience";
import PersonalityD from "./Personality/PersonalityD";
import ProgramsD from "./Programs/ProgramsD";

const DesktopView = () => {
  return (
    <div className="App">
      <div className="border" />
      <div className="name-bnr">
        <h1>Kirby Campbell</h1>
      </div>
      <div className="job-bnr">
        <h2>FullStack Web Developer</h2>
      </div>

      <div className="main-container">
        {" "}
        <div className="left-sidebar">
          <div className="left-brdr">
            <img
              className="prof-pic"
              src="https://pbs.twimg.com/profile_images/1106256070492614657/Qra_Davu_400x400.jpg"
              alt="prof-pic"
            />
          </div>
          <div className="divider" />
          {/*~~~~~~~~~~~ CONTACT INFO SECTION ~~~~~~~~~~~~*/}
          <div className="left-brdr contact">
            <i className="fas fa-mobile-alt" />
            <h4>+ 1 337-303-8848</h4>
            <i className="far fa-envelope" />
            <h4 style={{ fontSize: "16px" }}>jKirbyCampbell@gmail.com</h4>
            <i className="fas fa-map-pin" />
            <h4>Portland, OR</h4>
            <i className="far fa-id-badge" />
            <h4>www.jkirbycampbell.com</h4>
          </div>

          <div className="spacer" />
          {/*~~~~~~~~~~~ PROJECTS SECTION ~~~~~~~~~~~~*/}
          <div className="divider" />
          <div className="titles">Projects</div>
          <div className="divider" />
          <ProjectContainerD />
          <div className="spacer" />
          {/*~~~~~~~~~~~ EDUCATION SECTION ~~~~~~~~~~~~*/}
          <div className="divider" />
          <div className="titles">Programs</div>
          <div className="divider" />
          <ProgramsD />
          <div className="spacer" />

          {/*~~~~~~~~~~~ PERSONALITY SECTION ~~~~~~~~~~~~*/}
          <div className="divider" />
          <div className="titles">Personality</div>
          <div className="divider" />
          <PersonalityD />
        </div>
        {/*~~~~~~::::::::::::::::::::~~~~~ RIGHT SIDE ~~~~~:::::::::::::::::::::::::~~~~~~~*/}
        <div className="right-block">
          <div className="spacer" />
          <div className="spacer" />

          <div className="right-grid">
            {/*~~~~~~~~~~~ SKILLS SECTION ~~~~~~~~~~~~*/}
            <div className="divider" />
            <div className="titles">Skills</div>
            <div className="divider" />
            <div className="skill-container">
              <div className="phone-skills">
                <SkillList />
              </div>
            </div>
            <div className="spacer" />
            {/*~~~~~~~~~~~ PROJECTS SECTION ~~~~~~~~~~~~*/}
            <div className="divider" />
            <div className="titles">Experience</div>
            <div className="divider" />
            <div className="spacer" />

            <ExperienceD />
            <div className="spacer" />
            {/*~~~~~~~~~~~ EDUCATION SECTION ~~~~~~~~~~~~*/}
            <div className="divider" />
            <div className="titles">Education</div>
            <div className="divider" />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesktopView;
