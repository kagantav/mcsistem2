# Hero Başlık Marquee Bandı — Tasarım

**Tarih:** 2026-07-08
**Durum:** Onaylandı (brainstorming), plan bekleniyor
**Etkilenen dosyalar:** `src/components/hero-services.tsx`, `src/app/page.tsx`, `src/app/globals.css`

## Problem

Ana sayfa hero videosunda, müşteri **başlık dışında yazı istemiyor**. Mevcut tasarımda başlık dışında alt hizmet listesi, "Sistemleri" alt yazısı ve `01/02` segment numarası da var. Ancak yalnızca ortada sabit bir başlık da çıplak/kötü duruyor.

## Çözüm Fikri: "Yükselen başlık bandı"

Hero'nun altında sürekli akan yatay bir **marquee bandı** olur; 4 segment başlığı bu bantta döngüsel akar. Video ilgili segmente geldiğinde o segmentin başlığı banttan **kopup video merkezine yükselir**, segment boyunca orada durur; segment bitince geri iner ve bant bir sonraki başlığı öne taşır. Bant hiç durmaz (sürekli akan marquee); akış konumu video zamanından sürüklendiği için hem sürekli hem birebir senkrondur.

## Kapsam

### Kaldırılacaklar (mevcut `HeroServices` içinden)
- Alt hizmet listesi (`AnimatePresence` + `motion.ul`, `SEGMENTS[i].items`)
- "Sistemleri" alt yazısı (`<div>Sistemleri</div>`)
- `01 / 02` segment numarası bloğu ve dikey ayıraç
- Daktilo (typewriter) efekti ve yanıp sönen imleç (`retype`, `mc-cursor`)

### Korunacaklar
- Video zamanını okuyan `requestAnimationFrame` yaklaşımı ve `BOUNDS`/`segFor` segment mantığı
- `videoId="mc-hero-video"` ile videoya bağlanma
- `fallbackDur = 36.75` (video süresi okunamazsa)

### Başlık metni
Başlıklara "Sistemleri" dahil:
- "Akıllı Ulaşım Sistemleri"
- "Raylı Ulaşım Sistemleri"
- "Metro Sistemleri"
- "Havaalanı Sistemleri"

`SEGMENTS` sadeleşir: her eleman yalnızca `{ title }` tutar (`items` kaldırılır).

## Bileşen Mimarisi

Tek bir client bileşen (`HeroServices`, aynı dosyada) iki görsel katmanı yönetir ve **tek bir RAF döngüsü** ile ikisini de senkronlar:

1. **Öne çıkan başlık (featured title)** — videonun dikey merkezinde, yatayda ortalı. Segmentler arası geçişte yükselip iner.
2. **Marquee bandı (title band)** — tam genişlikte, altta (`bottom-24` civarı, scroll okunun üstünde), sürekli akan yatay şerit.

Bileşen, section içinde tam ekran bir overlay olarak konumlanır: `absolute inset-0 z-10 pointer-events-none`. `page.tsx`'teki `Hero()`, mevcut `max-w-7xl ... flex` sarmalayıcısını kaldırıp `HeroServices`'i doğrudan section'a bağlar (o sarmalayıcı zaten yalnızca `HeroServices` içeriyor).

### State ve performans
- `seg`: React **state** (döngü başına ~4 kez değişir) → öne çıkan başlığın `AnimatePresence` giriş/çıkışını tetikler.
- Bandın `translateX`'i: her RAF karesinde **ref üzerinden imperatif** güncellenir (React re-render YOK) → 60fps akıcılık. Her karede state güncellemek yasak.

## Marquee Senkronizasyon Mekanizması (kritik)

Bant, 4 başlığı sırayla `·` ayracıyla dizer ve kusursuz döngü için **diziyi 2× çoğaltır**. Bandın yatay merkezinde sabit bir **"alma noktası"** (pickup point) vardır.

Her RAF karesinde:
1. Video `currentTime` → `dur` moduyla döngüsel `ct` hesaplanır.
2. `ct`'den segment indeksi `i` ve segment içi ilerleme `p ∈ [0,1)` bulunur (segment `i`'nin başı `p=0`, sonu `p=1`).
3. Her başlık elemanının layout sonrası merkez ofseti (`offset[i]`) ref ile ölçülür (bir kez, resize'da yeniden).
4. `translateX = merkez − lerp(offset[i], offset[i+1], p)`.

Bu, segment sınırında başlık `i`'yi tam merkeze getirir; segment boyunca `i`'den `i+1`'e doğru sürekli kaydırır. Segment süreleri eşit olmadığından akış hızı segmentten segmente değişir — bu **kabul edilir ve doğal** durur.

**Döngü sarması:** Son segment (`i=3`) sonrası "bir sonraki" başlık, çoğaltılmış ikinci kopyanın ilk başlığıdır (Havaalanı → Akıllı Ulaşım ileri yönde). Video başa sardığında (`ct→0`, `i→0`) `translateX` ilk kopya konumuna resetlenir; iki kopya birebir aynı piksel olduğu için sıçrama görünmez.

## Yükselme (lift) Animasyonu

- Öne çıkan başlık öğesi `SEGMENTS[i].title` gösterir; `AnimatePresence` `seg`'e göre keylenir.
- **Giriş:** bant hizasından (aşağıdan) yukarı `translateY` + `scale` büyüme + `opacity` netleşme ile hero merkezine çıkar, orada durur.
- **Çıkış:** segment bitince aşağı iner + solar; bir sonraki başlık girişini yapar.
- Daktilo yok — hareketin kendisi (banttan yükselme) hikâyeyi anlatır.
- **İllüzyon pekiştirme (nice-to-have):** başlık yukarıdayken banttaki aktif kopya opaklığı düşürülüp (sanki "yerinden ayrıldı") segment bitince geri getirilir.

## Erişilebilirlik / Fallback

- `prefers-reduced-motion: reduce` → yükselme ve bant kaydırma animasyonları atlanır; yalnızca aktif başlık statik gösterilir.
- Video `currentTime` okunamazsa `performance.now()` tabanlı fallback zamanlama (mevcut davranış korunur).

## Test / Doğrulama

Bu görsel/motion bir özellik; doğrulama gerçek uygulamada yapılır:
1. Uygulamayı çalıştır, hero'yu izle.
2. Her segmentte doğru başlığın alma noktasına gelip yukarı yükseldiğini gözle.
3. Bandın sürekli aktığını ve segment sınırlarında hizanın kaymadığını doğrula.
4. Video başa sardığında görünür sıçrama olmadığını doğrula.
5. Pencereyi yeniden boyutlandır → ofsetlerin yeniden ölçülüp hizanın korunduğunu doğrula.
6. `prefers-reduced-motion` açıkken statik fallback'i doğrula.

## Kapsam Dışı (YAGNI)

- Çoklu video / video array'i (tek döngüsel video korunur).
- Bant öğelerine tıklama/etkileşim (`pointer-events-none`).
- `video-typewriter.tsx` (kullanılmayan ölü kod) — bu işte dokunulmaz.
