import CyberCard from "@/components/CyberCard";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior Security Engineer",
      company: "CyberShield Inc.",
      period: "2022 - Present",
      description: "Leading security audits and penetration testing for enterprise clients. Developed automated vulnerability scanning systems.",
      achievements: [
        "Reduced security incidents by 60%",
        "Implemented zero-trust architecture",
        "Trained team of 5 junior engineers",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "TechVision Solutions",
      period: "2020 - 2022",
      description: "Built scalable web applications and RESTful APIs. Implemented CI/CD pipelines and containerization strategies.",
      achievements: [
        "Improved application performance by 40%",
        "Deployed 15+ production applications",
        "Mentored junior developers",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartupLabs",
      period: "2018 - 2020",
      description: "Developed frontend interfaces and integrated third-party APIs. Participated in agile development processes.",
      achievements: [
        "Created reusable component library",
        "Optimized bundle size by 50%",
        "Implemented responsive designs",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      institution: "Tech University",
      period: "2016 - 2018",
      details: "Focus on cryptography, network security, and ethical hacking",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2012 - 2016",
      details: "Graduated with honors, specialization in software engineering",
    },
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "OSCP - Offensive Security Certified Professional",
    "AWS Certified Security - Specialty",
    "CompTIA Security+",
  ];

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <span className="text-accent font-mono text-sm">$ cat resume.pdf</span>
            <h1 className="text-4xl md:text-5xl font-mono font-bold mt-2 mb-4 text-foreground">
              Resume
            </h1>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
          <button className="px-6 py-3 bg-accent text-accent-foreground font-mono font-semibold rounded-lg transition-smooth hover:shadow-[0_0_25px_rgba(0,255,204,0.4)] flex items-center gap-2 group">
            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Download PDF
          </button>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-mono font-bold text-foreground">Experience</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:left-[15px] before:top-[10px] before:bottom-[10px] before:w-[2px] before:bg-accent/30">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>
                <CyberCard>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-mono font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-foreground/80 mb-3">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CyberCard>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-mono font-bold text-foreground">Education</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <CyberCard key={idx}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-mono font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-accent">{edu.institution}</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-foreground/80 text-sm">{edu.details}</p>
              </CyberCard>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-foreground mb-6">
            Certifications
          </h2>
          <CyberCard>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 bg-secondary/30 rounded border border-accent/20"
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground font-mono text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </CyberCard>
        </section>
      </div>
    </div>
  );
};

export default Resume;
