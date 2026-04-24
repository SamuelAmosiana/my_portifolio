import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useTheme } from "../context/ThemeContext";

// ── Theme-aware colour tokens ─────────────────────────────────────────────────
interface Tokens {
  fg: string;          // primary text / border colour
  fgMuted: string;     // muted text
  fgFaint: string;     // very faint text
  bg: string;          // page background
  bgHov: string;       // button hover fill
  textHov: string;     // text colour when button is filled
  accent: string;      // yellow accent
  cardBg: string;      // subtle card background
  cardBorder: string;  // card border
}

function getTokens(dark: boolean): Tokens {
  if (dark) {
    return {
      fg:          "#f8f7f9",
      fgMuted:     "rgba(248,247,249,0.70)",
      fgFaint:     "rgba(248,247,249,0.40)",
      bg:          "#1f1f1f",
      bgHov:       "#f8f7f9",
      textHov:     "#1f1f1f",
      accent:      "#FFDD00",
      cardBg:      "rgba(248,247,249,0.05)",
      cardBorder:  "rgba(248,247,249,0.10)",
    };
  }
  return {
    fg:          "#1a1a1a",
    fgMuted:     "rgba(26,26,26,0.70)",
    fgFaint:     "rgba(26,26,26,0.45)",
    bg:          "#ffffff",
    bgHov:       "#1a1a1a",
    textHov:     "#ffffff",
    accent:      "#d4a800",
    cardBg:      "rgba(26,26,26,0.04)",
    cardBorder:  "rgba(26,26,26,0.12)",
  };
}

// ── Shared button base ────────────────────────────────────────────────────────
const BTN_BASE: React.CSSProperties = {
  display:        "inline-flex",
  alignItems:     "center",
  gap:            "0.75rem",
  borderRadius:   "1rem",
  borderStyle:    "solid",
  borderWidth:    "2px",
  textDecoration: "none",
  cursor:         "pointer",
  fontFamily:     "'Poppins', sans-serif",
  fontWeight:     700,
  transition:     "background 0.3s, color 0.3s, border-color 0.3s",
};

export function ProjectsSection() {
  const { theme } = useTheme();
  const t = getTokens(theme === "dark");

  return (
    <section id="projects" className="py-20 relative" style={{ background: t.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ color: t.fg }}
          className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[56px] font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, t }: { project: (typeof projects)[0]; index: number; t: Tokens }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{
        background: t.cardBg,
        borderColor: t.cardBorder,
        borderWidth: "1px",
        borderStyle: "solid",
      }}
      className="rounded-2xl overflow-hidden hover:border-[#FFDD00]/30 transition-all duration-300 group"
    >
      {/* Cover Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} cover`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{ background: `linear-gradient(to top, ${t.bg}, ${t.bg}00 30%, transparent)` }}
        />
        {/* Period badge */}
        <span 
          style={{ 
            color: t.fgMuted, 
            borderColor: t.cardBorder, 
            background: `${t.bg}99`,
            backdropFilter: "blur(4px)"
          }}
          className="absolute top-4 right-4 text-xs font-['Poppins:Regular',_sans-serif] border px-3 py-1 rounded-full"
        >
          {project.period}
        </span>
      </div>

      {/* Card Body */}
      <div style={{ padding: "2.5rem" }}>
        <h3 
          style={{ color: t.fg }}
          className="font-['Poppins:Bold',_sans-serif] text-[24px] font-bold group-hover:text-[#FFDD00] transition-colors mb-3 leading-snug"
        >
          {project.title}
        </h3>

        <p 
          style={{ color: t.fgMuted }}
          className="font-['Poppins:Regular',_sans-serif] mb-6 leading-relaxed text-base"
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              style={{
                color: t.fgMuted,
                background: t.cardBg,
                border: `1px solid ${t.cardBorder}`,
              }}
              className="text-xs font-['Poppins:Medium',_sans-serif] px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Explore Project button */}
        <Link
          to={`/projects/${project.id}`}
          style={{
            ...BTN_BASE,
            width:       "100%",
            justifyContent: "center",
            padding:     "0.75rem 1.5rem",
            fontSize:    "15px",
            background:  hov ? t.bgHov       : "transparent",
            color:       hov ? t.textHov     : t.fg,
            borderColor: hov ? t.bgHov       : t.fg,
          }}
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
        >
          Explore Project
          <ArrowRight
            size={18}
            style={{
              color:     hov ? t.textHov : t.fg,
              transform: hov ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.3s, color 0.3s",
            }}
          />
        </Link>
      </div>
    </motion.div>
  );
}

