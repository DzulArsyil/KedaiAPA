/* Ikon SVG kustom Kedai APA — digambar inline, stroke-based, konsisten. */

import type { ReactNode, SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: P, children: ReactNode, filled = false) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconPin = (p: P) =>
  base(p, <><path d="M12 21s-7-5.4-7-11a7 7 0 0 1 14 0c0 5.6-7 11-7 11Z" /><circle cx="12" cy="10" r="2.6" /></>);

export const IconClock = (p: P) =>
  base(p, <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>);

export const IconWhatsApp = (p: P) =>
  base(
    p,
    <path d="M12 2.5A9.5 9.5 0 0 0 3.9 17L2.6 21.4 7.2 20A9.5 9.5 0 1 0 12 2.5Zm-3.2 5.3c-.2 0-.6.1-.9.5-.3.4-1 1-1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.5 5.5 4.8 2.7 1.1 3.3.9 3.9.8.6 0 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5l-.5-.3-1.9-.9c-.2-.1-.5-.1-.7.2l-.8 1c-.1.2-.3.2-.6.1a8 8 0 0 1-4-3.4c-.1-.3 0-.5.1-.6l.7-.8c.1-.2.1-.5 0-.7L7.3 8.5c-.2-.5-.4-.7-.5-.7Z" />,
    true
  );

export const IconScooter = (p: P) =>
  base(p, <><circle cx="6" cy="17" r="2.6" /><circle cx="18.5" cy="17" r="2.6" /><path d="M6 17h6.5l2.3-6.5h2.7M14.8 10.5 14 6.5H9.5" /><path d="M2.5 12.5h5" /></>);

export const IconBox = (p: P) =>
  base(p, <><path d="m12 3 8 4v10l-8 4-8-4V7l8-4Z" /><path d="M4 7.2 12 11l8-3.8M12 11v9.5" /></>);

export const IconChili = (p: P) =>
  base(p, <><path d="M19.5 6.5c.3 8.6-5.8 13.9-14 12.7 5-.8 8-2.5 9.6-6.4 1.4-3.4 2.2-5.6 4.4-6.3Z" /><path d="M19.5 6.5c0-1.5-1-3-2.5-3.5" /></>);

export const IconLeaf = (p: P) =>
  base(p, <><path d="M5 19C4 9 10 4.5 20 4c.5 10-4.5 15-14.5 15H5Z" /><path d="M5 19c2-5.5 5.5-9.5 10.5-11.5" /></>);

export const IconStar = (p: P) =>
  base(p, <path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9l-5.3 2.7 1-5.8-4.2-4.1 5.9-.9L12 3.5Z" />, true);

export const IconArrowRight = (p: P) => base(p, <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>);

export const IconArrowUpRight = (p: P) => base(p, <><path d="M7 17 17 7" /><path d="M9 7h8v8" /></>);

export const IconMenu = (p: P) => base(p, <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h10" /></>);

export const IconX = (p: P) => base(p, <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>);

export const IconChat = (p: P) =>
  base(p, <><path d="M21 12a8 8 0 0 1-8 8H4l1.7-3.4A8 8 0 1 1 21 12Z" /><path d="M8.5 10.5h7M8.5 13.5h4" /></>);

export const IconCopy = (p: P) =>
  base(p, <><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2" /></>);

export const IconCheck = (p: P) => base(p, <path d="m5 12.5 4.5 4.5L19 7.5" />);

export const IconMinus = (p: P) => base(p, <path d="M5 12h14" />);

export const IconPlus = (p: P) => base(p, <><path d="M12 5v14" /><path d="M5 12h14" /></>);

export const IconCamera = (p: P) =>
  base(p, <><path d="M4 8h2.5L9 5h6l2.5 3H20a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 18V9.5A1.5 1.5 0 0 1 4 8Z" /><circle cx="12" cy="13.2" r="3.4" /></>);

export const IconQuote = (p: P) =>
  base(
    p,
    <path d="M9.5 6C6 7.5 4 10 4 13.5c0 2.6 1.6 4.5 3.9 4.5 2 0 3.6-1.5 3.6-3.6 0-2-1.4-3.4-3.3-3.4h-.6C8 8.6 9 7.4 10.8 6.7L9.5 6Zm10 0c-3.5 1.5-5.5 4-5.5 7.5 0 2.6 1.6 4.5 3.9 4.5 2 0 3.6-1.5 3.6-3.6 0-2-1.4-3.4-3.3-3.4h-.6c.4-2.4 1.4-3.6 3.2-4.3L19.5 6Z" />,
    true
  );

export const IconUsers = (p: P) =>
  base(p, <><circle cx="9" cy="8.5" r="3.2" /><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" /><path d="M15.5 5.7a3.2 3.2 0 0 1 0 5.6M17.6 14.9c1.6.8 2.6 2.4 2.9 4.6" /></>);

export const IconPot = (p: P) =>
  base(p, <><path d="M5 11h14v3.5a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V11Z" /><path d="M3 11h18M8.5 8c0-1.5 1.5-1.5 1.5-3M13.5 8c0-1.5 1.5-1.5 1.5-3" /></>);

export const IconHome = (p: P) =>
  base(p, <><path d="m4 11 8-7 8 7" /><path d="M6 9.5V20h12V9.5" /></>);

export const IconGrid = (p: P) =>
  base(p, <><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></>);

export const IconMoto = (p: P) =>
  base(p, <><circle cx="5.5" cy="16.5" r="2.8" /><circle cx="18.5" cy="16.5" r="2.8" /><path d="M5.5 16.5h5l3-7h3.2M13.5 9.5 12.8 6h-3" /><path d="m18.5 16.5-2.2-5.5" /></>);

/* Logo Kedai APA — mangkuk kedai + uap */
export function LogoMark({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="var(--color-pine-800)" />
      <path d="M9 24c0-6 4.9-11 11-11s11 5 11 11v1H9v-1Z" fill="var(--color-gold-400)" />
      <rect x="8" y="27" width="24" height="3.4" rx="1.7" fill="var(--color-cream-50)" />
      <path d="M16.5 10c0-1.6 1.6-1.8 1.6-3.4M22.5 10c0-1.6 1.6-1.8 1.6-3.4" stroke="var(--color-gold-400)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}
