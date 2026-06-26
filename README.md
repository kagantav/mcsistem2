# MC Sistem 2.0 — Kreatif Kurumsal Web Sitesi

Mevcut PHP sitesinin yerine geçecek, modern/kreatif yeniden tasarım. Şu an **3 ana sayfa tasarım yönü (mockup)** mevcut; müşteri birini seçtikten sonra tam site o yönden geliştirilecek.

## Teknoloji (stack)
- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — stil
- **Motion** (framer-motion) — animasyon / scroll-reveal / aurora hareketleri
- **next/font** — premium tipografi: Syne, Fraunces, Sora, Manrope, JetBrains Mono (Türkçe `latin-ext` dahil)
- **lucide-react** — ikonlar

## Çalıştırma
```bash
cd C:\xampp\htdocs\mcsistem2
npm install      # (ilk sefer)
npm run dev      # http://localhost:3000
```

## Mockuplar
- `/`   → tasarım yönü seçim ekranı
- `/v1` → **Teknik Blueprint** — koyu, sinematik, mühendislik hassasiyeti (video hero + daktilo, blueprint grid, monospace aksanlar)
- `/v2` → **Editöryel Lüks** — açık/krem, büyük serif tipografi, dergivari, ferah ve prestijli
- `/v3` → **İmmersif / Fütüristik** — derin koyu, gradient aurora, cam (glass) efektleri, güçlü hareket

## İçerik / Varlıklar
- İçerik verisi: `src/lib/content.ts` (hizmetler, projeler, istatistikler, referanslar, şirket bilgisi — mevcut siteden derlendi)
- Görseller: `public/services`, `public/projects`, `public/referanslar` (20 logo), `public/hero` (banner video), `public/company`
- Ortak bileşenler: `src/components/` — `reference-logos` (açık/koyu logo otomatik kontrast), `typewriter`, `reveal`

## Seçimden sonra
Seçilen yön; tüm sayfalara (Sektörler, Hizmet detay, Projeler, Hakkımızda, İletişim, Bülten) genişletilecek, gerçek proje görselleri ve içerikler bağlanacak.
