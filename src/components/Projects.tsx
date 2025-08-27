import { useState } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/project-dashboard.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import mlImg from "@/assets/project-ml.jpg";

const projects = [
  {
    id: 1,
    title: "PetPals - Dog Walker Finder 🐕",
    description: "Built this after my neighbor asked me to walk their dog and I realized there's no good app for this. Features real-time GPS tracking, doggy photo updates, and emergency vet contacts. Currently used by 500+ pet owners in SF!",
    image: dashboardImg,
    tags: ["React Native", "Node.js", "Socket.io", "MongoDB", "Stripe"],
    github: "https://github.com/alexchen/petpals",
    demo: "https://petpals-sf.com",
    featured: true,
    status: "🟢 Live & Growing",
    impact: "500+ active users"
  },
  {
    id: 2,
    title: "CoffeeQueue - Skip the Line ☕",
    description: "My solution to waiting 20 minutes for coffee at my local café. Pre-order, pay, and pickup without the awkward small talk. The owner says it increased their revenue by 30% (and saved my sanity).",
    image: ecommerceImg,
    tags: ["Next.js", "Stripe", "Prisma", "TailwindCSS", "Vercel"],
    github: "https://github.com/alexchen/coffeequeue",
    demo: "https://coffeequeue.app",
    featured: true,
    status: "☕ Caffeinating SF",
    impact: "12 cafés onboarded"
  },
  {
    id: 3,
    title: "PlantDoc - AI Plant Disease Detector 🌱",
    description: "Trained a CNN to diagnose plant diseases from photos because I kept killing my houseplants. Turns out, I'm not the only one with a black thumb. Won 2nd place at SF Hackathon 2023!",
    image: mlImg,
    tags: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    github: "https://github.com/alexchen/plantdoc",
    demo: "https://plantdoc.ai",
    featured: true,
    status: "🏆 Award Winner",
    impact: "94% accuracy rate"
  },
  {
    id: 4,
    title: "FocusMode - Distraction Killer",
    description: "Chrome extension that blocks social media and shows motivational quotes instead. Built during finals week when I couldn't stop checking Instagram. Now has 10K+ users who actually get stuff done.",
    image: dashboardImg,
    tags: ["JavaScript", "Chrome API", "CSS3", "Firebase"],
    github: "https://github.com/alexchen/focusmode",
    demo: "https://chrome.google.com/webstore/focusmode",
    featured: false,
    status: "🚀 10K+ Downloads",
    impact: "4.8★ rating"
  },
  {
    id: 5,
    title: "WeatherMood API",
    description: "Combines weather data with Spotify API to suggest playlists based on the weather. Because nobody wants upbeat music when it's raining. Used by 3 music apps and counting.",
    image: mlImg,
    tags: ["Node.js", "Express", "Redis", "OpenWeather", "Spotify API"],
    github: "https://github.com/alexchen/weathermood",
    demo: "https://api.weathermood.io",
    featured: false,
    status: "🎵 API Live",
    impact: "1M+ API calls/month"
  },
  {
    id: 6,
    title: "LocalBuzz - Neighborhood Social",
    description: "Hyperlocal social network for my apartment building that turned into a citywide phenomenon. Features lost pet alerts, local events, and that one neighbor who always needs to borrow sugar.",
    image: ecommerceImg,
    tags: ["Vue.js", "Firebase", "Geolocation", "PWA"],
    github: "https://github.com/alexchen/localbuzz",
    demo: "https://localbuzz.community",
    featured: false,
    status: "🏘️ 50+ Buildings",
    impact: "Community building"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className={`project-card group ${project.featured ? 'lg:col-span-1' : ''} ${project.featured ? 'transform rotate-1 hover:rotate-0' : 'hover:rotate-1'} transition-transform duration-300`}>
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
        <div className="text-left mb-16">
          <div className="max-w-4xl">
            <h2 className="text-gradient-secondary mb-4 transform -rotate-1">
              Stuff I've Built (That Actually Works)
            </h2>
            <p className="text-xl text-muted-foreground">
              From "wouldn't it be cool if..." to production apps that real people use every day. 
              Here's what happens when I get bored and have too much coffee ☕
            </p>
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg transform rotate-1">
              <p className="text-blue-200 text-sm">
                <strong>Pro tip:</strong> Click the demos – they're all live and ready to break... I mean, explore! 🚀
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
