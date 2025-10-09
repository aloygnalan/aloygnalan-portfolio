import CyberCard from "@/components/CyberCard";
import { Code2, Shield, Layers, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Blue Team & SOC",
      icon: Shield,
      skills: [
        { name: "SOC Analysis", level: 85 },
        { name: "Security Monitoring & SIEM", level: 80 },
        { name: "Incident Detection & Response", level: 85 },
      ],
    },
    {
      title: "Security & Pentesting",
      icon: Code2,
      skills: [
        { name: "Vulnerability Assessment", level: 80 },
        { name: "Network Security", level: 85 },
        { name: "Basic Penetration Testing", level: 75 },
      ],
    },
    {
      title: "Development & Tools",
      icon: Layers,
      skills: [
        { name: "Python", level: 85 },
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Database,
      skills: [
        { name: "Git", level: 80 },
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

      </div>
    </div>
  );
};

export default Skills;
