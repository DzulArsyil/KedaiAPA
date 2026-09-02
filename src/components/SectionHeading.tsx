import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
}

export default function SectionHeading({ number, eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-3xl">
      <p className="flex items-center gap-3">
        <span className={`font-display text-sm font-bold ${dark ? "text-gold-400" : "text-pine-700"}`}>{number}</span>
        <span className={`h-px w-10 ${dark ? "bg-gold-400/60" : "bg-pine-700/50"}`} aria-hidden="true" />
        <span className={`font-display text-xs font-bold tracking-[0.28em] uppercase ${dark ? "text-gold-300" : "text-pine-600"}`}>
          {eyebrow}
        </span>
      </p>
      <h2
        className={`font-display mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl ${dark ? "text-cream-50" : "text-ink-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-cream-50/70" : "text-ink-500"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
