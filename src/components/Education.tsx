import { GraduationCap, Calendar, Award, MapPin, Milestone, Trophy, Users, Terminal } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "B.Tech // Computer Science & Engineering",
    specialization: "Data Science Specialization",
    institution: "Amity University",
    location: "Gwalior, IN",
    period: "2023 – 2027",
    gpa: "8.56",
    highlights: [
      "National Hackathon 2025 Winner — Developed 'FixIt' civic tech prototype using Computer Vision",
      "Event Coordinator — Directed and managed technical club operations and campus hackathons",
      "Active Hackathon Competitor — Built and pitched rapid full-stack prototypes under tight timelines"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Machine Learning Systems",
      "Operating System Core",
      "Software Engineering Architectures"
    ]
  }
];

export const Education = () => {
  return (
    <section id="education" className="relative w-full bg-[#07070a] text-white py-32 px-4 md:px-12 border-b border-white/5 overflow-hidden selection:bg-purple-500 selection:text-white">
      
      {/* Background Grid Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading Block */}
        <header className="mb-24 flex flex-col gap-4 border-b border-white/5 pb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-[0.25em] uppercase">
            <Milestone className="w-3.5 h-3.5 text-amber-400" />
            ACADEMIC HISTORY LOG
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
            Institutional <span className="font-serif italic text-zinc-500 font-light tracking-normal lowercase">foundations</span>
          </h2>
        </header>

        {/* Timeline Layout */}
        <div className="space-y-20">
          {education.map((edu) => (
            <div key={edu.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative group">
              
              {/* Left Column: Period Marker */}
              <div className="col-span-1 lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-2 font-mono text-xs text-zinc-500 pt-1.5">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span className="tracking-widest font-bold">{edu.period}</span>
                </div>
                <div className="text-zinc-600 mt-1 uppercase hidden lg:block">STATUS // ACTIVE_MATRICULATION</div>
              </div>

              {/* Right Column: Institutional Assets */}
              <div className="col-span-1 lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-8 pt-0">
                
                {/* Degree & Highlights */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-mono text-purple-400 mt-1 font-semibold">{edu.specialization}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400 font-medium">
                    <span className="text-zinc-200 font-bold">{edu.institution}</span>
                    <span className="text-zinc-700 hidden sm:inline">•</span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                      <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                      {edu.location}
                    </div>
                  </div>

                  {/* Real Record Highlights */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">ENGAGEMENT MANIFEST:</span>
                    <ul className="space-y-2.5 font-sans text-sm text-zinc-300 font-light">
                      {edu.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <span className="text-amber-400 font-mono text-xs mt-0.5 select-none">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coursework Manifest Array */}
                  <div className="pt-6 border-t border-white/[0.04] space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                      CORE THEORETICAL MODULES:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span 
                          key={course}
                          className="px-2.5 py-1 rounded bg-white/[0.01] border border-white/5 text-zinc-400 font-mono text-xs hover:border-zinc-700 hover:text-zinc-200 transition-all cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance Evaluation Card */}
                <div className="md:col-span-5 p-6 bg-zinc-950/40 border border-white/10 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/10 to-transparent pointer-events-none" />
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">// PERFORMANCE MATRIX</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white tracking-tighter font-mono">{edu.gpa}</span>
                      <span className="text-xs font-mono text-zinc-400 uppercase font-semibold">Current GPA</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-dashed border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span>Academic Track Evaluation</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Verified Actual Achievements Grid Layout */}
        <div className="mt-32 pt-12 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          
          <div className="p-5 border border-white/[0.03] bg-white/[0.01] flex items-center justify-between group hover:border-purple-500/30 transition-colors">
            <div className="space-y-1">
              <span className="text-zinc-600 block">// COMPETITIVE CAPABILITY</span>
              <span className="text-zinc-300 font-bold uppercase tracking-wide">National Winner</span>
            </div>
            <Trophy className="w-5 h-5 text-purple-400 mr-1" />
          </div>

          <div className="p-5 border border-white/[0.03] bg-white/[0.01] flex items-center justify-between group hover:border-amber-500/30 transition-colors">
            <div className="space-y-1">
              <span className="text-zinc-600 block">// LEADERSHIP DEPLOYMENT</span>
              <span className="text-zinc-300 font-bold uppercase tracking-wide">Event Coordinator</span>
            </div>
            <Users className="w-5 h-5 text-amber-400 mr-1" />
          </div>

          <div className="p-5 border border-white/[0.03] bg-white/[0.01] flex items-center justify-between group hover:border-emerald-500/30 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="space-y-1">
              <span className="text-zinc-600 block">// EXPERIMENTAL EXPERIENCE</span>
              <span className="text-zinc-300 font-bold uppercase tracking-wide">Hackathon Runner</span>
            </div>
            <Terminal className="w-4 h-4 text-emerald-400 mr-1" />
          </div>

        </div>

      </div>
    </section>
  );
};