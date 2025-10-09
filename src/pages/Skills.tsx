import CyberCard from "@/components/CyberCard";
import { Code2, Shield, Layers, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "Go", level: 70 },
        { name: "Rust", level: 65 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: [
        { name: "React & Next.js", level: 90 },
        { name: "Node.js & Express", level: 85 },
        { name: "TailwindCSS", level: 95 },
        { name: "FastAPI", level: 80 },
        { name: "Django", level: 75 },
      ],
    },
    {
      title: "Cybersecurity Tools",
      icon: Shield,
      skills: [
        { name: "Burp Suite", level: 85 },
        { name: "Metasploit", level: 80 },
        { name: "Wireshark", level: 85 },
        { name: "Nmap", level: 90 },
        { name: "OWASP ZAP", level: 80 },
      ],
    },
    {
      title: "Databases & DevOps",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "Git & CI/CD", level: 90 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 text-foreground">
            Technical <span className="text-accent">Skills</span>
          </h1>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <CyberCard key={idx}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg border border-accent/30">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-mono font-bold text-foreground">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-accent font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CyberCard>
          ))}
        </div>

        {/* Additional Skills */}
        <CyberCard className="mt-8">
          <h3 className="text-xl font-mono font-bold mb-4 text-accent">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "REST APIs",
              "GraphQL",
              "WebSockets",
              "OAuth 2.0",
              "JWT",
              "SSL/TLS",
              "Linux Administration",
              "Bash Scripting",
              "Vulnerability Assessment",
              "Network Security",
              "Application Security",
              "Cloud Security (AWS/Azure)",
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-card border border-accent/30 rounded-lg text-foreground font-mono text-sm transition-smooth hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,204,0.2)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </CyberCard>
      </div>
    </div>
  );
};

export default Skills;
