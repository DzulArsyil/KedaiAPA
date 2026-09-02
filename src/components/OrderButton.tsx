import type { ReactNode, MouseEventHandler } from "react";
import { IconWhatsApp } from "./icons";

interface OrderButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "gold" | "pine" | "outline-dark" | "outline-light";
  size?: "sm" | "md" | "lg";
  withWaIcon?: boolean;
  className?: string;
  ariaLabel?: string;
}

/** Tombol CTA konsisten untuk seluruh situs. */
export default function OrderButton({
  children,
  onClick,
  variant = "gold",
  size = "md",
  withWaIcon = true,
  className = "",
  ariaLabel,
}: OrderButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  }[size];

  const variants = {
    gold: "bg-gold-400 text-pine-950 hover:bg-gold-300 shadow-lg shadow-gold-400/20",
    pine: "bg-pine-900 text-cream-50 hover:bg-pine-800",
    "outline-dark": "border-2 border-pine-900/25 text-pine-900 hover:border-pine-900 hover:bg-pine-900 hover:text-cream-50",
    "outline-light": "border-2 border-cream-50/25 text-cream-50 hover:border-gold-400 hover:text-gold-300",
  }[variant];

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-display font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${sizes} ${variants} ${className}`}
    >
      {withWaIcon && <IconWhatsApp size={size === "sm" ? 15 : 18} />}
      {children}
    </button>
  );
}
