/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };
const vidSrc = (key: string) => `/services/hover/${key}.${key === "yeralti" ? "mp4" : "webm"}`;

export function ServicesList() {
  return (
    <div className="space-y-20 lg:space-y-32">
      {services.map((s, i) => {
        const reverse = i % 2 === 1;
        return <Row key={s.key} s={s} i={i} reverse={reverse} />;
      })}
    </div>
  );
}

function Row({ s, i, reverse }: { s: (typeof services)[number]; i: number; reverse: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      {/* medya */}
      <Link
        href={`/hizmet/${s.slug}`}
        onMouseEnter={() => { const v = ref.current; if (v) { v.currentTime = 0; v.play().catch(() => {}); } }}
        onMouseLeave={() => ref.current?.pause()}
        className={`group relative block rounded-[28px] overflow-hidden aspect-[4/3] shadow-2xl ${reverse ? "lg:order-2" : ""}`}
      >
        <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:opacity-0 group-hover:scale-105" />
        <video ref={ref} src={vidSrc(s.key)} muted playsInline loop preload="none" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        <span className="absolute top-5 left-6 text-[64px] font-extrabold leading-none text-white/85 drop-shadow-lg select-none" style={disp}>0{i + 1}</span>
        <span className="absolute bottom-5 right-6 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">→</span>
      </Link>

      {/* içerik */}
      <div className={reverse ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[2px] w-8" style={{ background: BLUE }} />
          <span className="text-xs font-mono tracking-widest" style={{ color: BLUE }}>0{i + 1} / 0{services.length}</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4" style={{ ...disp, color: NAVY }}>{s.title}</h2>
        <p className="text-[#5a6b82] text-base lg:text-lg leading-relaxed mb-6 max-w-xl">{s.desc}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {s.capabilities.slice(0, 4).map((c) => (
            <span key={c.title} className="text-[13px] font-medium px-3.5 py-1.5 rounded-full border border-black/[0.08] text-[#3a4d63] bg-[#f6f9fb]">{c.title}</span>
          ))}
        </div>

        <Link href={`/hizmet/${s.slug}`} className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full text-white text-sm transition-transform hover:gap-3" style={{ background: NAVY }}>
          Detayı İncele <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.div>
  );
}
