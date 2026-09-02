import { useState } from "react";
import { CATEGORIES, PRODUCTS } from "../data/business";
import { useOrder } from "./OrderContext";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import OrderButton from "./OrderButton";

export default function MenuSection() {
  const [cat, setCat] = useState("semua");
  const openOrder = useOrder();
  const filtered = cat === "semua" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <section id="menu" className="relative scroll-mt-24 bg-cream-100 py-20 sm:py-24" aria-label="Menu Kedai APA">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            number="02"
            eyebrow="Menu Andalan"
            title={<>Yang biasa bikin orang balik lagi.</>}
          />
          <Reveal delay={120} className="shrink-0">
            <OrderButton variant="outline-dark" onClick={() => openOrder({ kind: "general" })}>
              Minta menu lengkap
            </OrderButton>
          </Reveal>
        </div>

        {/* catatan kejujuran data */}
        <Reveal delay={80}>
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold-500/40 bg-gold-200/30 px-5 py-4">
            <span className="stamp mt-0.5 shrink-0 rounded bg-cream-50 px-2 py-1 text-[10px] font-bold text-gold-700">INFO</span>
            <p className="text-[13px] leading-relaxed text-ink-700 sm:text-sm">
              Menu dan harga di bawah ini adalah <strong className="font-bold">contoh tampilan</strong> (ditandai stempel CONTOH)
              agar kamu bisa merasakan cara pesan di situs ini. Menu &amp; harga asli sedang diisi langsung oleh tim Kedai APA —
              daftar lengkapnya selalu paling update via WhatsApp.
            </p>
          </div>
        </Reveal>

        {/* filter kategori */}
        <Reveal delay={140}>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible" role="tablist" aria-label="Filter kategori menu">
            {CATEGORIES.map((c) => {
              const active = cat === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCat(c.id)}
                  className={`shrink-0 rounded-full px-5 py-2.5 font-display text-sm font-bold transition-all duration-200 ${
                    active
                      ? "bg-pine-900 text-cream-50 shadow-lg shadow-pine-900/20"
                      : "border border-pine-900/20 bg-cream-50 text-pine-900 hover:border-pine-900/50 hover:bg-pine-100"
                  }`}
                >
                  {c.label}
                  <span className={`ml-1.5 text-xs font-semibold ${active ? "text-gold-300" : "text-ink-400"}`}>
                    {c.id === "semua" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* grid produk — key memaksa animasi ulang saat filter berganti */}
        <div key={cat} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 70} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-xl border-2 border-dashed border-pine-700/25 bg-pine-100/40 px-6 py-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-display text-lg font-bold text-ink-900">Nggak nemu yang kamu cari?</p>
              <p className="mt-1 text-sm text-ink-500">Menu Kedai APA lebih panjang dari yang tampil di sini. Tanya saja langsung.</p>
            </div>
            <OrderButton onClick={() => openOrder({ kind: "general" })} className="shrink-0">
              Tanya menu via WhatsApp
            </OrderButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
