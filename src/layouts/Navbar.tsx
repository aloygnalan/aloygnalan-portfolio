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
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between relative">
          <NavLink to="/" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-accent transition-smooth group-hover:text-primary" />
            <span className="font-mono font-bold text-lg text-foreground group-hover:text-accent transition-smooth">
              Cyber Horizon
            </span>
          </NavLink>

          {/* Mobile menu button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block lg:hidden p-2 text-foreground hover:text-accent transition-smooth"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
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
          <div 
            className={`
              lg:hidden
              fixed inset-x-0 top-[73px] bg-background/95 backdrop-blur-md border-b border-border
              transition-all duration-200 ease-in-out
              ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
            `}
            style={{
              visibility: isMenuOpen ? 'visible' : 'hidden',
              opacity: isMenuOpen ? '1' : '0',
            }}
          >
            <div className="container mx-auto px-4 py-2 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block w-full px-4 py-3 text-base font-mono font-medium transition-smooth rounded-lg ${
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
