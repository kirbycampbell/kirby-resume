import React, { useState, useEffect, useRef } from "react";
import { contact } from "../Kirby_Info/ContactData";
import "./PhoneView.css";
import { CSSTransition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const Contacts = () => {
  const [contactItem, setContactItem] = useState("");
  const node = useRef();
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

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
    setShowButton(false);
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
        if (contactItem === contact.number) {
          //setContactItem("");
          setShowButton(true);
          setOpen(false);
        } else {
          setContactItem(contact.number);
          setOpen(true);
        }
        break;
      case "email": // if button = email
        if (contactItem.toString() === email.toString() && open) {
          //setContactItem("");
          setShowButton(true);
          setOpen(false);
        } else {
          setContactItem(email);
          setOpen(true);
        }
        break;
      case "location": // if button = location
        if (contactItem === contact.location) {
          //setContactItem("");
          setShowButton(true);
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
        setShowButton(false);
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
        onEnter={() => setShowButton(false)}
        onExited={() => setOpen(false)}
      >
        <div className="xtra-contact">{contactItem}</div>
      </CSSTransition>
    </div>
  );
};

export default Contacts;
