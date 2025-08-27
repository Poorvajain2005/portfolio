import { ExternalLink, Award, Calendar } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=400&h=300&fit=crop&crop=center",
    link: "https://aws.amazon.com/certification/",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 2,
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    link: "https://cloud.google.com/certification/",
    color: "from-blue-500 to-teal-500"
  },
  {
    id: 3,
    title: "Meta React Developer Certificate",
    issuer: "Meta (Facebook)",
    year: "2022",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center",
    link: "https://www.coursera.org/professional-certificates/meta-react-developer",
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 4,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2022",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center",
    link: "https://www.tensorflow.org/certificate",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 5,
    title: "Azure Data Scientist Associate",
    issuer: "Microsoft",
    year: "2022",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    link: "https://docs.microsoft.com/en-us/learn/certifications/azure-data-scientist/",
    color: "from-teal-500 to-cyan-500"
  },
  {
    id: 6,
    title: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    year: "2021",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop&crop=center",
    link: "https://www.cncf.io/certification/cka/",
    color: "from-indigo-500 to-blue-500"
  }
];

const CertificateCard = ({ certificate }: { certificate: typeof certificates[0] }) => {
  return (
    <div 
      className="certificate-card group cursor-pointer"
      onClick={() => window.open(certificate.link, '_blank')}
    >
      {/* Certificate Image */}
      <div className="relative overflow-hidden h-40">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${certificate.color} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
        />
        
        {/* Year Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full backdrop-blur-sm bg-white/20 text-white text-xs font-medium">
          {certificate.year}
        </div>
        
        {/* External Link Icon */}
        <div className="absolute top-3 left-3 p-2 rounded-full backdrop-blur-sm bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="w-4 h-4 text-white" />
        </div>

        {/* Award Icon */}
        <div className="absolute bottom-3 right-3 p-2 rounded-full backdrop-blur-sm bg-white/20">
          <Award className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Certificate Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg group-hover:text-gradient-primary transition-all duration-300 line-clamp-2">
          {certificate.title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium">{certificate.issuer}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{certificate.year}</span>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
          <ExternalLink className="w-3 h-3" />
          <span>Click to verify</span>
        </div>
      </div>
    </div>
  );
};

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gradient-secondary mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cutting-edge technologies
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-gradient-primary mb-2">{certificates.length}</div>
            <div className="text-sm text-muted-foreground">Total Certificates</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-gradient-secondary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Cloud Platforms</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-gradient-accent mb-2">3</div>
            <div className="text-sm text-muted-foreground">ML/AI Certificates</div>
          </div>
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-gradient-primary mb-2">2023</div>
            <div className="text-sm text-muted-foreground">Latest Achievement</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All certificates are verifiable through the respective certification providers
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Award className="w-4 h-4" />
            <span>Click on any certificate to verify its authenticity</span>
          </div>
        </div>
      </div>
    </section>
  );
};