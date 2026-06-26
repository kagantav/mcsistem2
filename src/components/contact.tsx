"use client";

import { useState } from "react";
import { company } from "@/lib/content";

const NAVY = "#002b4c";
const BLUE = "#2f6fe0";
const disp = { fontFamily: "var(--f-display)" };

type Office = { city: string; tag: string; address: string; phone?: string; map: string };

const offices: Office[] = [
  { city: "Ankara", tag: "Genel Merkez", address: "Üsküp Caddesi No:44, Çankaya / Ankara", phone: "(+90) 312 286 26 70", map: "Üsküp Caddesi No:44 Çankaya Ankara" },
  { city: "Eskişehir", tag: "Ofis", address: "Hoşnudiye Mh. 732. Sk. Başak Künkçü Plaza No:38 Kat:6, Tepebaşı / Eskişehir", phone: "(+90) 222 222 12 13", map: "Başak Künkçü Plaza Hoşnudiye Eskişehir" },
  { city: "Moskova", tag: "Rusya", address: "Moskova, Rusya", map: "Moskova, Rusya" },
  { city: "Prag", tag: "Çekya", address: "Prag, Çekya", map: "Prag, Çekya" },
  { city: "Kopenhag", tag: "Danimarka", address: "Kopenhag, Danimarka", map: "Kopenhag, Danimarka" },
  { city: "Maskat", tag: "Umman", address: "Maskat, Umman", map: "Maskat, Umman" },
];

export function Contact() {
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`Ad: ${form.name}\nE-posta: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`);
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Web İletişim — " + form.name)}&body=${body}`;
    setSent(true);
  };

  const field = "w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#2f6fe0] transition-colors";

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* form */}
        <div className="rounded-3xl border border-black/[0.07] p-7 lg:p-9 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ ...disp, color: NAVY }}>Bize Yazın</h2>
          <p className="text-[#7587a0] text-sm mb-6">Projeleriniz için formu doldurun, en kısa sürede dönüş yapalım.</p>
          <form onSubmit={submit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Adınız Soyadınız" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required type="email" placeholder="E-posta" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <input placeholder="Telefon" className={field} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <textarea required placeholder="Mesajınız" rows={5} className={field} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full text-white text-sm" style={{ background: NAVY }}>
              Gönder <span aria-hidden>→</span>
            </button>
            {sent && <p className="text-sm text-green-600 font-medium">E-posta uygulamanız açıldı, mesajınızı gönderebilirsiniz.</p>}
          </form>

          <div className="mt-8 pt-6 border-t border-black/5 grid sm:grid-cols-2 gap-4 text-sm">
            <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-3 hover:text-[#2f6fe0]">
              <span className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: BLUE }}>☎</span>
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-[#2f6fe0]">
              <span className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: BLUE }}>✉</span>
              {company.email}
            </a>
          </div>
        </div>

        {/* ofisler */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ ...disp, color: NAVY }}>Ofislerimiz</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {offices.map((o, i) => {
              const on = active === i;
              return (
                <button key={o.city} onClick={() => setActive(i)} className={`text-left rounded-2xl border p-4 transition-all ${on ? "border-transparent text-white shadow-lg" : "border-black/[0.07] hover:border-[#2f6fe0]/30 bg-white"}`} style={on ? { background: NAVY } : undefined}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold" style={disp}>{o.city}</span>
                    <span className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full ${on ? "bg-white/15" : "bg-[#f6f9fb] text-[#7587a0]"}`}>{o.tag}</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${on ? "text-white/75" : "text-[#7587a0]"}`}>{o.address}</p>
                  {o.phone && <p className={`text-xs mt-1.5 ${on ? "text-white/90" : "text-[#3a4d63]"}`}>{o.phone}</p>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* harita */}
      <div className="mt-10 rounded-3xl overflow-hidden border border-black/[0.07] shadow-sm">
        <iframe
          title="Ofis konumu"
          loading="lazy"
          className="w-full h-[420px]"
          src={`https://www.google.com/maps?q=${encodeURIComponent(offices[active].map)}&hl=tr&z=14&output=embed`}
        />
      </div>
    </>
  );
}
