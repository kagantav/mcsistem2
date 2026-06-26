"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { references } from "@/lib/content";

/**
 * Logoların parlaklığını ölçüp açık logoları koyu çipe, koyu logoları beyaz çipe
 * otomatik yerleştirir — her temada hepsi görünür.
 */
// Beyaz/açık logolar (beyaz zeminde kaybolur) — ilk render'dan itibaren lacivert çip (flash yok)
const LIGHT_LOGOS = new Set([
  "referans-1.png",
  "referans-8.png",
  "referans-9.png",
  "referans-16.png",
  "referans-20.png",
]);

export function ReferenceLogos({
  variant = "grid",
  chipClass = "",
}: {
  variant?: "grid" | "marquee";
  chipClass?: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const cv = document.createElement("canvas");
    const ctx = cv.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    el.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
      const check = () => {
        try {
          const w = img.naturalWidth,
            h = img.naturalHeight;
          if (!w || !h) return;
          const sw = 48,
            sh = Math.max(1, Math.round((48 * h) / w));
          cv.width = sw;
          cv.height = sh;
          ctx.clearRect(0, 0, sw, sh);
          ctx.drawImage(img, 0, 0, sw, sh);
          const d = ctx.getImageData(0, 0, sw, sh).data;
          let lum = 0,
            op = 0,
            nearWhite = 0, // beyaz zeminde kaybolacak açık pikseller
            ink = 0; // beyaz zeminde görünür (koyu) pikseller
          for (let i = 0; i < d.length; i += 4) {
            if (d[i + 3] < 24) continue;
            op++;
            const l = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
            lum += l;
            if (l > 210) nearWhite++;
            if (l < 150) ink++;
          }
          const chip = img.parentElement as HTMLElement | null;
          if (op && chip) {
            // Açık say: ortalama parlak VEYA çoğunluk beyaza yakın & beyazda görünür koyu mürekkep az
            const light = lum / op > 150 || (nearWhite / op > 0.4 && ink / op < 0.18);
            chip.style.background = light ? "#0f172a" : "#ffffff";
            chip.style.borderColor = light ? "#1e293b" : "rgba(0,0,0,0.06)";
          }
        } catch {
          /* ignore */
        }
      };
      if (img.complete && img.naturalWidth) check();
      else img.addEventListener("load", check, { once: true });
    });
  }, []);

  const Chip = ({ r }: { r: { file: string; name: string } }) => {
    const dark = LIGHT_LOGOS.has(r.file);
    return (
    <div
      className={
        "group relative overflow-hidden flex items-center justify-center rounded-2xl border transition-transform duration-300 hover:scale-[1.04] " +
        chipClass
      }
      style={{ background: dark ? "#0f172a" : "#ffffff", borderColor: dark ? "#1e293b" : "rgba(0,0,0,0.06)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/referanslar/${r.file}`}
        alt={r.name}
        className="max-h-full max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
      {/* hover: şirket adı */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "#002b4c" }}>
        <span className="text-white text-[13px] font-semibold leading-snug" style={{ fontFamily: "var(--f-display)" }}>{r.name}</span>
      </div>
    </div>
    );
  };

  if (variant === "marquee") {
    const row = [...references, ...references];
    return (
      <div ref={root} className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex gap-4 lg:gap-6 w-max mc-marquee">
          {row.map((r, i) => (
            <div key={i} className="shrink-0">
              <Chip r={r} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={root} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {references.map((r, i) => (
        <motion.div
          key={r.file}
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: (i % 5) * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          <Chip r={r} />
        </motion.div>
      ))}
    </div>
  );
}
