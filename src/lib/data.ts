import { Github, Linkedin, Mail, Smartphone, MapPin, TestTubeDiagonal, CodeXml, BrainCircuit, Rocket, type LucideIcon, CheckCircle } from "lucide-react";

export const profile = {
  name: "Mayur Tawade",
  title: "SDET & Freelancer",
  profession: "Computer Engineer",
  tagline: "Crafting quality software and elegant digital experiences.",
  email: "mayurtawade94@gmail.com",
  phone: "+1 234 567 890",
  location: "Pune, India",
  social: {
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
  },
};

export const about = {
  summary: "A passionate and detail-oriented Computer Engineer with a knack for Software Development Engineering in Test (SDET) and a creative flair for freelance web development. I thrive on solving complex problems, ensuring software quality, and building beautiful, user-friendly web applications. My goal is to leverage my technical skills and creative mindset to contribute to innovative projects and deliver exceptional results.",
  strengths: [
    { name: "Test Automation", icon: TestTubeDiagonal },
    { name: "Full-Stack Development", icon: CodeXml },
    { name: "Problem Solving", icon: BrainCircuit },
    { name: "Agile Methodologies", icon: Rocket },
  ],
};

export const skills: { name: string }[] = [
  { name: "Java" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Selenium" },
  { name: "Cypress" },
  { name: "Playwright" },
  { name: "SQL" },
  { name: "Firebase" },
  { name: "Docker" },
];

export const experience = [
  {
    role: "Senior SDET",
    company: "Tech Solutions Inc.",
    duration: "2021 - Present",
    description: [
      "Led the design and implementation of an end-to-end test automation framework for a large-scale enterprise application, reducing manual testing efforts by 60%.",
      "Mentored junior SDETs and established best practices for code quality and test coverage.",
      "Collaborated with developers and product managers in an Agile environment to ensure timely delivery of high-quality software.",
      "Integrated automated tests into CI/CD pipelines using Jenkins and Docker.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2019 - Present",
    description: [
      "Developed and maintained responsive websites and web applications for various clients using React, Next.js, and Firebase.",
      "Designed and implemented custom features, from e-commerce solutions to portfolio sites.",
      "Managed client communication, project timelines, and deliverables from conception to deployment.",
    ],
  },
  {
    role: "SDET",
    company: "Innovate Software",
    duration: "2019 - 2021",
    description: [
      "Developed and executed automated tests for web and mobile applications.",
      "Identified, documented, and tracked bugs to resolution.",
      "Contributed to performance and security testing initiatives.",
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce site with features like product catalog, shopping cart, user authentication, and order management, built with Next.js and Firebase.",
    image: "project-1",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A collaborative task management application with a drag-and-drop interface, real-time updates, and user-specific dashboards.",
    image: "project-2",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Portfolio Template",
    description: "A customizable and responsive portfolio template for creatives and developers, featuring a modern design and easy content management.",
    image: "project-3",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "Test Automation Dashboard",
    description: "A web dashboard to visualize test execution results, track test coverage, and monitor software quality metrics in real-time.",
    image: "project-4",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const contactInfo: { icon: LucideIcon; text: string; href?: string }[] = [
  { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
  { icon: Smartphone, text: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, text: profile.location },
];

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills"},
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
