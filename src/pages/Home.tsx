import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Shield, Briefcase, Mail, FileText, User } from "lucide-react";
import CyberCard from "@/components/CyberCard";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Cybersecurity Voyageur";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { title: "About Me", icon: User, path: "/about", desc: "Learn about my journey" },
    { title: "Skills", icon: Code2, path: "/skills", desc: "Tech stack & expertise" },
    { title: "Projects", icon: Briefcase, path: "/projects", desc: "Featured work" },
    { title: "Resume", icon: FileText, path: "/resume", desc: "Experience timeline" },
    { title: "Security", icon: Shield, path: "/skills", desc: "Cybersecurity tools" },
    { title: "Contact", icon: Mail, path: "/contact", desc: "Get in touch" },
  ];

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center mb-20">
          <div className="mb-8">
            <div className="inline-block bg-card border border-accent/30 rounded-full px-4 py-2 mb-6">
              <span className="text-accent font-mono text-sm">$ whoami</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4 text-foreground">
              DIGITAL <span className="text-accent glow-text">ARCHITECT</span>
            </h1>
            <div className="h-12 mb-6">
              <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                {displayText}
                <span className="animate-pulse text-accent">_</span>
              </p>
            </div>
          </div>

          <p className="text-foreground/80 max-w-2xl text-lg mb-8">
            Building secure digital experiences at the intersection of code and creativity.
            Exploring the cyber realm one commit at a time.
          </p>

          <div className="flex gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-accent text-accent-foreground font-mono font-semibold rounded-lg transition-smooth hover:shadow-[0_0_25px_rgba(0,255,204,0.4)] hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-card border border-accent text-accent font-mono font-semibold rounded-lg transition-smooth hover:bg-accent/10"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Quick Navigation */}
        <section>
          <h2 className="text-3xl font-mono font-bold mb-8 text-accent">
            <span className="text-foreground">$</span> navigate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.path}>
                <CyberCard>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
                      <link.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-mono font-semibold mb-1 text-foreground">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{link.desc}</p>
                    </div>
                  </div>
                </CyberCard>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
