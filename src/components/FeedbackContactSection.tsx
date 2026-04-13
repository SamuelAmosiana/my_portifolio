import { useState } from "react";
import { motion } from "motion/react";
import { Star, Send } from "lucide-react";
import { toast } from "sonner";

export function FeedbackContactSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Form submitted:", { ...formData, rating });
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setRating(0);
  };

  return (
    <section id="feedback" className="py-20 relative bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-['Poppins:Bold',_sans-serif] text-[32px] sm:text-[48px] md:text-[64px] text-[#f8f7f9] mb-8">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/80 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-lg px-4 py-3 text-[#f8f7f9] focus:outline-none focus:border-[#f8f7f9]/30 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/80 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-lg px-4 py-3 text-[#f8f7f9] focus:outline-none focus:border-[#f8f7f9]/30 transition-colors"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/80 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-lg px-4 py-3 text-[#f8f7f9] focus:outline-none focus:border-[#f8f7f9]/30 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f8f7f9] text-[#1f1f1f] font-['Poppins:Bold',_sans-serif] py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#f8f7f9]/90 transition-colors"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Feedback / Rating */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#f8f7f9]/5 p-8 rounded-2xl border border-[#f8f7f9]/10 h-fit"
        >
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[32px] text-[#f8f7f9] mb-4">
            Rate my Portfolio
          </h3>
          <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9]/60 mb-8">
            Your feedback helps me improve. How would you rate your experience?
          </p>

          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <Star
                  size={40}
                  className={`${star <= (hoverRating || rating)
                    ? "fill-[#FFDD00] text-[#FFDD00]"
                    : "text-[#f8f7f9]/20"
                    } transition-colors duration-200`}
                />
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-['Poppins:Bold',_sans-serif] text-[20px] text-[#f8f7f9]">
              Contact Info
            </h4>
            <div className="space-y-2 text-[#f8f7f9]/60 font-['Poppins:Regular',_sans-serif]">
              <p>Email: sianamatesamuel@gmail.com</p>
              <p>Phone: +260 979 667 723</p>
              <p>Location: Lusaka, Zambia</p>
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-3 pt-4 border-t border-[#f8f7f9]/10">
            <h4 className="font-['Poppins:Bold',_sans-serif] text-[20px] text-[#f8f7f9] flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#34D399] animate-pulse" />
              Availability
            </h4>
            <div className="space-y-2 text-[#f8f7f9]/60 font-['Poppins:Regular',_sans-serif]">
              <p>I'm currently available for freelance work and exciting collaborations.</p>
              <p>My typical response time is within 24 – 48 hours.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
