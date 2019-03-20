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
            <div className="left-brdr">Row 1</div>
            <div className="divider" />
            <div className="left-brdr">Row 2</div>
            <div className="divider" />
            <div className="left-brdr">Row 3</div>
            <div className="divider" />
            <div className="left-brdr">Row 4</div>
            <div className="divider" />
            <div className="left-brdr">Row 5</div>
            <div className="divider" />
          </div>
          <div className="right-block">
            <div className="right-grid">
              <div className="right-brdr">Row 1</div>
              <div className="divider" />
              <div className="right-brdr">Row 2</div>
              <div className="divider" />
              <div className="right-brdr">Row 3</div>
              <div className="divider" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
