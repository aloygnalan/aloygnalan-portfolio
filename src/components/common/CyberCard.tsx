import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  // Allow React `key` when used in lists — TypeScript checks JSX props against this
  key?: React.Key;
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
