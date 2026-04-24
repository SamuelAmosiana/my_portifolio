import { motion } from "motion/react";
import { Phone, User } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function SupportSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section 
      id="support" 
      className="py-20 relative" 
      style={{ background: isDark ? "rgba(31, 31, 31, 0.5)" : "rgba(26, 26, 26, 0.03)" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: isDark ? "#f8f7f9" : "#1a1a1a" }}
          className="font-['Poppins:Bold',_sans-serif] text-[32px] sm:text-[48px] md:text-[56px] mb-8"
        >
          Support My Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ color: isDark ? "rgba(248, 247, 249, 0.6)" : "rgba(26, 26, 26, 0.6)" }}
          className="font-['Poppins:Regular',_sans-serif] text-[18px] md:text-[24px] max-w-3xl mx-auto mb-12"
        >
          If you find my projects useful or just want to say thanks, consider supporting me! Your support helps me keep building open-source tools and content.
        </motion.p>

        {/* Mobile Transfer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl border transition-all duration-300"
          style={{ 
            background: isDark ? "rgba(248, 247, 249, 0.05)" : "#ffffff",
            borderColor: isDark ? "rgba(248, 247, 249, 0.1)" : "rgba(26, 26, 26, 0.1)",
            boxShadow: isDark ? "none" : "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          <span className="text-[#FFDD00] font-['Poppins:Bold',_sans-serif] text-sm uppercase tracking-widest">Mobile Transfer</span>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-10 h-10 rounded-full bg-[#FFDD00]/10 flex items-center justify-center text-[#FFDD00]">
                <User size={20} />
              </div>
              <span 
                style={{ color: isDark ? "#f8f7f9" : "#1a1a1a" }}
                className="font-['Poppins:Bold',_sans-serif] text-[20px] md:text-[24px]"
              >
                Samuel Sianamate
              </span>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <div className="w-10 h-10 rounded-full bg-[#FFDD00]/10 flex items-center justify-center text-[#FFDD00]">
                <Phone size={20} />
              </div>
              <a 
                href="tel:0779866275"
                style={{ color: isDark ? "#FFDD00" : "#d4a800" }}
                className="font-['Poppins:Bold',_sans-serif] text-[20px] md:text-[24px] hover:underline transition-all"
              >
                0779866275
              </a>
            </div>
          </div>
          
          <p 
            style={{ color: isDark ? "rgba(248, 247, 249, 0.4)" : "rgba(26, 26, 26, 0.4)" }}
            className="text-xs font-['Poppins:Medium',_sans-serif] mt-2"
          >
            Thank you for your generosity!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
