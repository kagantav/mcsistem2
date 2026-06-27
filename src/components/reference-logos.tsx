"use client";

import { motion } from "motion/react";
import { references } from "@/lib/content";

/** Referans logoları — tümü beyaz çip; hover'da şirket adı görünür. */
export function ReferenceLogos({
  variant = "grid",
  chipClass = "",
}: {
  variant?: "grid" | "marquee";
  chipClass?: string;
}) {
  const Chip = ({ r }: { r: { file: string; name: string } }) => (
    <div
      className={
        "group relative overflow-hidden flex items-center justify-center rounded-2xl border bg-white transition-transform duration-300 hover:scale-[1.04] " +
        chipClass
      }
      style={{ borderColor: "rgba(0,0,0,0.06)" }}
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

  if (variant === "marquee") {
    const row = [...references, ...references];
    return (
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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
