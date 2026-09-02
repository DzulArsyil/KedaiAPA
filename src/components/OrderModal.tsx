import { useEffect, useMemo, useRef, useState } from "react";
import { CATERING, CONTACT, WA_TEMPLATES } from "../data/business";
import type { OrderIntent } from "./OrderContext";
import { buildWaLink, copyText, formatRupiah, NUMBER_IS_PLACEHOLDER } from "../lib/whatsapp";
import Img from "./Img";
import { IconCheck, IconCopy, IconMinus, IconPlus, IconWhatsApp, IconX } from "./icons";

interface OrderModalProps {
  intent: OrderIntent | null;
  onClose: () => void;
}

const TITLES: Record<string, string> = {
  order: "Pesan menu ini",
  catering: "Konsultasi Catering",
  general: "Pesan via WhatsApp",
  hours: "Tanya jam buka",
  directions: "Tanya rute lokasi",
};

export default function OrderModal({ intent, onClose }: OrderModalProps) {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);
  const [warn, setWarn] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = intent !== null;
  const product = intent?.product;

  useEffect(() => {
    setQty(1);
    setNote("");
    setCopied(false);
    setWarn(false);
    if (open) {
      const t = setTimeout(() => closeRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [intent, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const message = useMemo(() => {
    if (!intent) return "";
    switch (intent.kind) {
      case "order":
        return product ? WA_TEMPLATES.order(product.name, qty, note.trim() || undefined) : WA_TEMPLATES.general();
      case "catering":
        return WA_TEMPLATES.catering();
      case "hours":
        return WA_TEMPLATES.hours();
      case "directions":
        return WA_TEMPLATES.directions();
      default:
        return WA_TEMPLATES.general();
    }
  }, [intent, product, qty, note]);

  if (!intent) return null;

  const handleCopy = async () => {
    const ok = await copyText(message);
    setCopied(ok);
    if (ok) setTimeout(() => setCopied(false), 2200);
  };

  const handleOpenWa = () => {
    if (NUMBER_IS_PLACEHOLDER) {
      setWarn(true);
      return;
    }
    window.open(buildWaLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={TITLES[intent.kind]}>
      {/* backdrop */}
      <button
        type="button"
        aria-label="Tutup dialog"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-pine-950/75 backdrop-blur-[2px]"
      />

      <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-cream-200 bg-cream-50 shadow-lift sm:rounded-xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-pine-950/85 text-cream-50 transition-colors hover:bg-pine-800"
          aria-label="Tutup"
        >
          <IconX size={19} />
        </button>

        <div className="grid overflow-y-auto md:grid-cols-5">
          {/* visual */}
          {product && (
            <div className="relative md:col-span-2">
              <Img src={product.image} alt={product.imageAlt} ratioClass="aspect-[16/10] md:aspect-auto md:h-full" className="md:absolute md:inset-0" />
              {product.sample && (
                <span className="stamp absolute left-3 top-3 rounded bg-cream-50/90 px-2 py-0.5 text-[10px] font-bold text-gold-700">
                  CONTOH
                </span>
              )}
            </div>
          )}

          {/* konten */}
          <div className={`p-6 sm:p-8 ${product ? "md:col-span-3" : "md:col-span-5"}`}>
            <p className="font-display text-xs font-bold tracking-[0.24em] text-pine-600 uppercase">
              {TITLES[intent.kind]}
            </p>

            {product ? (
              <>
                <h3 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-ink-900">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{product.description}</p>
                <p className="font-display mt-4 text-2xl font-extrabold text-pine-900">{formatRupiah(product.price)}</p>

                {/* jumlah */}
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-sm font-bold text-ink-700">Jumlah</span>
                  <div className="flex items-center rounded-full border-2 border-pine-900/15">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-pine-900 transition-colors hover:bg-pine-100"
                      aria-label="Kurangi jumlah"
                    >
                      <IconMinus size={16} />
                    </button>
                    <span className="font-display w-8 text-center text-lg font-bold text-ink-900" aria-live="polite">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.min(50, q + 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-pine-900 transition-colors hover:bg-pine-100"
                      aria-label="Tambah jumlah"
                    >
                      <IconPlus size={16} />
                    </button>
                  </div>
                  <span className="font-display text-sm font-bold text-ink-500">
                    Total ≈ {formatRupiah(product.price * qty)}
                  </span>
                </div>

                {/* catatan */}
                <label className="mt-5 block">
                  <span className="text-sm font-bold text-ink-700">Catatan (opsional)</span>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={2}
                    maxLength={140}
                    placeholder="cth: level pedas sedang, tanpa bawang goreng…"
                    className="mt-1.5 w-full resize-none rounded-lg border-2 border-pine-900/12 bg-cream-50 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-pine-700 focus:outline-none"
                  />
                </label>
              </>
            ) : (
              <>
                <h3 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-ink-900">
                  {intent.kind === "catering" ? CATERING.headline : "Ngobrol dulu, pesan kemudian."}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {intent.kind === "catering"
                    ? "Ceritakan jenis acara, tanggal, dan perkiraan jumlah porsi. Tim Kedai APA akan membantu menyusun menu & hitungannya."
                    : intent.kind === "hours"
                    ? "Jam buka belum dipublikasikan di situs — paling cepat memang tanya langsung. Pesan di bawah sudah kami siapkan."
                    : intent.kind === "directions"
                    ? "Kedai ada di Jl. Kertabumi, seberang Richeese Kertabumi. Kalau butuh patokan yang lebih pas, tinggal chat."
                    : "Pesan di bawah sudah terisi otomatis — kamu tinggal tekan kirim setelah WhatsApp terbuka."}
                </p>
              </>
            )}

            {/* pratinjau pesan */}
            <div className="mt-6">
              <p className="mb-2 flex items-center justify-between text-xs font-bold tracking-wide text-ink-500">
                <span>PESAN YANG AKAN TERKIRIM</span>
                <span className="text-ink-400">otomatis terisi</span>
              </p>
              <div className="rounded-lg border-2 border-dashed border-pine-700/30 bg-pine-100/50 px-4 py-3.5">
                <p className="text-sm leading-relaxed text-pine-900">{message}</p>
              </div>
            </div>

            {/* aksi */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleOpenWa}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 font-display text-base font-bold text-pine-950 shadow-lg shadow-gold-400/25 transition-all hover:-translate-y-0.5 hover:bg-gold-300"
              >
                <IconWhatsApp size={19} />
                Buka WhatsApp
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 px-6 py-3.5 font-display text-base font-bold transition-all sm:flex-none sm:px-7 ${
                  copied
                    ? "border-pine-700 bg-pine-700 text-cream-50"
                    : "border-pine-900/20 text-pine-900 hover:border-pine-900 hover:bg-pine-900 hover:text-cream-50"
                }`}
              >
                {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
                {copied ? "Tersalin!" : "Salin Pesan"}
              </button>
            </div>

            {warn && (
              <div className="mt-4 rounded-lg border border-gold-500/50 bg-gold-200/40 px-4 py-3 text-[13px] leading-relaxed text-ink-700" role="status">
                <strong className="font-bold">Nomor WhatsApp belum diisi.</strong> Situs ini memakai placeholder{" "}
                <code className="rounded bg-cream-200 px-1.5 py-0.5 font-bold">{CONTACT.whatsappNumber}</code> agar tidak menampilkan
                nomor palsu. Salin pesan di atas dan kirim manual, atau (untuk pemilik situs) isi nomor asli di{" "}
                <code className="rounded bg-cream-200 px-1.5 py-0.5 font-bold">src/data/business.ts</code> — semua tombol WhatsApp
                akan langsung aktif.
              </div>
            )}

            <p className="mt-4 text-center text-[11px] text-ink-400 sm:text-left">
              Alurnya singkat: buka chat → pesan terisi otomatis → konfirmasi dengan tim kedai → selesai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
