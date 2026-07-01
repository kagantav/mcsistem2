/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Scroll'a bağlı ince parallax — görsel, çerçeve içinde hafifçe kayar (sinematik derinlik). */
export function ParallaxImage({
  src,
  alt = "",
  className = "",
  amount = 8,
}: {
  src: string;
  alt?: string;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  const over = amount + 6; // çerçeveden taşma payı

  return (
    <div ref={ref} className={"relative overflow-hidden " + className}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, height: `${100 + over * 2}%`, top: `-${over}%` }}
        className="absolute left-0 w-full object-cover"
      />
    </div>
  );
}
