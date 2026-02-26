import { Toaster } from "sonner";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { SkillsSection } from "./components/SkillsSection";
import { SupportSection } from "./components/SupportSection";
import { FeedbackContactSection } from "./components/FeedbackContactSection";

export default function App() {
  return (
    <div className="bg-[#1f1f1f] min-h-screen text-white overflow-x-hidden selection:bg-[#FFDD00] selection:text-black">
      <Toaster position="bottom-right" theme="dark" />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CertificationsSection />
        <SkillsSection />
        <ProjectsSection />
        <SupportSection />
        <FeedbackContactSection />
      </main>
      
      <footer className="py-8 text-center text-[#f8f7f9]/40 border-t border-[#f8f7f9]/10 mt-20">
        <p className="font-['Poppins:Regular',_sans-serif]">
          © {new Date().getFullYear()} Neeraj. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
