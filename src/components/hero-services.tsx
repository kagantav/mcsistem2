"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const disp = { fontFamily: "var(--f-display)" };

/** Videodaki segment sınırları (saniye) — kare analizine göre */
const BOUNDS = [13.75, 23.75, 29];
const SEGMENTS = [
  { title: "Akıllı Ulaşım", items: ["Trafik İzleme ve Yönetim Sistemleri", "Tünel Elektromekanik Sistemleri", "Sinyalizasyon Sistemleri"] },
  { title: "Raylı Ulaşım", items: ["Sinyalizasyon Sistemleri", "Telekomünikasyon Sistemleri", "Elektrifikasyon Sistemleri"] },
  { title: "Metro", items: ["Elektromekanik Sistemler", "Kontrol ve Haberleşme Sistemleri", "Sinyalizasyon Sistemleri"] },
  { title: "Havaalanı", items: ["Radar ve Seyrüsefer Sistemleri", "Pist Aydınlatma", "Havaalanı Bilgi Sistemi"] },
];

const segFor = (ct: number) => {
  for (let i = 0; i < BOUNDS.length; i++) if (ct < BOUNDS[i]) return i;
  return BOUNDS.length;
};

/**
 * Hero'da videoyla senkron: her segmentte hizmet adını daktilo ile yazar,
 * altına 3 alt hizmeti sırayla belirtir. Sade + kreatif.
 */
export function HeroServices({ videoId, fallbackDur = 36.75 }: { videoId: string; fallbackDur?: number }) {
  const [seg, setSeg] = useState(0);
  const [typed, setTyped] = useState("");
  const segRef = useRef(-1);
  const runRef = useRef(0);
  const typedRef = useRef("");

  const set = (s: string) => { typedRef.current = s; setTyped(s); };

  const retype = async (word: string) => {
    const my = ++runRef.current;
    while (typedRef.current.length > 0) { if (runRef.current !== my) return; set(typedRef.current.slice(0, -1)); await sleep(22); }
    for (let i = 1; i <= word.length; i++) { if (runRef.current !== my) return; set(word.slice(0, i)); await sleep(52); }
  };

  useEffect(() => {
    const vid = document.getElementById(videoId) as HTMLVideoElement | null;
    let raf = 0;
    const tick = () => {
      const dur = vid && isFinite(vid.duration) && vid.duration > 0 ? vid.duration : fallbackDur;
      const ct = vid && isFinite(vid.currentTime) ? vid.currentTime % dur : (performance.now() / 1000) % dur;
      const i = segFor(ct);
      if (i !== segRef.current) { segRef.current = i; setSeg(i); retype(SEGMENTS[i].title); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const cur = SEGMENTS[seg];

  return (
    <motion.div
      className="relative flex items-start gap-4 sm:gap-8"
      initial={{ opacity: 0, y: 36, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.95, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* dev segment numarası */}
      <div className="shrink-0 flex flex-col items-start">
        <AnimatePresence mode="wait">
          <motion.span
            key={"num" + seg}
            className="block font-extrabold leading-[0.82] tracking-tight text-white text-5xl sm:text-7xl lg:text-[7.5rem]"
            style={disp}
            initial={{ opacity: 0, y: 26, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -22, filter: "blur(7px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            0{seg + 1}
          </motion.span>
        </AnimatePresence>
        <span className="mt-2 sm:mt-3 text-[11px] sm:text-xs font-mono tracking-[0.3em] text-white/40">/ 0{SEGMENTS.length}</span>
      </div>

      {/* dikey ayıraç */}
      <div className="shrink-0 self-stretch w-px bg-gradient-to-b from-white/35 via-white/15 to-transparent" />

      {/* içerik */}
      <div className="min-w-0 max-w-xl pt-0.5 sm:pt-1">
        <h1 className="text-white font-extrabold tracking-tight leading-[1.05] whitespace-nowrap text-3xl sm:text-5xl lg:text-7xl min-h-[1.1em]" style={disp}>
          {typed}
          <span className="mc-cursor font-light">|</span>
        </h1>
        {/* alt vurgu: Sistemleri */}
        <div className="text-white/45 font-semibold text-base sm:text-xl lg:text-2xl -mt-0.5" style={disp}>Sistemleri</div>

        <AnimatePresence mode="wait">
          <motion.ul key={seg} className="mt-5 sm:mt-7 space-y-2.5 sm:space-y-3">
            {cur.items.map((it, i) => (
              <motion.li
                key={it}
                className="flex items-center gap-3 sm:gap-4 text-white/85 text-sm sm:text-base lg:text-lg"
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="h-px shrink-0"
                  style={{ background: "#7fb0ff" }}
                  initial={{ width: 0 }}
                  animate={{ width: 22 }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                />
                {it}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
