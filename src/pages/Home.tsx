import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-foreground">
              DIGITAL <span className="text-accent glow-text">ARCHITECT</span>
            </h1>
            <div className="h-12 mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                {displayText}
                <span className="animate-pulse text-accent">_</span>
              </p>
            </div>
          </div>

          <p className="text-foreground/80 max-w-2xl text-lg mb-12 leading-relaxed">
            Building secure digital experiences at the intersection of code and creativity.
            Specializing in full-stack development and cybersecurity solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="group px-8 py-4 bg-accent text-accent-foreground font-mono font-semibold rounded-lg transition-smooth hover:shadow-[0_0_25px_rgba(0,255,204,0.4)] hover:scale-105 flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-card border border-accent text-accent font-mono font-semibold rounded-lg transition-smooth hover:bg-accent/10 flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
