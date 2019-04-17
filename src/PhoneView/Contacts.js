import React, { useState, useEffect, useRef } from "react";
import { contact } from "../Kirby_Info/ContactData";
import "./PhoneView.css";

const Contacts = () => {
  const [contactItem, setContactItem] = useState("");
  const node = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

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
          setOpen(true);
        }
        break;
      case "email":
        if (contactItem.toString() === email.toString()) {
          setContactItem("");
        } else {
          setContactItem(email);
          setOpen(true);
        }
        break;
      case "location":
        if (contactItem === contact.location) {
          setContactItem("");
        } else {
          setContactItem(contact.location);
          setOpen(true);
        }
        break;
      default:
        setContactItem("");
        break;
    }
  };

  return (
    <div ref={node}>
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
      {open && <div className="xtra-contact">{contactItem}</div>}
    </div>
  );
};

export default Contacts;
