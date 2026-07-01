/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/lib/content";
import { Tilt, CountUp } from "@/components/fx";

const NAVY = "#002b4c";
const disp = { fontFamily: "var(--f-display)" };

const FILTERS = ["Tümü", "Devam Ediyor", "Tamamlandı"] as const;

export function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tümü");
  const list = filter === "Tümü" ? projects : projects.filter((p) => p.status === filter);
  const count = (s: string) => projects.filter((p) => p.status === s).length;

  return (
    <div>
      {/* filtre pills */}
      <div className="flex justify-center gap-2 flex-wrap mb-10 lg:mb-14">
        {FILTERS.map((f) => {
          const on = filter === f;
          const n = f === "Tümü" ? projects.length : count(f);
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${on ? "text-white border-transparent" : "text-[#3a4d63] border-black/10 hover:border-[#2f6fe0]/40"}`}
              style={on ? { background: NAVY } : undefined}
            >
              {f === "Devam Ediyor" ? "Devam Eden" : f === "Tamamlandı" ? "Tamamlanan" : "Tümü"}
              <CountUp value={String(n)} className="opacity-60 tabular-nums" />
            </button>
          );
        })}
      </div>

      {/* grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, i) => {
          const ongoing = p.status === "Devam Ediyor";
          return (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 1000 }}
            >
              <Link href={`/proje/${p.slug}`} className="block h-full">
                <Tilt className="group block rounded-3xl overflow-hidden bg-white border border-black/[0.07] hover:shadow-2xl transition-shadow duration-300 h-full" max={6}>
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full text-white backdrop-blur-md" style={{ background: ongoing ? "rgba(34,197,94,0.85)" : "rgba(47,111,224,0.85)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white" /> {ongoing ? "Devam Eden" : "Tamamlandı"}
                  </span>
                  <span className="absolute bottom-3 right-4 text-white/80 text-xs font-mono">{p.year}</span>
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#2f6fe0] mb-2">{p.category}</div>
                  <h3 className="text-lg font-bold leading-snug mb-2 transition-colors group-hover:text-[#2f6fe0]" style={{ ...disp, color: NAVY }}>{p.title}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-[#7587a0]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
                    {p.location} · {p.country}
                  </div>
                </div>
                </Tilt>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
