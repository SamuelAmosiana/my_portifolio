import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="h-6 w-px bg-[#f8f7f9]/20" />
              <div className="flex gap-4">
                <SocialIcon Icon={Instagram} href="#" />
                <SocialIcon Icon={Twitter} href="#" />
                <SocialIcon Icon={Linkedin} href="#" />
                <SocialIcon Icon={Github} href="#" />
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#1f1f1f] pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-left font-['Poppins:Bold',_sans-serif] text-[24px] ${
                    isActive(item.path) ? 'text-[#FFDD00]' : 'text-[#f8f7f9]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-8 flex gap-6">
                <SocialIcon Icon={Instagram} href="#" size={24} />
                <SocialIcon Icon={Twitter} href="#" size={24} />
                <SocialIcon Icon={Linkedin} href="#" size={24} />
                <SocialIcon Icon={Github} href="#" size={24} />
              </div>
            </div>
          </motion.div>
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
      <Icon size={size} />
    </a>
  );
}
