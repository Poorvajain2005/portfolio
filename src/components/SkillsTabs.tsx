import { useState } from 'react';
import { Code2, Database, Cloud, Brain, Palette, Settings } from 'lucide-react';

const skillCategories = {
  frontend: {
    icon: Code2,
    label: 'Frontend',
    color: 'text-blue-400',
    skills: [
      { name: 'React', level: 95, experience: '4 years' },
      { name: 'Next.js', level: 90, experience: '3 years' },
      { name: 'TypeScript', level: 88, experience: '3 years' },
      { name: 'TailwindCSS', level: 92, experience: '3 years' },
      { name: 'Vue.js', level: 75, experience: '2 years' },
      { name: 'JavaScript', level: 95, experience: '5 years' },
    ]
  },
  backend: {
    icon: Database,
    label: 'Backend',
    color: 'text-green-400',
    skills: [
      { name: 'Node.js', level: 85, experience: '3 years' },
      { name: 'Python', level: 92, experience: '4 years' },
      { name: 'PostgreSQL', level: 80, experience: '3 years' },
      { name: 'MongoDB', level: 75, experience: '2 years' },
      { name: 'Express.js', level: 82, experience: '3 years' },
      { name: 'FastAPI', level: 78, experience: '2 years' },
    ]
  },
  cloud: {
    icon: Cloud,
    label: 'Cloud & DevOps',
    color: 'text-purple-400',
    skills: [
      { name: 'AWS', level: 85, experience: '3 years' },
      { name: 'Docker', level: 80, experience: '2 years' },
      { name: 'Kubernetes', level: 70, experience: '1 year' },
      { name: 'Vercel', level: 90, experience: '3 years' },
      { name: 'GitHub Actions', level: 75, experience: '2 years' },
      { name: 'Terraform', level: 65, experience: '1 year' },
    ]
  },
  ml: {
    icon: Brain,
    label: 'ML & AI',
    color: 'text-pink-400',
    skills: [
      { name: 'TensorFlow', level: 85, experience: '3 years' },
      { name: 'Scikit-learn', level: 90, experience: '4 years' },
      { name: 'Pandas', level: 95, experience: '4 years' },
      { name: 'NumPy', level: 92, experience: '4 years' },
      { name: 'PyTorch', level: 75, experience: '2 years' },
      { name: 'Jupyter', level: 88, experience: '4 years' },
    ]
  },
  design: {
    icon: Palette,
    label: 'Design & Tools',
    color: 'text-orange-400',
    skills: [
      { name: 'Figma', level: 80, experience: '3 years' },
      { name: 'Adobe XD', level: 70, experience: '2 years' },
      { name: 'Photoshop', level: 75, experience: '3 years' },
      { name: 'Framer Motion', level: 85, experience: '2 years' },
      { name: 'Three.js', level: 65, experience: '1 year' },
      { name: 'Blender', level: 60, experience: '1 year' },
    ]
  },
  tools: {
    icon: Settings,
    label: 'Tools & Others',
    color: 'text-cyan-400',
    skills: [
      { name: 'Git', level: 90, experience: '5 years' },
      { name: 'VS Code', level: 95, experience: '5 years' },
      { name: 'Postman', level: 85, experience: '3 years' },
      { name: 'Notion', level: 80, experience: '2 years' },
      { name: 'Slack', level: 90, experience: '4 years' },
      { name: 'Linear', level: 75, experience: '1 year' },
    ]
  }
};

type SkillCategory = keyof typeof skillCategories;

const SkillBar = ({ skill }: { skill: { name: string; level: number; experience: string } }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium">{skill.name}</span>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>{skill.experience}</span>
        <span className="px-2 py-1 rounded-full bg-white/10">{skill.level}%</span>
      </div>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');

  const tabs = Object.entries(skillCategories) as [SkillCategory, typeof skillCategories[SkillCategory]][];

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map(([key, category]) => {
          const Icon = category.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeTab === key
                  ? 'bg-gradient-primary text-white border-white/30 shadow-lg scale-105'
                  : 'bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${activeTab === key ? 'text-white' : category.color}`} />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="glass-card p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeIn 0.6s ease-out forwards'
              }}
            >
              <SkillBar skill={skill} />
            </div>
          ))}
        </div>

        {/* Category Stats */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gradient-primary">
              {skillCategories[activeTab].skills.length}
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient-secondary">
              {Math.round(skillCategories[activeTab].skills.reduce((acc, skill) => acc + skill.level, 0) / skillCategories[activeTab].skills.length)}%
            </div>
            <div className="text-sm text-muted-foreground">Avg. Proficiency</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient-accent">
              {Math.max(...skillCategories[activeTab].skills.map(skill => parseInt(skill.experience)))}+
            </div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};