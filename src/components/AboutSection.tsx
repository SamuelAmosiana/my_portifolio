import { motion } from "motion/react";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import aboutImage from "../assets/about_me.jpg";
import { SkillsSection } from "./SkillsSection";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ExperienceEntryData {
  title: string;
  period: string;
  description: string;
}

interface ExperienceCategoryProps {
  Icon: LucideIcon;
  categoryLabel: string;
  entries: ExperienceEntryData[];
  delay?: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const professionalExperiences: ExperienceEntryData[] = [
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

const teachingExperiences: ExperienceEntryData[] = [
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

const leadershipExperiences: ExperienceEntryData[] = [
  {
    title: "President – ICT Association Student Chapter",
    period: "July 2024 — July 2025",
    description:
      "Led initiatives to promote innovation and technical growth at Chalimbana University, organizing workshops, mentoring students, and collaborating with industry partners to create opportunities for skill development and career advancement.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * Single experience entry — bullet format identical to CertificationsSection:
 *   • outer wrapper has border-l-2 on the parent
 *   • relative pl-8 on every entry
 *   • 12×12 yellow glow dot at absolute left-[-5px] top-[8px]
 *   • bold title → muted period → body description
 */
function ExperienceItem({
  title,
  period,
  description,
  index,
}: ExperienceEntryData & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Yellow glow dot — exact match to CertificationsSection */}
      <div
        className="absolute left-[-5px] top-[8px] w-[12px] h-[12px] bg-[#FFDD00] rounded-full shadow-[0_0_10px_rgba(255,221,0,0.5)]"
        aria-hidden="true"
      />

      {/* Bold job title */}
      <h5 className="font-['Poppins:ExtraBold',_sans-serif] text-[15px] md:text-[17px] text-[#f8f7f9] mb-1 leading-snug">
        {title}
      </h5>

      {/* Period */}
      <p className="font-['Poppins:Regular',_sans-serif] text-[13px] md:text-[14px] text-[#f8f7f9]/60 mb-1">
        {period}
      </p>

      {/* Description */}
      <p className="font-['Poppins:Medium',_sans-serif] text-[13px] md:text-[14px] text-[#f8f7f9]/40 leading-[1.65]">
        {description}
      </p>
    </motion.div>
  );
}

/**
 * Category card — icon badge matches AboutPreview exactly:
 *   w-[54px] h-[54px] · rounded-xl · bg-[#f8f7f9]/10 border border-[#f8f7f9]/20
 *   icon: size={26} strokeWidth={2} text-[#f8f7f9]
 */
function ExperienceCategoryCard({
  Icon,
  categoryLabel,
  entries,
  delay = 0,
}: ExperienceCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      className="bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl p-8 hover:bg-[#f8f7f9]/10 transition-colors group flex flex-col gap-5"
    >
      {/* Icon badge — identical to AboutPreview */}
      <div className="flex items-center justify-center w-[54px] h-[54px] rounded-xl bg-[#f8f7f9]/10 border border-[#f8f7f9]/20">
        <Icon size={26} strokeWidth={2} className="text-[#f8f7f9]" />
      </div>

      {/* Category title — identical weight/size to AboutPreview role label */}
      <h4 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] group-hover:text-[#FFDD00] transition-colors text-center">
        {categoryLabel}
      </h4>

      {/* Entry list — outer border-l-2 mirrors CertificationsSection wrapper */}
      <div className="space-y-8 relative border-l-2 border-[#f8f7f9]/10">
        {entries.map((entry, i) => (
          <ExperienceItem key={entry.title} {...entry} index={i} />
        ))}
      </div>
    </motion.div>
  );
}


// ─── Main Section ─────────────────────────────────────────────────────────────
export function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[56px] text-[#f8f7f9] mb-12"
        >
          About me
        </motion.h2>

        {/* About me — two-column: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — description text */}
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-['Poppins:Regular',_sans-serif] text-[18px] md:text-[20px] text-[rgba(248,247,249,0.5)] leading-[1.6] text-justify"
            > I am a Systems Developer and DevOps Engineer focused on designing, building, and delivering scalable, production-ready software systems. With a strong foundation in full-stack development, I work across the stack using technologies such as React, Node.js, Laravel, Django, and modern cloud infrastructure to create efficient and reliable solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-['Poppins:Regular',_sans-serif] text-[18px] md:text-[20px] text-[rgba(248,247,249,0.5)] leading-[1.6] text-justify"
            >
              My journey in technology is driven by a passion for solving complex problems and building systems that create real-world impact. I bring experience from both startup and enterprise environments, allowing me to balance speed, scalability, and business value in every solution I develop. Beyond building systems, I am committed to continuous learning and mentoring others, breaking down complex concepts and empowering the next generation of developers.
            </motion.p>
          </div>

          {/* Right — profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.35), 0 0 0 4px rgba(255,221,0,0.85)',
                flexShrink: 0,
              }}
            >
              <img
                src={aboutImage}
                alt="Samuel Amosiana"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Experience */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[56px] font-bold text-[#f8f7f9] text-center mb-12"
          >
            Work Experience
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ExperienceCategoryCard
              Icon={Briefcase}
              categoryLabel="Professional"
              entries={professionalExperiences}
              delay={0}
            />
            <ExperienceCategoryCard
              Icon={GraduationCap}
              categoryLabel="Teaching"
              entries={teachingExperiences}
              delay={0.12}
            />
            <ExperienceCategoryCard
              Icon={Trophy}
              categoryLabel="Leadership"
              entries={leadershipExperiences}
              delay={0.24}
            />
          </div>
        </div>

        {/* Skills */}
        <SkillsSection />

        {/* Education */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[56px] font-bold text-[#f8f7f9] text-center mb-12"
          >
            Education
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* University Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0 }}
              className="bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl p-8 hover:bg-[#f8f7f9]/10 transition-colors group flex flex-col gap-4"
            >
              {/* Duration badge */}
              <div className="flex justify-center">
                <span className="text-sm font-bold text-[#f8f7f9]/80 bg-[#f8f7f9]/10 border border-[#f8f7f9]/20 px-4 py-1 rounded-full">
                  2021 — 2025
                </span>
              </div>

              {/* Institution */}
              <h4 className="font-['Poppins:Bold',_sans-serif] text-[20px] md:text-[22px] text-[#f8f7f9] group-hover:text-[#FFDD00] transition-colors leading-snug">
                Chalimbana University
              </h4>

              {/* Qualification */}
              <p className="font-['Poppins:Medium',_sans-serif] text-[15px] md:text-[16px] text-[#f8f7f9]/70 leading-snug">
                Bachelor of Information and Communication Technology with Education
              </p>

              {/* Description */}
              <p className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#f8f7f9]/40 leading-[1.65]">
                Majored in ICTs with Mathematics.
              </p>
            </motion.div>

            {/* Secondary School Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl p-8 hover:bg-[#f8f7f9]/10 transition-colors group flex flex-col gap-4"
            >
              {/* Duration badge */}
              <div className="flex justify-center">
                <span className="text-sm font-bold text-[#f8f7f9]/80 bg-[#f8f7f9]/10 border border-[#f8f7f9]/20 px-4 py-1 rounded-full">
                  2016 — 2018
                </span>
              </div>

              {/* Institution */}
              <h4 className="font-['Poppins:Bold',_sans-serif] text-[20px] md:text-[22px] text-[#f8f7f9] group-hover:text-[#FFDD00] transition-colors leading-snug">
                Jembo Secondary School
              </h4>

              {/* Qualification */}
              <p className="font-['Poppins:Medium',_sans-serif] text-[15px] md:text-[16px] text-[#f8f7f9]/70 leading-snug">
                Grade 12 Certificate
              </p>

              {/* Description */}
              <p className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#f8f7f9]/40 leading-[1.65]">
                Completed Senior Secondary — 12 Points.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
