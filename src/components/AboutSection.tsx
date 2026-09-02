import { ABOUT } from "../data/business";
import Img from "./Img";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrowUpRight, IconQuote } from "./icons";
import { LOCATION } from "../data/business";

export default function AboutSection() {
  return (
    <section id="tentang" className="relative scroll-mt-24 overflow-hidden bg-cream-50 py-20 sm:py-24" aria-label="Tentang Kedai APA">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* visual */}
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:sticky lg:top-28">
              <div className="absolute inset-0 -translate-x-3.5 translate-y-3.5 rounded-xl bg-gold-400/70" aria-hidden="true" />
              <div className="relative -rotate-1 overflow-hidden rounded-xl border border-cream-200 shadow-lift transition-transform duration-500 hover:rotate-0">
                <Img src={ABOUT.image} alt={ABOUT.imageAlt} ratioClass="aspect-[4/3]" />
              </div>
              <span className="font-display absolute -bottom-4 left-6 rotate-[-2deg] rounded-full bg-pine-900 px-4 py-2 text-xs font-bold text-cream-50 shadow-lg">
                Jl. Kertabumi — {LOCATION.landmark.toLowerCase()}
              </span>
            </div>
          </Reveal>

          {/* narasi */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionHeading number="04" eyebrow="Tentang Kedai APA" title={<>Kedai kecil, niatnya sederhana.</>} />

            <Reveal delay={100}>
              <blockquote className="relative mt-8 border-l-4 border-gold-400 pl-6">
                <IconQuote size={30} className="absolute -left-4 -top-3 rounded-full bg-cream-50 text-gold-500" />
                <p className="font-display text-2xl font-bold leading-snug tracking-tight text-pine-900 sm:text-3xl">
                  “{ABOUT.quote}”
                </p>
              </blockquote>
            </Reveal>

            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={140 + i * 80}>
                <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-[17px]">{p}</p>
              </Reveal>
            ))}

            {/* prinsip — daftar bernomor, bukan kartu seragam */}
            <div className="mt-10">
              <Reveal>
                <p className="font-display text-xs font-bold tracking-[0.26em] text-pine-600 uppercase">Cara kami masak &amp; melayani</p>
              </Reveal>
              <ol className="mt-4">
                {ABOUT.principles.map((pr, i) => (
                  <Reveal key={pr.title} delay={i * 90}>
                    <li className="group flex items-baseline gap-5 border-t border-ink-900/12 py-5 transition-colors last:border-b hover:bg-cream-100/70">
                      <span className="font-display text-2xl font-extrabold text-gold-500 transition-transform duration-300 group-hover:-translate-y-0.5">
                        0{i + 1}
                      </span>
                      <div>
                        <p className="font-display text-lg font-bold text-ink-900">{pr.title}</p>
                        <p className="mt-0.5 text-sm text-ink-500">{pr.detail}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal delay={160}>
              <a
                href={LOCATION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-display text-base font-bold text-pine-800 underline decoration-gold-400 decoration-[3px] underline-offset-[6px] transition-colors hover:text-pine-950"
              >
                Mampir langsung — buka peta <IconArrowUpRight size={17} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
