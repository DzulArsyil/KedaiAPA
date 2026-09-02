import { LOCATION } from "../data/business";
import { useOrder } from "./OrderContext";
import { IconArrowRight, IconBox, IconPin, IconScooter, IconWhatsApp } from "./icons";
import Img from "./Img";

const HERO_IMG = "https://image.qwenlm.ai/generated-images/1946ac99-d672-4132-96a4-47ccc86237d4/_result.png";

export default function Hero() {
  const openOrder = useOrder();

  return (
    <section id="beranda" className="relative overflow-hidden bg-pine-950 pt-24 text-cream-50 sm:pt-28" aria-label="Beranda Kedai APA">
      {/* lapisan suasana */}
      <div className="bg-weave pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-gold-400/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 h-[480px] w-[480px] rounded-full bg-pine-700/25 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 lg:pb-24">
        {/* ── Kolom copy ── */}
        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cream-50/15 bg-cream-50/5 px-4 py-2 text-[11px] font-bold tracking-[0.22em] text-gold-300 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-pin-pulse absolute inline-flex h-full w-full rounded-full bg-gold-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            KEDAI APA · KARAWANG KULON, KARAWANG BARAT
          </p>

          <h1 className="font-display font-extrabold tracking-tight" style={{ fontSize: "clamp(2.9rem, 9.5vw, 6.4rem)", lineHeight: 0.98 }}>
            <span className="mask-line">
              <span style={{ ["--d" as never]: "80ms" }}>Makan enak,</span>
            </span>
            <span className="mask-line">
              <span style={{ ["--d" as never]: "220ms" }}>
                <span className="text-outline-cream">pesan</span>{" "}
                <span className="text-gold-400">gampang.</span>
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-50/75 sm:text-lg">
            Kedai makanan &amp; catering di <strong className="font-semibold text-cream-50">Jl. Kertabumi, Karawang Kulon</strong> —
            persis di seberang Richeese Kertabumi. Lihat menunya, tekan tombol pesan,
            lalu lanjut ngobrol santai di WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => openOrder({ kind: "general" })}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-7 py-4 font-display text-base font-bold text-pine-950 shadow-xl shadow-gold-400/20 transition-all hover:-translate-y-0.5 hover:bg-gold-300 sm:text-lg"
            >
              <IconWhatsApp size={22} />
              Pesan Sekarang
              <IconArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-7 py-4 font-display text-base font-bold text-cream-50 transition-all hover:border-gold-400 hover:text-gold-300 sm:text-lg"
            >
              Lihat Menu
            </a>
          </div>

          {/* penanda cepat berbasis data terverifikasi */}
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {[
              { Icon: IconPin, text: LOCATION.landmark },
              { Icon: IconScooter, text: "Pesan antar sekitar Karawang" },
              { Icon: IconBox, text: "Catering & nasi kotak" },
            ].map(({ Icon, text }, i) => (
              <li
                key={i}
                className="flex items-center gap-2 rounded-full border border-cream-50/12 bg-pine-900/60 px-3.5 py-2 text-xs font-semibold text-cream-50/80 sm:text-[13px]"
              >
                <Icon size={15} className="text-gold-400" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Kolom visual ── */}
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:col-span-5 lg:max-w-none">
          {/* bingkai offset */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border-2 border-gold-400/50" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-t-full border border-cream-50/15 shadow-lift">
            <Img
              src={HERO_IMG}
              alt="Paket nasi dengan ayam geprek dan sambal — sajian khas Kedai APA"
              ratioClass="aspect-[4/5]"
              className="animate-breathe"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pine-950/50 via-transparent to-transparent" aria-hidden="true" />
          </div>

          {/* badge berputar */}
          <div className="absolute -left-8 bottom-8 hidden h-28 w-28 sm:block lg:-left-12">
            <svg viewBox="0 0 120 120" className="animate-spin-slow h-full w-full text-gold-300" aria-hidden="true">
              <defs>
                <path id="hero-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" fill="none" />
              </defs>
              <text fill="currentColor" fontSize="11" fontWeight="700" letterSpacing="2.6" style={{ fontFamily: "var(--font-display)" }}>
                <textPath href="#hero-circle">PESAN VIA WHATSAPP • KEDAI APA • KARAWANG •</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-pine-950 shadow-lg">
              <IconWhatsApp size={26} />
            </span>
          </div>

          {/* kartu info mengambang */}
          <div className="animate-bob absolute -right-2 top-10 w-44 rotate-3 rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-pine-950 shadow-lift sm:-right-6">
            <p className="flex items-center gap-2 font-display text-sm font-bold">
              <IconScooter size={18} className="text-pine-700" />
              Pesan antar
            </p>
            <p className="mt-1 text-[11px] font-medium leading-snug text-ink-500">
              Sekitar Karawang — tinggal chat, makanan meluncur.
            </p>
          </div>
        </div>
      </div>

      {/* penanda gulir */}
      <div className="relative mx-auto hidden max-w-7xl px-8 pb-8 lg:block" aria-hidden="true">
        <div className="flex items-center gap-3 text-cream-50/40">
          <span className="h-px w-14 bg-cream-50/30" />
          <span className="font-display text-[11px] font-semibold tracking-[0.3em]">GULIR UNTUK JELAJAH</span>
        </div>
      </div>
    </section>
  );
}
