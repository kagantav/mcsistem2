/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "motion/react";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

type News = { title: string; date: string; cat: string; img: string; excerpt: string; featured?: boolean };

const NEWS: News[] = [
  { title: "Test ve Eğitim Merkezimizin açılışını gerçekleştirdik", date: "29 Ocak 2026", cat: "Kurumsal", img: "/company/sirket.jpg", excerpt: "Ekiplerimizin saha öncesi hazırlığı ve sistem testleri için kurduğumuz Test ve Eğitim Merkezi hizmete açıldı.", featured: true },
  { title: "Azerbaycan Demiryolları (ADY) heyeti şirketimizi ziyaret etti", date: "22 Ekim 2025", cat: "Kurumsal", img: "/projects/proje-3.jpg", excerpt: "ADY temsilcilerinden oluşan heyet, raylı sistem çözümlerimizi yerinde inceledi." },
  { title: "2024 Yılı Olağan Genel Kurul Toplantısı gerçekleştirildi", date: "24 Eylül 2025", cat: "Kurumsal", img: "/projects/proje-1.jpg", excerpt: "Şirketimizin 2024 yılı faaliyetlerine ilişkin olağan genel kurul toplantısı tamamlandı." },
  { title: "Ovit Tüneli elektromekanik sistemleri devreye alındı", date: "12 Mart 2025", cat: "Proje", img: "/projects/proje-2.jpg", excerpt: "Tünel elektromekanik sistemlerinin kurulumu, testi ve devreye alınması başarıyla tamamlandı." },
  { title: "Yeni metro hattında sinyalizasyon entegrasyonu tamamlandı", date: "28 Şubat 2025", cat: "Proje", img: "/services/metro.webp", excerpt: "Yeni metro hattında sinyalizasyon ve enerji altyapısı entegrasyonu yüksek frekanslı sefer hedefiyle tamamlandı." },
  { title: "Havalimanı seyrüsefer ve aydınlatma projesine başlandı", date: "10 Şubat 2025", cat: "Proje", img: "/services/havaalani.webp", excerpt: "Terminal ve apron sistemlerini kapsayan yeni havalimanı projemizin saha çalışmaları başladı." },
  { title: "Raylı sistem güvenliğinde öncü yaklaşımımız", date: "08 Nisan 2025", cat: "Sektör", img: "/services/akilli-ulasim.webp", excerpt: "Uluslararası standartlarda sinyalizasyon ve kontrol çözümleriyle raylı sistem güvenliğine katkımız." },
];

const CATS = ["Tümü", "Kurumsal", "Proje", "Sektör"];

export function NewsGrid() {
  const [cat, setCat] = useState("Tümü");
  const filtered = cat === "Tümü" ? NEWS : NEWS.filter((n) => n.cat === cat);
  const featured = filtered.find((n) => n.featured) ?? filtered[0];
  const rest = filtered.filter((n) => n !== featured);

  return (
    <div>
      <div className="flex justify-center gap-2 flex-wrap mb-10 lg:mb-14">
        {CATS.map((c) => {
          const on = cat === c;
          return (
            <button key={c} onClick={() => setCat(c)} className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${on ? "text-white border-transparent" : "text-[#3a4d63] border-black/10 hover:border-[#2f6fe0]/40"}`} style={on ? { background: NAVY } : undefined}>
              {c}
            </button>
          );
        })}
      </div>

      {featured && (
        <a href="#" className="group grid lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-14 lg:mb-20">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-2xl">
            <img src={featured.img} alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full text-white" style={{ background: NAVY }}>{featured.cat}</span>
          </div>
          <div>
            <div className="text-xs text-[#7587a0] mb-3">{featured.date}</div>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4 group-hover:text-[#2f6fe0] transition-colors" style={{ ...disp, color: NAVY }}>{featured.title}</h2>
            <p className="text-[#5a6b82] leading-relaxed mb-5 max-w-xl">{featured.excerpt}</p>
            <span className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: BLUE }}>Devamı →</span>
          </div>
        </a>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((n, i) => (
          <motion.a key={n.title} href="#" layout initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group block rounded-2xl overflow-hidden bg-white border border-black/[0.07] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img src={n.img} alt={n.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full text-white" style={{ background: NAVY }}>{n.cat}</span>
            </div>
            <div className="p-6">
              <div className="text-xs text-[#7587a0] mb-2">{n.date}</div>
              <h3 className="text-lg font-bold leading-snug mb-3 transition-colors group-hover:text-[#2f6fe0]" style={{ ...disp, color: NAVY }}>{n.title}</h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: BLUE }}>Devamı →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
