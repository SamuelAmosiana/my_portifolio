import { Github, Linkedin, Facebook } from "lucide-react";

// Official X (formerly Twitter) logo as SVG
const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: Github, href: "https://github.com/SamuelAmosiana", label: "GitHub" },
  { icon: null, href: "https://x.com/AmCodeSmith", label: "X" },
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/samuel.sianamate.75", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#f8f7f9]/10">
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: "2rem", maxWidth: "80rem", margin: "0 auto", padding: "2rem 2.5rem" }}>

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
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-col gap-0.5">
            <p className="font-['Poppins:Bold',_sans-serif] text-[20px] text-[#f8f7f9]/80 leading-snug">
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
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f8f7f9]/8 border border-[#f8f7f9]/15 text-[#f8f7f9]/60 hover:text-[#FFDD00] hover:border-[#FFDD00]/50 transition-all duration-200"
              >
                {Icon ? <Icon size={24} /> : <XIcon size={24} />}
              </a>
            ))}
          </div>
        </div>

        {/* Col 3 — Contact details (right-aligned, no icons) */}
        <div className="flex flex-col items-end" style={{ gap: "12px" }}>
          <a
            href="mailto:sianamatesamuel@gmail.com"
            className="font-['Poppins:Bold',_sans-serif] text-[20px] text-[#f8f7f9]/80 hover:text-[#FFDD00] transition-colors duration-200 whitespace-nowrap"
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
