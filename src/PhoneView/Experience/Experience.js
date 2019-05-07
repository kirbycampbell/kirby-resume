import React from "react";
import "./Experience.css";
import { experience } from "../../Kirby_Info/SkillsData.js";

const Experience = () => {
  return (
    <div className="experience-outer">
      <div className="exp-item-phone">
        <div className="inner-exp">{experience.producerJob.years}</div>
        <div className="inner-right-exp">
          {experience.producerJob.name}
          <br />
          {experience.producerJob.desc}
          <br />
          {experience.producerJob.work}
        </div>
      </div>
      <div className="exp-item-phone">
        <div className="inner-exp">{experience.stockJob.years}</div>
        <div className="inner-right-exp">
          {experience.stockJob.name}
          <br />
          {experience.stockJob.desc}
          <br />
          {experience.stockJob.work}
        </div>
      </div>
      <div className="exp-item-phone">
        <div className="inner-exp">{experience.miningJob.years}</div>
        <div className="inner-right-exp">
          {experience.miningJob.name}
          <br />
          {experience.miningJob.desc}
          <br />
          {experience.miningJob.work}
        </div>
      </div>
      <div className="exp-item-phone">
        <div className="inner-exp">{experience.uberJob.years}</div>
        <div className="inner-right-exp">
          {experience.uberJob.name}
          <br />
          {experience.uberJob.desc}
          <br />
          {experience.uberJob.work}
        </div>
      </div>
      <div className="exp-item-phone">
        <div className="inner-exp">{experience.airbnbJob.years}</div>
        <div className="inner-right-exp">
          {experience.airbnbJob.name}
          <br />
          {experience.airbnbJob.desc}
          <br />
          {experience.airbnbJob.work}
        </div>
      </div>

      <div className="exp-item-phone">
        <div className="inner-exp">{experience.musicianJob.years}</div>
        <div className="inner-right-exp">
          {experience.musicianJob.name}
          <br />
          {experience.musicianJob.desc}
          <br />
          {experience.musicianJob.work}
        </div>
      </div>
    </div>
  );
};

export default Experience;
