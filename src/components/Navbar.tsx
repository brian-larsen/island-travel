import { useState, useEffect } from 'react';
import logoImage from '../assets/logo.png';
import { X } from 'lucide-react';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('events');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['events', 'attractions', 'stay', 'dining', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Close menu after clicking
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'events', label: 'Upcoming Events' },
    { id: 'attractions', label: 'Popular Attractions' },
    { id: 'stay', label: 'Places to Stay' },
    { id: 'dining', label: 'Cuisine and Dining' },
    { id: 'about', label: 'About the Island' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[#ABD1C6] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logoImage} alt="Taniti Logo" className="h-16 w-auto" />
          </button>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'text-[#00CEED]'
                    : 'text-gray-700 hover:text-[#5CB2AA]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-4 rounded transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#ABD1C6]/30 text-[#00CEED]'
                      : 'text-gray-700 hover:bg-[#ABD1C6]/20 hover:text-[#5CB2AA]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}