import { useState, type ImgHTMLAttributes } from "react";
import { IconCamera } from "./icons";

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  ratioClass?: string; // contoh: "aspect-[4/3]"
}

/** Gambar dengan fallback elegan bila URL gagal dimuat. */
export default function Img({ src, alt, ratioClass = "aspect-[4/3]", className = "", ...rest }: ImgProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`${ratioClass} ${className} flex flex-col items-center justify-center gap-2 bg-pine-100 text-pine-800`}>
        <IconCamera size={26} />
        <span className="font-display text-[11px] tracking-[0.18em]">FOTO SEGERA HADIR</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${ratioClass} ${className} w-full object-cover`}
      {...rest}
    />
  );
}
