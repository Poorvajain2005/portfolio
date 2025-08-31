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
            <h3 className="text-2xl font-bold text-gradient-primary">
              Poorva Jain
            </h3>
            <p className="text-muted-foreground"></p>
          </div>

          {/* Fun Footer Note */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Way too much</span>
              <span className="text-yellow-400">☕</span>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} Poorva Jain. Made with questionable design
              choices.
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-gradient-primary transition-colors duration-300"
              >
                Privacy (lol)
              </a>
              <a
                href="#"
                className="hover:text-gradient-primary transition-colors duration-300"
              >
                Terms (YOLO)
              </a>
              <span className="text-xs opacity-50">No cookies harmed 🍪</span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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