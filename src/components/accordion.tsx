"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const disp = { fontFamily: "var(--f-display)" };

export function Accordion({
  items,
}: {
  items: { title: string; items: string[] }[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((group, i) => {
        const isOpen = open === i;
        return (
          <div key={group.title}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
              <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-[#7fb0ff] transition-colors" style={disp}>
                {group.title}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 text-2xl text-white/50 leading-none"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="pb-7 space-y-3 max-w-3xl">
                    {group.items.map((it) => (
                      <li key={it} className="flex gap-3 text-white/65 text-[15px] leading-relaxed">
                        <span className="shrink-0 mt-2 h-1 w-1 rounded-full bg-[#7fb0ff]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
