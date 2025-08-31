import profilePhoto from "/profile.jpg";
import { SkillsTabs } from "@/components/SkillsTabs";

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Node.js",
  "Express.js",
  "React.js",
  "Tailwind",
  "Scikit-learn",
  "MongoDB",
  "Firebase",
  "MySQL",
  "Git",
  "Docker",
  "Postman",
  "CI/CD",
  "JWT",
  "Agile",
  "Cloud (AWS basics)",
  "AI/ML",
];

export const About = () => {
return (
    <section id="about" className="py-20 px-4 w-full">
      <div className="max-w-full mx-auto">
        <div className="text-left mb-16">
          <div className="max-w-3xl">
            <h2 className="text-gradient-primary mb-6 transform -rotate-1">
              Professional Summary
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Full-Stack Developer & Backend Engineer skilled in{" "}
              <strong>
                Java, Python, Node.js, React.js, MongoDB, and Firebase
              </strong>
              . Experienced in{" "}
              <strong>
                REST APIs, authentication, cloud deployment, and AI/ML
                applications
              </strong>
              . Strong foundation in{" "}
              <strong>data structures, DBMS, and algorithms</strong>. Pursuing
              B.Tech CSE (Data Science). Passionate about building{" "}
              <strong>
                scalable, efficient, and AI-driven software solutions
              </strong>
              .
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
                style={{ background: "var(--gradient-primary)" }}
              />

              {/* Photo Container */}
              <div className="relative glass-card p-4 bg-black rounded-xl">
                <img
                  src={profilePhoto}
                  alt="Professional headshot"
                  className="w-64 h-64 rounded-xl object-cover aspect-square mx-auto"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-primary opacity-60 floating" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-secondary opacity-60 floating-delayed" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Quick Skills Overview */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: "fadeIn 0.6s ease-out forwards",
                    }}
                  >
                    {skill}
                  </span>
                ))}
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
              Dive deeper into my technical skills and experience across
              different domains
            </p>
          </div>
          <SkillsTabs />
        </div>
      </div>
    </section>
  );
};
