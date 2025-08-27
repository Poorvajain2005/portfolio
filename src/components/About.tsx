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
        <div className="text-left mb-16">
          <div className="max-w-3xl">
            <h2 className="text-gradient-primary mb-6 transform -rotate-1">The Story So Far</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Three years ago, I accidentally broke my university's registration system trying to build a "simple" course scheduler. 
              Plot twist: they hired me to fix it, and I've been hooked on solving problems with code ever since.
            </p>
          </div>
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
                What I'm <span className="text-gradient-secondary">Actually</span> Good At
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm that person who gets genuinely excited about optimizing database queries and can spend 
                  hours perfecting a CSS animation (much to my teammates' amusement). My superpower? 
                  Translating "can we make this work?" into actual working software.
                </p>
                
                <p>
                  Currently leading the frontend team at TechCorp, where I've reduced page load times by 60% 
                  and only broke production twice (we don't talk about the second time). I love building 
                  things that real people actually use and enjoy.
                </p>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 transform rotate-1">
                  <p className="text-yellow-200">
                    <strong>Fun fact:</strong> I once debugged a critical issue at 2 AM using nothing but 
                    my phone and a gas station WiFi connection. The client was so impressed they sent me 
                    a coffee machine. ☕
                  </p>
                </div>
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