import profilePhoto from "@/assets/profile-photo.jpg";
import { SkillsTabs } from "@/components/SkillsTabs";

const skills = [
  "React", "Next.js", "TypeScript", "Python", "Node.js",
  "TailwindCSS", "PostgreSQL", "Docker", "AWS", "Machine Learning",
  "Data Science", "Pandas", "Scikit-learn", "TensorFlow", "Git"
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gradient-primary mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful solutions at the intersection of data and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Background */}
              <div 
                className="absolute -inset-4 rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 blur-xl"
                style={{ background: 'var(--gradient-primary)' }}
              />
              
              {/* Photo Container */}
              <div className="relative glass-card p-4">
                <img
                  src={profilePhoto}
                  alt="Professional headshot"
                  className="w-full h-auto rounded-xl object-cover aspect-square"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-primary opacity-60 floating" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-secondary opacity-60 floating-delayed" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Building the Future with <span className="text-gradient-secondary">Data & Code</span>
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer and data scientist with a love for creating 
                  innovative solutions that bridge the gap between complex data and user-friendly applications.
                </p>
                
                <p>
                  With expertise in modern web technologies and machine learning, I specialize in 
                  building scalable applications that turn data insights into actionable results.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or diving deep into the latest research in AI and machine learning.
                </p>
              </div>
            </div>

            {/* Quick Skills Overview */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeIn 0.6s ease-out forwards'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-secondary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-accent">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Technical <span className="text-gradient-primary">Expertise</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into my technical skills and experience across different domains
            </p>
          </div>
          <SkillsTabs />
        </div>
      </div>
    </section>
  );
};