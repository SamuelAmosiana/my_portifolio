import { HeroSection } from "../components/HeroSection";
import { AboutPreview } from "../components/AboutPreview";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { ContactPreview } from "../components/ContactPreview";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      {/* Spacer to offset the fixed navbar */}
      <div className="h-40 lg:h-48" aria-hidden="true" />
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <ContactPreview />
      <Footer />
    </>
  );
}
