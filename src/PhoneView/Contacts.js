import React, { useState, useEffect, useRef } from "react";
import { contact } from "../Kirby_Info/ContactData";
import "./PhoneView.css";
import { CSSTransition } from "react-transition-group";

const Contacts = () => {
  const [contactItem, setContactItem] = useState("");
  const node = useRef();
  const [open, setOpen] = useState(false);

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // :::::::::::: Click Outside Component listener :::::::::::::::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // :::::::::::::: Handle Click outside of Component ::::::::::::::::::::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // ::::::::::::::::::: Determine Which Contact to Render :::::::::::::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const handleContactClick = item => {
    const email = (
      <a href="mailto:jkirbycampbell@gmail.com" className="email">
        {contact.email}
      </a>
    );

    switch (item) {
      case "phone": // if button = phone
        if (contactItem === contact.number && open) {
          setOpen(false);
        } else {
          setContactItem(contact.number);
          setOpen(true);
        }
        break;
      case "email": // if button = email
        if (contactItem.toString() === email.toString() && open) {
          setOpen(false);
        } else {
          setContactItem(email);
          setOpen(true);
        }
        break;
      case "location": // if button = location
        if (contactItem === contact.location && open) {
          setOpen(false);
        } else {
          setContactItem(contact.location);
          setOpen(true);
        }
        break;
      default:
        // if nothing...
        setContactItem("");
        setOpen(false);

        break;
    }
  };
  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // ::::::::::::::::::::: Main Return for Contacts.js ::::::::::::::::::::::::::::::::::
  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  return (
    <div ref={node}>
      {/*:::::::::::::::::::::::::: Contact Buttons :::::::::::::::::::::::::::  */}
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
      {/*:::::::::::::: If open=true Render Extra Contact Info ::::::::::::::::::::  */}

      <CSSTransition
        in={open}
        timeout={400}
        classNames="alert"
        unmountOnExit
        onExited={() => setOpen(false)}
      >
        <div className="xtra-contact">{contactItem}</div>
      </CSSTransition>
    </div>
  );
};

export default Contacts;
