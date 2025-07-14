// Skills Section Logo's
import htmlLogo from './src/assets/html.png';
import cssLogo from './src/assets/css.png';
import javascriptLogo from './src/assets/javascript.png';
import reactjsLogo from './src/assets/reactjs.png';
import javaLogo from './src/assets/java.png';
import pythonLogo from './src/assets/python.png';
import gitLogo from './src/assets/git.png';
import githubLogo from './src/assets/github.png';
import vscodeLogo from './src/assets/vscode.png';
import postmanLogo from './src/assets/postman.png';
import figmaLogo from './src/assets/figma.png';
import mysqlLogo from './src/assets/mysql.png'

// Experience Section Logo's
import webverseLogo from './src/assets/company1.png';
import agcLogo from './src/assets/company2.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// // Education Section Logo's
import tkrlogo from './src/assets/tkr.png';
import srrslogo from './src/assets/srrs.png';

import scllogo from './src/assets/scl.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's/
import major from './src/assets/prj1.png';
import minor from './src/assets/prj2.png';
import godude from './src/assets/prj3.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'mysql', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
  
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Web Developer Intern",
      company: "MangosOrange Groups",
      date: "Sep -2024 to feb -2025",
      desc: "Collaborated on a Go Certificate Generator project, designing UI/UX with Figma and developing the responsive frontend using HTML, CSS, and React, while utilizing Git for version control.Contributed to the full software development lifecycle of a Go Certificate Generator, building the React-based frontend and collaborating on design using Figma, all managed with Git.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Git",
        "GitHub",
        "Figma",
        "VS Code",
        "Postmen",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "FUll Stack Java Developer",
      company: "TNSI Foundation",
      date: "March 2024 - April 20024",
      desc: "Developed backend functionality for a Placement Management System using Java and Spring Boot, implementing MySQL database interactions and validating system performance with Postman for API testing.Implemented Java and Spring Boot backend functionalities for a Placement Management System, efficiently handling MySQL database interactions and ensuring system integrity through API testing.",
      skills: [
        "Java",
        "SpringBoot",
        "Postmen",
        "SQL",
        "Rest API"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: tkrlogo,
      school: "TKR Engineering College",
      date: "Nov 2022 - May 2025",
      grade: "7 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science from JNTU-H University, Hyderabad. During my time at TKR, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. My experience at TKR has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology -B.Tech(Computer Science))",
    },
    {
      id: 1,
      img: srrslogo,
      school: "SRRS Govt Polytechnic College",
      date: "june 2018 - may 2021",
      grade: "86.7%",
      desc: "I completed my Diploma in Electrical and Electronics Engineering (diploma) from SRRS Govt polytechinc College, Sircilla.",
      degree: "Diploma Technical Education - (EEE)",
    },
    {
      id: 2,
      img: scllogo,
      school: "Shantiniketan High School",
      date: "may 2018",
      grade: "83%",
      desc: "I completed my Secondry Education in Shantinikethan",
      degree: "Secondary School Certificate -SSC",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Block Chain Based Solution for Secured Exam Paper Transmission",
      description:
        "Engineered a secure blockchain solution for exam paper transmission to ensure immutability, working with a team to build a feasibility-demonstrating proof-of-concept .",
      image: major,
      tags: ["HTML", "CSS", "JavaScript", "Django", "API" ,"Python" , "Block Chain " , "Ganachi" , "IPFS"],
      github: "https://github.com/sahith8367/major-project",
      webapp: "",
    },
    {
      id: 1,
      title: "Authentication by Encrypted Negative Password",
      description:
        "Engineered a secure authentication framework using encrypted negative passwords, developing full-stack functionalities with HTML, CSS, JavaScript, and Java, alongside a robust MySQL database.",
      image: minor,
      tags: ["HTML","CSS","JavaScript","Java","MySQL","TOMCAT Server","Postmen"],
      github: "https://github.com/sahith8367/Minor-Project",
      webapp: "",
    },
    {
      id: 2,
      title: "GoDude Website",
      description:
        "Developing Godude has been an immense learning experience, pushing my skills in creating a seamless user experience, managing complex data flows, and integrating diverse e-commerce and service modules.",
      image: godude,
      tags: ["HTML","CSS","JavaScript","React JS","Django"],
      github: "https://github.com/sahith8367/camelq_project",
      webapp: "",
    },
    
  ];  