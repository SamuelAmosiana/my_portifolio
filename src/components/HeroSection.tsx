import { motion } from "motion/react";
import profileImage from "../assets/ndine_coder.jpg";
import { Database, Terminal, Code2, Cloud, GitBranch } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Tech icons data with positioning
  const techIcons = [
    { icon: Database, position: 'top', label: 'Database' },
    { icon: Terminal, position: 'right', label: 'Terminal' },
    { icon: Code2, position: 'bottom', label: 'Development' },
    { icon: Cloud, position: 'left', label: 'Cloud' },
    { icon: GitBranch, position: 'top-right', label: 'Git' },
  ];

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
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[30px] lg:text-[96px] leading-[1.1] lg:leading-[0.9] text-[#f8f7f9]">
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

        {/* Right content - Profile image with tech icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:block"
        >
          {/* Main image container */}
          <div className="relative">
            {/* Floating animation wrapper */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
              className="relative z-10"
            >
              {/* Circular profile image - PERFECT CIRCLE with equal dimensions */}
              <div
                style={{ 
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  flexShrink: '0',
                  WebkitFlexShrink: '0',
                }}
                className="relative z-10"
              >
                <img
                  src={profileImage}
                  alt="Samuel Sianamate"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Decorative circular glow matching image radius */}
            <div 
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(248, 247, 249, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
              }}
            />

            {/* Orbiting tech icons */}
            <div className="absolute inset-0 z-20">
              {techIcons.map((tech, index) => {
                const positionStyles: Record<string, string> = {
                  'top': 'absolute -top-6 left-1/2 transform -translate-x-1/2',
                  'top-right': 'absolute top-2 right-2',
                  'right': 'absolute top-1/2 -right-6 transform -translate-y-1/2',
                  'bottom': 'absolute -bottom-6 left-1/2 transform -translate-x-1/2',
                  'left': 'absolute top-1/2 -left-6 transform -translate-y-1/2',
                };

                const animations: Record<string, { y?: number[]; x?: number[]; duration: number; delay: number }> = {
                  'top': { y: [0, -8, 0], duration: 3, delay: 0.5 },
                  'top-right': { y: [0, -6, 0], x: [0, 4, 0], duration: 3.5, delay: 1 },
                  'right': { x: [0, 8, 0], duration: 3, delay: 0.2 },
                  'bottom': { y: [0, 8, 0], duration: 3.2, delay: 0.7 },
                  'left': { x: [0, -8, 0], duration: 3.3, delay: 0.3 },
                };

                const animation = animations[tech.position];

                return (
                  <motion.div
                    key={index}
                    className={positionStyles[tech.position]}
                    animate={{
                      ...(animation.y && { y: animation.y }),
                      ...(animation.x && { x: animation.x }),
                    }}
                    transition={{
                      duration: animation.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "reverse",
                      delay: animation.delay,
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                      <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#f8f7f9]" strokeWidth={2.5} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
