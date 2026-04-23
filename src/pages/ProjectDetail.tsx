import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Puzzle,
  Info,
  ArrowRight,
  Lock,
} from "lucide-react";
import { projects } from "../data/projects";
import { useTheme } from "../context/ThemeContext";
import { Footer } from "../components/Footer";

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

// ── Shared button base (no colours — supplied per-render) ─────────────────────
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

// ── Sub-components ────────────────────────────────────────────────────────────
function BackButton({ t }: { t: Tokens }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      to="/projects"
      style={{
        ...BTN_BASE,
        padding:     "0.75rem 1.5rem",
        fontSize:    "15px",
        background:  hov ? t.bgHov       : "transparent",
        color:       hov ? t.textHov     : t.fg,
        borderColor: hov ? t.bgHov       : t.fg,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <ArrowLeft
        size={18}
        style={{
          color:     hov ? t.textHov : t.fg,
          transform: hov ? "translateX(-4px)" : "translateX(0)",
          transition: "transform 0.3s, color 0.3s",
        }}
      />
      Back to Projects
    </Link>
  );
}

function ViewCodeButton({ href, t }: { href: string; t: Tokens }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...BTN_BASE,
        padding:     "1rem 2rem",
        fontSize:    "16px",
        background:  hov ? t.bgHov   : "transparent",
        color:       hov ? t.textHov : t.fg,
        borderColor: hov ? t.bgHov   : t.fg,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <Github size={18} style={{ color: hov ? t.textHov : t.fg, transition: "color 0.3s" }} />
      View Code
      <ArrowRight
        size={18}
        style={{
          color:     hov ? t.textHov : t.fg,
          transform: hov ? "translateX(4px)" : "translateX(0)",
          transition: "transform 0.3s, color 0.3s",
        }}
      />
    </a>
  );
}

function LiveDemoButton({ href, t }: { href: string; t: Tokens }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...BTN_BASE,
        padding:     "1rem 2rem",
        fontSize:    "16px",
        background:  hov ? t.bgHov   : "transparent",
        color:       hov ? t.textHov : t.fg,
        borderColor: hov ? t.bgHov   : t.fg,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <ExternalLink size={18} style={{ color: hov ? t.textHov : t.fg, transition: "color 0.3s" }} />
      Live Demo
      <ArrowRight
        size={18}
        style={{
          color:     hov ? t.textHov : t.fg,
          transform: hov ? "translateX(4px)" : "translateX(0)",
          transition: "transform 0.3s, color 0.3s",
        }}
      />
    </a>
  );
}

function PrivateRepoButton({ t }: { t: Tokens }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      title="This repository is private"
      style={{
        ...BTN_BASE,
        padding:     "1rem 2rem",
        fontSize:    "16px",
        background:  hov ? t.cardBg : "transparent",
        color:       hov ? t.fg     : t.fgFaint,
        borderColor: hov ? t.fg     : t.cardBorder,
        cursor:      "default",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <Lock size={16} style={{ color: "inherit" }} />
      Private Repo
    </span>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const t = getTokens(theme === "dark");
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: t.bg, color: t.fg }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Project Not Found</h1>
        <BackButton t={t} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: t.bg, color: t.fg }}>
      <div className="max-w-3xl mx-auto px-6 pb-24" style={{ paddingTop: "160px" }}>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <BackButton t={t} />
        </motion.div>

        {/* Project Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: t.fg, lineHeight: 1.2, marginBottom: "1.5rem", fontFamily: "'Poppins', sans-serif" }}
        >
          {project.title}
        </motion.h1>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ marginBottom: "1.5rem" }}
        >
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", color: t.fgFaint, textTransform: "uppercase", marginBottom: "0.75rem", fontFamily: "'Poppins', sans-serif" }}>
            Tech Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tech.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: "12px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  color: t.fgMuted,
                  background: t.cardBg,
                  border: `1px solid ${t.cardBorder}`,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}
        >
          {project.links.github ? (
            <ViewCodeButton href={project.links.github} t={t} />
          ) : (
            <PrivateRepoButton t={t} />
          )}
          {project.links.demo && <LiveDemoButton href={project.links.demo} t={t} />}
        </motion.div>

        {/* Project Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          style={{ marginBottom: "2.5rem", borderRadius: "0.75rem", overflow: "hidden", border: `1px solid ${t.cardBorder}`, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />
        </motion.div>

        {/* Long Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ fontFamily: "'Poppins', sans-serif", color: t.fgMuted, fontSize: "15px", lineHeight: 1.8, marginBottom: "2.5rem" }}
        >
          {project.longDescription}
        </motion.p>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "20px", color: t.accent, marginBottom: "1.25rem" }}>
            Features
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {project.features.map((feat, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <CheckCircle2 size={16} style={{ color: t.accent, flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", color: t.fgMuted, fontSize: "14px", lineHeight: 1.7 }}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Extensions / Modules */}
        {project.extensions && project.extensions.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ marginBottom: "2.5rem" }}
          >
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "20px", color: t.accent, marginBottom: "1.25rem" }}>
              Extensions / Modules
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {project.extensions.map((ext, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <Puzzle size={16} style={{ color: t.accent, flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", color: t.fgMuted, fontSize: "14px", lineHeight: 1.7 }}>
                    {ext}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Private-repo note */}
        {project.note && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
          >
            <Info size={16} style={{ color: t.accent, flexShrink: 0, marginTop: "3px" }} />
            <p style={{ fontFamily: "'Poppins', sans-serif", color: t.fgMuted, fontSize: "15px", fontWeight: 700, lineHeight: 1.7, fontStyle: "italic" }}>
              {project.note}
            </p>
          </motion.div>
        )}

      </div>
      <Footer />
    </div>
  );
}
