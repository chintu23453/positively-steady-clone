import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground">AIWeavers</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About Us
            </a>
            <a
              href="#weavers"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Weavers
            </a>
            <a
              href="#textiles"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Textiles
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" size="sm">
              Search
            </Button>
            <Button variant="default" size="sm">
              Home
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#weavers"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Weavers
              </a>
              <a
                href="#textiles"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Textiles
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex space-x-4 pt-4">
                <Button variant="ghost" size="sm">
                  Search
                </Button>
                <Button variant="default" size="sm">
                  Home
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;