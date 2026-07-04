import { useState } from "react";
import profilePhoto from "/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";

const structuralSkills = {
  infrastructure: ["Node.js", "Express.js", "Azure Data Factory", "ETL Data Pipelines", "AWS Cloud", "Git Versioning"],
  intelligence: ["Python Engines", "Generative AI Architectures", "Predictive ML Pipelines", "Scikit-learn Models", "C++ Systems"],
  persistence: ["SQL Relational", "MySQL Clusters", "MongoDB Schemas", "Firebase Realtime Systems"],
  interfaces: ["JavaScript Core", "TypeScript Typings", "React.js Frameworks", "Tailwind CSS Layouts"]
};

const metrics = [
  { value: "10+", label: "Deployed Production Codebases" },
  { value: "03", label: "Technical Engineering Residencies" },
  { value: "AI × WEB", label: "Specialized Structural Intersection" }
];

export const About = () => {
  const [activeTrack, setActiveTrack] = useState<keyof typeof structuralSkills>("infrastructure");

  return (
    <section id="about" className="relative bg-[#fafafa] text-[#121214] py-36 px-4 md:px-16 overflow-hidden border-b border-zinc-200 selection:bg-black selection:text-white">
      
      {/* 1. STRUCTURAL GRID MESH */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 pointer-events-none px-4 md:px-16">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="border-r border-zinc-200/60 h-full w-full first:border-l last:border-r-0" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* EDITORIAL BANNER HEADING */}
        <header className="mb-28 grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-b border-zinc-900 pb-10">
          <div className="col-span-1 md:col-span-8">
            <span className="block text-xs font-mono tracking-[0.3em] text-zinc-400 uppercase mb-4">
              SECTION 01 // CORE PROFILE
            </span>
            <h2 className="text-6xl sm:text-8xl lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.85] text-zinc-900">
              POORVA <br />
              <span className="font-serif font-light italic text-zinc-400 lowercase tracking-tight">jain</span>
            </h2>
          </div>
          <div className="col-span-1 md:col-span-4 font-mono text-right text-[11px] text-zinc-400 hidden md:block">
            SYSTEM ENGINE MANIFEST <br />
            GWALIOR, IN // UPDATED 2026
          </div>
        </header>

        {/* MAIN COMPOSITIONAL MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Asymmetric Narrative & Stripped Stats */}
          <div className="col-span-1 lg:col-span-5 space-y-16">
            <p className="text-zinc-800 text-xl md:text-2xl font-light leading-snug tracking-tight">
              I balance absolute back-end runtime authority with contextual computational intelligence. I specialize in stripping away template abstraction to construct fast, production-ready full-stack software and raw data workflows.
            </p>

            {/* Kinetic Metrics Stack */}
            <div className="space-y-6 pt-12 border-t-2 border-zinc-900">
              {metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ x: 16 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex items-baseline gap-6 border-b border-zinc-200 pb-4 group cursor-pointer"
                >
                  <span className="text-4xl font-serif font-light italic text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    {metric.value}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Rigid Structural Frame & Segment Matrix */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Profile Frame */}
            <div className="md:col-span-6 relative bg-zinc-100 p-3 border border-zinc-300 shadow-sm group">
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-zinc-900" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-zinc-900" />
              
              <div className="overflow-hidden aspect-[3/4] bg-zinc-200 filter contrast-[1.05] brightness-[0.98]">
                <motion.img
                  src={profilePhoto}
                  alt="Poorva Jain portrait"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700"
                />
              </div>
            </div>

            {/* Kinetic Text Control Deck */}
            <div className="md:col-span-6 space-y-8">
              <div>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-4">
                  // CAPABILITY MATRIX
                </span>
                
                <nav className="flex flex-col gap-2">
                  {(Object.keys(structuralSkills) as Array<keyof typeof structuralSkills>).map((track) => {
                    const isSelected = activeTrack === track;
                    return (
                      <button
                        key={track}
                        onClick={() => setActiveTrack(track)}
                        className="text-left group relative py-1.5 overflow-hidden w-full flex items-center justify-between"
                      >
                        <motion.span 
                          animate={{ 
                            x: isSelected ? 12 : 0,
                            fontStyle: isSelected ? "italic" : "normal",
                            fontWeight: isSelected ? 600 : 300
                          }}
                          className={`text-lg tracking-tight transition-colors duration-300 font-sans ${
                            isSelected ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-700"
                          }`}
                        >
                          {track === "infrastructure" && "Infrastructure Operations"}
                          {track === "intelligence" && "Machine Intelligence"}
                          {track === "persistence" && "Persistence Layers"}
                          {track === "interfaces" && "Client Architectures"}
                        </motion.span>
                        
                        {isSelected && (
                          <motion.span 
                            layoutId="editorialArrow"
                            className="text-sm font-serif italic text-zinc-900"
                          >
                            →
                          </motion.span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Seamless Typography Stream Loading */}
              <div className="pt-6 border-t border-zinc-200 min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeTrack}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      visible: { transition: { staggerChildren: 0.04 } },
                      hidden: {}
                    }}
                    className="space-y-2.5 font-mono text-xs text-zinc-600"
                  >
                    {structuralSkills[activeTrack].map((tech) => (
                      <motion.li
                        key={tech}
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150 } }
                        }}
                        className="flex items-center justify-between group py-0.5 border-b border-transparent hover:border-zinc-200 transition-colors"
                      >
                        <span className="font-sans text-sm text-zinc-800 font-medium group-hover:text-black transition-colors">
                          {tech}
                        </span>
                        <span className="text-[10px] text-zinc-300 select-none tracking-tighter">
                          Verified // 01
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* INDUSTRIAL BRUTALIST RUNTIME TICKER */}
        <footer className="mt-36 pt-10 border-t-4 border-zinc-900 overflow-hidden w-full">
          <motion.div 
            animate={{ x: [0, -800] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
            className="flex gap-24 whitespace-nowrap font-mono text-[11px] text-zinc-400 uppercase tracking-[0.2em] font-medium"
          >
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="flex gap-24">
                <span>Core Framework Assembly: Production Compliant</span>
                <span>•</span>
                <span>Asymmetric Data Architecture Logged</span>
                <span>•</span>
                <span>Latency Profiles Locked at Source Layer</span>
                <span>•</span>
                <span>Node System Status: Operable // 100</span>
              </div>
            ))}
          </motion.div>
        </footer>

      </div>
    </section>
  );
};