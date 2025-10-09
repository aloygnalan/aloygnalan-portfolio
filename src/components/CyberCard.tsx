import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const CyberCard = ({ children, className, hover = true }: CyberCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-lg border border-border p-6 transition-smooth",
        hover && "hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,204,0.2)] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CyberCard;
