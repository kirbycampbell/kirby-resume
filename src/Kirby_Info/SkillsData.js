var emoji = require("node-emoji");
export const codeSkills = [
  "React",
  "Javascript",
  "GraphQL",
  "HTML/CSS",
  "GitHub",
  "Redux",
  "Rails",
  "Vue",
  "SQL",
  "Amplify",
  "AppSync",
  "FireBase",
  "Heroku",
  "Ruby",
  "jQuery",
  "C++"
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
  }
};

export const projects = {
  portfolio: {
    name1: "Medium Clone",
    framework1: "React",
    backend1: "FireStore",
    hosted1: "Heroku",

    name2: "WhatsApp Clone",
    framework2: "React Hooks",
    backend2: "GraphQl & Amplify",
    hosted2: "AWS",

    name3: "Beverage Manager",
    framework3: "React & Redux",
    backend3: "Ruby on Rails",
    hosted3: "Heroku & AWS",

    name4: "News Journal",
    framework4: "Vue",
    backend4: "None",
    hosted4: "Not Yet",

    name5: "Meditation Timer",
    framework5: "React Hooks",
    backend5: "None yet",
    hosted5: "Not yet"
  },

  music: "Produced ~ 30 songs over last 5 years.",
  video: "Editor & Cinematographer of Virtual Reality Music Video"
};

export const experience = {
  producerJob: {
    name: "Music Producer",
    years: "2011-Present",
    desc: "Produced & Mixed ~ 45 songs",
    work: "Large Project Management"
  },
  musicianJob: {
    name: "Touring Musician",
    years: "2010-2016",
    desc: "Worked ~ 200 Days/Year",
    work: "Drummer & Live Electronics"
  },
  uberJob: {
    name: "Uber Driver",
    years: "2015-2017",
    desc: "Drove ~ 50 Hours/Week",
    work: "4.93 Rating with 1000+ rides"
  },
  airbnbJob: {
    name: "Managed 3 Short-Term Rentals",
    years: "2015-2017",
    desc: "Managed Booking & Upkeep",
    work: "Concierge & Team Management"
  },
  stockJob: {
    name: "Stock Trading",
    years: "2017-Present",
    desc: "Market & Fundamentals Awareness",
    work: "Consistent 15% Gains each year"
  },
  miningJob: {
    name: "Ethereum Crypto Mining",
    years: "2017-Present",
    desc: "Built Five 7-GPU Mining Rigs",
    work: "Computer Building & Power Management"
  }
};
