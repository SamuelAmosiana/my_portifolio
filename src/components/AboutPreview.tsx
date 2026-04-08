import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export function AboutPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative bg-[#1f1f1f]">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => navigate("/about")}
              className="group border-2 border-[#FFDD00] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#FFDD00] hover:text-[#1f1f1f]"
            >
              <span className="font-['Poppins:Bold',_sans-serif] text-[18px] text-[#FFDD00] group-hover:text-[#1f1f1f] transition-colors duration-300">
                Explore more about Samuel
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
