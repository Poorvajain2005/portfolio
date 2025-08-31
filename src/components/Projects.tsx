import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "FixIt – AI Civic Issue Platform",
    description:
      "Developed AI-based issue reporting app with image validation & Google Maps API. Built real-time dashboards; presented at National Hackathon 2025.",
    image: "/fixit.png",
    tags: ["React.js", "Node.js", "Firebase", "AI"],
    github: "https://github.com/Poorvajain2005/fixit",
    demo: "https://vercel.com/poorvajain2005s-projects/fix-it",
    featured: true,
    impact: "Presented at National Hackathon 2025",
  },
  {
    id: 2,
    title: "Credit Card Fraud Detection",
    description:
      "Built ML model for fraud detection; deployed Flask prototype using Python, Scikit-learn, and Flask.",
    image: "/creditcard.png",
    tags: ["Python", "Scikit-learn", "Flask"],
    github: "https://github.com/Poorvajain2005/credit-card-fraud-detection",
    demo: "https://credit-card-fraud-detection-q4hr.vercel.app/",
    featured: false,
    status: "ML Prototype",
    impact: "Fraud detection model",
  },
  {
    id: 3,
    title: "Volu-Hub Backend",
    description:
      "Developed volunteer management backend with JWT auth & role-based access using Node.js and MongoDB.",
    image: "/volu-hub.png",
    tags: ["Node.js", "MongoDB", "JWT"],
    github: "https://github.com/Poorvajain2005/volu-hub-backend",
    demo: "https://volu-hub-backend.vercel.app/",
    featured: false,
    status: "Backend API",
    impact: "Volunteer management system",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <div
      className={`project-card group ${
        project.featured ? "lg:col-span-1" : ""
      } ${
        project.featured
          ? "transform rotate-1 hover:rotate-0"
          : "hover:rotate-1"
      } transition-transform duration-300`}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Button
            size="sm"
            className="btn-ghost-glow"
            onClick={() => window.open(project.github, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button
            size="sm"
            className="btn-neon-primary"
            onClick={() => window.open(project.demo, "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white border border-white/20">
          {project.status}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-primary text-white transform -rotate-12">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold group-hover:text-gradient-primary transition-all duration-300">
            {project.title}
          </h3>
          <div className="text-sm text-gradient-secondary font-medium">
            {project.impact}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<"featured" | "all" | "web" | "ml">(
    "featured"
  );

  const featuredProjects = projects.filter((p) => p.featured);
  const webProjects = projects.filter((p) =>
    p.tags.some((tag) => ["React", "Next.js", "Vue.js"].includes(tag))
  );
  const mlProjects = projects.filter((p) =>
    p.tags.some((tag) => ["Python", "TensorFlow", "ML", "NLP"].includes(tag))
  );

  const getActiveProjects = () => {
    switch (activeTab) {
      case "featured":
        return featuredProjects;
      case "web":
        return webProjects;
      case "ml":
        return mlProjects;
      case "all":
        return projects;
      default:
        return featuredProjects;
    }
  };

  const tabs = [
    { id: "featured", label: "Featured", count: featuredProjects.length },
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web", label: "Web Dev", count: webProjects.length },
    { id: "ml", label: "ML & AI", count: mlProjects.length },
  ] as const;

  return (
    <section id="projects" className="py-20 px-4 w-full">
      <div className="max-w-full mx-auto">
        <div className="text-left mb-16 w-full">
          <div className="max-w-full">
            <h2 className="text-gradient-secondary mb-4 transform -rotate-1">
              Stuff I've Built (That Actually Works)
            </h2>
            <p className="text-xl text-muted-foreground">
              From "wouldn't it be cool if..." to production apps that real
              people use every day. Here's what happens when I get bored and
              have too much coffee ☕
            </p>
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg transform rotate-1">
              <p className="text-blue-200 text-sm">
                <strong>Pro tip:</strong> Click the demos – they're all live and
                ready to break... I mean, explore! 🚀
              </p>
            </div>
          </div>
        </div>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeTab === tab.id
                  ? "bg-gradient-primary text-white border-white/30 shadow-lg scale-105"
                  : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeTab === tab.id ? "bg-white/20" : "bg-white/10"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {getActiveProjects().map((project, index) => (
            <div
              key={project.id}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeIn 0.6s ease-out forwards",
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            className="btn-ghost-glow"
            onClick={() =>
              window.open("https://github.com/Poorvajain2005", "_blank")
            }
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
