import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Code2, Server, BookOpen, ArrowRight } from "lucide-react";

const roles = [
  {
    id: "systems-developer",
    icon: Code2,
    label: "Systems Developer",
    accentColor: "#FFDD00",
    description:
      "I architect full-stack, enterprise-grade applications from the ground up — no hand-offs, no gaps. I think not across features but within systems themselves, delivering scalable, robust solutions end-to-end.",
    highlights: ["Full-Stack Architecture", "Scalable APIs", "Database Design"],
  },
  {
    id: "devops-engineer",
    icon: Server,
    label: "DevOps Engineer",
    accentColor: "#A78BFA",
    description:
      "I bridge the gap between development and operations — automating pipelines, managing cloud infrastructure, and ensuring seamless CI/CD workflows so software ships fast, reliably, and at scale.",
    highlights: ["CI/CD Pipelines", "Cloud Infrastructure", "Containerisation"],
  },
  {
    id: "tutor-educator",
    icon: BookOpen,
    label: "Technical Mentor",
    accentColor: "#34D399",
    description:
      "I’m passionate about mentoring and empowering the next generation of tech professionals, breaking down complex concepts into practical, real-world solutions.",
    highlights: ["Mentorship", "Technical Workshops", "Knowledge Sharing"],
  },
];

export function AboutPreview() {
  const navigate = useNavigate();

  return (
    <section className="pt-0 pb-20 relative bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading — centered */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[56px] text-[#f8f7f9]"
          >
            About me
          </motion.h2>
        </div>

        {/* 3-column inline card grid — same grid pattern as FeaturedProjects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "2rem",
          }}
        >
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl p-8 hover:bg-[#f8f7f9]/10 transition-colors group flex flex-col gap-5"
              >
                {/* Icon badge */}
                <div className="flex items-center justify-center w-[54px] h-[54px] rounded-xl bg-[#f8f7f9]/10 border border-[#f8f7f9]/20">
                  <Icon size={26} strokeWidth={2} className="text-[#f8f7f9]" />
                </div>

                {/* Role title */}
                <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] group-hover:text-[#FFDD00] transition-colors text-center">
                  {role.label}
                </h3>

                {/* Description */}
                <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9] leading-relaxed flex-1">
                  {role.description}
                </p>

                {/* Highlight tags */}
                <div className="flex flex-wrap gap-2">
                  {role.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/60 bg-[#f8f7f9]/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA button — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => navigate("/about")}
            className="group flex items-center gap-3 border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9]"
          >
            <span className="font-['Poppins:Bold',_sans-serif] text-[18px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
              Explore more about Samuel
            </span>
            <ArrowRight
              size={20}
              className="text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
