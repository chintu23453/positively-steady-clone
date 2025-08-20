import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section className="w-full bg-secondary py-16 lg:py-24" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with the All India Weavers Federation. We're here to 
            support weavers and promote traditional Indian textile craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                <div>
                  <Input 
                    type="text" 
                    placeholder="Subject" 
                    required 
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    className="min-h-32"
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Address</h4>
                  <p className="text-muted-foreground">
                    All India Weavers Federation<br />
                    New Delhi, India
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91 11 1234 5678</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">info@aiweavers.org</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Working Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;