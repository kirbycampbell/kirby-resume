var emoji = require("node-emoji");
export const codeSkills = [
  "React",
  "Javascript",
  "GraphQL",
  "HTML/CSS",
  "MongoDb",
  "Redux",
  "Rails/Ruby",
  "Vue.js",
  "SQL",
  "LINUX",
  "React Native",
  "AWS",
  "Node.js",
  "C++",
  "jQuery",
  "Express.js"
];

export const programs = [
  "VSCode",
  "Atom",
  "Pro Tools",
  "Adobe Premiere",
  "Unity",
  "PhotoShop",
  "Maya",
  "After Effects"
];

export const personality = {
  trait1: {
    name: `Hard & Diligent Worker ${emoji.get("coffee")}`,
    desc: `Punctual, Driven, & Goal-Oriented ${emoji.get("bow_and_arrow")}`
  },
  trait2: {
    name: `Team Worker ${emoji.get("muscle")}`,
    desc: `Great Leader & Listener ${emoji.get("ear")}`
  },
  trait3: {
    name: `Open, Respectful, & Forward-Thinking ${emoji.get("fast_forward")}`,
    desc: `Accepting & Personable ${emoji.get("handshake")}`
  }
};

export const education = {
  coding: {
    name: "Flatiron FullStack Dev Bootcamp Graduate",
    date: "April '18 - Jan '19",
    explain: "Focus: Ruby, SQL, Rails, Javascript, jQuery, React, & Redux"
  },
  college: {
    name: "Portland Community College",
    date: "April '18 - Present",
    explain: "Focus: Computer Science Major (4.0 GPA)",
    extra: "Part-Time student once I'm full-time employed."
  },
  Udacity: {
    name: "Udacity VR Course",
    date: "July 2016-Jan 2017",
    explain: "Focus: Virtual Reality with Unity & C++"
  }
};

export const projects = {
  portfolio: {
    name1: "Medium Clone",
    framework1: "React",
    backend1: "FireStore",
    hosted1: "Heroku",
    website: "https://blog-creator.jkirbycampbell.com/",

    name2: "WhatsApp Clone",
    framework2: "React Hooks",
    backend2: "GraphQl & Amplify",
    hosted2: "AWS",
    website2: "https://www.chat.jkirbycampbell.com/",

    name3: "Beverage Manager",
    framework3: "React & Redux",
    backend3: "Ruby on Rails API",
    hosted3: "& AWS",
    website3: "https://the-one-who-works.herokuapp.com/",

    name4: "News Journal",
    framework4: "Vue/CSS",
    backend4: "None",
    hosted4: "AWS",
    website4: "https://journal-clone.jkirbycampbell.com/",

    name5: "Status Share App",
    framework5: "Vue.js",
    backend5: "Express MongoDB",
    hosted5: "AWS",
    website5: "https://status-vue.jkirbycampbell.com",

    name6: "Store Front",
    framework6: "React Hooks",
    backend6: "Local",
    hosted6: "AWS",
    website6: "https://www.vintage-store.jkirbycampbell.com/",

    name7: "Tic Hack Toe",
    framework7: "React/ Javascript",
    backend7: "Local",
    hosted7: "AWS",
    websit7: "https://www.vintage-store.jkirbycampbell.com/"
  },

  music: "Produced ~ 30 songs over last 5 years.",
  video: "Editor & Cinematographer of Virtual Reality Music Video"
};
export const experience = {
  producerJob: {
    name: "Music Producer",
    years: "2011-Present",
    desc: "Produced & Mixed ~ 55+ songs",
    work: "Large Project Management/Complex Routing & Synths"
  },
  musicianJob: {
    name: "Touring Musician - International",
    years: "2010-2016",
    desc: "Worked ~ 200 Days/Year",
    work: "Drummer & Live Electronics/Computer Mgmt"
  },
  uberJob: {
    name: "Uber Driver",
    years: "2015-2017",
    desc: "Drove ~ 50 Hours/Week",
    work: "4.93 Rating with 1000+ rides"
  },
  // airbnbJob: {
  //   name: "Managed 3 Short-Term Rentals",
  //   years: "2015-2017",
  //   desc: "Managed Booking & Upkeep",
  //   work: "Concierge & Team Management"
  // },
  // stockJob: {
  //   name: "Stock Trading",
  //   years: "2017-Present",
  //   desc: "Market & Fundamentals Awareness",
  //   work: "Consistent 15% Gains each year"
  // },
  contractOne: {
    name: "The Wally Shop (NY Contract)",
    years: "2019-Present",
    desc: "-Implemented Backend search API & UI Rendering",
    work:
      "-Provided Substitute items and added S3 upload functionality using MongoDB, ExpressJS, React, and Mongoose"
  },
  contractTwo: {
    name: "Word Web Development (Contract)",
    years: "2019-Present",
    desc: "-Built Responsive React app for Environmental Law Company",
    work:
      "-Email forms, Event Registration, Scratch CSS, Custom Components, and Data Structures"
  },
  miningJob: {
    name: "Ethereum Crypto Mining",
    years: "2017-Present",
    desc: "Built Five 7-GPU Mining Rigs",
    work: "Computer Building & Power Management"
  }
};
