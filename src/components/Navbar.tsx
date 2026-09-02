import { useEffect, useState } from "react";
import { CONTACT, LOCATION } from "../data/business";
import { useOrder } from "./OrderContext";
import { IconMenu, IconPin, IconWhatsApp, IconX, LogoMark } from "./icons";

const LINKS = [
  { id: "beranda", label: "Beranda" },
  { id: "menu", label: "Menu" },
  { id: "catering", label: "Catering" },
  { id: "tentang", label: "Tentang" },
  { id: "galeri", label: "Galeri" },
  { id: "lokasi", label: "Lokasi" },
];

export default function Navbar() {
  const openOrder = useOrder();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "beranda";
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 140) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-pine-950/95 shadow-lg shadow-pine-950/30 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2.5" aria-label="Kedai APA — kembali ke atas">
            <LogoMark size={36} />
            <span className="font-display text-lg font-bold tracking-tight text-cream-50">
              KEDAI <span className="text-gold-400">APA</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                  active === l.id ? "bg-cream-50/10 text-gold-300" : "text-cream-50/80 hover:bg-cream-50/5 hover:text-cream-50"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openOrder({ kind: "general" })}
              className="hidden items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 font-display text-sm font-bold text-pine-950 transition-all hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/25 sm:inline-flex"
            >
              <IconWhatsApp size={17} />
              Pesan Sekarang
            </button>
            {/* Burger (mobile) */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 transition-colors hover:bg-cream-50/10 lg:hidden"
              aria-label="Buka menu navigasi"
              aria-expanded={open}
            >
              <IconMenu size={22} />
            </button>
          </div>
        </div>
        {/* garis emas tipis */}
        <div className={`h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent transition-opacity ${scrolled ? "opacity-100" : "opacity-0"}`} />
      </header>

      {/* ── Overlay menu mobile ── */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-pine-950 transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
      >
        <div className="bg-dots-light pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative flex h-16 items-center justify-between px-4 sm:h-[72px] sm:px-6">
          <span className="flex items-center gap-2.5">
            <LogoMark size={36} />
            <span className="font-display text-lg font-bold text-cream-50">
              KEDAI <span className="text-gold-400">APA</span>
            </span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 hover:bg-cream-50/10"
            aria-label="Tutup menu"
          >
            <IconX size={22} />
          </button>
        </div>

        <nav className="relative flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Navigasi mobile">
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 border-b border-cream-50/10 py-4 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${90 + i * 60}ms` : "0ms" }}
            >
              <span className="font-display text-xs font-semibold text-gold-400/80">0{i + 1}</span>
              <span className="font-display text-4xl font-bold tracking-tight text-cream-50 transition-colors group-hover:text-gold-300">
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="relative space-y-4 px-8 pb-10">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openOrder({ kind: "general" });
            }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-4 font-display text-base font-bold text-pine-950 hover:bg-gold-300"
          >
            <IconWhatsApp size={20} />
            Pesan via WhatsApp
          </button>
          <p className="flex items-start gap-2 text-sm text-cream-50/60">
            <IconPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
            {LOCATION.street} — {LOCATION.landmark}, {LOCATION.area}, {LOCATION.city}
          </p>
          <p className="text-xs text-cream-50/40">WhatsApp: {CONTACT.phoneDisplay}</p>
        </div>
      </div>
    </>
  );
}
