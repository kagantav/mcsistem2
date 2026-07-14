"use client";

import { useRef, useState } from "react";
import { coreValues } from "@/lib/content";

const disp = { fontFamily: "var(--f-display)" };
const NAVY = "#002b4c";
const BLUE = "#2f6fe0";

/**
 * Kurumsal Değerler — deploy'daki Misyon/Vizyon yapısı: kutusuz, outline numara +
 * lacivert başlık + metin, ortada dikey ayraç. Masaüstünde 2 kart görünür,
 * kaydırınca 1 kart kayar.
 */
export function ValueCards() {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const n = coreValues.length;
  const maxIdx = Math.max(0, n - 2); // 2 kart görünür → son başlangıç konumu

  const scrollToIdx = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const t = Math.max(0, Math.min(maxIdx, i));
    const card = el.children[t] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    let best = 0;
    let bestD = Infinity;
    Array.from(el.children).forEach((c, i) => {
      const d = Math.abs((c as HTMLElement).offsetLeft - el.scrollLeft);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    setIdx(Math.min(maxIdx, best));
  };

  return (
    <div>
      {/* slider görüş alanı — ortada sabit dikey ayraç (2'li görünümde tam merkez) */}
      <div className="relative">
        <span className="hidden sm:block absolute left-1/2 top-3 bottom-3 w-px bg-[#dbe3ef] pointer-events-none z-10" />

        <div
          ref={ref}
          onScroll={onScroll}
          className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {coreValues.map((v) => (
            <div
              key={v.slug}
              className="snap-start shrink-0 w-full sm:w-1/2 px-1 sm:px-8 lg:px-12 py-4"
            >
              <div className="flex items-center gap-4 mb-6 lg:mb-8">
                <span className="block h-8 w-1 rounded-full" style={{ background: BLUE }} />
                <h3
                  className="text-2xl lg:text-3xl font-bold tracking-tight"
                  style={{ ...disp, color: NAVY }}
                >
                  {v.title}
                </h3>
              </div>
              <p className="text-[#1f4370] text-lg lg:text-xl font-semibold leading-relaxed max-w-md">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* kontroller */}
      <div className="flex items-center justify-between mt-10 lg:mt-12">
        <div className="flex items-center gap-2.5">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIdx(i)}
              aria-label={`${i + 1}. konum`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: i === idx ? 30 : 9, background: i === idx ? BLUE : "rgba(0,43,76,0.18)" }}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToIdx(idx - 1)}
            disabled={idx === 0}
            aria-label="Önceki"
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#002b4c] transition-all hover:border-[#2f6fe0] hover:text-[#2f6fe0] disabled:opacity-30 disabled:hover:border-black/10 disabled:hover:text-[#002b4c]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            onClick={() => scrollToIdx(idx + 1)}
            disabled={idx === maxIdx}
            aria-label="Sonraki"
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#002b4c] transition-all hover:border-[#2f6fe0] hover:text-[#2f6fe0] disabled:opacity-30 disabled:hover:border-black/10 disabled:hover:text-[#002b4c]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
