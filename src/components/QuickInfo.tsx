import { LOCATION, OPENING_HOURS, SERVICES } from "../data/business";
import { useOrder } from "./OrderContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrowUpRight, IconBox, IconChat, IconClock, IconPin, IconScooter } from "./icons";

/** Lapisan keputusan cepat — info penting sebelum pengunjung berpikir panjang. */
export default function QuickInfo() {
  const openOrder = useOrder();

  const rows = [
    {
      n: "01",
      Icon: IconPin,
      title: "Lokasi",
      body: (
        <>
          <p>
            {LOCATION.street} — {LOCATION.landmark.toLowerCase()}, {LOCATION.area}, {LOCATION.city}, {LOCATION.province}{" "}
            {LOCATION.postalCode}.
          </p>
          <a
            href={LOCATION.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-display text-sm font-bold text-pine-700 underline decoration-gold-400 decoration-2 underline-offset-4 transition-colors hover:text-pine-900"
          >
            Buka di Google Maps <IconArrowUpRight size={15} />
          </a>
        </>
      ),
    },
    {
      n: "02",
      Icon: IconBox,
      title: "Layanan",
      body: (
        <ul className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <li key={s} className="rounded-full border border-pine-700/25 bg-pine-100/60 px-3.5 py-1.5 text-xs font-bold text-pine-800 sm:text-[13px]">
              {s}
            </li>
          ))}
        </ul>
      ),
    },
    {
      n: "03",
      Icon: IconClock,
      title: "Jam Buka",
      body: (
        <>
          <p>
            <span className="stamp inline-block px-2 py-0.5 text-[11px] font-bold text-gold-700">{OPENING_HOURS.display}</span>
            <span className="ml-2">— belum dipublikasikan di situs ini.</span>
          </p>
          <button
            type="button"
            onClick={() => openOrder({ kind: "hours" })}
            className="mt-2 inline-flex items-center gap-1.5 font-display text-sm font-bold text-pine-700 underline decoration-gold-400 decoration-2 underline-offset-4 transition-colors hover:text-pine-900"
          >
            <IconChat size={15} /> Tanya jam buka via WhatsApp
          </button>
        </>
      ),
    },
    {
      n: "04",
      Icon: IconScooter,
      title: "Pesan & Antar",
      body: (
        <p>
          Semua pemesanan lewat WhatsApp — makan di kedai, bungkus, pesan antar, sampai catering.
          Area antar sekitar Karawang; ongkir dan jangkauan dikonfirmasi langsung saat chat.
        </p>
      ),
    },
  ];

  return (
    <section id="info" className="relative bg-cream-50 py-16 sm:py-20" aria-label="Informasi cepat">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          eyebrow="Info Cepat"
          title={<>Sebelum kamu mampir, ini yang perlu diketahui.</>}
          description="Empat hal yang paling sering ditanya — dijawab singkat di sini."
        />

        <dl className="mt-12 grid gap-x-12 md:grid-cols-2">
          {rows.map(({ n, Icon, title, body }, i) => (
            <Reveal key={n} delay={i * 90} className="group border-t-2 border-ink-900/15 py-7 transition-colors hover:border-gold-500">
              <div className="flex gap-5">
                <div className="flex flex-col items-center gap-3">
                  <span className="font-display text-sm font-bold text-gold-700">{n}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pine-900 text-gold-300 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={20} />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <dt className="font-display text-xl font-bold text-ink-900">{title}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink-500">{body}</dd>
                </div>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={200}>
          <p className="mt-2 text-xs text-ink-400">
            * Informasi di atas berdasarkan data publik Kedai APA. Detail seperti jam buka &amp; jangkauan antar selalu
            dikonfirmasi via WhatsApp agar akurat.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
