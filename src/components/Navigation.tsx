import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.id);

      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }

        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);

    if (el) {
      const headerOffset = 80;
      const position =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl border ${
          isScrolled
            ? "backdrop-blur-2xl bg-black/35 border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6">

          {/* LOGO */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
            className="relative text-xl md:text-2xl font-bold"
          >
            <span className="text-gradient-primary">
              Poorva Jain
            </span>

            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="ml-2 text-xs text-primary"
            >
              &lt;/&gt;
            </motion.span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 relative">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  scrollToSection(item.id)
                }
                className={`
                  relative
                  px-4
                  py-2
                  text-sm
                  rounded-xl
                  transition-all
                  duration-300
                  ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-muted-foreground hover:text-white"
                  }
                `}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-xl bg-white/10 border border-white/10"
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      duration: 0.5,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">

            <motion.div whileHover={{ y: -3 }}>
              <Button
                size="icon"
                className="rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
                onClick={() =>
                  window.open(
                    "https://github.com/Poorvajain2005",
                    "_blank"
                  )
                }
              >
                <Github className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -3 }}>
              <Button
                size="icon"
                className="rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/poorva-jain-92867a2b5",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
            >
              <Button
                className="
                rounded-xl
                px-5
                bg-gradient-to-r
                from-primary
                to-purple-500
                text-white
                shadow-lg
                hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]
                transition-all
                "
                onClick={() => {
                  const link =
                    document.createElement("a");
                  link.href =
                    "/POORVA JAIN resume.pdf";
                  link.download =
                    "POORVA JAIN resume.pdf";
                  link.click();
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </motion.div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
              md:hidden
              p-2
              rounded-xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
            "
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
                md:hidden
                border-t
                border-white/10
                backdrop-blur-2xl
                bg-black/60
                rounded-b-2xl
                px-5
                py-5
              "
            >
              <div className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      scrollToSection(item.id)
                    }
                    className={`
                      block
                      w-full
                      text-left
                      px-4
                      py-3
                      rounded-xl
                      transition
                      ${
                        activeSection === item.id
                          ? "bg-white/10 text-white"
                          : "text-muted-foreground hover:bg-white/5"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};