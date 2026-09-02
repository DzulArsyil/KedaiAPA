import type { Product } from "../data/business";
import { CATEGORIES } from "../data/business";
import { formatRupiah } from "../lib/whatsapp";
import { useOrder } from "./OrderContext";
import Img from "./Img";
import { IconArrowUpRight, IconChili } from "./icons";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const openOrder = useOrder();
  const catLabel = CATEGORIES.find((c) => c.id === product.category)?.label ?? product.category;

  return (
    <article
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-cream-200 bg-cream-50 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-lift"
      onClick={() => openOrder({ kind: "order", product })}
    >
      {/* foto */}
      <div className="relative overflow-hidden">
        <Img src={product.image} alt={product.imageAlt} ratioClass="aspect-[4/3]" className="transition-transform duration-500 group-hover:scale-[1.06]" />
        <span className="absolute left-3 top-3 rounded-full bg-pine-950/85 px-3 py-1 text-[11px] font-bold tracking-wide text-cream-50">
          {catLabel}
        </span>
        {product.sample && (
          <span className="stamp absolute right-3 top-3 rounded px-2 py-0.5 bg-cream-50/90 text-[10px] font-bold text-gold-700" title="Contoh tampilan — menu & harga asli akan diisi pemilik kedai">
            CONTOH
          </span>
        )}
        {product.badge && (
          <span className="absolute bottom-3 left-3 rounded-full bg-gold-400 px-3 py-1 font-display text-[11px] font-bold text-pine-950 shadow">
            {product.badge}
          </span>
        )}
      </div>

      {/* isi */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-pine-800">
            {product.name}
          </h3>
          {product.spicy ? (
            <span className="flex shrink-0 items-center gap-0.5 pt-1 text-gold-700" aria-label={`Level pedas ${product.spicy} dari 3`}>
              {Array.from({ length: product.spicy }).map((_, i) => (
                <IconChili key={i} size={13} />
              ))}
            </span>
          ) : null}
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-500">{product.description}</p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <p className="font-display text-xl font-extrabold tracking-tight text-pine-900">
            {formatRupiah(product.price)}
            {product.sample && <span className="ml-1 align-middle text-[10px] font-bold text-ink-400">/ contoh</span>}
          </p>
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-pine-900 px-4 py-2 font-display text-[13px] font-bold text-cream-50 transition-all group-hover:bg-gold-400 group-hover:text-pine-950"
            role="presentation"
          >
            Pesan
            <IconArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}
