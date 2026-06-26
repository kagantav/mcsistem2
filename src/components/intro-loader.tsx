/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export function IntroLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 2250);
    return () => clearTimeout(id);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden" style={{ pointerEvents: "none" }}>
      {/* açık + güçlü blurlu overlay (CSS animasyon — resetlenmez) */}
      <div className="mc-intro-overlay absolute inset-0 backdrop-blur-2xl">
        <div className="absolute inset-0" style={{ background: "radial-gradient(70% 65% at 50% 45%, rgba(255,255,255,0.82), rgba(247,250,254,0.64))" }} />
      </div>

      {/* büyük logo: ortada beliriyor → yavaşça yukarı süzülüp en sonda kayboluyor */}
      <img src="/logo.png" alt="MC Sistem" style={{ height: 148 }} className="mc-intro-logo relative w-auto drop-shadow-sm" />
    </div>
  );
}
