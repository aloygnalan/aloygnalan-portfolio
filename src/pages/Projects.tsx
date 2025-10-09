import CyberCard from "@/components/CyberCard";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Data Security in Cloud using Blockchain and Biometrics",
      description: "A next-generation security solution combining biometric authentication with ChaCha20Poly1305 encryption, blockchain verification, and enterprise-level protection features.",
      tags: ["Python", "MongoDB", "ChaCha20Poly1305", "Blockchain", "WebAuth"],
      github: "https://github.com/aloygnalan",
      demo: "",
    },
    {
      title: "DoS Attack Detection & SMS Alerting System",
      description: "A sophisticated cybersecurity monitoring tool providing real-time network traffic analysis with automated threat detection and instant SMS notifications via Twilio API for immediate incident response.",
      tags: ["Python", "Scapy", "Twilio API", "Real-time Monitoring", "IDS"],
      github: "https://github.com/aloygnalan",
      demo: "",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 text-foreground">
            Featured <span className="text-accent">Projects</span>
          </h1>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, idx) => (
            <CyberCard key={idx}>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded text-accent text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent transition-smooth group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent transition-smooth group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </CyberCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
