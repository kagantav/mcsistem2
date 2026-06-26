/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "@/lib/content";

const NAVY = "#173a6b";
const BLUE = "#2f6fe0";

export function HorizontalProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const calc = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 48));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section ref={sectionRef} style={{ height: `${Math.max(120, distance / 6 + 100)}vh` }} className="relative bg-[#0f2547]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-10">
          <span className="text-[13px] uppercase tracking-[0.22em] font-bold" style={{ color: "#79a6ff" }}>
            Referans Projeler
          </span>
          <div className="flex items-end justify-between gap-4 flex-wrap mt-3">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white" style={{ fontFamily: "var(--f-manrope)" }}>
              Dünya Çapında Projeler
            </h2>
            <p className="text-white/50 text-sm hidden md:block">Kaydırın — projeler yatay ilerler ↓</p>
          </div>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-6 will-change-transform">
          {projects.map((p, i) => (
            <article
              key={p.title}
              data-cursor
              className="group relative shrink-0 w-[78vw] sm:w-[420px] rounded-3xl overflow-hidden bg-white"
            >
              <div className="h-[300px] md:h-[340px] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span
                  className="absolute top-5 left-5 text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full text-white"
                  style={{ background: p.status === "Tamamlandı" ? "#1e9e6a" : BLUE }}
                >
                  {p.status}
                </span>
                <span className="absolute top-5 right-5 text-white/70 text-sm font-mono">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs text-[#7587a0] mb-1.5">
                  {p.location}, {p.country}
                </div>
                <h3 className="text-xl font-bold leading-tight mb-1" style={{ fontFamily: "var(--f-manrope)", color: NAVY }}>
                  {p.title}
                </h3>
                <p className="text-sm text-[#5a6b82]">{p.category}</p>
              </div>
            </article>
          ))}
          <div className="shrink-0 w-[1px]" />
        </motion.div>
      </div>
    </section>
  );
}
