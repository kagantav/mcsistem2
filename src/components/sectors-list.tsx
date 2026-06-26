/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./reveal";
import { services } from "@/lib/content";

const NAVY = "#002b4c";

export function SectorsList() {
  // [cur, prev] — prev arka planda kalır, cur üstüne silinerek gelir
  const [pair, setPair] = useState<[number, number]>([0, 0]);
  const cur = pair[0];
  const prev = pair[1];
  const active = cur;
  const change = (i: number) => setPair((p) => (p[0] === i ? p : [i, p[0]]));
  const s = services[cur];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-10 lg:mb-14" style={{ fontFamily: "var(--f-display)", color: NAVY }}>
            Sektörlerimiz
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_minmax(0,580px)] gap-8 lg:gap-14 items-stretch">
          {/* sol: liste (kayan koyu bar) */}
          <div className="flex flex-col">
            {services.map((sv, i) => {
              const on = active === i;
              return (
                <button
                  key={sv.key}
                  data-cursor
                  onMouseEnter={() => change(i)}
                  onClick={() => change(i)}
                  className="group relative flex items-center gap-5 px-4 lg:px-7 py-6 lg:py-8 text-left"
                >
                  {on && (
                    <motion.span
                      layoutId="secbar"
                      className="absolute inset-x-0 inset-y-1.5 rounded-2xl"
                      style={{ background: NAVY }}
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative text-xs font-mono w-7 shrink-0 transition-colors duration-300" style={{ color: on ? "rgba(255,255,255,0.6)" : "#9aabbd" }}>
                    0{i + 1}
                  </span>
                  <span
                    className="relative flex-1 text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300"
                    style={{ fontFamily: "var(--f-display)", color: on ? "#fff" : NAVY }}
                  >
                    {sv.title}
                  </span>
                  <span className="relative text-xl transition-all duration-300" style={{ color: on ? "#fff" : NAVY, transform: on ? "translate(2px,2px)" : "none" }}>
                    ↘
                  </span>
                </button>
              );
            })}
          </div>

          {/* sağ: video (hover edilen hizmetin videosu, yandan silinerek değişir) */}
          <div className="relative overflow-hidden rounded-3xl min-h-[380px] lg:min-h-[600px] shadow-xl bg-[#001426]">
            {/* arka plan: önceki görsel — geçişte boşluk görünmesin */}
            <img src={services[prev].image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            {/* ön plan: yeni videonun eskinin üstüne silinerek gelmesi */}
            <motion.video
              key={cur}
              src={`/services/hover/${s.key}.${s.key === "yeralti" ? "mp4" : "webm"}`}
              poster={s.image}
              autoPlay
              loop
              muted
              playsInline
              initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  <h3 className="text-white text-2xl lg:text-3xl font-extrabold leading-tight" style={{ fontFamily: "var(--f-display)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-white/75 text-sm leading-relaxed max-w-md">{s.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
