import { Github, Linkedin, Twitter, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Github,   href: "https://github.com/SamuelAmosiana",     label: "GitHub" },
  { icon: Twitter,  href: "https://twitter.com/",                  label: "Twitter / X" },
  { icon: Linkedin, href: "https://linkedin.com/in/",              label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/",                 label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#f8f7f9]/10">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", alignItems: "center", gap: "1.5rem", maxWidth: "80rem", margin: "0 auto", padding: "2rem 2.5rem" }}>

        {/* Col 1 — Name + role (left-aligned) */}
        <div className="flex flex-col gap-1.5">
          <p className="font-['Poppins:Bold',_sans-serif] text-[20px] text-[#f8f7f9] leading-tight">
            Samuel Sianamate
          </p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[13px] text-[#f8f7f9]/50 leading-tight">
            Systems Developer @ LSUC
          </p>
        </div>

        {/* Col 2 — Copyright + social icons (centred) */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex flex-col gap-0.5">
            <p className="font-['Poppins:Regular',_sans-serif] text-[13px] text-[#f8f7f9]/60 leading-snug">
              © {new Date().getFullYear()} Samuel Sianamate
            </p>
            <p className="font-['Poppins:Regular',_sans-serif] text-[13px] text-[#f8f7f9]/60 leading-snug">
              All Rights Reserved
            </p>
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#f8f7f9]/8 border border-[#f8f7f9]/15 text-[#f8f7f9]/60 hover:text-[#FFDD00] hover:border-[#FFDD00]/50 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Col 3 — Contact details (right-aligned, no icons) */}
        <div className="flex flex-col items-end gap-1.5">
          <a
            href="mailto:sianamatesamuel@gmail.com"
            className="font-['Poppins:Regular',_sans-serif] text-[13px] text-[#f8f7f9]/60 hover:text-[#FFDD00] transition-colors duration-200 whitespace-nowrap"
          >
            sianamatesamuel@gmail.com
          </a>
          <a
            href="tel:+260979667723"
            className="font-['Poppins:Regular',_sans-serif] text-[13px] text-[#f8f7f9]/60 hover:text-[#FFDD00] transition-colors duration-200 whitespace-nowrap"
          >
            +260 979 667 723
          </a>
        </div>

      </div>
    </footer>
  );
}
