import { useState } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/project-dashboard.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import mlImg from "@/assets/project-ml.jpg";

const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description: "A comprehensive data visualization platform built with React and D3.js, featuring real-time analytics, interactive charts, and advanced filtering capabilities.",
    image: dashboardImg,
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern design, payment integration, inventory management, and advanced search functionality.",
    image: ecommerceImg,
    tags: ["Next.js", "Stripe", "Prisma", "TailwindCSS", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    title: "ML Prediction Engine",
    description: "Machine learning application for predictive analytics with interactive visualizations, model comparison, and real-time predictions.",
    image: mlImg,
    tags: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced project tracking.",
    image: dashboardImg,
    tags: ["Vue.js", "Firebase", "Vuex", "Socket.io", "CSS3"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    id: 5,
    title: "Weather Forecast API",
    description: "RESTful API service providing accurate weather predictions with data aggregation from multiple sources and caching.",
    image: mlImg,
    tags: ["Node.js", "Express", "Redis", "MongoDB", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Social media monitoring and analytics platform with sentiment analysis, trend detection, and comprehensive reporting.",
    image: ecommerceImg,
    tags: ["Python", "NLP", "React", "MongoDB", "Heroku"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className={`project-card group ${project.featured ? 'lg:col-span-1' : ''}`}>
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
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button
            size="sm"
            className="btn-neon-primary"
            onClick={() => window.open(project.demo, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-primary text-white">
            Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-gradient-primary" />
          <h3 className="text-xl font-bold group-hover:text-gradient-primary transition-all duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
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
  const [activeTab, setActiveTab] = useState<'featured' | 'all' | 'web' | 'ml'>('featured');
  
  const featuredProjects = projects.filter(p => p.featured);
  const webProjects = projects.filter(p => 
    p.tags.some(tag => ['React', 'Next.js', 'Vue.js'].includes(tag))
  );
  const mlProjects = projects.filter(p => 
    p.tags.some(tag => ['Python', 'TensorFlow', 'ML', 'NLP'].includes(tag))
  );

  const getActiveProjects = () => {
    switch (activeTab) {
      case 'featured': return featuredProjects;
      case 'web': return webProjects;
      case 'ml': return mlProjects;
      case 'all': return projects;
      default: return featuredProjects;
    }
  };

  const tabs = [
    { id: 'featured', label: 'Featured', count: featuredProjects.length },
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Dev', count: webProjects.length },
    { id: 'ml', label: 'ML & AI', count: mlProjects.length },
  ] as const;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gradient-secondary mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from data-driven applications to modern web solutions
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeTab === tab.id
                  ? 'bg-gradient-primary text-white border-white/30 shadow-lg scale-105'
                  : 'bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-white/10'
              }`}>
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
                animation: 'fadeIn 0.6s ease-out forwards'
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
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
