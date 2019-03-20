import React, { Component } from "react";
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
            <div className="divider" />
            {/*~~~~~~~~~~~ ADDITIONAL SKILLS SECTION ~~~~~~~~~~~~*/}
            <div className="left-brdr">Row 3</div>
            <div className="divider" />
            <div className="left-brdr">Row 4</div>
            <div className="divider" />
            <div className="left-brdr">Row 5</div>
            <div className="divider" />
          </div>
          <div className="right-block">
            <div className="right-grid">
              <div className="right-brdr">
                <h2>Summary of Skills</h2>
                <ul>
                  <h5>FullStack Web Development</h5>
                  <li>
                    <p>
                      Built cutting edge Web Applications using React Hooks,
                      Javascript ES6, GraphQL Databases.
                    </p>
                  </li>
                  <li>
                    <p>
                      Deployed Several Projects onto AWS and Heroku along with
                      custom Backends hosted with Rails, Graphql, and FireStore.
                    </p>
                  </li>
                </ul>
              </div>
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
