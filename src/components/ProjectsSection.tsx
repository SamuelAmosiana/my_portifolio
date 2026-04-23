import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[56px] font-bold text-[#f8f7f9] text-center mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl overflow-hidden hover:border-[#FFDD00]/30 transition-all duration-300 group"
    >
      {/* Cover Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} cover`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-[#1f1f1f]/30 to-transparent" />
        {/* Period badge */}
        <span className="absolute top-4 right-4 text-[#f8f7f9]/80 text-xs font-['Poppins:Regular',_sans-serif] border border-[#f8f7f9]/30 bg-[#1f1f1f]/60 backdrop-blur-sm px-3 py-1 rounded-full">
          {project.period}
        </span>
      </div>

      {/* Card Body */}
      <div style={{ padding: "2.5rem" }}>
        <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] font-bold text-[#f8f7f9] group-hover:text-[#FFDD00] transition-colors mb-3 leading-snug">
          {project.title}
        </h3>

        <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9]/70 mb-6 leading-relaxed text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="text-xs font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/60 bg-[#f8f7f9]/10 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Explore Project button */}
        <Link
          to={`/projects/${project.id}`}
          className="flex items-center justify-center gap-2 w-full border border-[#FFDD00]/60 text-[#FFDD00] hover:bg-[#FFDD00] hover:text-[#1f1f1f] transition-all duration-300 rounded-xl py-2.5 px-6 font-['Poppins:Medium',_sans-serif] text-sm"
        >
          Explore Project
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
