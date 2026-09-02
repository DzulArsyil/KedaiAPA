import { useOrder } from "./OrderContext";
import Reveal from "./Reveal";
import { IconArrowUpRight, IconWhatsApp } from "./icons";
import { LOCATION } from "../data/business";

export default function FinalCTA() {
  const openOrder = useOrder();

  return (
    <section className="relative overflow-hidden bg-gold-400 py-20 text-pine-950 sm:py-24" aria-label="Ajakan memesan">
      {/* watermark */}
      <p
        className="font-display pointer-events-none absolute -bottom-8 left-1/2 w-full -translate-x-1/2 whitespace-nowrap text-center text-[22vw] font-extrabold leading-none tracking-tight text-pine-950/[0.06] select-none"
        aria-hidden="true"
      >
        KEDAI APA
      </p>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <p className="font-display text-xs font-bold tracking-[0.28em] uppercase">Langkah terakhir</p>
            <h2 className="font-display mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Laper?
              <br />
              Chat aja. <span className="inline-block -rotate-2 border-b-[6px] border-pine-950">Serius, segampang itu.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-pine-950/75 sm:text-lg">
              Nggak perlu unduh aplikasi atau isi formulir panjang. Tekan tombolnya, pesanmu terisi otomatis,
              dan tim Kedai APA langsung bantu — dari seporsi geprek sampai catering seratus kotak.
            </p>
          </Reveal>

          <Reveal delay={140} className="flex shrink-0 flex-col gap-3.5">
            <button
              type="button"
              onClick={() => openOrder({ kind: "general" })}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-pine-950 px-8 py-5 font-display text-lg font-bold text-cream-50 shadow-xl shadow-pine-950/30 transition-all hover:-translate-y-1 hover:bg-pine-900"
            >
              <IconWhatsApp size={22} className="text-gold-400" />
              Pesan Sekarang
              <IconArrowUpRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={LOCATION.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-pine-950/30 px-8 py-4 font-display text-base font-bold text-pine-950 transition-all hover:border-pine-950 hover:bg-pine-950 hover:text-cream-50"
            >
              Mampir ke kedai — buka peta
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
