import React from "react";
import "./Experience.css";
import { experience } from "../../Kirby_Info/SkillsData.js";

const ExperienceD = () => {
  return (
    <div className="experience-outerD">
      <div className="exp-item">
        <div className="inner-exp">{experience.contractOne.years}</div>
        <div className="inner-right-exp">
          {experience.contractOne.name}
          <div className="smaller-text">
            {experience.contractOne.desc}
            <br />
            {experience.contractOne.work}
          </div>
        </div>
      </div>
      <div className="exp-item">
        <div className="inner-exp">{experience.contractTwo.years}</div>
        <div className="inner-right-exp">
          {experience.contractTwo.name}
          <div className="smaller-text">
            {experience.contractTwo.desc}
            <br />
            {experience.contractTwo.work}
          </div>
        </div>
      </div>
      <div className="exp-item">
        <div className="inner-exp">{experience.miningJob.years}</div>
        <div className="inner-right-exp">
          {experience.miningJob.name}
          <div className="smaller-text">
            {experience.miningJob.desc}
            <br />
            {experience.miningJob.work}
          </div>
        </div>
      </div>
      <div className="exp-item">
        <div className="inner-exp">{experience.producerJob.years}</div>
        <div className="inner-right-exp">
          {experience.producerJob.name}
          <div className="smaller-text">
            {experience.producerJob.desc}
            <br />
            {experience.producerJob.work}
          </div>
        </div>
      </div>
      <div className="exp-item">
        <div className="inner-exp">{experience.uberJob.years}</div>
        <div className="inner-right-exp">
          {experience.uberJob.name}
          <div className="smaller-text">
            {experience.uberJob.desc}
            <br />
            {experience.uberJob.work}
          </div>
        </div>
      </div>

      <div className="exp-item">
        <div className="inner-exp">{experience.musicianJob.years}</div>
        <div className="inner-right-exp">
          {experience.musicianJob.name}
          <div className="smaller-text">
            {experience.musicianJob.desc}
            <br />
            {experience.musicianJob.work}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceD;
