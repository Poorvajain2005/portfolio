import { Award } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Coordinator – Innovative Ideas",
    issuer: "Amity University",
    year: "2025",
    description:
      "Led and coordinated innovative projects and ideas at Amity University.",
  },
  {
    id: 2,
    title: "National Hackathon Finalist",
    issuer: "FixIt",
    year: "2025",
    description:
      "Finalist at the National Hackathon for the FixIt AI civic reporting project.",
  },
  {
    id: 3,
    title: "Patent & Research Paper",
    issuer: "In Progress",
    year: "",
    description: "Preparing patent and research paper on AI civic reporting.",
  },
  {
    id: 4,
    title: "Active GitHub Contributor",
    issuer: "Backend & AI/ML",
    year: "",
    description:
      "Contributing actively to open source projects in backend and AI/ML domains.",
  },
];

const AchievementCard = ({
  achievement,
}: {
  achievement: (typeof achievements)[0];
}) => {
  return (
    <div className="achievement-card glass-card p-6 mb-6 rounded-lg">
      <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
      <div className="text-sm text-muted-foreground mb-1">
        <strong>{achievement.issuer}</strong>{" "}
        {achievement.year && `• ${achievement.year}`}
      </div>
      <p className="text-sm">{achievement.description}</p>
    </div>
  );
};

export const Certificates = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gradient-secondary mb-4">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Highlights of my accomplishments and contributions
          </p>
        </div>

        <div>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};
