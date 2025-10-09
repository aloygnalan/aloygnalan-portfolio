import { NavLink } from "react-router-dom";
import { Terminal } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-accent transition-smooth group-hover:text-primary" />
            <span className="font-mono font-bold text-lg text-foreground group-hover:text-accent transition-smooth">
              Cyber Horizon
            </span>
          </NavLink>

          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 md:px-4 py-2 text-sm font-mono font-medium transition-smooth relative group ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`
                }
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
