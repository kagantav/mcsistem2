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
          className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] px-6 py-9 text-center hover:bg-white/[0.06] hover:border-[#2f6fe0]/45 hover:-translate-y-1.5 transition-all duration-300"
        >
          <div className="mx-auto mb-5 w-12 h-12">{ICONS[c.code]}</div>
          <div className="text-xl font-extrabold tracking-tight text-white" style={disp}>{c.code}</div>
          <div className="mt-1.5 text-[13px] text-white/50 leading-snug">{c.label}</div>

          {/* hover: PDF görüntüle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(0,20,38,0.94)" }}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v11m0 0-4-4m4 4 4-4" />
              <path d="M5 19h14" />
            </svg>
            <span className="text-white text-[12px] font-semibold tracking-wide">PDF Görüntüle</span>
            <span className="text-white/45 text-[11px]">İndirmek için tıklayın</span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
