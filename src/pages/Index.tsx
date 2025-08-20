import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import WeaversSection from "@/components/WeaversSection";
import TextilesSection from "@/components/TextilesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <HeroSection />
        <HeritageSection />
        <WeaversSection />
        <TextilesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
