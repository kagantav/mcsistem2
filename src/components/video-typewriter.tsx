"use client";

import { useEffect, useRef, useState } from "react";

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/**
 * Kelime indeksini hero videosunun currentTime'ına bağlar:
 * video süresi kelime sayısına bölünür, her dilimde sıradaki kelime daktilo ile yazılır.
 * Böylece yazılar görüntü ilerledikçe senkron değişir ve video loop'unda baştan başlar.
 */
export function VideoTypewriter({
  words,
  videoId,
  fallbackDur = 30,
  className,
  style,
}: {
  words: string[];
  videoId: string;
  fallbackDur?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const segRef = useRef(-1);
  const runRef = useRef(0);

  const set = (s: string) => {
    textRef.current = s;
    setText(s);
  };

  const retype = async (word: string) => {
    const my = ++runRef.current;
    // mevcut yazıyı sil
    while (textRef.current.length > 0) {
      if (runRef.current !== my) return;
      set(textRef.current.slice(0, -1));
      await sleep(26);
    }
    // yeni kelimeyi yaz
    for (let i = 1; i <= word.length; i++) {
      if (runRef.current !== my) return;
      set(word.slice(0, i));
      await sleep(52);
    }
  };

  useEffect(() => {
    const vid = document.getElementById(videoId) as HTMLVideoElement | null;
    let raf = 0;
    const tick = () => {
      const dur = vid && isFinite(vid.duration) && vid.duration > 0 ? vid.duration : fallbackDur;
      const ct = vid && isFinite(vid.currentTime) ? vid.currentTime : (performance.now() / 1000) % dur;
      const idx = Math.min(words.length - 1, Math.max(0, Math.floor((ct / dur) * words.length)));
      if (idx !== segRef.current) {
        segRef.current = idx;
        retype(words[idx]);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId, words.join("|")]);

  return (
    <span className={className} style={style}>
      {text}
      <span className="mc-cursor" style={{ fontWeight: 300 }}>|</span>
    </span>
  );
}
