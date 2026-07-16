"use client";

import { motion } from "motion/react";
import { certificates } from "@/lib/content";

const disp = { fontFamily: "var(--f-display)" };
const BLUE = "#7fb0ff";

/* İçerikle uyumlu simgeler: kalite / çevre / İSG / bilgi güvenliği */
const ICONS: Record<string, React.ReactNode> = {
  "ISO 9001": (
    <svg viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  "ISO 14001": (
    <svg viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4c0 9-6 14-8 16-2-2-8-7-8-16 8-2 12 0 16 0Z" />
      <path d="M12 20V10" />
    </svg>
  ),
  "ISO 45001": (
    <svg viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3.2v5.3c0 4.7-3 8.6-7 9.5-4-.9-7-4.8-7-9.5V6.2L12 3Z" />
    </svg>
  ),
  "ISO 27001": (
    <svg viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
};

export function CertCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {certificates.map((c, i) => (
        <motion.a
          key={c.code}
          href={`/certificates/${c.file}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex flex-col items-center rounded-[22px] border border-white/10 bg-white/[0.03] px-5 pt-9 pb-7 text-center hover:bg-white/[0.06] hover:border-[#2f6fe0]/50 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(47,111,224,0.45)] transition-all duration-300"
        >
          {/* sağ üst: PDF rozeti — tıklanınca belge açılacağını baştan belli eder */}
          <span className="absolute top-3.5 right-3.5 inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.05] px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-white/55 group-hover:border-[#2f6fe0]/60 group-hover:text-white transition-colors duration-300">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            PDF
          </span>

          <div className="mb-4 w-11 h-11 transition-transform duration-300 group-hover:scale-110">{ICONS[c.code]}</div>
          <div className="text-xl font-extrabold tracking-tight text-white" style={disp}>{c.code}</div>
          <div className="mt-1.5 text-[13px] text-white/50 leading-snug min-h-[2.5rem] flex items-center">{c.label}</div>

          {/* alt: kalıcı eylem satırı — mobilde de görünür */}
          <div className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#7fb0ff]/85 group-hover:text-[#7fb0ff] transition-colors duration-300">
            Belgeyi Görüntüle
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
