import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Send, Mail, Phone, MapPin, CheckCircle, XCircle, X, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EmailJS configuration ───────────────────────────────────────────────────
// Replace the three placeholders below with your own EmailJS values.
// Sign up free at https://www.emailjs.com and follow the setup guide in the
// README or the comment block further down in this file.
const EMAILJS_SERVICE_ID  = "service_gd40jl9";
const EMAILJS_TEMPLATE_ID = "template_zncdkwo";
const EMAILJS_PUBLIC_KEY  = "7aO1AwWGhVN5_VGo_";
// ─────────────────────────────────────────────────────────────────────────────

type ModalState = "success" | "error" | null;

export function FeedbackContactSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [modal, setModal] = useState<ModalState>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name:    formData.name,
      from_email:   formData.email,
      reply_to:     formData.email,
      subject:      `[Portfolio Contact] ${formData.subject} — from ${formData.name}`,
      message:      formData.message,
      to_name:      "Samuel",
      to_email:     "sianamatesamuel@gmail.com",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setModal("success");
    } catch (err: any) {
      console.error("EmailJS error — full details:", err);
      console.error("Status:", err?.status);
      console.error("Error text:", err?.text);
      setModal("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="feedback" className="py-20 relative bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-28"
        >
          <h2 className="font-['Poppins:Bold',_sans-serif] text-[32px] sm:text-[48px] md:text-[56px] text-[#f8f7f9]">
            Get in Touch
          </h2>
          <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9]/50 mt-8 text-[16px] max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Card — Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl p-8 flex flex-col gap-8"
          >
            <h3 className="font-['Poppins:Bold',_sans-serif] text-[32px] sm:text-[42px] md:text-[48px] text-[#f8f7f9]">
              Contact Information
            </h3>

            {/* Contact Items */}
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#f8f7f9]/10 flex items-center justify-center">
                  <Mail size={20} className="text-[#f8f7f9]/80" />
                </div>
                <div>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/50 text-[13px] uppercase tracking-widest">
                    Email
                  </p>
                  <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9] text-[15px] mt-0.5">
                    sianamatesamuel@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#f8f7f9]/10 flex items-center justify-center">
                  <Phone size={20} className="text-[#f8f7f9]/80" />
                </div>
                <div>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/50 text-[13px] uppercase tracking-widest">
                    Phone
                  </p>
                  <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9] text-[15px] mt-0.5">
                    +260 979 667 723
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#f8f7f9]/10 flex items-center justify-center">
                  <MapPin size={20} className="text-[#f8f7f9]/80" />
                </div>
                <div>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/50 text-[13px] uppercase tracking-widest">
                    Location
                  </p>
                  <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9] text-[15px] mt-0.5">
                    Lusaka, Zambia
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#f8f7f9]/10" />

            {/* Availability */}
            <div className="space-y-3">
              <h4 className="font-['Poppins:Bold',_sans-serif] text-[18px] text-[#f8f7f9] flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#34D399] animate-pulse" />
                Availability
              </h4>
              <div className="space-y-1 text-[#f8f7f9]/60 font-['Poppins:Regular',_sans-serif] text-[14px]">
                <p>I'm currently available for freelance work and exciting collaborations.</p>
                <p>My typical response time is within 24 – 48 hours.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Card — Send Me a Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl p-8"
          >
            <h3 className="font-['Poppins:Bold',_sans-serif] text-[32px] sm:text-[42px] md:text-[48px] text-[#f8f7f9] mb-8">
              Send me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/70 text-[13px] uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-lg px-4 py-3 text-[#f8f7f9] placeholder-[#f8f7f9]/30 focus:outline-none focus:border-[#f8f7f9]/40 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/70 text-[13px] uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-lg px-4 py-3 text-[#f8f7f9] placeholder-[#f8f7f9]/30 focus:outline-none focus:border-[#f8f7f9]/40 transition-colors"
                  placeholder="Your email address"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/70 text-[13px] uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-lg px-4 py-3 text-[#f8f7f9] placeholder-[#f8f7f9]/30 focus:outline-none focus:border-[#f8f7f9]/40 transition-colors"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/70 text-[13px] uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-lg px-4 py-3 text-[#f8f7f9] placeholder-[#f8f7f9]/30 focus:outline-none focus:border-[#f8f7f9]/40 transition-colors resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#f8f7f9] text-[#1f1f1f] font-['Poppins:Bold',_sans-serif] py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#f8f7f9]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Rate My Portfolio — Outside the Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-[#f8f7f9]/5 border border-[#f8f7f9]/10 rounded-2xl p-10 text-center max-w-2xl mx-auto"
        >
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[32px] sm:text-[48px] md:text-[56px] text-[#f8f7f9] mb-3">
            Rate my Portfolio
          </h3>
          <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9]/50 mb-8 max-w-md mx-auto">
            Your feedback helps me improve. How would you rate your experience with my portfolio?
          </p>
          <div className="flex gap-3 justify-center">
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
                  size={44}
                  className={`${star <= (hoverRating || rating)
                      ? "fill-[#FFDD00] text-[#FFDD00]"
                      : "text-[#f8f7f9]/20"
                    } transition-colors duration-200`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/60 text-[15px]"
            >
              {rating === 5
                ? "🎉 Amazing! Thank you so much!"
                : rating >= 3
                  ? "😊 Thanks for your feedback!"
                  : "😔 I appreciate your honesty, I'll keep improving!"}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* ── Animated feedback modal ── */}
      <AnimatePresence>
        {modal && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: "rgba(10,10,10,0.75)", backdropFilter: "blur(6px)" }}
            onClick={() => setModal(null)}
          >
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, scale: 0.85, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 32 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl p-10 text-center shadow-2xl"
              style={{
                background: modal === "success"
                  ? "linear-gradient(135deg, #0d2f23 0%, #113326 100%)"
                  : "linear-gradient(135deg, #2f0d0d 0%, #331111 100%)",
                border: modal === "success"
                  ? "1px solid rgba(52,211,153,0.25)"
                  : "1px solid rgba(239,68,68,0.25)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-5">
                {modal === "success" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
                  >
                    <CheckCircle size={64} className="text-[#34D399]" strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
                  >
                    <XCircle size={64} className="text-[#EF4444]" strokeWidth={1.5} />
                  </motion.div>
                )}
              </div>

              {/* Heading */}
              <h3
                className="font-['Poppins:Bold',_sans-serif] text-[26px] text-[#f8f7f9] mb-3"
              >
                {modal === "success" ? "Message Sent! 🎉" : "Delivery Failed"}
              </h3>

              {/* Body */}
              <p className="font-['Poppins:Regular',_sans-serif] text-[#f8f7f9]/60 text-[15px] leading-relaxed">
                {modal === "success"
                  ? "Thank you for getting in touch! I've received your message and will get back to you within 48 hours."
                  : "Sorry, something went wrong and your message couldn't be delivered. Please try again or reach me directly at sianamatesamuel@gmail.com."}
              </p>

              {/* Action button */}
              <button
                onClick={() => setModal(null)}
                className="mt-8 px-8 py-3 rounded-lg font-['Poppins:Bold',_sans-serif] text-[14px] transition-colors"
                style={{
                  background: modal === "success" ? "#34D399" : "#EF4444",
                  color: "#0d1f1a",
                }}
              >
                {modal === "success" ? "Awesome, thanks!" : "Got it"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
