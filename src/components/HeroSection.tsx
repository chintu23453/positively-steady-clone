import { Button } from "@/components/ui/button";
import heroTextile from "@/assets/hero-textile.jpg";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            Celebrating India's{" "}
            <span className="text-primary font-playfair">Weaving Heritage</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            The All India Weavers Federation connects and supports weavers across
            India, preserving traditional techniques and promoting exquisite
            craftsmanship. Discover the artistry behind every thread.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3">
              Explore Textiles
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Meet Weavers
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <img
            src={heroTextile}
            alt="Traditional Indian textile craftsmanship"
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;