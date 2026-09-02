/* Utilitas pemesanan WhatsApp — satu sumber kebenaran untuk semua CTA. */

import { CONTACT } from "../data/business";

/** Apakah nomor masih berupa placeholder (belum diisi pemilik)? */
export function isPlaceholderNumber(raw: string): boolean {
  const digits = raw.replace(/\D/g, "");
  return digits.length < 8 || digits.length > 15;
}

/** Bangun URL wa.me — hanya dipakai bila nomor valid. */
export function buildWaLink(message: string, rawNumber: string = CONTACT.whatsappNumber): string {
  const digits = rawNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const NUMBER_IS_PLACEHOLDER = isPlaceholderNumber(CONTACT.whatsappNumber);

/** Format Rupiah yang konsisten di seluruh situs. */
export function formatRupiah(value: number): string {
  return "Rp " + new Intl.NumberFormat("id-ID").format(value);
}

/** Salin teks ke clipboard dengan fallback untuk konteks non-secure. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}
