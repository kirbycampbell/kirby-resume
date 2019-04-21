import React from "react";
import "./Experience.css";
import { experience } from "../../Kirby_Info/SkillsData.js";

const ExperienceD = () => {
  return (
    <div className="experience-outerD">
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
        <div className="inner-exp">{experience.stockJob.years}</div>
        <div className="inner-right-exp">
          {experience.stockJob.name}
          <div className="smaller-text">
            {experience.stockJob.desc}
            <br />
            {experience.stockJob.work}
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
        <div className="inner-exp">{experience.airbnbJob.years}</div>
        <div className="inner-right-exp">
          {experience.airbnbJob.name}
          <div className="smaller-text">
            {experience.airbnbJob.desc}
            <br />
            {experience.airbnbJob.work}
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
