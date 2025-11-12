import { useEffect, useRef, useState } from "react";
import CyberCard from "@/components/common/CyberCard";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);


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

        <div className="grid md:grid-cols-3 gap-8 mb-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative group">
              <img
                ref={imageRef}
                src="/gnalan.jpg"
                alt="Gnalan"
                className={`w-56 h-56 rounded-full object-cover border-4 border-accent transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
              <div className="absolute inset-0 rounded-full border-4 border-accent animate-pulse-slow group-hover:animate-none"></div>
            </div>
          </div>

          <div className="md:col-span-2">
            <CyberCard className="h-full">
              <div
                ref={textRef}
                className={`space-y-4 text-foreground/90 transition-all duration-1000 ${ 
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-lg leading-relaxed text-justify">
                  I'm a <span className="text-accent font-semibold">cybersecurity enthusiast</span> focused on
                  <span className="text-accent font-semibold"> Blue Team operations</span>, with interests in
                  <span className="text-accent"> security monitoring</span>,
                  <span className="text-accent"> incident response</span>,
                  <span className="text-accent"> threat hunting</span>, and
                  <span className="text-accent"> digital forensics</span>.
                </p>

                <p className="text-lg leading-relaxed text-justify">
                  I enjoy learning how attacks happen and applying defensive techniques to detect, prevent,
                  and respond to threats. Through <span className="text-accent">CTFs</span>,
                  <span className="text-accent"> labs</span>, and
                  <span className="text-accent"> continuous research</span>, I'm building practical skills
                  to grow into a professional who can effectively safeguard systems and networks.
                </p>
              </div>
            </CyberCard>
          </div>
        </div>

        <CyberCard>
          <h3 className="text-xl font-mono font-bold mb-4 text-accent">Areas of Interest</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">▹</span>
              <span>SOC Analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">▹</span>
              <span>Security Monitoring & SIEM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">▹</span>
              <span>Incident Detection & Response</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">▹</span>
              <span>Threat Hunting</span>
            </li>
             <li className="flex items-start gap-2">
              <span className="text-accent mt-1">▹</span>
              <span>Digital Forensics</span>
            </li>
             <li className="flex items-start gap-2">
              <span className="text-accent mt-1">▹</span>
              <span>Malware Analysis</span>
            </li>
          </ul>
        </CyberCard>
        
        <div className="mt-12">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 text-foreground">
              Technical <span className="text-accent">Skills</span>
            </h1>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>

          <CyberCard>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-mono font-bold text-accent mb-3">Tools & Platforms</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Wazuh, Splunk, ELK Stack, OSQuery, n8n, Wireshark, Suricata, Linux, Git
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-mono font-bold text-accent mb-3">Security Operations</h3>
                <p className="text-foreground/80 leading-relaxed">
                  SIEM Alert Analysis, Log Monitoring, Incident Response, Threat Intelligence (VirusTotal), SOC Automation (n8n)
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-mono font-bold text-accent mb-3">Programming & Scripting</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Python, Bash, HTML/CSS
                </p>
              </div>
            </div>
          </CyberCard>
        </div>
      </div>
    </div>
  );
};

export default About;
