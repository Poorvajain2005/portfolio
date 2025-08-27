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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="space-y-6">
            <div className="relative">
              <h1 className="font-bold leading-tight text-left">
                <span className="block">Hey, I'm</span>
                <span className="block text-gradient-primary text-6xl md:text-8xl lg:text-9xl transform -rotate-1">
                  Alex Chen
                </span>
              </h1>
              {/* Quirky annotation */}
              <div className="absolute -right-4 top-4 rotate-12 text-sm text-yellow-400 font-handwriting hidden md:block">
                <div className="relative">
                  <span>← that's me!</span>
                  <svg className="absolute -top-2 -left-2 w-8 h-8 text-yellow-400/60" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Animated Tagline */}
            <div className="text-left space-y-2">
              <div className="text-lg md:text-xl text-muted-foreground">
                I build things that matter
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">Full-Stack Dev</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">Data Enthusiast</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full">Coffee Addict ☕</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-left max-w-2xl space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently crafting digital experiences at <span className="text-gradient-secondary font-semibold">TechCorp</span> 
              and turning coffee into code since 2020. I love building things that solve real problems 
              (and occasionally break in spectacular ways 🚀).
            </p>
            <p className="text-base text-muted-foreground/80">
              When I'm not debugging CSS or training models, you'll find me hiking trails around San Francisco 
              or trying to convince my cat that my keyboard isn't a bed.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-8">
            <Button className="btn-neon-primary group relative">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Grab my Resume
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>
            
            <Button className="btn-ghost-glow group" onClick={() => window.open('https://github.com/alexchen', '_blank')}>
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              My Code
            </Button>
            
            <Button className="btn-ghost-glow group" onClick={() => window.open('https://linkedin.com/in/alexchen-dev', '_blank')}>
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Let's Connect
            </Button>
          </div>
          
          {/* Fun Stats */}
          <div className="flex flex-wrap gap-6 justify-start pt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Currently available for new opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <span>☕</span>
              <span>1,247 cups of coffee consumed this year</span>
            </div>
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