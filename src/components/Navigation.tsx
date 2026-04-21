import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Facebook, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

// Official X (formerly Twitter) logo as SVG
const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home',     path: '/'         },
    { label: 'About',    path: '/about'    },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact',  path: '/contact'  },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1f1f1f]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <Link
              to="/"
              className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] hover:opacity-80 transition-opacity"
            >
              Ndine_Coder<span className="text-[#FFDD00]">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-['Poppins:Medium',_sans-serif] text-[16px] transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-[#FFDD00]'
                      : 'text-[#f8f7f9]/70 hover:text-[#f8f7f9]'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFDD00]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Social Icons + Theme Toggle (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme toggle button */}
              <button
                id="theme-toggle-desktop"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative w-10 h-10 rounded-full flex items-center justify-center nav-theme-toggle transition-all duration-300 hover:scale-110"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
                      className="absolute"
                    >
                      <Sun size={18} className="text-[#FFDD00]" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
                      className="absolute"
                    >
                      <Moon size={18} className="text-[#6366f1]" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <div className="h-6 w-px nav-divider" />
              <div className="flex gap-4">
                <SocialIcon Icon={Github} href="https://github.com/SamuelAmosiana" />
                <SocialIcon Icon={null} href="https://x.com/AmCodeSmith" />
                <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/" />
                <SocialIcon Icon={Facebook} href="https://www.facebook.com/samuel.sianamate.75" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#f8f7f9]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block w-8 h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-8 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — right-side drawer with backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop — semi-transparent, blurred, clicks to close */}
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(3px)' }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel — slides in from the right */}
            <motion.div
              key="drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col"
              style={{
                width: 'min(78vw, 320px)',
                paddingTop: '5rem',
                paddingLeft: '1.75rem',
                paddingRight: '1.75rem',
                paddingBottom: '2.5rem',
              }}
            >
              {/* Drawer background — adapts to theme via CSS */}
              <div className="absolute inset-0 mobile-drawer-bg rounded-l-2xl shadow-2xl" />

              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center nav-theme-toggle text-[#f8f7f9] hover:text-[#FFDD00] transition-colors z-10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Nav links */}
              <div className="relative z-10 flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 font-['Poppins:Bold',_sans-serif] text-[22px] border-b transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-[#FFDD00] border-[#FFDD00]/20'
                          : 'text-[#f8f7f9] border-[#f8f7f9]/8 hover:text-[#FFDD00]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social icons + theme toggle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 mt-auto flex items-center gap-5 flex-wrap"
              >
                <SocialIcon Icon={Github} href="https://github.com/SamuelAmosiana" size={22} />
                <SocialIcon Icon={null} href="https://x.com/AmCodeSmith" size={22} />
                <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/" size={22} />
                <SocialIcon Icon={Facebook} href="https://www.facebook.com/samuel.sianamate.75" size={22} />

                {/* Theme toggle */}
                <button
                  id="theme-toggle-mobile"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="relative w-10 h-10 rounded-full flex items-center justify-center nav-theme-toggle transition-all duration-300"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {theme === 'dark' ? (
                      <motion.span
                        key="sun-mobile"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        <Sun size={22} className="text-[#FFDD00]" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="moon-mobile"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        <Moon size={22} className="text-[#6366f1]" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialIcon({ Icon, href, size = 20 }: { Icon: any; href: string; size?: number }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#f8f7f9]/70 hover:text-[#FFDD00] transition-colors duration-200"
    >
      {Icon ? <Icon size={size} /> : <XIcon size={size} />}
    </a>
  );
}
