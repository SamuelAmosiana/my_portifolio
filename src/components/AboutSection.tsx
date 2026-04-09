import { motion } from "motion/react";

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
            I'm a dynamic and results-driven Software Engineer with a robust background in full-stack development and product innovation. I specialize in building scalable web applications using React, Node.js, Laravel, Django and modern cloud infrastructure.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Poppins:Regular',_sans-serif] text-[18px] md:text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.6]"
          >
            My journey in tech has been driven by a passion for solving complex problems and delivering user-centric solutions. With experience in both startup environments and large-scale enterprises, I bring a unique perspective that bridges the gap between technical excellence and business value. I am constantly learning and exploring new technologies to stay ahead of the curve.
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8"
          >
            EXPERIENCE
          </motion.h3>
          <div className="space-y-12">
            <ExperienceItem
              title="ICT Officer (Senior Engineer) - Lusaka South University College"
              period="January, 2026 — Present"
              description="In this role, I manage and optimize IT infrastructure, ensuring system reliability, security, and scalability. I also lead troubleshooting, implement system upgrades, and support backend services that drive organizational efficiency."
            />
            <ExperienceItem
              title="Junior Developer - Lusaka South University College"
              period="January, 2025 — December, 2025"
              description="In this role, I designed and developed responsive web applications, collaborate on backend systems, and contribute to building scalable, user-focused software solutions while continuously improving my development skills."
            />
            <ExperienceItem
              title="Student Teacher - Siavonga STEM Secondary School"
              period="January, 2024 — April, 2024"
              description="In this role, I delivered engaging lessons in ICT and programming, combining theory with hands-on practicals to help students build strong technical foundations and problem-solving skills."
            />
            <ExperienceItem
              title="President – ICT Association Student Chapter | Chalimbana University"
              period=" July, 2024 — July, 2025"
              description="As President, I led initiatives to promote innovation and technical growth, organizing workshops, mentoring students, and collaborating with industry partners to create opportunities for skill development and career advancement."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ title, period, description }: { title: string; period: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl"
    >
      <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[20px] md:text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
        {title}
      </h4>
      <p className="font-['Poppins:ExtraLight',_sans-serif] text-[18px] md:text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
        {period}
      </p>
      <p className="font-['Poppins:Medium',_sans-serif] text-[18px] md:text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
        {description}
      </p>
    </motion.div>
  );
}
