import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

export function ContactPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative bg-[#1f1f1f]/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-['Poppins:Bold',_sans-serif] text-[32px] sm:text-[48px] md:text-[64px] text-[#f8f7f9] mb-6"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-['Poppins:Regular',_sans-serif] text-[18px] md:text-[24px] text-[#f8f7f9]/60 max-w-3xl mx-auto mb-10"
        >
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => navigate("/contact")}
          className="group border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9]"
        >
          <span className="font-['Poppins:Bold',_sans-serif] text-[18px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
            Contact Me
          </span>
        </motion.button>
      </div>
    </section>
  );
}
