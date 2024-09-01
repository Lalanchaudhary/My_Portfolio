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
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
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
      title: "Graphic Designer",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "C , C++ , HTML,CSS",
      company_name: "Sviet",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sep 2022 - feb 2023",
      points: [
        "Gained proficiency in C and C++ through hands-on projects and problem-solving exercises.",
"Developed and refined skills in HTML and CSS for building and styling web pages.",
"Built and maintained frontend applications, focusing on creating responsive and user-friendly designs.",
"Applied best practices in coding and debugging to improve code quality and performance.",
      ],
    },
    {
      title: "Graphic Designing JavaScript,React js",
      company_name: "Sviet(Super 60)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "mar 2023 - Aug 2023",
      points: [
        "Designed visually appealing graphics and user interfaces for web applications.",
        "Utilized JavaScript and React.js to develop interactive and responsive web features.",
        "Applied principles of graphic design to enhance user experience and engagement.",
        "Collaborated with design and development teams to integrate visual assets into functional applications.",
        "Focused on optimizing performance and ensuring consistency across different devices and browsers."
      ],
    },
    {
      title: "Node.js Express.js MongoDB Linear DSA with JAVA",
      company_name: "Sviet(The Uniques)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2023 - may 2024",
      points: [
        "Developed and maintained server-side applications using Node.js and Express.js.",
        "Designed and managed databases with MongoDB to ensure efficient data storage and retrieval.",
        "Implemented robust APIs and backend services to support frontend functionality and user interactions.",
        "Applied Data Structures and Algorithms (DSA) with Java to solve complex problems and optimize application performance.",
        "Collaborated with teams to integrate backend solutions with frontend interfaces, ensuring a seamless user experience."
      ],
    },
    {
      title: " Python React-Native Next.js Three.js",
      company_name: "Sviet(The Uniques Community)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Present",
      points: [
        "Developing cross-platform mobile applications using React Native, focusing on performance and user experience.",
        "Building server-side applications and dynamic web pages with Next.js, utilizing its server-side rendering capabilities.",
        "Creating interactive 3D graphics and visualizations with Three.js for enhanced user engagement.",
        "Leveraging Python for backend development, data processing, and integration with other technologies.",
        "Collaborating with multidisciplinary teams to design and implement innovative solutions and features."
      ],
    },
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Lalanchaudhary/Complymax",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Lalanchaudhary/Complymax",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Lalanchaudhary/Complymax",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  