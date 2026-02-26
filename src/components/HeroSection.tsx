import { motion } from "motion/react";
import imgAdobeExpressFile31 from "../assets/7ba16f5335969b66c314f7955ee4897ab548acd6.png";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[905px] aspect-square lg:h-[897px] lg:aspect-auto">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1417 1409">
              <defs>
                <filter id="blur" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="128" />
                </filter>
              </defs>
              <ellipse
                cx="708.5"
                cy="704.5"
                rx="452.5"
                ry="448.5"
                fill="#f8f7f9"
                filter="url(#blur)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 lg:pt-0">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9]">
              Hi, I'm Samuel Sianamate
            </h2>
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[50px] lg:text-[96px] leading-[1.1] lg:leading-[0.9] text-[#f8f7f9]">
              SOFTWARE<br />ENGINEER
            </h1>
            <p className="font-['Poppins:Regular',_sans-serif] text-[20px] text-[#f8f7f9]/60 max-w-lg mx-auto lg:mx-0">
              Building scalable applications and innovative solutions with modern technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="group border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9] hover:text-[#1f1f1f]"
            >
              <span className="font-['Poppins:Bold',_sans-serif] text-[18px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
                VIEW PROJECTS
              </span>
            </button>
            <button
              onClick={() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9]/90 text-[#1f1f1f]"
            >
              <span className="font-['Poppins:Bold',_sans-serif] text-[18px]">
                CONTACT ME
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right content - Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:block"
        >
          <div
            className="w-full max-w-[500px] lg:max-w-none h-[400px] lg:h-[700px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl"
            style={{ backgroundImage: `url('${imgAdobeExpressFile31}')` }}
          />
        </motion.div>
      </div>
    </section>
  );
}
