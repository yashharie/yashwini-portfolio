export const profile = {
  name: "Yaswini Harigowrirajan",
  role: "Full Stack Developer Intern",
  stack: ["Java", "Laravel", "React", "MySQL"],
  email: "yaswiniharie@gmail.com",
  linkedin: "https://www.linkedin.com/in/yaswini-harigowrirajan",
  github: "https://github.com/yashharie",
  summary:"Motivated and passionate Java Developer with a strong foundation in Java programming, object-oriented programming (OOP), 
  database management, and software development principles. Experienced in developing full-stack 
  web applications using Java, Laravel, React.js, PHP, JavaScript, and MySQL through academic and personal projects. 
  Designed and implemented a real-world LPG Supply and Distribution Management System featuring role-based workflows, 
  REST API integration, and AI-based prediction. Eager to apply problem-solving skills, continuously learn new technologies,
  and contribute to building efficient, scalable, and user-focused software solutions."

};

export const education = {
  degree: "Higher National Diploma in Information Technology (HND IT)",
  institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE) — ATI Trincomalee",
  duration: "2024 — 2026",
  gpa: 3.92,
  gpaScale: 4.0,
  semesters: [
    { label: "Semester 1", gpa: 3.90 },
    { label: "Semester 2", gpa: 3.90 },
    { label: "Semester 3", gpa: 3.97 },
  ],
};

export const skillGroups = [
  {
    label: "Programming Languages",
    items: ["Java", "PHP", "JavaScript", "Python (Learning)", "C#"],
  },
  {
    label: "Front-End Development",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Web Development"],
  },
  {
    label: "Back-End Development",
    items: ["Laravel Framework (Project Experience)", "PHP Backend Development", "REST API Development (Project Experience)", "MVC Architecture"],
  },
  {
    label: "Database Technologies",
    items: ["MySQL", "MongoDB (Learning)"],
  },
  {
    label: "Tools & Technologies",
    items: ["Git & GitHub", "Visual Studio Code","Canva","Figma", "Postman", "XAMPP", "API Testing (Project Experience)"],
  },
];

export const highlights = [
  "Developed full-stack applications using Laravel and React.",
  "Connected frontend applications with backend REST APIs.",
  "Applied Laravel MVC architecture in real projects.",
  "Built authentication systems with secure user management.",
  "Designed relational database structures using MySQL.",
  "Implemented role-based access control across five user roles.",
  "Integrated an AI microservice built with Python Flask.",
];

export const projects = [
  {
    name: "GasHub",
    tagline: "LPG Supply & Distribution Management System",
    type: "Final Year Project",
    status: "In Development",
    featured: true,
    tech: ["Laravel", "React.js", "MySQL", "REST API", "Python Flask", "Machine Learning"],
    description:
      "A full-stack web platform that digitizes the complete cylinder ordering, warehouse management, stock control, and delivery process for LPG distribution — replacing manual, paper-based workflows with role-based dashboards and live tracking.",
    features: [
      "OTP-verified user authentication",
      "Five role-based dashboards — Admin, Manager, Driver, Employee, Client",
      "End-to-end LPG cylinder ordering and management workflows",
      "Payment receipt upload with manual verification",
      "Warehouse and inventory management modules",
      "Live delivery tracking and driver management",
      "AI-based demand prediction via Flask microservice",
      "MySQL relational database architecture",
      "REST API layer connecting frontend and backend",
    ],
    links: {
      repo: "https://github.com/yashharie/LPG-supply-and-delivery-management-system-",
      
    },
  },
  {
    name: "Hospital Management System",
    tagline: "Database-Driven Healthcare Operations App",
    type: "Academic Project",
    status: "Completed",
    featured: false,
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    description:
      "A database-driven hospital management application built to manage healthcare-related operations — from patient authentication to appointment scheduling.",
    features: [
      "User authentication system",
      "Appointment / booking management",
      "Complaint management system",
      "Database storage and retrieval operations",
      "User-friendly web interface",
    ],
    links: {
      repo: "#", // TODO: add repo link
      
    },
  },
];

export const certifications = [
  {
    name: "Full Stack Developer Career Path",
    issuer: "University of Moratuwa — Open Learning Platform",
    status: "Ongoing",
    modules: [
      "Web Development",
      "Programming Fundamentals",
      "Front-End Development",
      "Server-Side Programming",
      "Professional Practice",
    ],
  },
];

export const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Time Management",
  "Fast Learning",
  "Creativity",
];

export const languages = [
  { name: "Tamil", level: "Fluent", value: 100 },
  { name: "English", level: "Good", value: 75 },
  { name: "Sinhala", level: "Basic / Intermediate", value: 40 },
];
