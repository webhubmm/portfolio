import { VIRA_TELEGRAM_URL } from "@/lib/vira";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "light";

interface TelegramCtaProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-base btn-primary inline-flex",
  secondary: "btn-base btn-secondary inline-flex",
  dark: "project-story-visit-btn inline-flex",
  light: "contact-form-submit inline-flex no-underline",
};

export default function TelegramCta({
  children,
  variant = "primary",
  className = "",
}: TelegramCtaProps) {
  const isSlice = variant === "dark";

  return (
    <a
      href={VIRA_TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(variantClass[variant], className)}
    >
      {isSlice ? (
        <span className="project-story-visit-btn-label">{children}</span>
      ) : (
        children
      )}
    </a>
  );
}
