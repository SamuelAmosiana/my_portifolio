import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const featuredProjects = [
  {
    title: "NutriZed",
    period: "2025",
    description:
      "A smart, locally-grounded nutrition platform built specifically for Zambia and similar African communities — bridging the gap between modern health technology and everyday food realities on the ground.",
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    links: { github: "", demo: "https://samuelamosiana.github.io/nutri_zed/nutrized_web.html" },
  },
  {
    title: "Lusaka South University College Website",
    period: "2025",
    description:
      "The official institutional website for Lusaka South University College, featuring programme listings, admissions information, news, and a fully responsive public-facing interface.",
    tech: ["PHP", "Laravel", "Blade", "MySQL", "CSS"],
    links: { github: "", demo: "https://lsc.edu.zm" },
  },
];

export function FeaturedProjects() {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[56px] text-[#f8f7f9]"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl p-8 hover:bg-[#f8f7f9]/10 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] group-hover:text-[#FFDD00] transition-colors">
                  {project.title}
                </h3>
                <span className="text-[#f8f7f9]/40 text-sm font-['Poppins:Regular',_sans-serif] border border-[#f8f7f9]/20 px-3 py-1 rounded-full">
                  {project.period}
                </span>
              </div>

              <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9]/70 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/60 bg-[#f8f7f9]/10 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-[#f8f7f9] hover:text-[#FFDD00] transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm font-['Poppins:Medium',_sans-serif]">
                      Live Demo
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
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
            onClick={() => navigate("/projects")}
            className="group flex items-center gap-3 border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9]"
          >
            <span className="font-['Poppins:Bold',_sans-serif] text-[18px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
              View More
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
