import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data/projects";

const SITE_URL = "https://www.samuelsianamate.com";

const HOME = {
  title: "Samuel Sianamate | Systems Developer & DevOps Engineer in Zambia",
  description:
    "Samuel Sianamate is a Systems Developer, DevOps Engineer and Technical Mentor in Zambia. Explore projects, experience, certifications and contact details.",
};

const PAGES: Record<string, { title: string; description: string }> = {
  "/": HOME,
  "/about": {
    title: "About Samuel Sianamate | Experience, Skills & Certifications",
    description:
      "Professional experience, teaching, leadership, skills and certifications of Samuel Sianamate, ICT Officer and part-time lecturer at Lusaka South University College.",
  },
  "/projects": {
    title: "Projects by Samuel Sianamate | Systems & Web Development",
    description:
      "Systems and web projects built by Samuel Sianamate, including a Student Records Management System, Study In Zambia, a Smart Attendance System and Ubumi.",
  },
  "/contact": {
    title: "Contact Samuel Sianamate",
    description:
      "Get in touch with Samuel Sianamate, a Systems Developer and DevOps Engineer in Zambia, about projects, collaboration or mentoring.",
  },
};

function getPageMeta(path: string) {
  const projectId = path.match(/^\/projects\/([^/]+)$/)?.[1];
  const project = projects.find((p) => p.id === projectId);
  if (project) {
    return {
      title: `${project.title} | Samuel Sianamate`,
      description: project.description,
    };
  }
  return PAGES[path] ?? HOME;
}

/**
 * Keeps the title, description and canonical URL in step with the current route.
 * The canonical is set only here, not in index.html, because that one file is
 * served for every route and would mark them all as copies of the homepage.
 */
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const { title, description } = getPageMeta(path);

    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${path === "/" ? "/" : path}`;
  }, [pathname]);

  return null;
}
