import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Send, Mail, Phone, MapPin, CheckCircle, XCircle, X, Loader2, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";

// ─── EmailJS configuration ───────────────────────────────────────────────────
// EMAILJS_TEMPLATE_ID       → used for the "Send me a Message" contact form
// EMAILJS_RATING_TEMPLATE_ID → used for the "Rate my Portfolio" widget
//
// Create a second EmailJS template for ratings with these variables:
//   {{rating}}        — e.g. "4 / 5 ⭐"
//   {{stars_label}}   — e.g. "★★★★☆"
//   {{comment}}       — optional comment left by the visitor
//   {{to_name}}       — your name
//   {{to_email}}      — your email
//
// Sign up free at https://www.emailjs.com
const EMAILJS_SERVICE_ID = "service_gd40jl9";
const EMAILJS_TEMPLATE_ID = "template_zncdkwo";
const EMAILJS_RATING_TEMPLATE_ID = "template_zncdkwo"; // ← replace with your rating template ID
const EMAILJS_PUBLIC_KEY = "7aO1AwWGhVN5_VGo_";
// ─────────────────────────────────────────────────────────────────────────────

type ModalState = "success" | "error" | null;

// Helper: turn a numeric rating into a star-emoji label
function starsLabel(n: number) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function ratingText(n: number) {
  if (n === 5) return "Excellent";
  if (n === 4) return "Great";
  if (n === 3) return "Good";
  if (n === 2) return "Fair";
  return "Poor";
}

export function FeedbackContactSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // ── Theme-aware modal tokens ──────────────────────────────────────────────
  const modalBg = isLight ? "#111111" : "#ffffff";
  const modalText = isLight ? "#ffffff" : "#111111";
  const modalSubText = isLight ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.65)";
  const modalBorder = isLight ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.10)";
  const modalClose = isLight ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.45)";
  const modalCloseHov = isLight ? "#ffffff" : "#000000";
  // ─────────────────────────────────────────────────────────────────────────

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingComment, setRatingComment] = useState("");
  const [isRatingSending, setIsRatingSending] = useState(false);
  const [ratingModal, setRatingModal] = useState<ModalState>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [modal, setModal] = useState<ModalState>(null);

  // ── Submit star rating via EmailJS ────────────────────────────────────────
  const handleRatingSubmit = async () => {
    if (rating === 0) return;
    setIsRatingSending(true);

    const templateParams = {
      rating: `${rating} / 5 ⭐ — ${ratingText(rating)}`,
      stars_label: starsLabel(rating),
      comment: ratingComment.trim() || "(no comment left)",
      to_name: "Samuel",
      to_email: "sianamatesamuel@gmail.com",
      // Keep contact-form fields empty so the template doesn't break
      from_name: "Portfolio Visitor",
      from_email: "no-reply@portfolio",
      reply_to: "no-reply@portfolio",
      subject: `[Portfolio Rating] ${rating}/5 stars — ${ratingText(rating)}`,
      message: ratingComment.trim() || "(no comment left)",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_RATING_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setRating(0);
      setRatingComment("");
      setRatingModal("success");
    } catch (err: any) {
      console.error("EmailJS rating error:", err);
      setRatingModal("error");
    } finally {
      setIsRatingSending(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      subject: `[Portfolio Contact] ${formData.subject} — from ${formData.name}`,
      message: formData.message,
      to_name: "Samuel",
      to_email: "sianamatesamuel@gmail.com",
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

          {/* Star buttons */}
          <div className="flex gap-3 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              >
                <Star
                  size={44}
                  className={`${star <= (hoverRating || rating)
                    ? "fill-[#FFDD00] text-[#FFDD00] drop-shadow-[0_0_8px_rgba(255,221,0,0.6)]"
                    : "text-[#f8f7f9]/20"
                    } transition-all duration-200`}
                />
              </button>
            ))}
          </div>

          {/* Animate-in: emoji label + comment box + submit */}
          <AnimatePresence>
            {rating > 0 && (
              <motion.div
                key="rating-form"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35 }}
                className="mt-6 flex flex-col gap-4 items-center w-full"
              >
                {/* Emoji label */}
                <p className="font-['Poppins:Medium',_sans-serif] text-[#f8f7f9]/70 text-[15px]">
                  {rating === 5
                    ? "🎉 Amazing! Thank you so much!"
                    : rating >= 3
                      ? "😊 Thanks for your feedback!"
                      : "😔 I appreciate your honesty, I'll keep improving!"}
                </p>

                {/* Optional comment textarea */}
                {/* Scoped ::placeholder colour — can't be set via inline style */}
                <style>{`
                  #rating-comment::placeholder {
                    color: ${isLight ? "rgba(0,0,0,0.35)" : "rgba(248,247,249,0.45)"};
                  }
                `}</style>

                <div
                  className="text-left"
                  style={{ width: "min(400px, 100%)", margin: "0 auto" }}
                >
                  <label
                    htmlFor="rating-comment"
                    className="flex items-center gap-2 font-['Poppins:Medium',_sans-serif] text-[12px] uppercase tracking-widest mb-2"
                    style={{ color: isLight ? "rgba(0,0,0,0.45)" : "rgba(248,247,249,0.55)" }}
                  >
                    <MessageSquare size={13} />
                    Leave a comment (optional)
                  </label>
                  <textarea
                    id="rating-comment"
                    rows={3}
                    value={ratingComment}
                    onChange={(e) => setRatingComment(e.target.value)}
                    placeholder="Tell me what you loved or what I can improve…"
                    className="w-full rounded-lg px-4 py-3 focus:outline-none resize-none text-[14px] transition-colors"
                    style={{
                      background: isLight ? "rgba(0,0,0,0.04)" : "rgba(248,247,249,0.06)",
                      border: isLight ? "1px solid rgba(0,0,0,0.15)" : "1px solid rgba(248,247,249,0.15)",
                      color: isLight ? "#1f1f1f" : "#f8f7f9",
                    }}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(255,221,0,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.border = isLight ? "1px solid rgba(0,0,0,0.15)" : "1px solid rgba(248,247,249,0.15)")}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="button"
                  id="submit-rating-btn"
                  onClick={handleRatingSubmit}
                  disabled={isRatingSending}
                  className="flex items-center gap-2 px-8 py-3 rounded-lg font-['Poppins:Bold',_sans-serif] text-[14px] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: isLight ? "#111111" : "#ffffff",
                    color:      isLight ? "#ffffff" : "#111111",
                  }}
                >
                  {isRatingSending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Rating
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
              style={{ background: modalBg, border: modalBorder }}
            >
              {/* Close button */}
              <button
                onClick={() => setModal(null)}
                style={{ color: modalClose }}
                onMouseEnter={(e) => (e.currentTarget.style.color = modalCloseHov)}
                onMouseLeave={(e) => (e.currentTarget.style.color = modalClose)}
                className="absolute top-4 right-4 transition-colors"
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
                className="font-['Poppins:Bold',_sans-serif] text-[26px] mb-3"
                style={{ color: modalText }}
              >
                {modal === "success" ? "Message Sent! 🎉" : "Delivery Failed"}
              </h3>

              {/* Body */}
              <p
                className="font-['Poppins:Regular',_sans-serif] text-[15px] leading-relaxed"
                style={{ color: modalSubText }}
              >
                {modal === "success"
                  ? "Thank you for getting in touch! I've received your message and will get back to you within 48 hours."
                  : "Sorry, something went wrong and your message couldn't be delivered. Please try again or reach me directly at sianamatesamuel@gmail.com."}
              </p>

              {/* Action button */}
              <button
                onClick={() => setModal(null)}
                className="mt-8 px-8 py-3 rounded-lg font-['Poppins:Bold',_sans-serif] text-[14px] transition-all hover:opacity-90 active:scale-95"
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

      {/* ── Rating submission modal ── */}
      <AnimatePresence>
        {ratingModal && (
          <motion.div
            key="rating-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: "rgba(10,10,10,0.75)", backdropFilter: "blur(6px)" }}
            onClick={() => setRatingModal(null)}
          >
            <motion.div
              key="rating-modal-card"
              initial={{ opacity: 0, scale: 0.85, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 32 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl p-10 text-center shadow-2xl"
              style={{ background: modalBg, border: modalBorder }}
            >
              {/* Close */}
              <button
                onClick={() => setRatingModal(null)}
                style={{ color: modalClose }}
                onMouseEnter={(e) => (e.currentTarget.style.color = modalCloseHov)}
                onMouseLeave={(e) => (e.currentTarget.style.color = modalClose)}
                className="absolute top-4 right-4 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-5">
                {ratingModal === "success" ? (
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
                className="font-['Poppins:Bold',_sans-serif] text-[26px] mb-3"
                style={{ color: modalText }}
              >
                {ratingModal === "success" ? "Rating Received! 🌟" : "Submission Failed"}
              </h3>

              {/* Body */}
              <p
                className="font-['Poppins:Regular',_sans-serif] text-[15px] leading-relaxed"
                style={{ color: modalSubText }}
              >
                {ratingModal === "success"
                  ? "Thank you for rating my portfolio! Your feedback means a lot and helps me grow as a developer."
                  : "Sorry, something went wrong while sending your rating. Please try again or reach me at sianamatesamuel@gmail.com."}
              </p>

              {/* Action */}
              <button
                onClick={() => setRatingModal(null)}
                className="mt-8 px-8 py-3 rounded-lg font-['Poppins:Bold',_sans-serif] text-[14px] transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: ratingModal === "success" ? "#FFDD00" : "#EF4444",
                  color: ratingModal === "success" ? "#1a1400" : "#fff",
                }}
              >
                {ratingModal === "success" ? "You're welcome! 🙏" : "Got it"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
