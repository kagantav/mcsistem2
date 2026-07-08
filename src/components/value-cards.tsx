"use client";

import { motion } from "motion/react";
import { coreValues } from "@/lib/content";

const disp = { fontFamily: "var(--f-display)" };

function Card({ v, i, wide }: { v: (typeof coreValues)[number]; i: number; wide?: boolean }) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] w-full h-full">
      <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(120deg, ${v.tint[0]}, ${v.tint[1]})` }} />
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
        style={{ backgroundImage: `url(${v.image})` }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,10,20,0.93) 0%, rgba(0,10,20,0.66) 40%, rgba(0,10,20,0.15) 68%, transparent 84%)" }} />
      <div className={`absolute inset-0 flex flex-col justify-start pt-7 xl:pt-8 px-6 xl:px-7 pb-6 ${wide ? "max-w-[54%]" : "max-w-[72%]"}`}>
        <span className="text-[11px] font-mono tracking-[0.32em] text-[#7fb0ff] mb-2.5">0{i + 1}</span>
        <h3 className="text-xl xl:text-2xl font-extrabold tracking-tight leading-tight text-white mb-2.5" style={disp}>
          {v.title}
        </h3>
        <p className="text-white/74 text-[12.5px] xl:text-[13px] leading-relaxed">{v.desc}</p>
        <span className="mt-4 h-px w-10 bg-white/35 transition-all duration-500 group-hover:w-16 group-hover:bg-[#7fb0ff]" />
      </div>
      <div className="absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/0 group-hover:ring-[#2f6fe0]/40 transition duration-300" />
    </div>
  );
}

export function ValueCards() {
  return (
    <>
      {/* ── MASAÜSTÜ: 3 üstte + 2 altta (tam genişlik) ── */}
      <div className="hidden lg:flex flex-wrap gap-5">
        {coreValues.map((v, i) => {
          const wide = i >= 3;
          return (
            <motion.div
              key={v.slug}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`${wide ? "w-[calc(50%-0.625rem)]" : "w-[calc(33.333%-0.834rem)]"} h-[16.5rem] xl:h-[17.5rem]`}
            >
              <Card v={v} i={i} wide={wide} />
            </motion.div>
          );
        })}
      </div>

      {/* ── MOBİL: dikey kartlar ── */}
      <div className="lg:hidden grid grid-cols-1 gap-4">
        {coreValues.map((v, i) => (
          <motion.div
            key={v.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[22px] aspect-[16/10]"
          >
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(120deg, ${v.tint[0]}, ${v.tint[1]})` }} />
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${v.image})` }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,10,20,0.94) 0%, rgba(0,10,20,0.82) 52%, rgba(0,10,20,0.42) 100%)" }} />
            <div className="absolute inset-0 flex flex-col justify-center p-7 max-w-[86%]">
              <span className="text-[12px] font-mono tracking-[0.35em] text-[#7fb0ff] mb-2.5">0{i + 1}</span>
              <h3 className="text-2xl font-extrabold tracking-tight leading-tight text-white mb-2.5" style={disp}>{v.title}</h3>
              <p className="text-white/72 text-[13px] leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
