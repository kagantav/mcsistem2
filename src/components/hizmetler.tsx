/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { services, type Service } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

const vidSrc = (key: string) => `/services/hover/${key}.${key === "yeralti" ? "mp4" : "webm"}`;

const Check = () => (
  <svg className="w-3 h-3 shrink-0 mt-1.5 text-white" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
  </svg>
);

export function Hizmetler() {
  return (
    <section className="py-20 lg:py-24 bg-[#f6f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ ...disp, color: NAVY }}>Hizmetler</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row w-full gap-3 lg:gap-4 md:h-[640px] xl:h-[700px] md:overflow-visible">
          {services.map((s, i) => (
            <Panel key={s.key} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Panel({ s, i }: { s: Service; i: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const num = String(i + 1).padStart(2, "0");

  return (
    <motion.a
      href={`/hizmet/${s.slug}`}
      onMouseEnter={() => { const v = ref.current; if (v) { v.currentTime = 0; v.play().catch(() => {}); } }}
      onMouseLeave={() => ref.current?.pause()}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full h-44 sm:h-52 md:w-auto md:h-auto md:flex-1 md:hover:flex-[4] transition-[flex-grow] duration-700 ease-in-out rounded-2xl overflow-hidden shadow-lg md:shadow-xl"
    >
      {/* arka plan görseli — masaüstünde hover'da videoya geçer */}
      <img
        src={s.image}
        alt={s.title}
        className="absolute inset-0 w-full h-full object-cover md:grayscale-[30%] md:group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-1000 md:group-hover:opacity-0"
      />
      <video ref={ref} src={vidSrc(s.key)} muted playsInline preload="none" loop className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* MOBİL: renkli görsel + alt gradient + başlık & ok */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/15 to-transparent" />
      <div className="md:hidden absolute inset-0 p-5 flex flex-col justify-end">
        <div className="flex items-end justify-between gap-3">
          <h3 className="text-xl font-extrabold text-white leading-tight" style={disp}>{s.title}</h3>
          <span className="shrink-0 w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white">→</span>
        </div>
      </div>

      {/* MASAÜSTÜ */}
      <div className="hidden md:block absolute inset-0 bg-slate-900/70 group-hover:bg-gradient-to-t group-hover:from-slate-900 group-hover:to-transparent transition-all duration-500" />
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        {/* KAPALI: numara + dikey başlık */}
        <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200">
          <div className="absolute top-8 left-8 w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: BLUE }}>
            <span className="font-bold text-sm">{num}</span>
          </div>
          <h3 className="absolute top-20 left-8 text-white font-extrabold text-xl whitespace-nowrap [writing-mode:vertical-rl]" style={disp}>{s.title}</h3>
        </div>
        {/* AÇIK: başlık + liste */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 group-hover:duration-500 group-hover:delay-100">
          <div className="absolute top-8 left-8 w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: BLUE }}>
            <span className="font-bold text-sm">{num}</span>
          </div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="w-12 h-1 mb-6" style={{ background: BLUE }} />
            <h3 className="text-white font-extrabold text-3xl lg:text-4xl mb-4" style={disp}>{s.title}</h3>
            <ul className="text-white/85 text-[15px] font-medium leading-relaxed tracking-wide space-y-3">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-3"><Check />{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
