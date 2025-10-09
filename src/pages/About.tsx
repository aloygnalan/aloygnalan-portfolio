import { useEffect, useRef, useState } from "react";
import CyberCard from "@/components/CyberCard";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 text-foreground">
            About <span className="text-accent">Me</span>
          </h1>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <CyberCard className="mb-8">
          <div 
            ref={textRef}
            className={`space-y-4 text-foreground/90 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg leading-relaxed">
              Hello! I'm a <span className="text-accent font-semibold">cybersecurity enthusiast</span> and 
              <span className="text-accent font-semibold"> full-stack developer</span> passionate about building 
              secure, efficient, and elegant digital solutions.
            </p>
            
            <p className="text-lg leading-relaxed">
              My journey in tech began with a fascination for how things work under the hood. 
              This curiosity led me to explore the realms of <span className="text-accent">penetration testing</span>, 
              <span className="text-accent"> secure coding practices</span>, and 
              <span className="text-accent"> system architecture</span>.
            </p>

            <p className="text-lg leading-relaxed">
              I believe in the power of clean code, elegant design, and robust security. 
              Whether I'm crafting a user interface or analyzing network vulnerabilities, 
              I approach every challenge with the same principle: 
              <span className="text-accent font-semibold"> build it right, build it secure</span>.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding or breaking things (ethically, of course), you'll find me 
              exploring new technologies, contributing to open-source projects, or diving deep 
              into cybersecurity research.
            </p>
          </div>
        </CyberCard>

        <div className="grid md:grid-cols-2 gap-6">
          <CyberCard>
            <h3 className="text-xl font-mono font-bold mb-4 text-accent">What I Do</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <span>Full-stack web development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <span>Security audits & penetration testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <span>Building secure APIs and backends</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <span>UI/UX design with modern frameworks</span>
              </li>
            </ul>
          </CyberCard>

          <CyberCard>
            <h3 className="text-xl font-mono font-bold mb-4 text-accent">Interests</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <span>Ethical hacking & CTF challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <span>Open-source contributions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <span>Emerging tech & AI security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <span>Digital privacy advocacy</span>
              </li>
            </ul>
          </CyberCard>
        </div>
      </div>
    </div>
  );
};

export default About;
