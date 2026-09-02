import { CATERING } from "../data/business";
import { useOrder } from "./OrderContext";
import Img from "./Img";
import OrderButton from "./OrderButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconBox, IconChat, IconPot, IconUsers } from "./icons";

const SERVICE_ICONS = [IconBox, IconPot, IconUsers];

export default function CateringSection() {
  const openOrder = useOrder();

  return (
    <section id="catering" className="relative scroll-mt-24 overflow-hidden bg-pine-950 py-20 text-cream-50 sm:py-24" aria-label="Catering Kedai APA">
      <div className="bg-weave pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-pine-700/25 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* kiri — sticky saat desktop */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            number="03"
            eyebrow="Catering"
            title={CATERING.headline}
            description={CATERING.intro}
            dark
          />

          <ul className="mt-9 space-y-4">
            {CATERING.services.map((s, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <Reveal key={s.name} delay={i * 90}>
                  <li className="group flex gap-4 rounded-xl border border-cream-50/10 bg-pine-900/60 p-5 transition-colors hover:border-gold-400/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={21} />
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-cream-50">{s.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-cream-50/65">{s.detail}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <OrderButton size="lg" onClick={() => openOrder({ kind: "catering" })}>
                Konsultasi Catering
              </OrderButton>
              <span className="flex items-center gap-2 text-sm text-cream-50/60">
                <IconChat size={17} className="text-gold-400" />
                Gratis ngobrol dulu — tanpa komitmen.
              </span>
            </div>
          </Reveal>
        </div>

        {/* kanan — visual + langkah */}
        <div>
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-xl border-2 border-gold-400/40" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-xl border border-cream-50/10 shadow-lift">
                <Img src={CATERING.image} alt={CATERING.imageAlt} ratioClass="aspect-[4/3]" className="transition-transform duration-700 hover:scale-[1.04]" />
              </div>
              <span className="stamp absolute right-4 top-4 rounded bg-pine-950/85 px-2.5 py-1 text-[10px] font-bold text-gold-300">
                CONTOH KEMASAN
              </span>
            </div>
          </Reveal>

          {/* langkah pemesanan */}
          <ol className="mt-10 space-y-0">
            {CATERING.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 110}>
                <li className="relative flex gap-5 pb-8 last:pb-0">
                  {i < CATERING.steps.length - 1 && (
                    <span className="absolute left-[22px] top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-gold-400/60 to-transparent" aria-hidden="true" />
                  )}
                  <span className="font-display z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400 text-base font-extrabold text-pine-950 shadow-lg shadow-gold-400/20">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <p className="font-display text-lg font-bold text-cream-50">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-cream-50/65">{s.detail}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* contoh occasion */}
          <Reveal delay={140}>
            <div className="mt-10">
              <p className="font-display text-xs font-bold tracking-[0.24em] text-gold-300 uppercase">Contohnya cocok untuk</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {CATERING.occasions.map((o) => (
                  <li key={o} className="rounded-full border border-cream-50/15 bg-pine-900/70 px-3.5 py-1.5 text-[13px] font-semibold text-cream-50/80 transition-colors hover:border-gold-400/50 hover:text-gold-300">
                    {o}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-cream-50/45">* Contoh jenis acara — konfirmasi kemampuan &amp; kapasitas langsung saat konsultasi.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
