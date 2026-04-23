import { motion } from "motion/react";
import profileImage from "../assets/ndine_coder.jpg";
import { Database, Terminal, Code2, Cloud, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  // Responsive state for orbital radius
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Orbital radius based on screen size
  const orbitalRadius = isMobile ? 120 : 160;
  const iconSize = isMobile ? 32 : 40;

  // Tech icons data with calculated orbital positions
  const techIcons = [
    { icon: Database, label: 'Database', angle: 0 },
    { icon: GitBranch, label: 'Git', angle: 72 },
    { icon: Terminal, label: 'Terminal', angle: 144 },
    { icon: Code2, label: 'Development', angle: 216 },
    { icon: Cloud, label: 'Cloud', angle: 288 },
  ];

  return (
    <section id="home" className="h-auto relative z-10 flex items-center justify-center pb-20">
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

      <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pb-6">
        {/* Left content — order-2 on mobile so image shows first */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="space-y-4">
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[48px] md:text-[56px] text-[#f8f7f9]">
              Hi, I'm Samuel
            </h1>
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[13px] sm:text-[14px] lg:text-[32px] leading-[1.2] text-[#f8f7f9] whitespace-nowrap">
              Systems Developer · DevOps Engineer · Technical Mentor
            </h1>
            <p className="font-['Poppins:Regular',_sans-serif] text-[20px] text-[#f8f7f9]/60 max-w-lg mx-auto lg:mx-0">
              Engineering Scalable Systems and Delivering Reliable Solutions with Modern Technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate('/projects')}
              className="group border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9] hover:text-[#1f1f1f]"
            >
              <span className="font-['Poppins:Bold',_sans-serif] text-[18px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
                View My Work
              </span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="group bg-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9]/90 text-[#1f1f1f]"
            >
              <span className="font-['Poppins:Bold',_sans-serif] text-[18px]">
                Get in Touch
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right content — order-1 on mobile so image shows first */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          style={{ marginTop: '80px' }}
        >
          {/* Main image container */}
          <div className="relative">
            {/* Circular profile image - PERFECT CIRCLE with equal dimensions */}
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
              style={{
                width: isMobile ? '240px' : '320px',
                height: isMobile ? '240px' : '320px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(255, 215, 0, 0.8)',
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
                width: isMobile ? '240px' : '320px',
                height: isMobile ? '240px' : '320px',
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

            {/* Tech Icon 1: Database - Top Center */}
            <motion.div
              className="absolute"
              style={{
                top: '-10%',
                left: '30%',
                transform: 'translateX(-50%)',
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            >
              <div className="flex items-center justify-center rounded-full" style={{ width: '72px', height: '72px', border: '2px solid #FFD700', background: '#1f1f1f' }}>
                <div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] rounded-full bg-[#1f1f1f] backdrop-blur-sm border-4 border-[#FFD700] shadow-[0_8px_20px_rgba(255,215,0,0.15)] z-20">
                  <Database className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFD700]" strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* Tech Icon 2: Terminal - Right Top */}
            <motion.div
              className="absolute"
              style={{
                top: '70%',
                right: '-8%',
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <div className="flex items-center justify-center rounded-full" style={{ width: '72px', height: '72px', border: '2px solid #FFD700', background: '#1f1f1f' }}>
                <div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] rounded-full bg-[#1f1f1f] backdrop-blur-sm border-4 border-[#FFD700] shadow-[0_8px_20px_rgba(255,215,0,0.15)] z-20">
                  <Terminal className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFD700]" strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* Tech Icon 3: Code2 - Bottom Right */}
            <motion.div
              className="absolute"
              style={{
                bottom: '90%',
                right: '15%',
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              <div className="flex items-center justify-center rounded-full" style={{ width: '72px', height: '72px', border: '2px solid #FFD700', background: '#1f1f1f' }}>
                <div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] rounded-full bg-[#1f1f1f] backdrop-blur-sm border-4 border-[#FFD700] shadow-[0_8px_20px_rgba(255,215,0,0.15)] z-20">
                  <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFD700]" strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* Tech Icon 4: Cloud - Bottom Left */}
            <motion.div
              className="absolute"
              style={{
                bottom: '7%',
                left: '5%',
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <div className="flex items-center justify-center rounded-full" style={{ width: '72px', height: '72px', border: '2px solid #FFD700', background: '#1f1f1f' }}>
                <div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] rounded-full bg-[#1f1f1f] backdrop-blur-sm border-4 border-[#FFD700] shadow-[0_8px_20px_rgba(255,215,0,0.15)] z-20">
                  <Cloud className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFD700]" strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* Tech Icon 5: GitBranch - Left Top */}
            <motion.div
              className="absolute"
              style={{
                top: '30%',
                left: '-8%',
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.6,
              }}
            >
              <div className="flex items-center justify-center rounded-full" style={{ width: '72px', height: '72px', border: '2px solid #FFD700', background: '#1f1f1f' }}>
                <div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] rounded-full bg-[#1f1f1f] backdrop-blur-sm border-4 border-[#FFD700] shadow-[0_8px_20px_rgba(255,215,0,0.15)] z-20">
                  <GitBranch className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFD700]" strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
