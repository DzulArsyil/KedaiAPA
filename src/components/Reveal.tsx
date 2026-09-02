import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  as?: keyof HTMLElementTagNameMap;
  id?: string;
  style?: CSSProperties;
}

/** Scroll-reveal berbasis IntersectionObserver — ringan, sekali jalan. */
export default function Reveal({ children, className = "", delay = 0, as = "div", id, style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      id={id}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ ...style, ["--rv" as never]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
