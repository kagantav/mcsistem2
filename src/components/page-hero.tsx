/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";

const disp = { fontFamily: "var(--f-display)" };

/**
 * Alt sayfa başlık alanı: ortalı tek başlık + animasyonlu arka plan.
 * Açılışta panel header'ın altından aşağı doğru açılarak gelir (clip reveal),
 * altında yumuşak kavis geçişi ve scroll ipucu.
 */
export function PageHero({ title, image, curveColor = "#ffffff" }: { title: string; image?: string; curveColor?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-[#001426] text-white -mb-px"
    >
      {image && <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.18]" />}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,16,32,0.85) 0%, rgba(0,16,32,0.96) 100%)" }} />

      {/* hareketli aurora lekeleri */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-16 w-[28rem] h-[28rem] rounded-full blur-[110px]"
        style={{ background: "#2f6fe0", opacity: 0.22 }}
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 right-0 w-[32rem] h-[32rem] rounded-full blur-[120px]"
        style={{ background: "#013a63", opacity: 0.5 }}
        animate={{ x: [0, -50, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 mc-grid opacity-[0.18]" />

      {/* başlık — panel açılırken yerine süzülür */}
      <div className="relative max-w-5xl mx-auto px-6 text-center pt-24 pb-32 lg:pt-32 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-7 h-1 w-16 rounded-full"
          style={{ background: "#2f6fe0", transformOrigin: "center" }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.04]"
          style={disp}
        >
          {title}
        </motion.h1>
      </div>

      {/* scroll ipucu */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 bottom-[68px] text-white/45 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 0.8, duration: 0.5 }, y: { duration: 1.6, repeat: Infinity, delay: 0.8 } }}
      >
        ↓
      </motion.div>

      {/* yumuşak kavis geçişi (kavisli dalga) */}
      <svg className="absolute left-0 w-full block" style={{ height: 80, bottom: -1 }} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path d="M0,12 C420,72 1020,72 1440,12 L1440,80 L0,80 Z" fill={curveColor} />
      </svg>
    </motion.section>
  );
}
