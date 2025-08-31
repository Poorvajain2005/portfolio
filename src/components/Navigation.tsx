import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-gradient-primary hover:scale-105 transition-transform duration-300 relative group"
          >
            Poorva Jain
            <span className="absolute -top-1 -right-6 text-xs text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
              &lt;dev/&gt;
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-white/10 text-gradient-primary backdrop-blur-sm border border-white/20"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              size="sm"
              className="btn-ghost-glow"
              onClick={() => window.open("https://github.com/Poorvajain2005", "_blank")}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              className="btn-ghost-glow"
              onClick={() => window.open("https://linkedin.com/in/poorva-jain-92867a2b5", "_blank")}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              className="btn-neon-primary"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/POORVA JAIN resume.pdf';
                link.download = 'POORVA JAIN resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-black/90 border-b border-white/10 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-white/10 text-gradient-primary backdrop-blur-sm border border-white/20"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Button
                  className="w-full btn-ghost-glow"
                  onClick={() => window.open("https://github.com/Poorvajain2005", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  className="w-full btn-ghost-glow"
                  onClick={() => window.open("https://linkedin.com/in/poorva-jain-92867a2b5", "_blank")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  className="w-full btn-neon-primary"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/POORVA JAIN resume.pdf';
                    link.download = 'POORVA JAIN resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};