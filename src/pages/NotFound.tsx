import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20 px-6">
      <div className="text-center max-w-md">
        <div className="mb-8 inline-block p-4 bg-card border border-accent/30 rounded-lg">
          <AlertCircle className="w-16 h-16 text-accent" />
        </div>
        
        <h1 className="mb-4 text-6xl font-mono font-bold text-accent glow-text">404</h1>
        <p className="mb-2 text-2xl font-mono font-semibold text-foreground">Page Not Found</p>
        <p className="mb-8 text-muted-foreground font-mono">
          $ error: route "{location.pathname}" does not exist
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-mono font-semibold rounded-lg transition-smooth hover:shadow-[0_0_25px_rgba(0,255,204,0.4)] hover:scale-105"
        >
          <Home className="w-4 h-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
