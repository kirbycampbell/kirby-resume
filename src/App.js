import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="border" />
        <div className="name-bnr">
          <h1>Kirby Campbell</h1>
        </div>
        <div className="job-bnr">
          <h1>FullStack Web Developer</h1>
        </div>
        <div className="main-container">
          {" "}
          <div className="left-sidebar">
            <div className="left-grid1">Row 1</div>
            <div className="left-grid2">Row 2</div>
            <div className="left-grid3">Row 3</div>
            <div className="left-grid4">Row 4</div>
            <div className="left-grid5">Row 5</div>
          </div>
          <div className="right-block">
            <div className="right-grid" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
