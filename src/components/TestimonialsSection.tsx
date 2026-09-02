import { TESTIMONIALS, TESTIMONIAL_PLACEHOLDER } from "../data/business";
import { useOrder } from "./OrderContext";
import OrderButton from "./OrderButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconQuote, IconStar } from "./icons";

export default function TestimonialsSection() {
  const openOrder = useOrder();
  const hasData = TESTIMONIALS.length > 0;

  return (
    <section id="testimoni" className="relative scroll-mt-24 bg-cream-50 py-20 sm:py-24" aria-label="Testimoni pelanggan">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading number="06" eyebrow="Kata Mereka" title={<>Cerita dari meja kedai.</>} />

        {hasData ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 90}>
                <blockquote className="h-full rounded-xl border border-cream-200 bg-cream-100 p-6">
                  <p className="font-display text-lg font-bold">{t.name}</p>
                  <p className="mt-2 text-sm text-ink-500">{t.text}</p>
                </blockquote>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={100}>
            <div className="mt-12 grid gap-6 lg:grid-cols-5">
              {/* placeholder state — jujur, tidak mengarang ulasan */}
              <div className="relative overflow-hidden rounded-xl bg-pine-900 p-8 text-cream-50 shadow-lift sm:p-10 lg:col-span-3">
                <div className="bg-dots-light pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
                <div className="relative">
                  <IconQuote size={44} className="text-gold-400" />
                  <h3 className="font-display mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {TESTIMONIAL_PLACEHOLDER.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cream-50/70">
                    {TESTIMONIAL_PLACEHOLDER.detail}
                  </p>
                  <OrderButton className="mt-7" onClick={() => openOrder({ kind: "general" })}>
                    {TESTIMONIAL_PLACEHOLDER.cta}
                  </OrderButton>
                </div>
              </div>

              {/* kerangka kartu testimoni mendatang */}
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
                {[0, 1].map((k) => (
                  <div key={k} className="flex flex-col justify-between rounded-xl border-2 border-dashed border-ink-900/15 bg-cream-100/60 p-6" aria-hidden="true">
                    <div>
                      <span className="flex gap-1 text-cream-300">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <IconStar key={i} size={15} className="text-cream-300" />
                        ))}
                      </span>
                      <p className="font-display mt-4 text-lg font-bold text-cream-300">“Segera terisi…”</p>
                      <div className="mt-4 space-y-2">
                        <div className="h-2 w-3/4 rounded bg-cream-200" />
                        <div className="h-2 w-1/2 rounded bg-cream-200" />
                      </div>
                    </div>
                    <p className="stamp mt-6 self-start rounded px-2 py-0.5 text-[10px] font-bold text-ink-400">MENUNGGU CERITA ASLI</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
