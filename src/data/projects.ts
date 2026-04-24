import srmsImage from "../assets/Student Records Management System.png";
import sizaImage from "../assets/siza.png";
import smartAttendanceImage from "../assets/smart_attendance.png";
import lscImage from "../assets/Lusaka South University College Website.png";

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  extensions?: string[];
  note?: string;
  links: {
    github: string;
    demo: string;
  };
  image: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "srms",
    title: "Student Records Management System",
    period: "Current",
    description:
      "A comprehensive enterprise-grade student records management system built for Lusaka South University College. Handles student registration, academic records, results processing, and administrative workflows at scale.",
    longDescription:
      "The Student Records Management System (SRMS) is a full-featured enterprise web application developed for Lusaka South University College. It digitises and streamlines every aspect of student administration — from initial enrolment and course registration through to results processing, transcript generation, and alumni record-keeping. The system is built to handle thousands of concurrent student records while maintaining data integrity and providing role-based access control for staff at every level.",
    tech: ["PHP", "Laravel", "Blade", "MySQL", "CSS"],
    features: [
      "Student registration and enrollment management",
      "Academic records and results processing",
      "Role-based access control for admin, lecturers, and students",
      "Transcript and acceptance letter PDF generation",
      "Short course and undergraduate application portals",
      "Automated email notifications for application status",
      "Dashboard with real-time enrollment statistics",
      "Responsive design for desktop and mobile access",
    ],
    extensions: [
      "Undergraduate Application Module — full online application workflow with document uploads",
      "Short Courses Module — handles registration for non-degree programmes",
      "Notifications Module — automated email pipeline for status updates",
    ],
    note: "The repository for this project is private. Feel free to reach out if you'd like to learn more about the implementation!",
    links: { github: "", demo: "https://srms.lsc.edu.zm/" },
    image: srmsImage,
    gallery: [srmsImage],
  },
  {
    id: "siza",
    title: "Study In Zambia (SIZA)",
    period: "2024",
    description:
      "Study In Zambia (SIZA) is an open platform that connects various public and private universities and enables both domestic and foreign students to get in touch and apply for their studies to a desired institution.",
    longDescription:
      "SIZA (Study In Zambia) is a centralised higher-education discovery platform designed to bridge the information gap between prospective students and Zambian universities. Students can browse institutions, compare programmes, and submit initial interest applications — all from one place. The platform is intentionally lightweight and fast-loading to serve users on lower-bandwidth connections across the country.",
    tech: ["Vue", "PHP", "HTML", "JavaScript", "Dockerfile", "Blade"],
    features: [
      "Institution directory with programme listings",
      "Student application and enquiry submission",
      "Responsive layout optimised for low-bandwidth connections",
      "University profile pages with contact details",
      "Search and filter by programme or institution type",
    ],
    note: "The repository for this project is private. Feel free to reach out if you'd like to learn more about the implementation!",
    links: { github: "", demo: "https://siza-app.onrender.com/" },
    image: sizaImage,
    gallery: [sizaImage],
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance System",
    period: "2026",
    description:
      "A Smart Attendance System Register that uses facial detection to automate attendance tracking and registration processes.",
    longDescription:
      "The Smart Attendance System is a computer-vision powered web application that eliminates manual roll-calls by detecting and recognising registered faces in real time via a webcam feed. Built with Python and Flask on the backend and a clean HTML/CSS/JS frontend, it provides an intuitive dashboard for administrators to manage registrations, view live attendance logs, and export reports.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    features: [
      "Real-time facial detection and recognition via webcam",
      "Automated attendance marking on face recognition",
      "Student/staff registration with face capture",
      "Live attendance dashboard with statistics",
      "Export attendance records to CSV",
      "Responsive web interface for admin management",
    ],
    links: {
      github: "",
      demo: "https://smart-attendance-system-sb9n.onrender.com",
    },
    image: smartAttendanceImage,
    gallery: [smartAttendanceImage],
  },
  {
    id: "lsc-website",
    title: "Lusaka South University College Website",
    period: "2025",
    description:
      "The official institutional website for Lusaka South University College, featuring programme listings, admissions information, news, and a fully responsive public-facing interface.",
    longDescription:
      "The Lusaka South University College (LSC) website serves as the primary public-facing digital presence for the institution. It provides prospective students, parents, and the public with detailed information on academic programmes, admission requirements, campus life, news and events, and contact details. The site is built on Laravel with a Blade templating engine and is fully managed via a custom content management backend.",
    tech: ["PHP", "Laravel", "Blade", "MySQL", "CSS"],
    features: [
      "Programme and faculty listings with detailed descriptions",
      "Online admissions information and enquiry forms",
      "News and events management via admin CMS",
      "Photo gallery and campus life section",
      "Responsive design across all screen sizes",
      "SEO-optimised pages for institutional visibility",
    ],
    note: "The repository for this project is private. Feel free to reach out if you'd like to learn more about the implementation!",
    links: { github: "", demo: "https://lsc.edu.zm" },
    image: lscImage,
    gallery: [lscImage],
  },
];
