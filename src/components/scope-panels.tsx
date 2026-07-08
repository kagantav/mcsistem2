"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Capability } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

/**
 * "Hizmet Kapsamımız" — ana sayfadaki Sektörler tasarımı:
 * solda kayan-bar liste, sağda (foto/video yerine) seçili başlığın açıklaması.
 */
export function ScopePanels({ items }: { items: Capability[] }) {
  const [active, setActive] = useState(0);
  if (!items?.length) return null;
  const c = items[active];

  return (
    <div className="grid lg:grid-cols-[1fr_minmax(0,560px)] gap-8 lg:gap-14 items-stretch">
      {/* sol: liste (kayan koyu bar) */}
      <div className="flex flex-col justify-center">
        {items.map((it, i) => {
          const on = active === i;
          return (
            <button
              key={it.title}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="group relative flex items-center gap-5 px-4 lg:px-7 py-5 lg:py-7 text-left"
            >
              {on && (
                <motion.span
                  layoutId="scopebar"
                  className="absolute inset-x-0 inset-y-1.5 rounded-2xl"
                  style={{ background: NAVY }}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative text-xs font-mono w-7 shrink-0 transition-colors duration-300" style={{ color: on ? "rgba(255,255,255,0.6)" : "#9aabbd" }}>
                0{i + 1}
              </span>
              <span className="relative flex-1 text-xl md:text-3xl font-bold tracking-tight transition-colors duration-300" style={{ ...disp, color: on ? "#fff" : NAVY }}>
                {it.title}
              </span>
              <span className="relative text-xl transition-all duration-300" style={{ color: on ? "#fff" : NAVY, transform: on ? "translate(2px,2px)" : "none" }}>
                ↘
              </span>
            </button>
          );
        })}
      </div>

      {/* sağ: seçili başlığın açıklaması (foto/video yerine metin) */}
      <div className="relative overflow-hidden rounded-3xl min-h-[320px] lg:min-h-[520px] shadow-xl" style={{ background: `linear-gradient(155deg, ${NAVY} 0%, #013a63 100%)` }}>
        <div className="absolute inset-0 mc-grid opacity-[0.12]" />
        <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full blur-3xl opacity-25" style={{ background: BLUE }} />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="relative h-full flex flex-col justify-end p-8 lg:p-12 min-h-[320px] lg:min-h-[520px]"
          >
            <span className="absolute top-4 right-8 text-[110px] lg:text-[190px] font-extrabold leading-none text-white/[0.06] select-none pointer-events-none" style={disp}>
              0{active + 1}
            </span>
            <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-lg">{c.desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
