import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Simple search functionality - you can enhance this
      const searchableText = document.body.innerText.toLowerCase();
      if (searchableText.includes(searchTerm.toLowerCase())) {
        alert(`Found "${searchTerm}" on the page!`);
      } else {
        alert(`"${searchTerm}" not found on this page.`);
      }
    }
  };

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
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('weavers')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Weavers
            </button>
            <button
              onClick={() => scrollToSection('textiles')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Textiles
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Desktop Buttons & Search */}
          <div className="hidden md:flex items-center space-x-4">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48"
                  autoFocus
                />
                <Button type="submit" variant="ghost" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </form>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  Search
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Home
                </Button>
              </>
            )}
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
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('weavers')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Weavers
              </button>
              <button
                onClick={() => scrollToSection('textiles')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Textiles
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              
              {/* Mobile Search */}
              <div className="pt-4 border-t border-gray-200">
                <form onSubmit={handleSearch} className="flex flex-col space-y-2">
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <Button type="submit" variant="ghost" size="sm" className="flex-1">
                      Search
                    </Button>
                    <Button 
                      type="button"
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }}
                    >
                      Home
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;