import { motion } from "motion/react";
import { Coffee, Heart } from "lucide-react";

export function SupportSection() {
  return (
    <section id="support" className="py-20 relative bg-[#1f1f1f]/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-['Poppins:Bold',_sans-serif] text-[32px] sm:text-[48px] md:text-[56px] text-[#f8f7f9] mb-8"
        >
          Support My Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-['Poppins:Regular',_sans-serif] text-[18px] md:text-[24px] text-[#f8f7f9]/60 max-w-3xl mx-auto mb-12"
        >
          If you find my projects useful or just want to say thanks, consider supporting me! Your support helps me keep building open-source tools and content.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            href="https://www.buymeacoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-[#FFDD00] text-black rounded-xl font-['Poppins:Bold',_sans-serif] text-lg shadow-lg hover:shadow-[#FFDD00]/20 transition-all"
          >
            <Coffee size={24} />
            Buy Me a Coffee
          </motion.a>

          <motion.a
            href="https://paypal.me"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-[#0070BA] text-white rounded-xl font-['Poppins:Bold',_sans-serif] text-lg shadow-lg hover:shadow-[#0070BA]/20 transition-all"
          >
            <Heart size={24} />
            Donate via PayPal
          </motion.a>
        </div>
      </div>
    </section>
  );
}
