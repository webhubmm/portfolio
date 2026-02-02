"use client";

import { ReactNode, createElement, HTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  variant?: "hero-title" | "title" | "subtitle" | "content" | "link";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a";
  className?: string;
  href?: string;
}

type TypographyComponentProps = TypographyProps & (AnchorHTMLAttributes<HTMLAnchorElement> | HTMLAttributes<HTMLElement>);

export default function Typography({
  children,
  variant = "content",
  as,
  className = "",
  href,
  ...props
}: TypographyComponentProps) {
  const variantClasses = {
    "hero-title": "text-hero-title",
    title: "text-title",
    subtitle: "text-subtitle",
    content: "text-content",
    link: "text-link",
  };

  const defaultTags = {
    "hero-title": "h1",
    title: "h2",
    subtitle: "h3",
    content: "p",
    link: "a",
  } as const;

  const tag = as || defaultTags[variant] || "p";
  const classes = cn(variantClasses[variant], className);

  if (tag === "a" || variant === "link") {
    return createElement(
      "a",
      {
        href: href || "#",
        className: classes,
        ...(props as AnchorHTMLAttributes<HTMLAnchorElement>),
      },
      children
    );
  }

  return createElement(
    tag,
    {
      className: classes,
      ...(props as HTMLAttributes<HTMLElement>),
    },
    children
  );
}
