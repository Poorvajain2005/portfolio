import { Heart, Code2, Zap } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Name/Brand */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gradient-primary">Your Name</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer & Data Scientist
            </p>
          </div>

          {/* Tech Stack Attribution */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>using</span>
            <div className="flex items-center gap-1">
              <Code2 className="w-4 h-4" />
              <span className="font-semibold">React</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              <span className="font-semibold">Vite</span>
            </div>
            <span>•</span>
            <span className="font-semibold">TailwindCSS</span>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} Your Name. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="hover:text-gradient-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-gradient-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mx-auto mt-8 p-3 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
          >
            <div className="w-6 h-6 border-2 border-white/60 border-b-transparent border-r-transparent transform rotate-45 group-hover:border-white transition-colors duration-300" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-primary rounded-full opacity-30" />
      </div>
    </footer>
  );
};