import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingShape = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <div 
    className={`absolute rounded-full opacity-20 ${className}`}
    style={{ 
      animationDelay: `${delay}s`,
      background: 'var(--gradient-primary)'
    }}
  />
);

const ParticleElement = ({ x, y, delay }: { x: string; y: string; delay: number }) => (
  <div
    className="absolute w-1 h-1 bg-white/30 rounded-full"
    style={{
      left: x,
      top: y,
      animation: `particle-float 8s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  />
);

export const Hero = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    delay: Math.random() * 8
  }));

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <FloatingShape className="w-64 h-64 -top-32 -left-32 floating" delay={0} />
        <FloatingShape className="w-48 h-48 top-1/4 -right-24 floating-delayed" delay={2} />
        <FloatingShape className="w-32 h-32 bottom-1/4 left-1/4 floating" delay={4} />
        <FloatingShape className="w-40 h-40 -bottom-20 -right-20 floating-delayed" delay={1} />
        
        {/* Particle Animation */}
        {particles.map((particle, i) => (
          <ParticleElement key={i} {...particle} />
        ))}
        
        {/* Gradient Overlays */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ background: 'var(--gradient-primary)' }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{ background: 'var(--gradient-secondary)' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-bold leading-tight">
              <span className="block text-gradient-primary">Your Name</span>
            </h1>
            
            {/* Animated Tagline */}
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
              <span className="inline-block animate-pulse">Data Science</span>
              <span className="mx-4 text-gradient-secondary">•</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '1s' }}>
                Full-Stack Developer
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent solutions through data science and modern web development. 
            Turning complex problems into elegant, scalable applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="btn-neon-primary group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button className="btn-ghost-glow group">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            
            <Button className="btn-ghost-glow group">
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
        >
          <ArrowDown className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};