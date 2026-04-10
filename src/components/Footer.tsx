import { Github, Linkedin, Twitter, Youtube, Mail, Phone } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter / X" },
  { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#f8f7f9]/10">

      {/* Three columns — always one horizontal row */}
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-3 gap-2 items-center">

        {/* Col 1 — Referral */}
        <div className="flex flex-col gap-0.5">
          <p className="font-['Poppins:Bold',_sans-serif] text-[13px] text-[#f8f7f9] leading-tight">
            Samuel Sianamate
          </p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[11px] text-[#f8f7f9]/50 leading-tight">
            Systems Developer @ LSUC
          </p>
        </div>

        {/* Col 2 — Brand / Copyright (centred) */}
        <div className="flex flex-col items-center gap-0.5 text-center">
          <p className="font-['Poppins:Bold',_sans-serif] text-[13px] text-[#f8f7f9] leading-tight">
            Samuel Sianamate
          </p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[11px] text-[#f8f7f9]/40 leading-tight">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Col 3 — Contact (right-aligned) */}
        <div className="flex flex-col items-end gap-1">
          <a
            href="mailto:sianamatesamuel@gmail.com"
            className="inline-flex items-center gap-1.5 font-['Poppins:Regular',_sans-serif] text-[11px] text-[#f8f7f9]/60 hover:text-[#FFDD00] transition-colors duration-200 whitespace-nowrap"
          >
            <Mail size={11} />
            sianamatesamuel@gmail.com
          </a>
          <a
            href="tel:+260979667723"
            className="inline-flex items-center gap-1.5 font-['Poppins:Regular',_sans-serif] text-[11px] text-[#f8f7f9]/60 hover:text-[#FFDD00] transition-colors duration-200 whitespace-nowrap"
          >
            <Phone size={11} />
            +260 979 667 723
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#f8f7f9]/10" />

      {/* Social icons — centred */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-[#f8f7f9]/15 text-[#f8f7f9]/40 hover:text-[#FFDD00] hover:border-[#FFDD00]/40 transition-all duration-200"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>

    </footer>
  );
}
