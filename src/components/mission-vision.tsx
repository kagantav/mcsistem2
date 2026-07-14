"use client";

import { motion } from "motion/react";
import { missionVision } from "@/lib/content";

const disp = { fontFamily: "var(--f-display)" };
const BLUE = "#2f6fe0";

const ITEMS = [
  {
    t: "Misyon",
    d: missionVision.mission,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.7" fill="#7fb0ff" stroke="none" />
      </>
    ),
  },
  {
    t: "Vizyon",
    d: missionVision.vision,
    icon: (
      <>
        <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
];

/** Vizyon & Misyon — mavi (lacivert) zeminde kartlı yapı. */
export function MissionVision() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#001426] text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full blur-[150px] opacity-[0.16] pointer-events-none" style={{ background: BLUE }} />
      <div className="absolute inset-0 mc-grid opacity-[0.10]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 lg:gap-8">
        {ITEMS.map((x, i) => (
          <motion.div
            key={x.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[28px] border border-white/10 bg-white/[0.04] p-9 lg:p-12 hover:bg-white/[0.06] hover:border-[#2f6fe0]/40 hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/15" style={{ background: "rgba(47,111,224,0.12)" }}>
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#7fb0ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {x.icon}
              </svg>
            </div>
            <h3 className="text-2xl lg:text-4xl font-extrabold tracking-tight" style={disp}>{x.t}</h3>
            <span className="block h-1 w-12 rounded-full my-6" style={{ background: BLUE }} />
            <p className="text-white/70 text-base lg:text-lg leading-relaxed">{x.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
