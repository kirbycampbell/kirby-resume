import React from "react";
import { contact } from "../Kirby_Info/ContactData";
import { rank } from "../Kirby_Info/RankBalls.js";
import "./Contacts.css";
import Contacts from "./Contacts";

const PhoneView = () => {
  return (
    <div className="App">
      <div className="border" />
      <div className="backgroundTop">
        <img
          className="pic-banner"
          src="https://i.imgur.com/vQ74c4y.jpg"
          alt="ocean photo"
        />
        <div className="name-pic">
          <img
            className="phone-prof-pic"
            src="https://pbs.twimg.com/profile_images/1106256070492614657/Qra_Davu_400x400.jpg"
            alt="prof-pic"
          />
          <h1>{contact.name}</h1>
          <i className="fas fa-bars phone-bars" />
        </div>
      </div>
      <Contacts />
      <div className="restofContent">
        <div className="phone-skills">
          <h1>Skills</h1>
          <div>
            <h5>FullStack Web Development</h5>

            <p>
              {" "}
              React
              {rank.three}
              Built cutting edge Web Applications using React Hooks, Javascript
              ES6, GraphQL Databases.
            </p>

            <p>
              Deployed Several Projects onto AWS and Heroku along with custom
              Backends hosted with Rails, Graphql, and FireStore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneView;
