export interface projectsProps {
  title: string;
  sourcecode?: string;
  livedemo?: string;
  feature?: string[];
  tag: string[];
  cover: string;
  video?: string;
  type?: "Web" | "Mobile" | "Other";
}

export const projects: projectsProps[] = [
  {
    title:
      "Official website of Computer Science Society of University of Nottingham Malaysia(UNM CSS)",
    sourcecode: "https://github.com/UoN-Computer-Science-Society/",
    livedemo: "https://unm-css.vercel.app",
    feature: [
      "VS-Code Theme",
      "Showcase upcoming event,previous event",
      "FAQ section",
      "Email subscription",
    ],
    tag: ["Next.js", "Typescript", "Tailwind CSS", "Figma", "SEO"],
    cover: "/project/unm-css.png",
    type: "Web",
  },
  {
    title: "Exam Analysis System",
    sourcecode: "https://github.com/tinjet11/Nottingham-Exam-Analysis-System",
    feature: [
      "Top 5 - Best Industrial Value Project",
      "Module Analysis",
      "Progression Overview",
      "Resit Listing Generation",
      "Data Visualization - Charts & Tables ",
      "Module Result Comparison",
    ],
    tag: [
      "NextJS",
      "Python",
      "Flask",
      "Shadcn/ui",
      "Tailwind CSS",
      "Pandas",
      "Docker",
    ],
    cover: "/project/computer.svg",
    type: "Web",
  },
  {
    title: "Room Booking App",
    feature: [
      "Freelance Project",
      "Available on Google Play Store",
      "Allows teachers to book school facilities in advance",
      "View booking history and check room availability",
      "Cancel bookings easily",
      "Admin portal for managing school facilities",
    ],
    tag: [
      "Flutter",
      "Mobile App Development",
      "Next.js",
      "Admin Portal",
      "Dart",
      "React",
    ],
    cover: "/project/mobile.svg",
    type: "Mobile",
  },
  {
    title: "Laravel Blog",
    sourcecode: "https://github.com/tinjet11/laravel-blog",
    feature: [
      "User Authentication",
      "Post Creation",
      "Follow user, like & comment post",
      "Profile Image Upload to AWS S3",
      "Profile Editing",
    ],
    tag: [
      "Laravel",
      "PHP",
      "CSS",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "Docker",
    ],
    cover: "/project/laraX.png",
    type: "Web",
  },
  {
    title: "Admin Dashboard for UNM CSS Official Website ",
    sourcecode: "https://github.com/UoN-Computer-Science-Society/",
    livedemo: "https://admin-dashboard-unm-css.vercel.app",
    feature: [
      "Simple dashboard design",
      "Image Uploading",
      "User Authentication using Clerk",
      "Manage annoucement, committee, position open, upcoming event, previous event, partners, faq",
    ],
    tag: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "Shadcn/ui",
      "API",
    ],
    cover: "/project/computer.svg",
    type: "Web",
  },
  {
    title: "Premium Car Rental Booking Website",
    sourcecode: "https://github.com/tinjet11/car_rental",
   // video: "/project/car-rental-demo.mp4",
    feature: [
      "Add,Update & Delete Car Rental",
      "Add,Update & Delete Car Information",
      "Add,Update & Delete Customer Information",
      "Simple Dashboard for information summary",
    ],
    tag: ["HTML", "CSS", "Javascript", "PHP", "mysql"],
    cover: "/project/computer.svg",
    type: "Web",
  },
  {
    title: "Product Price Checking App ",
    sourcecode: "https://github.com/tinjet11/telecell_price_checker",
    feature: [
      "Effortless Price Lookup",
      "Comprehensive Product Insights",
      "substantial improvement in business efficiency",
      " empowering sales personnel to promptly retrieve essential product details",
      " streamlining operations and reducing communication delays",
    ],
    tag: [
      "Flutter",
      "Mobile APP Development",
      "Clean architeture",
      "Bloc",
      "Dart",
    ],
    cover: "/project/mobile.svg",
    type: "Mobile",
  },
  {
    title: "Nott A Student",
    sourcecode: "https://github.com/tinjet11/Nott-A-Student",
    feature: [
      "Project Under UNM Computer Science Society(Still under Development)",
      "All in one solution that solve student uni life problem",
      "Bus time Table Checking",
      "Student Timetable Checking",
      "Event demonstration Dashboard",
    ],
    tag: [
      "Flutter",
      "Mobile APP Development",
      "Clean architeture",
      "Bloc",
      "Dart",
    ],
    cover: "/project/nas.png",
    type: "Mobile",
  },

  {
    title: "BookStore (Tutorial-MERN Stack)",
    sourcecode: "https://github.com/tinjet11/BookStore-MERN",
    feature: [
      "Add Book Info",
      "Edit Book Info",
      "Delete Book Info",
      "Table and card view for book info",
    ],
    tag: [
      "React",
      "Express",
      "Javascript",
      "Typescript",
      "Api",
      "MongoDB",
      "Node.Js",
      "Tailwind CSS",
      "Vite",
    ],
    cover: "/project/computer.svg",
    type: "Web",
  },
  {
    title: "Consistant Neighbourhood Search Algorithm",
    sourcecode:
      "https://github.com/tinjet11/Consistant-Neighbourhood-Search-For-BPP",
    feature: [
      "An Algorithm to solve NP-hard 1D Bin Packing Problem",
      "Assignment for Artificial Intelligence Method Module",
      "Co-authoring a conference paper",
      "Implemented in Java",
      "Score: 74/100",
    ],
    tag: [
      "Java",
      "1D Bin Packing Problem",
      "NP-Hard",
      "Artificial Intelligence",
    ],
    cover: "/project/AI.png",
    type: "Other",
  },
  {
    title: "Java Brick Breaker Game",
    sourcecode: "https://github.com/tinjet11/BrickBreaker-Java-Coursework",
   // video: "/project/brickbreaker-demo.mp4",
    feature: [
      "Refactored code and fixed critical bug",
      "Menu scene with start, settings, and exit options",
      "High score recording and updates",
      "Pause and resume functionality",
      "New penalty and concrete blocks with added difficulty",
      "UI improvements with purple theme and background music",
    ],
    tag: [
      "Java",
      "Game Development",
      "UI Enhancements",
      "Bug Fixing",
      "Feature Additions",
    ],
    cover: "/project/brick-breaker-game.png",
    type: "Other",
  },
];

export const type = [
  { id: 0, name: "All", value: "type=All" },
  { id: 1, name: "Web", value: "type=Web" },
  { id: 2, name: "Mobile", value: "type=Mobile" },
  { id: 3, name: "Other", value: "type=Other" },
];

/* https://devicon.dev/ */
export const skill_content = [
  {
    title: "Programming Languages",
    contents: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    ],
  },
];

export const skill_content_text = [
  "NextJs",
  "React",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Flutter",
  "Dart",
  "C",
  "Express",
  "MongoDB",
  "Rest API",
  "JavaScript",
  "Typescript",
  "Java",
  "NodeJs",
  "PHP",
  "Laravel",
  "Amazon Web Services",
  "ReduxJs",
  "Python",
];

export const experience = [
  {
    organisation:
      "Computer Science Society | University of Nottingham Malaysia",
    position: "Head of Technology",
    date: "May 2023 – Present",
    description: [
      "Developed society website and its content management system using Next.js",
      "Leading as technical leader of project team",
      "Utilized Clean Architecture in the flutter project",
      "Use Bloc as state management solution",
    ],
  },
  {
    organisation: "Telecell Marketing & Services | Miri, Sarawak",
    position: "Freelance Flutter Developer",
    date: "August 2023 – September 2023",
    description: [
      "Successfully reduced operational time by eliminating the need for phone calls or messaging with the office admin for product price inquiries.",
      "Collaborated closely with the outstation sales team to comprehend requirements and devised a solution that effectively solved the pricing challenge.",
      "Contributed to increased efficiency by providing real-time access to product prices, resulting in streamlined business processes.",
    ],
  },
];
