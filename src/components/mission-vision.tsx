"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { missionVision } from "@/lib/content";

const disp = { fontFamily: "var(--f-display)" };
const NAVY = "#002b4c";
const BLUE = "#2f6fe0";

/* Scroll ilerledikçe her kelime soluktan koyuya döner — modern editoryal "text reveal". */
function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

function Statement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.45"] });
  const words = text.split(" ");
  return (
    <p
      ref={ref}
      className="text-xl sm:text-2xl lg:text-[1.75rem] lg:leading-[1.42] leading-[1.45] font-semibold tracking-tight"
      style={{ ...disp, color: NAVY }}
    >
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

const ITEMS = [
  { n: "01", t: "Misyon", d: missionVision.mission },
  { n: "02", t: "Vizyon", d: missionVision.vision },
];

export function MissionVision() {
  return (
    <section className="relative py-24 lg:py-36 bg-white overflow-hidden">
      <div className="absolute -top-40 -right-20 w-[44rem] h-[44rem] rounded-full blur-[190px] opacity-[0.06] pointer-events-none" style={{ background: BLUE }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="relative grid md:grid-cols-2 gap-14 md:gap-0">
          {/* dikey ayıraç */}
          <div className="hidden md:block absolute left-1/2 top-1 bottom-1 w-px bg-black/[0.08]" />

          {ITEMS.map((x, i) => (
            <div key={x.t} className={i === 0 ? "md:pr-14 lg:pr-20" : "md:pl-14 lg:pl-20"}>
              <div className="flex items-center gap-4 mb-7 lg:mb-9">
                <span
                  className="text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"
                  style={{ ...disp, color: "transparent", WebkitTextStroke: "1.5px rgba(47,111,224,0.4)" }}
                >
                  {x.n}
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight" style={{ ...disp, color: NAVY }}>
                  {x.t}
                </h2>
              </div>
              <Statement text={x.d} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
