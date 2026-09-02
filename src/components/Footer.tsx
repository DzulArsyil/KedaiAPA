import { BUSINESS, CATERING, CONTACT, LOCATION, SERVICES, SOCIALS } from "../data/business";
import { LogoMark } from "./icons";

const NAV = [
  { id: "beranda", label: "Beranda" },
  { id: "menu", label: "Menu" },
  { id: "catering", label: "Catering" },
  { id: "tentang", label: "Tentang" },
  { id: "galeri", label: "Galeri" },
  { id: "lokasi", label: "Lokasi" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-400/20 bg-pine-950 pb-28 pt-16 text-cream-50 lg:pb-10" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <a href="#beranda" className="flex items-center gap-3">
              <LogoMark size={42} />
              <span className="font-display text-2xl font-extrabold tracking-tight">
                KEDAI <span className="text-gold-400">APA</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-50/60">
              {BUSINESS.tagline} {BUSINESS.category.toLowerCase()} untuk wilayah Karawang dan sekitarnya.
            </p>
            <p className="font-display mt-6 text-xs font-bold tracking-[0.24em] text-gold-300/80 uppercase">
              {BUSINESS.category}
            </p>
          </div>

          {/* navigasi */}
          <nav aria-label="Navigasi footer">
            <p className="font-display text-xs font-bold tracking-[0.24em] text-gold-300 uppercase">Jelajah</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-sm text-cream-50/70 transition-colors hover:text-gold-300">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* layanan */}
          <div>
            <p className="font-display text-xs font-bold tracking-[0.24em] text-gold-300 uppercase">Layanan</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-cream-50/70">
                  {s}
                </li>
              ))}
              <li>
                <a href="#catering" className="text-sm text-cream-50/70 underline decoration-gold-400/50 underline-offset-4 transition-colors hover:text-gold-300">
                  Konsultasi catering →
                </a>
              </li>
            </ul>
          </div>

          {/* kontak */}
          <div>
            <p className="font-display text-xs font-bold tracking-[0.24em] text-gold-300 uppercase">Kontak & Lokasi</p>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-cream-50/70">
              <p>
                {LOCATION.street}
                <br />
                {LOCATION.area}, {LOCATION.city}
                <br />
                {LOCATION.province} {LOCATION.postalCode}
              </p>
              <p>
                WhatsApp:{" "}
                <span className="stamp rounded bg-cream-50/10 px-2 py-0.5 text-[11px] font-bold text-gold-300">
                  {CONTACT.phoneDisplay}
                </span>
              </p>
              <p>
                Email: <span className="stamp rounded bg-cream-50/10 px-2 py-0.5 text-[11px] font-bold text-gold-300">{CONTACT.email}</span>
              </p>
              {SOCIALS.map((s) => (
                <p key={s.label}>
                  {s.label}:{" "}
                  <span className="stamp rounded bg-cream-50/10 px-2 py-0.5 text-[11px] font-bold text-gold-300">{s.handle}</span>
                </p>
              ))}
              <p>
                <a
                  href={LOCATION.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold text-gold-300 underline decoration-2 underline-offset-4 transition-colors hover:text-gold-200"
                >
                  Buka di Google Maps ↗
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* legenda placeholder + copyright */}
        <div className="mt-14 border-t border-cream-50/10 pt-7">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-cream-50/40">
            <span className="stamp rounded px-1.5 py-0.5 text-[10px] font-bold text-gold-300/80">[ … ]</span>
            <p className="min-w-[220px] flex-1 leading-relaxed">
              Data bertanda kurung siku adalah placeholder — menunggu konfirmasi resmi pemilik Kedai APA sebelum dipublikasikan.
              Menu bertanda <span className="stamp rounded px-1.5 py-0.5 text-[10px] font-bold text-gold-300/80">CONTOH</span> adalah
              tampilan sample, bukan menu asli.
            </p>
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-2 text-xs text-cream-50/50 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} <strong className="font-bold text-cream-50/80">{BUSINESS.name}</strong> · {LOCATION.area},{" "}
              {LOCATION.province}
            </p>
            <p>
              {CATERING.services.length > 0 ? "Dibuat dengan niat baik untuk kuliner lokal Karawang." : ""}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
