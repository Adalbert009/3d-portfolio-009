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
    tailwind,
    nodejs,
    git,
    M501logo,
    aicompanion,
    threedweb,
    traveladvisor,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const services = [
    {
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "Back-end Developer",
      icon: mobile,
    },
    {
      title: "Database Management",
      icon: backend,
    },
    {
      title: "DevOps & Deployment",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "M501 Web Studio",
      icon: M501logo,
      iconBg: "#383E56",
      date: "Mar 2018 - Oct 2019",
      points: [
        "Developed and maintained front-end components and interfaces for web applications using HTML, CSS and JavaScript.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Built reusable code, promoting modular and maintainable code.",
      ],
    },
    {
      title: "Back-End Developer",
      company_name: "M501 Web Studio",
      icon: M501logo,
      iconBg: "#E6DEDD",
      date: "Oct 2019 - Jun 2022",
      points: [
        "Designed, developed and maintained robust backend systems, services and API`s integrations to support web applications.",
        "Optimized server-side code and database queries for performance, ensuring scalability and reliability.",
        "Troubleshooted, debuged and upgraded existing systems as needed to improve functionality and efficiency.",
        "Staying up-to-date with new backend technologies and best practices, and contribute to a culture of continuous improvement.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "M501 Web Studio",
      icon: M501logo,
      iconBg: "#383E56",
      date: "Jan 2022 - Sep 2024",
      points: [
        "Developed, tested and maintained front-end and back-end components of web applications.",
        "Built responsive and interactive user interfaces using modern JavaScript frameworks (React).",
        "Implemented RESTful APIs, handling data and communicating with a database.",
        "Wrote reusable and maintainable code following industry best practices.",
        "Troubleshooted, debuged and optimized application performance and resolved scalability issues.",
        "Implemented responsive design and ensured cross-browser compatibility.",
      ],
    },

  ];
  

  
  const projects = [
    {
      name: "AI Companion",
      description:
        "A digital assistant crafted with cutting-edge technologies to enhance online interactions. This app is powered by React for a dynamic user interface and Node.js with Express on the backend to handle requests/responses efficiently. The AI capabilities are driven by TensorFlow.js  enabling real-time intelligent interactions directly in your browser.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
        
      ],
      image: aicompanion,
      source_code_link: "https://github.com/Adalbert009/AI-Companion",
      source_code_link_2: "https://ai-companion-adalbert009.vercel.app/",
    },
    {
      name: "3D product website",
      description:
        "A 3D interactive product website showcasing AI and 3D web technologies. The design emphasizes smooth navigation and the integration of AI to enhance user experience. The site serves as a demonstration of advanced web development techniques combining aesthetic appeal with cutting-edge technology.",
      tags: [
        {
          name: "Three.js",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: threedweb,
      source_code_link: "https://github.com/Adalbert009/3d-website",
      source_code_link_2: "https://ai-3d-website-adalbert009.netlify.app/",
    },
    {
      name: "Travel Advisor",
      description:
        "A travel website guide offering recommendations on destinations, accommodations, activities and reviews from it`s users. The layout and interactive features is designed to help users explore travel options, plan trips or get advice on various aspects of travel for an informed travel decision. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Rapid API",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: traveladvisor,
      source_code_link: "https://github.com/Adalbert009/travel-advisor",
      source_code_link_2: "https://travel-advisor-adalbert009.netlify.app",
    },
  ];
  
  export { services, technologies, projects, experiences };