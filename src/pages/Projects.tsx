import CyberCard from "@/components/CyberCard";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SecureAuth Platform",
      description: "A multi-factor authentication system with biometric integration and real-time threat detection.",
      tags: ["React", "Node.js", "PostgreSQL", "WebAuthn"],
      github: "#",
      demo: "#",
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated security scanning tool for web applications with custom rule engine and detailed reporting.",
      tags: ["Python", "FastAPI", "Redis", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      title: "Encrypted Chat Application",
      description: "End-to-end encrypted messaging platform with perfect forward secrecy and zero-knowledge architecture.",
      tags: ["TypeScript", "WebRTC", "WebSocket", "Crypto"],
      github: "#",
      demo: "#",
    },
    {
      title: "Network Traffic Analyzer",
      description: "Real-time network packet analysis tool with anomaly detection and visualization dashboard.",
      tags: ["Python", "Scapy", "ML", "React"],
      github: "#",
      demo: "#",
    },
    {
      title: "API Security Gateway",
      description: "Rate limiting, authentication, and threat protection layer for microservices architecture.",
      tags: ["Go", "Redis", "Docker", "Kubernetes"],
      github: "#",
      demo: "#",
    },
    {
      title: "Password Manager",
      description: "Zero-knowledge password vault with client-side encryption and secure password generation.",
      tags: ["React", "Rust", "Tauri", "SQLite"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-accent font-mono text-sm">$ cd projects && ls</span>
          <h1 className="text-4xl md:text-5xl font-mono font-bold mt-2 mb-4 text-foreground">
            Featured <span className="text-accent">Projects</span>
          </h1>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent transition-smooth group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent transition-smooth group"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Demo
                  </a>
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
