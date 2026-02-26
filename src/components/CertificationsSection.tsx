import { motion } from "motion/react";

export function CertificationsSection() {
  const certifications = [
    {
      title: "CERTIFIED SCRUM PRODUCT OWNER®",
      year: "2024",
      organization: "Scrum Alliance®"
    },
    {
      title: "AWS CERTIFIED DEVELOPER",
      year: "2023",
      organization: "Amazon Web Services"
    },
    {
      title: "META FRONT-END DEVELOPER",
      year: "2023",
      organization: "Meta"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-['Poppins:Bold',_sans-serif] text-[32px] sm:text-[48px] md:text-[96px] text-[#f8f7f9] mb-12"
        >
          Achievements
        </motion.h2>

        <div className="space-y-8 relative border-l-2 border-[#f8f7f9]/10 ml-4 md:ml-0 md:pl-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="max-w-4xl relative pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-[-41px] top-[8px] w-[12px] h-[12px] bg-[#FFDD00] rounded-full shadow-[0_0_10px_rgba(255,221,0,0.5)]" />

              <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[20px] md:text-[24px] text-[#f8f7f9] mb-1">
                {cert.title}
              </h3>
              <p className="font-['Poppins:Regular',_sans-serif] text-[16px] md:text-[18px] text-[#f8f7f9]/60 mb-1">
                {cert.year}
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] text-[16px] md:text-[18px] text-[#f8f7f9]/40">
                {cert.organization}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
