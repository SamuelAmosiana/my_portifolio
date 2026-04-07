import { motion } from "motion/react";

const skills = {
  "Programming Languages": [
    { name: "PHP", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Java", level: 75 },
    { name: "SQL", level: 75 },
    { name: "Python", level: 70 },
    
  ],
  "Frameworks & Libraries": [
    { name: "Laravel", level: 90 },
    { name: "React", level: 85 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 80 },
  ],
  "Tools & DevOps": [
    { name: "Git", level: 85 },
    { name: "Figma", level: 80 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    
  ],
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[96px] text-[#f8f7f9] mb-12"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] border-b border-[#f8f7f9]/20 pb-2">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-['Poppins:Medium',_sans-serif] text-[16px] text-[#f8f7f9]/80">
                        {skill.name}
                      </span>
                      <span className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#f8f7f9]/50">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#f8f7f9]/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-[#f8f7f9]/60 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
