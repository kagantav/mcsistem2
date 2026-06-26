"use client";

import { useState } from "react";

const disp = { fontFamily: "var(--f-display)" };

const CONTENT: Record<string, { title: string; html: string }> = {
  gizlilik: {
    title: "Gizlilik Politikası",
    html: `
      <p>MC Sistem olarak web sitemizi ziyaret eden kullanıcılarımızın gizliliğine önem veriyoruz. İşbu politika; toplanan kişisel verilerin hangi amaçla işlendiğini, kimlerle paylaşıldığını ve haklarınızı açıklar.</p>
      <h3>1. Toplanan Veriler</h3>
      <p>İletişim formu, e-posta veya telefon ile iletişime geçmeniz halinde ad-soyad, e-posta, telefon, şirket bilgileriniz ve mesaj içeriğiniz işlenir. Ayrıca anonim ziyaretçi verileri (IP, tarayıcı, ziyaret edilen sayfalar) toplanabilir.</p>
      <h3>2. İşlenme Amacı</h3>
      <p>Talep ve sorularınıza yanıt verilmesi, hizmetlerimiz hakkında bilgi sunulması, sözleşmesel ilişkilerin yürütülmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir.</p>
      <h3>3. Çerezler</h3>
      <p>Kullanıcı deneyimini iyileştirmek için çerezler kullanılır. Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz.</p>
      <h3>4. İletişim</h3>
      <p>Sorularınızı info@mcsistem.com.tr adresine iletebilirsiniz.</p>
    `,
  },
  kullanim: {
    title: "Kullanım Koşulları",
    html: `
      <p>Bu web sitesi MC Sistem tarafından işletilmektedir. Siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.</p>
      <h3>1. İçeriğin Kullanımı</h3>
      <p>Sitedeki tüm metin, görsel, video, logo ve grafikler MC Sistem'e veya hak sahiplerine aittir; yazılı izin alınmaksızın kopyalanamaz, çoğaltılamaz ve ticari amaçla kullanılamaz.</p>
      <h3>2. Bilgilerin Doğruluğu</h3>
      <p>Bilgiler genel bilgilendirme amaçlıdır. Güncel tutulmaya özen gösterilmekle birlikte tam doğruluk taahhüt edilmez.</p>
      <h3>3. Sorumluluk Sınırlaması</h3>
      <p>Sitenin kullanımından doğabilecek doğrudan veya dolaylı zararlardan MC Sistem sorumlu tutulamaz.</p>
      <h3>4. Uygulanacak Hukuk</h3>
      <p>İşbu koşulların yorumlanmasında Türkiye Cumhuriyeti hukuku geçerli olup Ankara Mahkemeleri yetkilidir.</p>
    `,
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    html: `
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, veri sorumlusu sıfatıyla MC Sistem tarafından kişisel verilerinizin işlenmesine ilişkin sizleri bilgilendiririz.</p>
      <h3>1. Veri Sorumlusu</h3>
      <p>MC Sistem — Üsküp Caddesi No:44, Çankaya / Ankara — info@mcsistem.com.tr</p>
      <h3>2. İşlenen Veriler</h3>
      <p>Kimlik (ad-soyad), iletişim (e-posta, telefon, adres), mesleki bilgiler (şirket, pozisyon) ve mesaj içeriğinizdeki veriler işlenir.</p>
      <h3>3. Amaç ve Hukuki Sebep</h3>
      <p>İletişim taleplerinin karşılanması, hizmetlerin sunulması, sözleşme ve yasal yükümlülüklerin yerine getirilmesi amacıyla; KVKK m.5 kapsamında işlenir.</p>
      <h3>4. Haklarınız</h3>
      <p>KVKK m.11 kapsamında verilerinize erişme, düzeltilmesini/silinmesini isteme ve itiraz haklarına sahipsiniz. Başvurularınızı info@mcsistem.com.tr adresine iletebilirsiniz.</p>
    `,
  },
};

export function LegalLinks() {
  const [open, setOpen] = useState<string | null>(null);
  const data = open ? CONTENT[open] : null;

  return (
    <>
      <div className="flex items-center gap-6 flex-wrap">
        {[["gizlilik", "Gizlilik Politikası"], ["kullanim", "Kullanım Koşulları"], ["kvkk", "KVKK Aydınlatma Metni"]].map(([k, label]) => (
          <button key={k} onClick={() => setOpen(k)} className="text-white/50 hover:text-white transition-colors text-xs sm:text-sm">
            {label}
          </button>
        ))}
      </div>

      {data && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setOpen(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden text-[#10243a]">
            <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-gray-100 shrink-0">
              <h2 className="text-lg sm:text-xl font-extrabold" style={disp}>{data.title}</h2>
              <button onClick={() => setOpen(null)} className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors" aria-label="Kapat">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="px-6 py-6 overflow-y-auto text-sm text-gray-700 leading-relaxed legal-body [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-5 [&_h3]:mb-2 [&_p]:mb-3" dangerouslySetInnerHTML={{ __html: data.html }} />
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end shrink-0">
              <button onClick={() => setOpen(null)} className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-full" style={{ background: "#002b4c" }}>Anladım</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
