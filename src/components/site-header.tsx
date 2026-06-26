/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, services } from "@/lib/content";

const NAVY = "#002b4c";

const LEFT: [string, string][] = [["Ana Sayfa", "/"], ["Kurumsal", "/hakkimizda"], ["Projeler", "/projelerimiz"]];
const RIGHT: [string, string][] = [["İletişim", "/iletisim"], ["Bülten", "/haberler"]];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = ([label, href]: [string, string]) => {
    const on = isActive(href);
    return (
      <Link
        key={label}
        href={href}
        className={`relative text-[15px] font-medium transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:bg-[#2f6fe0] after:transition-all after:duration-300 hover:text-[#002b4c] ${on ? "text-[#002b4c] after:w-full" : "text-[#3a4d63] after:w-0 hover:after:w-full"}`}
      >
        {label}
      </Link>
    );
  };

  const hizmetlerOn = isActive("/hizmetlerimiz") || pathname.startsWith("/hizmet/");

  return (
    <header className="sticky top-0 z-50" onMouseLeave={() => setMega(false)}>
      {/* üst şerit */}
      <div className="text-white text-[13px]" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <a href={`mailto:${company.email}`} className="flex items-center gap-2 opacity-90 hover:opacity-100">
            <span>✉</span> {company.email}
          </a>
          <div className="hidden sm:flex items-center gap-5 opacity-90">
            <a href={`tel:${company.phoneRaw}`} className="hover:opacity-100">{company.phone}</a>
            <span className="opacity-40">|</span>
            <span>TR</span>
          </div>
        </div>
      </div>

      {/* nav */}
      <div className={`border-b transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-black/5 shadow-[0_6px_24px_rgba(0,16,40,0.06)]" : "bg-white border-black/5"}`}>
        <div className={`relative max-w-5xl mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
          <nav className="hidden lg:flex items-center justify-end gap-7">
            {link(LEFT[0])}
            {link(LEFT[1])}
            {link(LEFT[2])}
          </nav>

          <Link href="/" className="flex items-center justify-center shrink-0 px-7">
            <img src="/logo.png" alt="MC Sistem" className={`w-auto transition-all duration-300 ${scrolled ? "h-7 lg:h-8" : "h-8 lg:h-9"}`} />
          </Link>

          <nav className="hidden lg:flex items-center justify-start gap-7">
            <div onMouseEnter={() => setMega(true)}>
              <Link href="/hizmetlerimiz" className={`relative text-[15px] font-medium transition-colors inline-flex items-center gap-1 hover:text-[#002b4c] ${hizmetlerOn ? "text-[#002b4c]" : "text-[#3a4d63]"}`}>
                Hizmetlerimiz
                <svg className={`w-4 h-4 transition-transform duration-300 ${mega ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
            </div>
            {link(RIGHT[0])}
            {link(RIGHT[1])}
          </nav>

          <Link href="/iletisim" className="lg:hidden absolute right-6 text-sm font-semibold px-5 py-2.5 rounded-full text-white" style={{ background: NAVY }}>İletişim</Link>
        </div>
      </div>

      {/* Hizmetlerimiz mega-menü */}
      <div className={`absolute left-0 right-0 top-full bg-white border-b border-black/5 shadow-2xl transition-all duration-300 ${mega ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`} onMouseEnter={() => setMega(true)}>
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((s) => (
            <Link key={s.key} href={`/hizmet/${s.slug}`} className="group" onClick={() => setMega(false)}>
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2.5 ring-1 ring-black/5">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="text-sm font-semibold leading-snug text-[#002b4c] group-hover:text-[#2f6fe0] transition-colors">{s.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
