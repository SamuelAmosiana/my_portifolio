import { HeroSection } from "../components/HeroSection";
import { AboutPreview } from "../components/AboutPreview";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { ContactPreview } from "../components/ContactPreview";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <ContactPreview />
      <Footer />
    </>
  );
}
