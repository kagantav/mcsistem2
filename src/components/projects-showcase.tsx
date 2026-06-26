/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./reveal";
import { projects } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const tabs = ["Tümü", "Tamamlanan", "Devam Eden"] as const;

export function ProjectsShowcase() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Tümü");
  const ref = useRef<HTMLDivElement>(null);

  const list = useMemo(() => {
    if (tab === "Tamamlanan") return projects.filter((p) => p.status === "Tamamlandı");
    if (tab === "Devam Eden") return projects.filter((p) => p.status === "Devam Ediyor");
    return projects;
  }, [tab]);

  const scroll = (d: number) => ref.current?.scrollBy({ left: d * 400, behavior: "smooth" });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: NAVY }}>
      {/* dünya haritası benzeri nokta zemini */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1.4px, transparent 1.4px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full blur-[130px]" style={{ background: BLUE, opacity: 0.25 }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-8">
            <span className="text-[13px] uppercase tracking-[0.24em] font-bold" style={{ color: "#7fb0ff" }}>
              Projelerimiz
            </span>
            <h2 className="mt-3 text-4xl md:text-6xl font-extrabold text-white" style={{ fontFamily: "var(--f-poppins)" }}>
              Dünya Çapında Projeler
            </h2>
          </div>
        </Reveal>

        {/* tablar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-white/15" style={{ background: "rgba(255,255,255,0.05)" }}>
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                style={{ color: tab === t ? NAVY : "rgba(255,255,255,0.7)" }}
              >
                {tab === t && (
                  <motion.span layoutId="tabbg" className="absolute inset-0 rounded-full bg-white" transition={{ type: "spring", stiffness: 300, damping: 26 }} />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* slider */}
        <div ref={ref} className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.a
                key={p.title}
                href="#"
                data-cursor
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group shrink-0 w-[300px] md:w-[360px] snap-start rounded-2xl overflow-hidden bg-white"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-[1.1s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span
                    className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full text-white"
                    style={{ background: p.status === "Tamamlandı" ? "#1e9e6a" : BLUE }}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#7587a0] mb-1.5">
                    {p.location}, {p.country}
                  </div>
                  <h3 className="text-lg font-bold leading-tight mb-1" style={{ fontFamily: "var(--f-poppins)", color: NAVY }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#5a6b82] mb-4">{p.category}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: BLUE }}>
                    Proje Detayı →
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* oklar */}
        <div className="flex justify-center gap-3 mt-10">
          <button onClick={() => scroll(-1)} aria-label="Önceki" className="w-12 h-12 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-[#002b4c] transition-colors">
            ←
          </button>
          <button onClick={() => scroll(1)} aria-label="Sonraki" className="w-12 h-12 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-[#002b4c] transition-colors">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
