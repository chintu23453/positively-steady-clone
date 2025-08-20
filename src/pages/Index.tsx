import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import WeaversSection from "@/components/WeaversSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <HeroSection />
        <HeritageSection />
        <WeaversSection />
      </main>
    </div>
  );
};

export default Index;
