import {
  CompanyLogo1,
  Codecademy,
  DiamondLgBlue,
  DiamondLgGreen,
  SkillCss,
  SkillPython,
  SkillCpp,
  SkillJs,
  SkillReact,
  SkillPandas,
  SkillDjango,
  SkillAws,
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "Jul 2017",
      endDate: "2022",
      position: "Web Developer",
      company: {
        logo: CompanyLogo1,
        name: "Blue Network Media",
        info: "Raleigh, NC",
      },
      description:
        "Built websites to match each client’s unique needs, making sure the design and features fit perfectly. By working with Figma mockups, I crafted engaging layouts and used Bootstrap HTML/CSS to keep everything user-friendly. I also showed clients how to handle web hosting to maintain their sites, so they felt confident managing everything on their own.",
      links: [],
    },
  ],
  // Education
  educationalExperiences: [
    {
      id: "edu_1",
      icon: DiamondLgBlue,
      course: "Computer Programming & Development",
      institution: "Wake Technical Community College",
      degree: ", Associate of Science",
      startDate: "2022",
      endDate: "",
    },
    {
      id: "edu_2",
      icon: DiamondLgGreen,
      course: "Interative Media & Design",
      institution: "Art Intitute of Raleigh-Durham",
      degree: "Bachelor of Fine Arts",
      startDate: "2013",
      endDate: "2017",
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillPython,
      name: "Python",
      description: "Back End Services, Automation & Data Analysis",
    },
    {
      id: "skill_2",
      icon: SkillCpp,
      name: "C++",
      description: "Basic syntax and OOP knowledge from small projects",
    },
    {
      id: "skill_3",
      icon: SkillJs,
      name: "JavaScript",
      description: "Event-driven programming, Front-End Interactivity",
    },
    {
      id: "skill_4",
      icon: SkillReact,
      name: "React",
      description: "Single Page applications with reusable components",
    },
    {
      id: "skill_5",
      icon: SkillDjango,
      name: "Django",
      description: "Skilled in building secure, scalable server side solutions",
    },
    {
      id: "skill_6",
      icon: SkillPandas,
      name: "Pandas",
      description: "Data manipulation, visualization and analysis",
    },
    {
      id: "skill_7",
      icon: SkillAws,
      name: "Amazon Web Services",
      description: "AWS services such as EC2, S3, and Lambda, and setting up basic CI/CD pipelines",
    },
    {
      id: "skill_8",
      icon: SkillCss,
      name: "CSS",
      description: "Familiar with CSS3 and pre-processors like SASS",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: Codecademy,
      provider: "Codecademy",
      course: "Data and Programming Foundations for AI",
      startDate: "Oct 2024",
      endDate: "",
    },
    {
      id: "cert_award_1",
      icon: Codecademy,
      provider: "Codecademy",
      course: "Building Interactive Javascript Websites",
      startDate: "Feb 2024",
      endDate: "March 2024",
    },
  ],
};

export default DATA;
