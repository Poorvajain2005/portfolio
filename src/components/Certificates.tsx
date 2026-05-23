import { Award, ExternalLink, ShieldCheck, Bookmark, FileCode } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Coordinator — Innovative Ideas",
    issuer: "Amity University",
    year: "2025",
    description: "Led, managed, and structured technical club operations, coordinating student hackathons and technical project tracks.",
    tag: "LEADERSHIP"
  },
  {
    id: 2,
    title: "National Hackathon Finalist & Presenter",
    issuer: "FixIt Project",
    year: "2025",
    description: "Pitched and showcased the 'FixIt' AI civic tech prototype at national ML hackathons, demonstrating automated urban defect tracking.",
    tag: "COMPETITIVE"
  },
  {
    id: 3,
    title: "Patent & Research Portfolio",
    issuer: "In Progress",
    year: "2026",
    description: "Compiling research papers and architectural patent materials focused on localized computer vision application rules within civic infrastructure frameworks.",
    tag: "RESEARCH"
  },
  {
    id: 4,
    title: "Active Open-Source Contributor",
    issuer: "GitHub Ecosystem",
    year: "2024 - PRESENT",
    description: "Regularly pushing automated micro-services, schema systems, and open utilities focused on backend robustness and AI/ML model execution pipelines.",
    tag: "SYSTEMS"
  },
];

const certificates = [
  {
    id: 1,
    title: "AI-ML Virtual Internship Certification",
    issuer: "Google for Developers (EduSkills)",
    year: "Summer 2025",
    description: "Intensive program focused on machine learning models, model pipeline evaluations, and practical engineering integrations.",
    tag: "AI / ML",
    pdfPath: "#"
  },
  {
    id: 2,
    title: "ML & Cloud Intern Certification",
    issuer: "IBM WatsonX",
    year: "2025",
    description: "Engineered scalable workflows, model configurations, and cloud-based systems utilities utilizing WatsonX.ai architectures.",
    tag: "CLOUD / AI",
    pdfPath: "#"
  },
  {
    id: 3,
    title: "Course Excellence Certificate",
    issuer: "Machine Learning and Image Processing",
    year: "2024",
    description: "Awarded for exceptional coursework mastery, system implementations, and image classification model builds.",
    tag: "VISION / CORE",
    pdfPath: "/1758894120539_PoorvaJain_Course-Excellence.pdf"
  }
];

export const Certificates = () => {
  return (
    <section id="certificates" className="relative w-full bg-[#07070a] text-white py-32 px-4 md:px-12 border-b border-white/5 overflow-hidden selection:bg-purple-500 selection:text-white">
      
      {/* Background Matrix Mesh Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Dynamic Structural Heading Block */}
        <header className="mb-24 flex flex-col gap-4 border-b border-white/5 pb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 tracking-[0.25em] uppercase">
            <ShieldCheck className="w-4 h-4 text-purple-400 animate-pulse" />
            VERIFICATION SYSTEM VERIFIED // CREDENTIALS
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
            Ecosystem <span className="font-serif italic text-zinc-500 font-light tracking-normal lowercase">milestones</span>
          </h2>
        </header>

        {/* COMPOSITIONAL LAYOUT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT QUADRANT: Achievements Ledger (Minimalist Asymmetric List) */}
          <div className="col-span-1 lg:col-span-6 space-y-8">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Bookmark className="w-3.5 h-3.5" /> [01 / RECOGNITION REGISTRY]
            </div>

            <div className="space-y-4">
              {achievements.map((ach) => (
                <div 
                  key={ach.id} 
                  className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:border-zinc-800 transition-all duration-300 relative group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[9px] bg-white/5 text-zinc-400 px-2 py-0.5 rounded tracking-wider uppercase">
                        {ach.tag}
                      </span>
                      <h3 className="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors duration-300 mt-2.5">
                        {ach.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-zinc-600 font-bold">{ach.year}</span>
                  </div>
                  
                  <div className="text-xs font-mono text-zinc-500 mt-1 uppercase font-semibold">
                    Issuer // {ach.issuer}
                  </div>
                  
                  <p className="text-sm text-zinc-400 font-light mt-3 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT QUADRANT: Verified Certification Index (Asymmetric Deck) */}
          <div className="col-span-1 lg:col-span-6 space-y-8">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5" /> [02 / ACCREDITATION INDEX]
            </div>

            <div className="grid grid-cols-1 gap-4">
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className="p-6 rounded-2xl bg-zinc-950/40 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/[0.02] to-transparent pointer-events-none group-hover:from-purple-500/[0.06] transition-all" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-purple-400 font-bold uppercase tracking-widest">
                        // {cert.tag}
                      </span>
                      <span className="text-xs font-mono text-zinc-600">{cert.year}</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-500 mt-0.5 font-medium">
                        Authority // {cert.issuer}
                      </p>
                    </div>

                    <p className="text-sm text-zinc-400 font-light leading-relaxed pt-2">
                      {cert.description}
                    </p>
                  </div>

                  {/* Clean Typography Actions Link instead of big blue buttons */}
                  <div className="mt-6 pt-4 border-t border-white/[0.04]">
                    <button
                      onClick={() => window.open(cert.pdfPath, "_blank")}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      [ VERIFY_CREDENTIAL_MANIFEST ] <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Audit Banner */}
        <footer className="mt-32 pt-8 border-t border-white/5 flex flex-wrap gap-x-12 gap-y-4 font-mono text-[11px] text-zinc-600 uppercase tracking-wider">
          <div>Registry System Ledger: Secure</div>
          <div>•</div>
          <div>All Entries Tied to Active Build Contexts</div>
          <div>•</div>
          <div>Identity Signatures // Verified</div>
        </footer>

      </div>
    </section>
  );
};