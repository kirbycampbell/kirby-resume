import React from "react";
import "./DesktopView.css";
import SkillList from "./Skills/SkillList";
import ProjectContainerD from "./Projects/ProjectContainerD";
import Education from "./Education/Education";
import ExperienceD from "./Experience/Experience";
import PersonalityD from "./Personality/PersonalityD";
import ProgramsD from "./Programs/ProgramsD";
//import useMediaQuery from "@material-ui/core/useMediaQuery";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

const DesktopView = () => {
  const phoneScreen = useMediaQuery("(max-width:900px)");
  const DesktopScreen = useMediaQuery("(min-width:900px)");

  if (DesktopScreen && !phoneScreen) {
    return (
      <div className="AppResume">
        <div className="name-bnr">
          <h1>Kirby Campbell</h1>
        </div>
        <div className="job-bnr">
          <h2 className="dev-title">FullStack Web Developer</h2>
        </div>

        <div className="main-containerResume">
          {" "}
          <div className="left-sidebar">
            <a
              href="https://homepagebucket.s3-us-west-2.amazonaws.com/Kirby_Campbell_2019_Resume_wFooter.pdf"
              className="pdf-btton"
              target="_blank"
              data-rel="external"
              rel="noopener noreferrer"
            >
              Click Here For Resume PDF
            </a>
            <div className="left-brdr">
              <img
                className="prof-pic"
                src="https://pbs.twimg.com/profile_images/1106256070492614657/Qra_Davu_400x400.jpg"
                alt="prof-pic"
              />
            </div>
            <div className="divider" />
            {/*~~~~~~~~~~~ CONTACT INFO SECTION ~~~~~~~~~~~~*/}
            <div className="spacer2" />
            <div className="left-brdr contact">
              <i className="fas fa-mobile-alt" />
              <a
                className="cont-item"
                href="tel:15039284143"
                data-rel="external"
                rel="noopener noreferrer"
              >
                1(503)-928-4143
              </a>
              <i className="far fa-envelope" />

              <a className="cont-item" href="mailto://jkirbycampbell@gmail.com">
                jkirbycampbell@gmail.com
              </a>
              <i className="fas fa-map-pin" />
              <a href="maps" className="cont-item">
                Portland, OR
              </a>
              <i className="far fa-id-badge" />
              <a
                target="_blank"
                href="http://www.jkirbycampbell.com"
                data-rel="external"
                className="cont-item"
                rel="noopener noreferrer"
              >
                www.jkirbycampbell.com
              </a>
              <i className="fab fa-github" />
              <a
                target="_blank"
                href="https://github.com/kirbycampbell"
                data-rel="external"
                className="cont-item"
                rel="noopener noreferrer"
              >
                Kirby's Github
              </a>
            </div>

            <div className="spacer2" />
            {/*~~~~~~~~~~~ PROJECTS SECTION ~~~~~~~~~~~~*/}
            <div className="divider" />
            <div className="titles">Projects</div>
            <div className="divider" />
            <ProjectContainerD />
            <div className="spacer2" />
            <div className="spacer2" />
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
        {/* <Footer /> */}
      </div>
    );
  } else if (phoneScreen) {
    return (
      <div className="AppResume">
        <div className="name-bnr">
          <h1>Kirby Campbell</h1>
        </div>
        <div className="job-bnr">
          <h2 className="dev-title">FullStack Web Developer</h2>
        </div>

        <div className="main-containerResume">
          {" "}
          <a
            href="https://homepagebucket.s3-us-west-2.amazonaws.com/Kirby_Campbell_2019_Resume_wFooter.pdf"
            className="pdf-btton"
            target="_blank"
            data-rel="external"
            rel="noopener noreferrer"
          >
            Click Here For Resume PDF
          </a>
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
            <div className="spacer2" />
            <div className="left-brdr contact">
              <i className="fas fa-mobile-alt" />
              <a
                className="cont-item"
                href="tel:503-928-4143"
                data-rel="external"
                rel="noopener noreferrer"
              >
                503-928-4143
              </a>
              <i className="far fa-envelope" />

              <a className="cont-item" href="mailto://jkirbycampbell@gmail.com">
                jkirbycampbell@gmail.com
              </a>
              <i className="fas fa-map-pin" />
              <a href="maps" className="cont-item">
                Portland, OR
              </a>
              <i className="far fa-id-badge" />
              <a
                target="_blank"
                href="http://www.jkirbycampbell.com"
                data-rel="external"
                className="cont-item"
                rel="noopener noreferrer"
              >
                www.jkirbycampbell.com
              </a>
            </div>

            {/*~~~~~~::::::::::::::::::::~~~~~ RIGHT SIDE ~~~~~:::::::::::::::::::::::::~~~~~~~*/}
            <div className="right-block">
              {/* <div className="spacer" /> */}
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
                <div className="spacer2" />
              </div>
            </div>

            {/*~~~~~~~~~~~ PROJECTS SECTION ~~~~~~~~~~~~*/}
            <div className="divider" />
            <div className="titles">Projects</div>
            <div className="divider" />
            <ProjectContainerD />
            <div className="spacer2" />
            <div className="spacer2" />
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
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default DesktopView;
