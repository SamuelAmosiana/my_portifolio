import { motion } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ExperienceEntry {
  title: string;
  period: string;
  description: string;
}

interface ExperienceCategoryProps {
  icon: string;
  categoryLabel: string;
  entries: ExperienceEntry[];
  delay?: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const professionalExperiences: ExperienceEntry[] = [
  {
    title: "ICT Officer (Senior Engineer)",
    period: "January 2026 — Present",
    description:
      "Manage and optimize IT infrastructure, ensuring system reliability, security, and scalability. Lead troubleshooting, implement system upgrades, and support backend services that drive organizational efficiency at Lusaka South University College.",
  },
  {
    title: "Junior Developer",
    period: "January 2025 — December 2025",
    description:
      "Designed and developed responsive web applications, collaborated on backend systems, and contributed to building scalable, user-focused software solutions at Lusaka South University College.",
  },
];

const teachingExperiences: ExperienceEntry[] = [
  {
    title: "Part-Time Lecturer — ICT Programmes (Diploma & Certificate)",
    period: "January 2026 — Present",
    description:
      "Delivering part-time lectures in ICT programmes at Lusaka South University College, covering Introduction to Computers, Computer Application Packages, and Computer Studies. Equipping students with foundational digital literacy and practical computing skills.",
  },
  {
    title: "Student Teacher",
    period: "January 2024 — April 2024",
    description:
      "Delivered engaging lessons in ICT and programming at Siavonga STEM Secondary School, combining theory with hands-on practicals to help students build strong technical foundations and problem-solving skills.",
  },
];

const leadershipExperiences: ExperienceEntry[] = [
  {
    title: "President – ICT Association Student Chapter",
    period: "July 2024 — July 2025",
    description:
      "Led initiatives to promote innovation and technical growth at Chalimbana University, organizing workshops, mentoring students, and collaborating with industry partners to create opportunities for skill development and career advancement.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function ExperienceEntry({ title, period, description, index }: ExperienceEntry & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: 0.08 * index }}
      className="relative pl-5 border-l border-white/10 last:border-transparent"
    >
      {/* Timeline dot */}
      <span
        className="absolute -left-[5px] top-[6px] w-[9px] h-[9px] rounded-full border-2 border-white/20 bg-[#1f1f1f]"
        aria-hidden="true"
      />
      <h5
        className="font-['Poppins:SemiBold',_sans-serif] text-[16px] md:text-[18px] text-[#f8f7f9] leading-snug mb-1"
      >
        {title}
      </h5>
      <p className="font-['Poppins:ExtraLight',_sans-serif] text-[13px] md:text-[14px] text-[rgba(248,247,249,0.45)] mb-2 tracking-wide">
        {period}
      </p>
      <p className="font-['Poppins:Regular',_sans-serif] text-[14px] md:text-[16px] text-[rgba(248,247,249,0.55)] leading-[1.65]">
        {description}
      </p>
    </motion.div>
  );
}

function ExperienceCategoryCard({
  icon,
  categoryLabel,
  entries,
  delay = 0,
}: ExperienceCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      className="bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl p-8 hover:bg-[#f8f7f9]/10 transition-colors group relative"
    >
      {/* Card header — centered */}
      <div className="flex flex-col items-center gap-2 mb-6 text-center">
        {/* Icon badge */}
        <span
          className="flex items-center justify-center w-10 h-10 rounded-xl text-[20px] bg-[#f8f7f9]/10 border border-[#f8f7f9]/20"
          aria-hidden="true"
        >
          {icon}
        </span>
        <h4 className="font-['Poppins:Bold',_sans-serif] text-[13px] tracking-[0.12em] uppercase text-[#f8f7f9]/60 group-hover:text-[#FFDD00] transition-colors">
          {categoryLabel}
        </h4>
      </div>

      {/* Entries */}
      <div className="space-y-7">
        {entries.map((entry, i) => (
          <ExperienceEntry key={entry.title} {...entry} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function AboutSection() {
  return (
    <section id="about" className="pt-0 pb-16 relative bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[96px] text-[#f8f7f9] mb-12"
        >
          About me
        </motion.h2>

        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-['Poppins:Regular',_sans-serif] text-[18px] md:text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.6] mb-8"
          >
            I am a Systems Developer and DevOps Engineer focused on designing, building, and delivering scalable, production-ready software systems. With a strong foundation in full-stack development, I work across the stack using technologies such as React, Node.js, Laravel, Django, and modern cloud infrastructure to create efficient and reliable solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Poppins:Regular',_sans-serif] text-[18px] md:text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.6]"
          >
            My journey in technology is driven by a passion for solving complex problems and building systems that create real-world impact. I bring experience from both startup and enterprise environments, allowing me to balance speed, scalability, and business value in every solution I develop. Beyond building systems, I am committed to continuous learning and mentoring others, breaking down complex concepts and empowering the next generation of developers.
          </motion.p>
        </div>

        {/* Education */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8"
          >
            EDUCATION
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[20px] md:text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
              Chalimbana University
            </h4>
            <p className="font-['Poppins:Medium',_sans-serif] text-[18px] md:text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
              Bachelor of Information and Communication Technology with Education.
            </p>
          </motion.div>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-10 text-center"
          >
            EXPERIENCE
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ExperienceCategoryCard
              icon="💼"
              categoryLabel="Professional"
              entries={professionalExperiences}
              delay={0}
            />
            <ExperienceCategoryCard
              icon="🏫"
              categoryLabel="Teaching"
              entries={teachingExperiences}
              delay={0.12}
            />
            <ExperienceCategoryCard
              icon="🏆"
              categoryLabel="Leadership"
              entries={leadershipExperiences}
              delay={0.24}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
