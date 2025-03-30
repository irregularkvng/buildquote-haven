
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from "@/providers/ThemeProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90' 
          : 'py-5 bg-transparent dark:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/logo.svg" 
            alt="Company Logo" 
            className="h-10 w-auto"
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-teal-700 dark:text-gray-200 dark:hover:text-teal-400 font-medium transition-colors">
            Features
          </a>
          <a href="#process" className="text-gray-700 hover:text-teal-700 dark:text-gray-200 dark:hover:text-teal-400 font-medium transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-teal-700 dark:text-gray-200 dark:hover:text-teal-400 font-medium transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-teal-700 dark:text-gray-200 dark:hover:text-teal-400 font-medium transition-colors">
            Contact
          </a>
          <Button className="bg-teal-700 hover:bg-teal-800 text-white font-medium shadow-sm hover:shadow dark:bg-teal-600 dark:hover:bg-teal-700 transition-all">
            Get Started
          </Button>
          
          {/* Dark Mode Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="ml-2 rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Dark Mode Toggle for Mobile */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <button 
            className="text-gray-700 dark:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md border-t border-gray-100 dark:border-gray-800 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-teal-700 dark:text-gray-200 dark:hover:text-teal-400 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#process" 
              className="text-gray-700 hover:text-teal-700 dark:text-gray-200 dark:hover:text-teal-400 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-teal-700 dark:text-gray-200 dark:hover:text-teal-400 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-teal-700 dark:text-gray-200 dark:hover:text-teal-400 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-medium mt-2 w-full"
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
