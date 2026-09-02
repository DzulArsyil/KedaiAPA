import { LOCATION, OPENING_HOURS } from "../data/business";
import { useOrder } from "./OrderContext";
import OrderButton from "./OrderButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrowUpRight, IconClock, IconPin, IconScooter } from "./icons";

/** Peta ilustratif — bukan peta asli; navigasi tetap lewat Google Maps. */
function MapIllustration() {
  return (
    <svg viewBox="0 0 460 340" className="h-auto w-full" role="img" aria-label="Ilustrasi lokasi Kedai APA di Jl. Kertabumi, seberang Richeese Kertabumi">
      <rect width="460" height="340" rx="16" fill="var(--color-pine-800)" />
      {/* blok lingkungan */}
      <g fill="var(--color-pine-700)" opacity="0.55">
        <rect x="26" y="26" width="120" height="86" rx="8" />
        <rect x="26" y="200" width="96" height="112" rx="8" />
        <rect x="316" y="26" width="118" height="70" rx="8" />
        <rect x="330" y="236" width="104" height="78" rx="8" />
        <rect x="190" y="36" width="86" height="60" rx="8" />
      </g>
      {/* jalan utama */}
      <path d="M0 170 H460" stroke="var(--color-cream-50)" strokeOpacity="0.22" strokeWidth="26" />
      <path d="M160 0 V340" stroke="var(--color-cream-50)" strokeOpacity="0.14" strokeWidth="18" />
      <path d="M0 170 H460" stroke="var(--color-cream-50)" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="12 12" />
      <text x="236" y="158" fill="var(--color-cream-50)" opacity="0.75" fontSize="12" fontWeight="700" fontFamily="var(--font-display)" letterSpacing="2">
        JL. KERTABUMI
      </text>
      {/* rute animasi */}
      <path
        d="M40 300 C 120 260, 130 210, 180 196 S 260 190, 292 176"
        fill="none"
        stroke="var(--color-gold-400)"
        strokeWidth="3.5"
        className="animate-route"
      />
      {/* landmark Richeese */}
      <g>
        <rect x="252" y="196" width="14" height="14" rx="3" fill="var(--color-cream-50)" opacity="0.75" />
        <text x="274" y="208" fill="var(--color-cream-50)" opacity="0.7" fontSize="11" fontWeight="600">
          Richeese (patokan)
        </text>
      </g>
      {/* pin Kedai APA */}
      <g transform="translate(300 132)">
        <circle cx="0" cy="0" r="26" fill="var(--color-gold-400)" opacity="0.18">
          <animate attributeName="r" values="18;30;18" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <path d="M0 10 C -14 -6, -11 -26, 0 -26 C 11 -26, 14 -6, 0 10 Z" fill="var(--color-gold-400)" stroke="var(--color-pine-950)" strokeWidth="2" />
        <circle cx="0" cy="-12" r="5" fill="var(--color-pine-950)" />
        <text x="-46" y="-36" fill="var(--color-gold-300)" fontSize="13" fontWeight="800" fontFamily="var(--font-display)" letterSpacing="1">
          KEDAI APA
        </text>
        <text x="-46" y="-20" fill="var(--color-cream-50)" opacity="0.7" fontSize="10">
          Ruko No. 89/5
        </text>
      </g>
      {/* kamu di sini */}
      <g transform="translate(40 300)">
        <circle cx="0" cy="0" r="7" fill="var(--color-cream-50)" />
        <circle cx="0" cy="0" r="3" fill="var(--color-pine-950)" />
        <text x="12" y="4" fill="var(--color-cream-50)" opacity="0.7" fontSize="11" fontWeight="600">
          Kamu (perkiraan)
        </text>
      </g>
      <text x="330" y="322" fill="var(--color-cream-50)" opacity="0.4" fontSize="9" fontFamily="var(--font-body)">
        ilustrasi — bukan skala peta
      </text>
    </svg>
  );
}

export default function LocationSection() {
  const openOrder = useOrder();

  return (
    <section id="lokasi" className="relative scroll-mt-24 overflow-hidden bg-pine-950 py-20 text-cream-50 sm:py-24" aria-label="Lokasi Kedai APA">
      <div className="bg-weave pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          eyebrow="Lokasi & Rute"
          title={<>Gampang dicari, gampang didatangi.</>}
          dark
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* info */}
          <Reveal>
            <div className="flex h-full flex-col">
              <address className="not-italic">
                <p className="font-display text-2xl font-extrabold tracking-tight text-gold-300">Kedai APA</p>
                <p className="mt-3 max-w-md text-base leading-relaxed text-cream-50/80">
                  {LOCATION.street}
                  <br />
                  {LOCATION.area}, {LOCATION.city}
                  <br />
                  {LOCATION.province} {LOCATION.postalCode}, {LOCATION.country}
                </p>
              </address>

              <ul className="mt-7 space-y-4">
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                    <IconPin size={18} />
                  </span>
                  <p className="text-sm leading-relaxed text-cream-50/75">
                    <strong className="font-bold text-cream-50">Patokan paling gampang:</strong> {LOCATION.landmark.toLowerCase()}.
                    Ruko nomor 89/5 — kalau sudah lihat Richeese, berarti kamu sudah dekat.
                  </p>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                    <IconClock size={18} />
                  </span>
                  <p className="text-sm leading-relaxed text-cream-50/75">
                    <strong className="font-bold text-cream-50">Jam buka:</strong>{" "}
                    <span className="stamp mx-1 rounded bg-cream-50/10 px-2 py-0.5 text-[10px] font-bold text-gold-300">
                      {OPENING_HOURS.display}
                    </span>
                    <br />
                    {OPENING_HOURS.note}
                  </p>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                    <IconScooter size={18} />
                  </span>
                  <p className="text-sm leading-relaxed text-cream-50/75">
                    <strong className="font-bold text-cream-50">Pesan antar:</strong> tersedia untuk wilayah sekitar Karawang —
                    jangkauan &amp; ongkir dikonfirmasi saat chat.
                  </p>
                </li>
              </ul>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={LOCATION.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-7 py-4 font-display text-base font-bold text-pine-950 shadow-xl shadow-gold-400/20 transition-all hover:-translate-y-0.5 hover:bg-gold-300"
                >
                  Buka di Google Maps
                  <IconArrowUpRight size={18} />
                </a>
                <OrderButton variant="outline-light" size="lg" onClick={() => openOrder({ kind: "directions" })}>
                  Tanya rute
                </OrderButton>
              </div>
            </div>
          </Reveal>

          {/* peta ilustratif */}
          <Reveal delay={140}>
            <div className="relative">
              <div className="absolute inset-0 translate-x-3.5 -translate-y-3.5 rounded-2xl border-2 border-gold-400/35" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-cream-50/10 shadow-lift">
                <MapIllustration />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-cream-50/45">
              Peta di atas ilustrasi supaya kebayang posisinya — untuk navigasi real-time, gunakan tombol Google Maps.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
