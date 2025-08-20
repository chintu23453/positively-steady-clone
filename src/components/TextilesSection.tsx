import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TextilesSection = () => {
  const textileTypes = [
    {
      title: "Silk Sarees",
      description: "Luxurious silk sarees with traditional motifs and vibrant colors from across India."
    },
    {
      title: "Cotton Fabrics", 
      description: "Premium handwoven cotton textiles known for their durability and comfort."
    },
    {
      title: "Wool Carpets",
      description: "Intricately designed wool carpets showcasing centuries-old weaving techniques."
    },
    {
      title: "Block Prints",
      description: "Traditional block-printed fabrics with authentic patterns and natural dyes."
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24" id="textiles">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Traditional Textiles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our extensive collection of traditional Indian textiles, 
            each piece representing the rich heritage and skilled craftsmanship 
            of our weavers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {textileTypes.map((textile, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {textile.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {textile.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextilesSection;