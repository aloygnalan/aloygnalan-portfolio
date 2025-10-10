import { useState } from "react";
import CyberCard from "@/components/common/CyberCard";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const data = new FormData(form);
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setIsSubmitted(true);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        form.reset();
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/aloygnalan",
      username: "github.com/aloygnalan",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/aloy-gnalan",
      username: "linkedin.com/in/aloy-gnalan",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:gnalanaloy2@gmail.com",
      username: "gnalanaloy2@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 text-foreground">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <CyberCard>
              <h2 className="text-2xl font-mono font-bold mb-6 text-foreground">
                Send a Message
              </h2>
              {/* Hidden form for Netlify form detection */}
              <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
              </form>
              {/* Actual form */}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="text-xl font-mono font-bold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-accent text-accent-foreground font-mono rounded-lg transition-smooth hover:shadow-[0_0_25px_rgba(0,255,204,0.4)]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  name="contact" 
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                <div>
                  <label htmlFor="name" className="block text-sm font-mono mb-2 text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"

                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-smooth text-foreground font-mono"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"

                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-smooth text-foreground font-mono"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"

                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-smooth text-foreground font-mono resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground font-mono font-semibold rounded-lg transition-smooth hover:shadow-[0_0_25px_rgba(0,255,204,0.4)] flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
              )}
            </CyberCard>
          </div>

          <div className="space-y-6">
            <CyberCard>
              <h2 className="text-2xl font-mono font-bold mb-6 text-foreground">
                Connect With Me
              </h2>
              <div className="space-y-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg transition-smooth hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,204,0.2)] group"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/30 group-hover:bg-accent/20 transition-smooth">
                      <link.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-mono font-semibold text-foreground">{link.name}</p>
                      <p className="text-sm text-muted-foreground font-mono">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CyberCard>

            <CyberCard>
              <h3 className="text-lg font-mono font-bold mb-3 text-foreground">
                Response Time
              </h3>
              <p className="text-foreground/80 text-sm">
                I typically respond within <span className="text-accent font-semibold">24-48 hours</span>.
                For urgent matters, please reach out via email with "URGENT" in the subject line.
              </p>
            </CyberCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
