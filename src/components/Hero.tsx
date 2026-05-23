import { motion } from "framer-motion";
import { Github, Linkedin, Download, Command, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToNextNode = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/POORVA JAIN resume.pdf";
    link.download = "POORVA JAIN resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#050508] text-white flex items-center justify-center overflow-hidden py-24 px-4 md:px-12 selection:bg-purple-500 selection:text-white"
    >
      {/* BACKGROUND VECTOR ENVIRONMENT */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,#1a102f_0%,transparent_60%)] opacity-40" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,#0c1a24_0%,transparent_60%)] opacity-40" />
        
        {/* Fine Architectural Matrix Lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Subtle glowing horizontal beam */}
        <motion.div 
          animate={{ y: ["0vh", "100vh"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent w-full"
        />
      </div>

      {/* COMPOSITIONAL FRAME CONTAINER */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT TEXT CONTENT PANEL */}
        <div className="col-span-1 lg:col-span-8 space-y-10 text-left">
          
          {/* Active Lifecycle Telemetry Tag */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-amber-400 uppercase tracking-[0.2em]"
          >
            <span className="w-2 h-2 bg-amber-400 animate-ping rounded-full" />
            Ecosystem Pipeline Online // 2026
          </motion.div>

          {/* Epic Masked Headline Block */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black tracking-tighter uppercase leading-[0.9] text-white">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-zinc-500"
              >
                ENGINEERING
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-purple-400"
              >
                POORVA JAIN
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 font-serif font-light italic text-xl md:text-2xl tracking-tight max-w-2xl"
            >
              Developing automated backend infrastructures and contextual algorithmic machine learning platforms.
            </motion.p>
          </div>

          {/* Verified Real-time Residency Log */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] max-w-xl font-mono text-xs text-zinc-400 space-y-2 relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-[11px] text-zinc-500 uppercase tracking-wider">
              <span>// ACTIVE INSTANCE DETAILED</span>
              <span className="text-cyan-400">STATUS // CURRENT</span>
            </div>
            <div className="text-sm font-sans text-zinc-200 font-medium">
              Technology Intern at CA-Copilot
            </div>
            <div className="text-zinc-500 font-light font-sans text-xs">
              Focusing on deployment logic optimization, custom data flows, and end-to-end API orchestration frameworks.
            </div>
          </motion.div>

          {/* Tactical Monospace CTA Actions Block */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              className="rounded-xl px-6 h-12 font-mono text-xs tracking-wider uppercase bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/15 group relative"
              onClick={handleDownload}
            >
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
              Get System Resume
            </Button>

            <Button
              variant="outline"
              className="rounded-xl px-5 h-12 font-mono text-xs tracking-wider uppercase bg-transparent border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => window.open("https://github.com/Poorvajain2005", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              Source Manifest
            </Button>

            <Button
              variant="outline"
              className="rounded-xl px-5 h-12 font-mono text-xs tracking-wider uppercase bg-transparent border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => window.open("https://linkedin.com/in/poorva-jain-92867a2b5", "_blank")}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Let's Connect
            </Button>
          </motion.div>

        </div>

        {/* RIGHT METRICAL MATRIX DECK */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-1 lg:col-span-4 hidden lg:block space-y-4 font-mono text-[11px]"
        >
          <div className="p-6 rounded-2xl bg-zinc-950/40 border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-widest">// SYSTEM ATTRIBUTES</div>
            
            <div className="space-y-2.5">
              <div className="flex justify-between py-1.5 border-b border-white/[0.03]">
                <span className="text-zinc-500">CORE RUNTIME:</span>
                <span className="text-zinc-200">NODE.JS // PYTHON</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.03]">
                <span className="text-zinc-500">INTELLIGENCE:</span>
                <span className="text-zinc-200">COMPUTER VISION // ML</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.03]">
                <span className="text-zinc-500">INFRASTRUCTURE:</span>
                <span className="text-zinc-200">AWS // DOCKER MESH</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-zinc-500">AVAILABILITY:</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                  OPEN_TO_OFFERS
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-600 justify-end px-2">
            <Command className="w-3 h-3" />
            <span>SYS_VERSION // 4.0.26</span>
          </div>
        </motion.div>

      </div>

      {/* KINETIC MAP ANCHOR BUTTON */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={scrollToNextNode}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-zinc-500 hover:text-white transition-colors group uppercase"
      >
        <Compass className="w-4 h-4 text-purple-500 animate-spin transition-transform" style={{ animationDuration: '8s' }} />
        <span>Scan System Map</span>
      </motion.button>
    </section>
  );
};