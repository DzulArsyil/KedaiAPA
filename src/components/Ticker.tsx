import { IconChili } from "./icons";

interface TickerProps {
  items: string[];
  variant?: "gold" | "dark";
  speed?: number; // detik per loop
}

/** Strip berjalan ala spanduk kedai — hidup, tapi hormat pada reduced-motion. */
export default function Ticker({ items, variant = "gold", speed = 30 }: TickerProps) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display whitespace-nowrap px-5 text-sm font-bold tracking-[0.16em] sm:text-base">
            {t}
          </span>
          <IconChili size={15} className={variant === "gold" ? "text-pine-900/70" : "text-gold-400/70"} />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y py-2.5 ${
        variant === "gold" ? "border-pine-950/20 bg-gold-400 text-pine-950" : "border-cream-50/10 bg-pine-900 text-cream-50"
      }`}
      role="presentation"
    >
      <div className="flex w-max" style={{ ["--speed" as never]: `${speed}s` }}>
        <div className="animate-marquee flex">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
