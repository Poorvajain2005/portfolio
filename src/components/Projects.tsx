import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FixIt",
    subtitle: "Civic Reporting Platform",
    description: "An automated public utility engine that runs image validation against uploaded civic infrastructure failures, plotting localized georeocords instantly onto a central dispatcher network.",
    image: "/fixit.png",
    tags: ["React", "Firebase", "Node", "Computer Vision"],
    category: "AI & Automation",
    github: "https://github.com/Poorvajain2005/fixit",
    demo: "https://vercel.com/poorvajain2005s-projects/fix-it",
    accent: "from-emerald-500/20 via-transparent"
  },
  {
    id: 2,
    title: "SupplyChain AI",
    subtitle: "Predictive Logistics",
    description: "Deep analytics dashboard built to intercept shipment telemetry, map route optimization workflows, and log full stack telemetry updates.",
    image: "/supplychain.png",
    tags: ["React", "Node", "Data Analytics"],
    category: "Systems",
    github: "https://github.com/Poorvajain2005/supplychaina",
    demo: "#",
    accent: "from-blue-500/20 via-transparent"
  },
  {
    id: 3,
    title: "Study Kit Generator",
    subtitle: "Contextual LLM Synthesizer",
    description: "An educational sandbox translating raw academic transcripts into compressed semantic flashcards and architectural milestone breakdowns.",
    image: "/studykit.png",
    tags: ["LLM Orchestration", "React", "Node"],
    category: "AI & Automation",
    github: "https://github.com/Poorvajain2005/Study-Kit-Generator",
    demo: "#",
    accent: "from-purple-500/20 via-transparent"
  },
  {
    id: 4,
    title: "Fraud Detection",
    subtitle: "ML Security Subsystem",
    description: "A fast isolation pipeline trained to detect credit pattern anomalies. Shipped with an active Flask routing network.",
    image: "/creditcard.png",
    tags: ["Python", "Flask", "Scikit-Learn"],
    category: "Data & ML",
    github: "https://github.com/Poorvajain2005/credit-card-fraud-detection",
    demo: "https://credit-card-fraud-detection-q4hr.vercel.app/",
    accent: "from-orange-500/20 via-transparent"
  },
  {
    id: 5,
    title: "Volu-Hub",
    subtitle: "RBAC Backend Engine",
    description: "High-throughput token authorization service structuring multi-role permissions, secure state routes, and clean schema validation rules.",
    image: "/volu-hub.png",
    tags: ["Node", "MongoDB", "JWT Auth"],
    category: "Systems",
    github: "https://github.com/Poorvajain2005/volu-hub-backend",
    demo: "https://volu-hub-backend.vercel.app/",
    accent: "from-pink-500/20 via-transparent"
  },
];

const categories = ["All Engineering", "AI & Automation", "Systems", "Data & ML"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Engineering");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All Engineering" || p.category === activeCategory
  );

  return (
    <section id="projects" className="relative bg-[#0a0a0c] text-[#f4f4f5] py-32 px-4 md:px-12 selection:bg-amber-400 selection:text-black">
      
      {/* Background Layer: No neon fuzz, just raw brutalist layout rules */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
        <div className="border-r border-dashed border-white/5 h-full w-full" />
        <div className="border-r border-dashed border-white/5 h-full w-full hidden md:block" />
        <div className="border-r border-dashed border-white/5 h-full w-full hidden md:block" />
        <div className="h-full w-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Heading Layout */}
        <header className="mb-24 flex flex-col gap-8 md:gap-16 border-b border-white/10 pb-12">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500">
            <span>INDEX 02 // LAB WORK</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <h2 className="text-5xl md:text-8xl font-normal font-sans tracking-tight leading-none col-span-1 lg:col-span-8 text-white">
              Selected Work <br />
              <span className="italic font-serif text-zinc-400 font-light font-sans">2024 — 2026</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed col-span-1 lg:col-span-4 lg:pt-4">
              Functional codebases built to solve real architectural challenges. No generic templates, no placeholder setups—just clean execution and practical deployments.
            </p>
          </div>

          {/* Interactive Asymmetric Filters */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-mono mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative pb-2 transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 ${
                  activeCategory === cat 
                    ? "text-white font-bold before:w-full" 
                    : "text-zinc-500 hover:text-zinc-300 before:w-0"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* The Asymmetric Magazine Flow Grid */}
        <motion.div layout className="flex flex-col gap-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  
                  {/* Visual Layout Block - Swaps positions to break visual routine */}
                  <div className={`col-span-1 lg:col-span-7 group relative overflow-hidden bg-zinc-900/40 aspect-[16/10] border border-white/5 p-4 md:p-8 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                    {/* Abstract Content Background Overlay instead of simple box shadow */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-40 transition-opacity duration-500 group-hover:opacity-70`} />
                    
                    <div className="w-full h-full overflow-hidden relative border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Context Block */}
                  <div className={`col-span-1 lg:col-span-5 flex flex-col justify-center ${
                    isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                  }`}>
                    <span className="font-mono text-xs text-amber-400/80 uppercase tracking-widest mb-3 block">
                      // {project.category}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-500 text-sm font-mono mb-6">{project.subtitle}</p>
                    
                    <p className="text-zinc-400 text-base leading-relaxed mb-8 font-light">
                      {project.description}
                    </p>

                    {/* Minimalist Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono bg-zinc-900 text-zinc-400 border border-zinc-800 px-2.5 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Direct Typography Links (Ditching basic Shadcn Buttons here completely) */}
                    <div className="flex items-center gap-8 font-mono text-xs tracking-wider">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="group flex items-center gap-2 text-white hover:text-amber-400 transition-colors py-1"
                      >
                        [ VIEW SOURCE ] <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                      
                      {project.demo !== "#" && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors py-1"
                        >
                          LAUNCH INTERACTIVE <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Minimalist Brutalist Footer Section */}
        <footer className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="font-mono text-xs text-zinc-500">
            SRC // REPOS CONTINUOUSLY UPDATED
          </div>
          <a
            href="https://github.com/Poorvajain2005"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-4 text-xl md:text-2xl font-light text-zinc-300 hover:text-white transition-colors"
          >
            <span>Explore full system source directories</span>
            <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </footer>

      </div>
    </section>
  );
};