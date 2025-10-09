import CyberCard from "@/components/common/CyberCard";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const internships = [
    {
      title: "Cybersecurity Intern",
      company: "Redynox",
      period: "Jun – Jul 2025",
      location: "Remote",
    },
    {
      title: "Ethical Hacking Intern",
      company: "InLighnX Global Pvt. Ltd.",
      period: "Jun – Jul 2025",
      location: "Remote",
    },
    {
      title: "Cybersecurity & Digital Forensics Intern",
      company: "TechnoHacks Solutions Pvt. Ltd.",
      period: "Jun 2025",
      location: "Remote",
    },
    {
      title: "Cybersecurity Intern",
      company: "Shakti Cyber Solutions",
      period: "Jan – Mar 2025",
      location: "Remote",
    },
  ];

  const education = [
    {
      degree: "B.E. Cybersecurity",
      institution: "SRM Valliammai Engineering College",
      period: "2022 - 2026",
      details: "CGPA: 8.1",
    },
    {
      degree: "HSC",
      institution: "St. Xavier's Higher Secondary School",
      period: "2022",
      details: "78%",
    },
    {
      degree: "SSLC",
      institution: "Kein Matric. Higher Secondary School",
      period: "2020",
      details: "65.6%",
    },
  ];

  const certifications = [
    { name: "Ethical Hacking Training", org: "Internshala", year: "2023" },
    { name: "Cybersecurity Analyst Job Simulation", org: "Forage", year: "2025" },
    { name: "Pre Security Learning Path", org: "Try Hack Me", year: "2025" },
    { name: "SOC Level 1", org: "Try Hack Me", year: "2025" },
    { name: "The Complete Network Fundamentals Course. Your CCNA Start", org: "Udemy", year: "2025" },
  ];

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 text-foreground">
              Resume
            </h1>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
          <button className="px-6 py-3 bg-accent text-accent-foreground font-mono font-semibold rounded-lg transition-smooth hover:shadow-[0_0_25px_rgba(0,255,204,0.4)] flex items-center gap-2 group">
            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Download PDF
          </button>
        </div>

        {/* Internships */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-mono font-bold text-foreground">Internships</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:left-[15px] before:top-[10px] before:bottom-[10px] before:w-[2px] before:bg-accent/30">
            {internships.map((internship, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>
                <CyberCard>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-mono font-bold text-foreground">
                        {internship.title}
                      </h3>
                      <p className="text-accent font-medium">{internship.company} • {internship.location}</p>
                    </div>
                    <span className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">
                      {internship.period}
                    </span>
                  </div>
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
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-secondary/30 rounded border border-accent/20"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-foreground font-mono text-sm font-semibold">{cert.name}</p>
                    <p className="text-muted-foreground font-mono text-xs">{cert.org} • {cert.year}</p>
                  </div>
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
