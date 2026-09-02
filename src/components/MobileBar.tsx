import { useOrder } from "./OrderContext";
import { IconBox, IconGrid, IconHome, IconPin, IconWhatsApp } from "./icons";

const ITEMS = [
  { id: "beranda", label: "Beranda", Icon: IconHome },
  { id: "menu", label: "Menu", Icon: IconGrid },
  { id: "catering", label: "Catering", Icon: IconBox },
  { id: "lokasi", label: "Lokasi", Icon: IconPin },
];

/** Bar navigasi + CTA persisten untuk layar mobile. */
export default function MobileBar() {
  const openOrder = useOrder();
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-400/25 bg-pine-950/95 backdrop-blur-sm lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="navigation"
      aria-label="Navigasi cepat mobile"
    >
      <div className="flex items-center gap-1 px-3 py-2">
        {ITEMS.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-lg py-1.5 text-cream-50/70 transition-colors hover:text-gold-300"
          >
            <Icon size={20} />
            <span className="text-[10px] font-semibold tracking-wide">{label}</span>
          </a>
        ))}
        <button
          type="button"
          onClick={() => openOrder({ kind: "general" })}
          className="ml-1 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gold-400 px-4 py-2.5 font-display text-sm font-bold text-pine-950 shadow-lg shadow-gold-400/20 transition-transform active:scale-95"
        >
          <IconWhatsApp size={16} />
          Pesan
        </button>
      </div>
    </div>
  );
}
