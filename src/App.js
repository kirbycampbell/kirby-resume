import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="name-bnr">Kirby Campbel</div>
        <div className="job-bnr">
          <h1>Web Developer</h1>
        </div>
        <div className="main-container">
          {" "}
          <div className="left-sidebar">Left Side</div>
          <div className="right-block">Right Side</div>
        </div>
      </div>
    );
  }
}

export default App;
