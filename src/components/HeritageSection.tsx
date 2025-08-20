import weaversWorkshop from "@/assets/weavers-workshop.jpg";
import goddessSaraswati from "@/assets/goddess-saraswati.png";

const HeritageSection = () => {
  return (
    <section className="w-full bg-secondary py-16 lg:py-24" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Heritage and Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The All India Weavers Federation has been at the forefront of preserving 
              and promoting India's rich weaving heritage since 1985. Our mission is to 
              connect weavers across the nation, showcase their craftsmanship, and foster 
              innovation while respecting tradition.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">638₹</div>
                <div className="text-sm text-muted-foreground">Total Weavers Supported</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">2116</div>
                <div className="text-sm text-muted-foreground">Weavers Across India</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">21</div>
                <div className="text-sm text-muted-foreground">Years Since Inception</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">840</div>
                <div className="text-sm text-muted-foreground">Years of Tradition</div>
              </div>
            </div>

            <p className="text-muted-foreground">
              Established in 1985, the Federation has grown into a national body 
              dedicated to cultural preservation, community building, and sustainable 
              practices in Indian weaving.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <img
              src={weaversWorkshop}
              alt="Traditional weaving workshop"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src={goddessSaraswati}
              alt="Goddess Saraswati - patron of arts and crafts"
              className="w-full h-64 object-contain rounded-lg shadow-lg bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;