import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  purezza,
  tutcart,
  taskwise,
  memoryGame,
  chatApp,
} from "../assets";

import weatherapp from "../assets/weatherapp.png";
import corporateway from "../assets/corporateway.png";
import cvbuilder from "../assets/cvbuilder.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Purezza Technologies",
    icon: purezza,
    iconBg: "#FFFFFF",
    date: "December 2023",
    points: [
      "Implemented frontend designs using React and TailwindCSS across 3 major projects.",
      "Developed APIs, enhancing backend functionality, and reducing response time by 15%.",
      "Integrated search functionality in an e-commerce project, improving user search experience by 40%.",
      "•Utilized Hashicorp Vault for secure credential storage, reducing security vulnerabilities by 50%",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Tutcart",
    icon: tutcart,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Spearhead the development of the Minimum Viable Product (MVP), employing agile methodologies to ensure timely delivery and stakeholder satisfaction",
      "Managed full-stack development, including front-end, back-end, database, and server configuration, resulting in a 20% increase in development efficiency.",
      "Conduct testing and debugging, improving application usability and security, reducing bugs by 30%",
      "Collaborate cross-functionally with design, marketing, and sales teams to align technical solutions with business objectives and user needs.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TaskWise",
    description:
      "TaskWise is an app inspired by Splitwise, but for dividing tasks and chores among groups. ",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
    ],
    image: taskwise,
    source_code_link: "https://github.com/AtomicSage22/taskwise",
    live_demo_link: "",
  },
  {
    name: "Chat App",
    description:
      "A real-time chat application that allows users to create rooms and chat with each other.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/AtomicSage22/Chat-App",
    live_demo_link: "",
  },
  {
    name: "Memory Game",
    description:
      "A simple, rick and morty themed, memory card game built with ReactJS. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
    ],
    image: memoryGame,
    source_code_link: "https://github.com/AtomicSage22/memory-card-game",
    live_demo_link: "https://memory-card-game-mocha-three.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };