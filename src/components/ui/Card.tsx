"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "glass" | "gradient";
  className?: string;
}

export default function Card({ children, variant = "default", className = "" }: CardProps) {
  const variantClasses = {
    default: "card-base",
    glass: "card-glass",
    gradient: "card-gradient",
  };

  return (
    <div className={cn(variantClasses[variant], className)}>
      {children}
    </div>
  );
}
