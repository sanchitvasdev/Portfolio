import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import healthzoidimg from "@/public/healthzoid_img.jpeg";
import eniqmaqueimg from "@/public/eniqmaque_img.jpg";
import reopolisImg from "@/public/Reopolis.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer at Rupyy(Cardekho Group)",
    location: "Gurgaon, Haryana",
    description: [
      `Utilized Node.js and Express.js to build robust server applications, implementing user sessions, cookie parsing, and CORS for
      secure and scalable server-side operations.`,
      `Integrated AWS S3 for secure and efficient fetching of 13+ cyphered images and PDFs, enhancing file management.`,
      `Led the migration of large-scale PHP-based payments website to MERN stack, enhancing performance and user experience.`,
      `Implemented advanced Redux state management for robust client-side state management, including store creation, 
      reducers, and Redux Persist integration for data persistence`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - Present",
  },
  {
    title: "Software Developer Intern at Snackmagic | Vinsol",
    location: "Patel Nagar, Delhi",
    description: [
      `Skillfully executed tasks leveraging Ruby's advanced features including strings, ranges, procs, lambdas, yield, and 
      enumerators, contributing to critical project functionalities.`,
      `Demonstrated proficiency in version control with Git, using commands such as push, pull, commit, init, merge, and rebase`,
      `Pioneered the automation of over 100 tests using Selenium and Cucumber`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - September 2022",
  },
  {
    title: "Android App Development Intern at UpTodd",
    location: "Noida, Uttar Pradesh",
    description: [
      `Boosted user engagement by 10% through YouTube Base Activity and YouTube Player for suggested videos.`,
      `Enhanced user experience with customized dialog boxes for new feature announcements.`,
      `Simplified document access through Download Manager and Intents for PDF downloads.`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - June 2022",
  },
] as const;

export const projectsData = [
  {
    title: "HealthZoid",
    description: [
      `Developed a fitness app with 10 functionalities such as calorie tracking, step counting, and workout monitoring.`,
      `Engineered a Flask-based API for real-time retrieval of food nutritional data, enabling accurate calorie intake management.`,
      `Integrated SQLite and shared preferences for secure storage of personal user data ensuring privacy`,
    ],
    tags: ["Kotlin", "Firebase", "SQLite", "Java"],
    imageUrl: healthzoidimg,
  },
  {
    title: "Eniqmaque",
    description: [
      `Developed a 30MB mobile app with a variety of short games and quizzes, including Sudoku and Tic-Tac-Toe.`,
      `Integrated the Confetti view library to create a captivating confetti effect, enhancing experience during card matching game`,
      `Implemented a Chronometer widget to incorporate a real-time game timer in Sudoku`,
    ],
    tags: ["Kotlin", "Firebase", "SQLite", "Java"],
    imageUrl: eniqmaqueimg,
  },
  {
    title: "Reopolis",
    description: [
      `Developed Reopolis, an interactive web platform that revolutionizes the apartment marketplace.`,
      `Employed HTML, CSS, Bootstrap, and Express.js in crafting a responsive design.`,
      `Integrated MongoDB for robust data management and utilized Passport.js for secure user authentication`,
    ],
    tags: [
      "MongoDB",
      "Mongoose",
      "Javascript",
      "EJS",
      "NodeJs",
      "Express",
      "HTML",
      "CSS",
    ],
    imageUrl: reopolisImg,
  },
] as const;

export const skillsData = [
  "ReactJS",
  "Redux",
  "ExpressJS",
  "Node.js",
  "Next.js",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "Git",
  "Tailwind",
  "MongoDB",
  "AWS",
  "SQL",
  "HTML",
  "CSS",
  "EJS",
  "Flutter",
  "Java",
  "Kotlin",
  "Firebase",
  "Python",
  "Framer Motion",
  "Ruby",
  "C++",
  "JQuery",
] as const;
