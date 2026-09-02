import { GALLERY } from "../data/business";
import Img from "./Img";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconCamera } from "./icons";

export default function GallerySection() {
  return (
    <section id="galeri" className="relative scroll-mt-24 bg-cream-100 py-20 sm:py-24" aria-label="Galeri Kedai APA">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            number="05"
            eyebrow="Galeri"
            title={<>Biar makanannya yang bercerita.</>}
            description="Kumpulan suasana & sajian dari kedai. Slot bertanda [FOTO …] menunggu dokumentasi asli — tinggal ganti, layout-nya sudah siap."
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className={i === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
              {g.src ? (
                <figure className={`group relative overflow-hidden rounded-xl border border-cream-200 shadow-card ${i === 0 ? "h-full" : ""}`}>
                  <div className={`${i === 0 ? "h-full min-h-[260px] lg:min-h-full" : ""}`}>
                    <Img
                      src={g.src}
                      alt={g.alt}
                      ratioClass={i === 0 ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[4/3]"}
                      className="transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-pine-950/80 px-3 py-1 text-[11px] font-bold text-gold-300">
                    {g.tag}
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-pine-950/90 via-pine-950/60 to-transparent px-4 pb-3.5 pt-10 text-[13px] font-semibold text-cream-50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.caption}
                  </figcaption>
                </figure>
              ) : (
                <figure
                  className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-pine-700/30 bg-pine-100/40 px-4 py-10 text-center transition-colors hover:border-gold-500/60 hover:bg-pine-100/70 ${
                    i === 0 ? "h-full min-h-[260px]" : "aspect-[4/3]"
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine-900/10 text-pine-700">
                    <IconCamera size={22} />
                  </span>
                  <span className="stamp rounded bg-cream-50 px-2.5 py-1 text-[10px] font-bold text-gold-700">{g.placeholder}</span>
                  <figcaption className="text-[13px] font-medium text-ink-500">{g.caption}</figcaption>
                </figure>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
