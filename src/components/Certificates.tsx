import { Award, ExternalLink } from "lucide-react";

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

const certificates = [
  {
    id: 1,
    title: "Course Excellence Certificate",
    issuer: "Machine Learning and Image Processing",
    year: "2024",
    description: "Certificate for excellence in coursework.",
    imagePath: "/image.png",
    pdfPath: "/1758894120539_PoorvaJain_Course-Excellence.pdf",
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

const CertificateCard = ({
  certificate,
}: {
  certificate: (typeof certificates)[0];
}) => {
  return (
    <div className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300">
      <div className="relative overflow-hidden rounded-md mb-4">
        <img
          src={certificate.imagePath}
          alt={certificate.title}
          className="w-full h-64 object-contain bg-white/5 rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
      <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
      <div className="text-sm text-muted-foreground mb-1">
        <strong>{certificate.issuer}</strong>{" "}
        {certificate.year && `• ${certificate.year}`}
      </div>
      <p className="text-sm mb-4">{certificate.description}</p>
      <button
        onClick={() => window.open(certificate.pdfPath || certificate.imagePath, "_blank")}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
      >
        View Certificate <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
};

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4">
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

        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">Certificates</h3>
            <p className="text-muted-foreground">Professional certifications and course completions</p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
