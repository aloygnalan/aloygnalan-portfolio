import { NavLink } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { useOnClickOutside } from "@/hooks/use-click-outside";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(navRef, () => setIsMenuOpen(false));

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-accent transition-smooth group-hover:text-primary" />
            <span className="font-mono font-bold text-lg text-foreground group-hover:text-accent transition-smooth">
              Cyber Horizon
            </span>
          </NavLink>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-mono font-medium transition-smooth relative group ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`
                }
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className={`
            md:hidden
            fixed inset-x-0 top-[73px] bg-background border-b border-border
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          `}>
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-mono font-medium transition-smooth rounded-lg ${
                      isActive 
                        ? "text-accent bg-accent/10" 
                        : "text-foreground hover:text-accent hover:bg-accent/5"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
