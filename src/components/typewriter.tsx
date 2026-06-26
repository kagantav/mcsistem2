"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  words,
  className,
  style,
  cursorClass = "mc-cursor",
}: {
  words: string[];
  className?: string;
  style?: React.CSSProperties;
  cursorClass?: string;
}) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[i % words.length];
    let to: ReturnType<typeof setTimeout>;
    if (!del) {
      if (txt.length < cur.length) {
        to = setTimeout(() => setTxt(cur.slice(0, txt.length + 1)), 65);
      } else {
        to = setTimeout(() => setDel(true), 1500);
      }
    } else {
      if (txt.length > 0) {
        to = setTimeout(() => setTxt(cur.slice(0, txt.length - 1)), 35);
      } else {
        setDel(false);
        setI((v) => v + 1);
        to = setTimeout(() => {}, 10);
      }
    }
    return () => clearTimeout(to);
  }, [txt, del, i, words]);

  return (
    <span className={className} style={style}>
      {txt}
      <span className={cursorClass}>|</span>
    </span>
  );
}
