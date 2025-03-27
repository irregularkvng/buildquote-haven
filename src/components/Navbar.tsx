
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="font-playfair font-bold text-2xl text-purple-800">BamsConsult</div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            Features
          </a>
          <a href="#process" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            Contact
          </a>
          <Button className="bg-purple-700 hover:bg-purple-800 text-white font-medium shadow-sm hover:shadow transition-all">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#process" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium mt-2 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
