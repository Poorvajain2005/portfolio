import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jainpoorva535@gmail.com",
    link: "<mailto:jainpoorva535>",
    color: "text-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Poorvajain2005",
    link: "https://github.com/Poorvajain2005",
    color: "text-purple-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/poorva-jain-92867a2b5",
    link: "https://linkedin.com/in/poorva-jain-92867a2b5",
    color: "text-blue-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Madhya Pradesh, INDIA",
    link: null,
    color: "text-green-400",
  },
];

const FloatingIcon = ({
  Icon,
  className,
  delay,
}: {
  Icon: any;
  className?: string;
  delay: number;
}) => (
  <div
    className={`absolute p-3 rounded-full backdrop-blur-sm bg-white/10 ${className}`}
    style={{
      animation: `floating 6s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    <Icon className="w-5 h-5 text-white/60" />
  </div>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log('Environment variables:', {
        serviceId: serviceId ? 'SET' : 'NOT SET',
        templateId: templateId ? 'SET' : 'NOT SET',
        publicKey: publicKey ? 'SET' : 'NOT SET'
      });

      // Check if EmailJS is properly configured
      if (!serviceId || !templateId || !publicKey ||
          serviceId === 'your_service_id_here' ||
          templateId === 'your_template_id_here' ||
          publicKey === 'your_public_key_here') {
        console.error('EmailJS configuration missing or using placeholder values');
        throw new Error('EmailJS not configured. Please set up your EmailJS credentials in the .env file.');
      }

      console.log('Sending email with params:', {
        serviceId,
        templateId,
        publicKey: publicKey.substring(0, 10) + '...', // Don't log full key
        templateParams: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message.substring(0, 50) + '...',
          to_name: 'Poorva Jain',
        }
      });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Poorva Jain',
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('EmailJS result:', result);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      const errorMessage = error instanceof Error ? error.message : "Please try again later or contact me directly via email.";

      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingIcon Icon={Mail} className="-top-8 -left-8" delay={0} />
      <FloatingIcon Icon={Github} className="top-1/4 -right-12" delay={2} />
      <FloatingIcon Icon={Linkedin} className="-bottom-8 left-1/4" delay={4} />
      <FloatingIcon
        Icon={MessageCircle}
        className="bottom-1/4 -right-8"
        delay={1}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gradient-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss exciting
            opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Let's start a{" "}
                <span className="text-gradient-secondary">conversation</span>
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always excited to work on innovative projects and
                collaborate with talented teams. Whether you have a project in
                mind or just want to connect, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 glass-card hover:scale-105 transition-transform duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`p-3 rounded-xl bg-gradient-primary/20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-medium hover:text-gradient-primary transition-colors duration-300"
                          target={
                            info.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Connect</h4>
              <div className="flex gap-4">
                <Button
                  className="btn-neon-primary flex-1"
                  onClick={() => window.open("mailto:poorvajain2005@gmail.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
                <Button
                  className="btn-ghost-glow flex-1"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/poorva-jain-92867a2b5",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="backdrop-blur-sm bg-white/5 border-white/20 focus:border-white/40 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="backdrop-blur-sm bg-white/5 border-white/20 focus:border-white/40 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="jainpoorva535@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="backdrop-blur-sm bg-white/5 border-white/20 focus:border-white/40 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="backdrop-blur-sm bg-white/5 border-white/20 focus:border-white/40 focus:ring-2 focus:ring-blue-500/20 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-neon-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};