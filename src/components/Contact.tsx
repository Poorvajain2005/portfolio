import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    value: "Poorvajain2005",
    link: "https://github.com/Poorvajain2005",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "poorva-jain-92867a2b5",
    link: "https://linkedin.com/in/poorva-jain-92867a2b5",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@poorva_pj_",
    link: "https://instagram.com/poorva_pj_",
  },
];

export const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }

    const mailto = `mailto:jainpoorva535@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.open(mailto);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#07070a] text-white py-32 px-4 md:px-12 border-b border-white/5 overflow-hidden selection:bg-purple-500 selection:text-white"
    >
      {/* Background Matrix Mesh Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Dynamic Structural Heading Block */}
        <header className="mb-24 flex flex-col gap-4 border-b border-white/5 pb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-[0.25em] uppercase">
            <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
            COMMS GATEWAY // INITIATE CONNECTION
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
            Start a <span className="font-serif italic text-zinc-500 font-light tracking-normal lowercase">conversation</span>
          </h2>
        </header>

        {/* COMPOSITIONAL LAYOUT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT QUADRANT: Core Gateway Nodes */}
          <div className="col-span-1 lg:col-span-5 space-y-10">
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Open to architectural collaborations, full-stack product development, AI engineering initiatives, or direct system optimization pipelines.
            </p>

            <div className="space-y-4 font-mono text-xs">
              {/* Clean Interactive Email Card */}
              <motion.a
                whileHover={{ x: 8 }}
                href="mailto:jainpoorva535@gmail.com"
                className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">// DEFAULT DIRECT PATH</span>
                    <span className="text-sm font-sans font-medium text-zinc-200 group-hover:text-purple-400 transition-colors">
                      jainpoorva535@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
              </motion.a>

              {/* Precise Location Marker */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] cursor-default">
                <div className="p-2 rounded-xl bg-zinc-900 text-zinc-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">// REGULATORY ZONE</span>
                  <span className="text-sm font-sans font-medium text-zinc-200">Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Asymmetric Social Anchors */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed border-white/5">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -3 }}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#09090d] border border-white/5 font-mono text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-md"
                >
                  <social.icon className="w-3.5 h-3.5" />
                  <span>[{social.label}]</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT QUADRANT: Form Transmission Module */}
          <div className="col-span-1 lg:col-span-7 bg-zinc-950/20 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-3xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/[0.02] to-transparent pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest pl-1">Name *</label>
                  <Input
                    name="name"
                    type="text"
                    required
                    placeholder="Identify name"
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-white/[0.01] border-white/5 text-zinc-200 focus:border-amber-400/40 transition-colors placeholder:text-zinc-600 placeholder:font-mono placeholder:text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest pl-1">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="Route destination"
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-white/[0.01] border-white/5 text-zinc-200 focus:border-amber-400/40 transition-colors placeholder:text-zinc-600 placeholder:font-mono placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest pl-1">Subject</label>
                <Input
                  name="subject"
                  type="text"
                  placeholder="System header topic"
                  onChange={handleChange}
                  className="h-12 rounded-xl bg-white/[0.01] border-white/5 text-zinc-200 focus:border-amber-400/40 transition-colors placeholder:text-zinc-600 placeholder:font-mono placeholder:text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest pl-1">Message *</label>
                <Textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Compile project details or open concepts here..."
                  onChange={handleChange}
                  className="rounded-xl bg-white/[0.01] border-white/5 text-zinc-200 focus:border-amber-400/40 transition-colors resize-none placeholder:text-zinc-600 placeholder:font-mono placeholder:text-xs"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl font-mono text-xs uppercase tracking-widest bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/15 group relative"
                >
                  <Send className="w-3.5 h-3.5 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Execute Transmission
                </Button>
              </div>
            </form>
          </div>

        </div>

        {/* Global Pipeline Footer Audit */}
        <footer className="mt-32 pt-8 border-t border-white/5 flex flex-wrap gap-x-12 gap-y-4 font-mono text-[11px] text-zinc-600 uppercase tracking-wider">
          <div>Transmission Protocol: Mailto Router</div>
          <div>•</div>
          <div>Port Allocation // Production Ready</div>
          <div>•</div>
          <div>Node Encryption Status // Inactive</div>
        </footer>

      </div>
    </section>
  );
};