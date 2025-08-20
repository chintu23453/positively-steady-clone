import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WeaversSection = () => {
  const weaverTypes = [
    {
      title: "Kanjeevaram",
      description: "Renowned for its vibrant silk sarees with intricate motifs, representing Tamil Nadu's weaving traditions."
    },
    {
      title: "Rajasthan",
      description: "Known for colorful fabrics with mirror work and traditional block printing techniques."
    },
    {
      title: "Bengal",
      description: "Famous for handloom cotton and silk textiles with distinctive artistic patterns."
    },
    {
      title: "Kashmir",
      description: "Celebrated for fine wool and silk carpets with intricate designs and craftsmanship."
    }
  ];

  const features = [
    "Handcrafted excellence",
    "Rich cultural heritage", 
    "Vibrant traditional designs"
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24" id="weavers">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Featured Weavers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the talented artisans behind India's rich weaving heritage, 
            showcasing their craftsmanship, stories, and unique textile styles 
            from different regions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-muted-foreground"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weaverTypes.map((weaver, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {weaver.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {weaver.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeaversSection;