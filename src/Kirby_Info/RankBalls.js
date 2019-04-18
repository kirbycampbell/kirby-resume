import React from "react";
import "./RankBalls.css";

export const fiveBalls = (
  <React.Fragment>
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
  </React.Fragment>
);

export const fourBalls = (
  <React.Fragment>
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
    <i className="far fa-circle balls" />
  </React.Fragment>
);

export const threeBalls = (
  <React.Fragment>
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
    <i className="far fa-circle balls" />
    <i className="far fa-circle balls" />
  </React.Fragment>
);

export const twoBalls = (
  <React.Fragment>
    <i className="fas fa-circle balls" />
    <i className="fas fa-circle balls" />
    <i className="far fa-circle balls" />
    <i className="far fa-circle balls" />
    <i className="far fa-circle balls" />
  </React.Fragment>
);

export const rank = {
  five: fiveBalls,
  four: fourBalls,
  three: threeBalls,
  two: twoBalls
};
