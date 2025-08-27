import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2021 - 2023",
    gpa: "3.9/4.0",
    highlights: [
      "Specialization in Machine Learning and Data Science",
      "Research in Deep Learning for Computer Vision",
      "Teaching Assistant for CS229 (Machine Learning)",
      "Published 2 papers in top-tier conferences"
    ],
    current: false
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2017 - 2021",
    gpa: "3.8/4.0",
    highlights: [
      "Magna Cum Laude graduate",
      "President of Computer Science Society",
      "Dean's Honor List for 6 semesters",
      "Capstone project on IoT smart city solutions"
    ],
    current: false
  },
  {
    id: 3,
    degree: "Professional Certificate in Data Science",
    institution: "Harvard Extension School",
    location: "Cambridge, MA",
    period: "2020 - 2021",
    gpa: "A average",
    highlights: [
      "Comprehensive data analysis and visualization",
      "Statistical modeling and machine learning",
      "Big data processing with Hadoop and Spark",
      "Final project: Predictive analytics for healthcare"
    ],
    current: false
  }
];

const EducationCard = ({ edu, isLast }: { edu: typeof education[0]; isLast: boolean }) => {
  return (
    <div className={`timeline-item ${isLast ? 'border-l-transparent' : ''}`}>
      <div className="glass-card p-6 ml-6 hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          {/* Left Column - Institution Info */}
          <div className="flex-1 space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary/20">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gradient-primary">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <span className="font-semibold">{edu.institution}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Period and GPA */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-secondary/20">
                <Award className="w-4 h-4" />
                <span>GPA: {edu.gpa}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {edu.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: 'var(--gradient-primary)' }}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gradient-accent mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey that shaped my expertise in technology and data science
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {education.map((edu, index) => (
            <EducationCard 
              key={edu.id} 
              edu={edu} 
              isLast={index === education.length - 1}
            />
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-gradient-primary mb-2">3.85</div>
            <div className="text-sm text-muted-foreground">Overall GPA</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-gradient-secondary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Research Projects</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-gradient-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Academic Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};