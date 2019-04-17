import React, { useState } from "react";
import { contact } from "../Kirby_Info/ContactData";
import { rank, fiveBalls } from "../Kirby_Info/RankBalls.js";
import "./PhoneView.css";

const PhoneView = () => {
  const [contactItem, setContactItem] = useState("");

  const handleContactClick = item => {
    const email = (
      <a href="mailto:jkirbycampbell@gmail.com" className="email">
        {contact.email}
      </a>
    );
    switch (item) {
      case "phone":
        if (contactItem === contact.number) {
          setContactItem("");
        } else {
          setContactItem(contact.number);
        }
        break;
      case "email":
        if (contactItem.toString() === email.toString()) {
          setContactItem("");
        } else {
          setContactItem(email);
        }
        break;
      case "location":
        if (contactItem === contact.location) {
          setContactItem("");
        } else {
          setContactItem(contact.location);
        }
        break;
      default:
        setContactItem("");
        break;
    }
  };
  const handleRandomClick = () => {
    setContactItem("");
  };
  return (
    <div className="App">
      <div className="border" />
      <div className="backgroundTop">
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
      <div className="phone-contact-bar">
        <i
          className="fas fa-mobile-alt"
          onClick={() => handleContactClick("phone")}
        />

        <i
          className="far fa-envelope"
          onClick={() => handleContactClick("email")}
        />

        <i
          className="fas fa-map-pin"
          onClick={() => handleContactClick("location")}
        />
      </div>
      <div className="xtra-contact">{contactItem}</div>
      <div className="restofContent" onMouseDown={() => handleRandomClick()}>
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
