// MC Sistem — ortak içerik verisi (mevcut siteden derlendi)

export const company = {
  name: "MC Sistem",
  tagline: "Anahtar Teslim Elektromekanik Sistem Çözümleri",
  short:
    "Türkiye merkezli müteahhit firma olarak; ulaşım ve altyapı projelerinde elektromekanik sistemlerin kurulumu, entegrasyonu, testi ve devreye alınmasını uçtan uca yürütüyoruz.",
  phone: "(+90) 312 286 26 70",
  phoneRaw: "+903122862670",
  email: "info@mcsistem.com.tr",
  offices: ["Çankaya / Ankara", "Tepebaşı / Eskişehir"],
};

export const stats = [
  { value: "8+", label: "Ülkede operasyon" },
  { value: "100+", label: "Tamamlanan proje" },
  { value: "5", label: "Uzmanlık sektörü" },
  { value: "25+", label: "Yıllık saha tecrübesi" },
];

// Kurumsal sayfası — müşteriden birebir alınan içerik
export const about = {
  paragraphs: [
    "MC Sistem, ulaştırma altyapısı ve kritik tesis projelerinde elektromekanik sistem entegrasyonu alanında faaliyet gösteren Türkiye merkezli bir taahhüt firmasıdır.",
    "Yüksek teknoloji gerektiren projelerde edindiği uygulama deneyimi ve mühendislik bilgi birikimiyle, farklı disiplinlere ait sistemlerin uyum içinde çalışmasını sağlayarak anahtar teslim projeler gerçekleştirmektedir.",
    "Kalite, güvenilirlik ve uluslararası standartları esas alan çalışma anlayışıyla MC Sistem, Türkiye'de ve uluslararası projelerde faaliyetlerini sürdürmektedir.",
  ],
  expertise: [
    "Elektromekanik Sistemler",
    "Sinyalizasyon Sistemleri",
    "Telekomünikasyon Sistemleri",
    "Kontrol ve Haberleşme Sistemleri",
    "SCADA Sistemleri",
    "Elektrifikasyon Sistemleri",
    "Akıllı Ulaşım Sistemleri (ITS)",
    "Sistem Entegrasyonu",
  ],
  expertiseNote:
    "Bu sistemler; karayolu, tünel, demiryolu, metro, havaalanı ve yer altı tesisleri gibi kritik altyapı projelerinde anahtar teslim olarak uygulanmaktadır.",
};

export const missionVision = {
  mission:
    "İleri teknoloji içeren nitelikli projelerde sahip olunan mühendislik kabiliyeti ve benimsenen kalite anlayışıyla dünya genelinde anahtar teslim projeler gerçekleştirmek.",
  vision: "Katma değeri yüksek projelerde, güvenilirliğiyle uluslararası ölçekte tercih edilen bir firma olmak.",
};

export type CoreValue = { slug: string; title: string; desc: string; image: string; tint: [string, string] };
export const coreValues: CoreValue[] = [
  { slug: "yenilikcilik", title: "Yenilikçilik", desc: "Teknolojik gelişmeleri yakından takip ederek, projelerde ve uygulama süreçlerinde katma değer oluşturan yenilikçi yaklaşımlar geliştirmektir.", image: "/kurumsal-degerler/yenilikcilik.webp", tint: ["#0a2a4a", "#123a63"] },
  { slug: "hiz", title: "Hız", desc: "Projelerin hızlı mobilizasyonunu sağlayarak planlama ve uygulama süreçlerini etkin şekilde yürütmektir.", image: "/kurumsal-degerler/hiz.webp", tint: ["#0d2f52", "#1c4f8a"] },
  { slug: "surekli-gelisim", title: "Sürekli Gelişim", desc: "Gelişimi sürekli ölçerek iyileştirmeyi esas almak ve belirlenen hedeflere ulaşmaktır.", image: "/kurumsal-degerler/surekli-gelisim.webp", tint: ["#08243f", "#0f3a66"] },
  { slug: "isg", title: "İş Sağlığı ve Güvenliği", desc: "İş sağlığı ve güvenliğini tüm faaliyetlerin ayrılmaz bir parçası olarak görmek, güvenli çalışma ortamları oluşturmak ve \"Sıfır Kaza\" hedefi doğrultusunda hareket etmektir.", image: "/kurumsal-degerler/is-guvenligi.webp", tint: ["#0a2c4d", "#17457a"] },
  { slug: "cevre", title: "Çevre Duyarlılığı", desc: "Gelecek nesillere daha yaşanabilir bir çevre bırakmak amacıyla, tüm faaliyetlerde çevre dostu bir yaklaşımı benimseyerek doğal kaynakların verimli kullanılmasını ve çevresel etkilerin en aza indirilmesini sağlamaktır.", image: "/kurumsal-degerler/cevre-duyarliligi.webp", tint: ["#0b2e40", "#12506b"] },
];

export const managementSystem = {
  intro:
    "MC Sistem, vizyonu doğrultusunda kurmuş olduğu Entegre Yönetim Sisteminin sürdürülebilirliğini sağlamak amacıyla aşağıdaki hususları taahhüt etmektedir.",
  groups: [
    {
      title: "Müşteri Odaklılık ve Kalite Anlayışı",
      items: [
        "Gelişen teknolojileri kullanarak ve sektördeki gelişmeleri yakından takip ederek müşteri beklentilerini aşan hizmet sunmayı,",
        "En uygun, doğru ve ekonomik çözümleri etkin ve hızlı şekilde üreterek müşteri ihtiyaçlarını en üst seviyede karşılayan güvenilir bir firma olmayı,",
        "Deneyim ve birikimini sürekli artırarak sunduğu hizmet kalitesiyle ülke ekonomisine katkıda bulunmayı,",
        "Çalışan memnuniyeti ve yüksek hizmet kalitesi anlayışıyla müşteri memnuniyetini sağlamayı.",
      ],
    },
    {
      title: "Çevrenin Korunması ve Sürdürülebilirlik",
      items: [
        "Çevre kirliliğine neden olan şirket içi ve dışı etkenleri en aza indirerek çevrenin korunmasını sağlamayı ve gelecek nesillere saygılı bir kuruluş olmayı,",
        "Doğal kaynakları etkin ve akılcı bir şekilde kullanmayı, atık yönetiminde geri dönüşüm teknolojilerini öncelikli olarak uygulamayı,",
        "Çevre performansını artırmak amacıyla çevre yönetim sistemini sürekli iyileştirmeyi ve çevre bilincini tüm faaliyet sahalarında sistematik hâle getirmeyi.",
      ],
    },
    {
      title: "İş Sağlığı ve Güvenliği",
      items: [
        "\"Sıfır İş Kazası ve Sıfır Meslek Hastalığı\" hedefini benimseyerek risk değerlendirmesi yoluyla emniyetsiz durumları önceden tespit etmeyi ve ortadan kaldırmayı,",
        "Çalışanların, alt yüklenicilerin ve ziyaretçilerin sağlık, güvenlik ve sosyal refahını sağlamayı ve İSG kurallarına tam uyum göstermelerini sağlamayı,",
        "Her türlü tedbiri alarak gerekli araç ve gereçler ile Kişisel Koruyucu Ekipmanları (KKE) eksiksiz bulundurmayı ve kullanımını denetlemeyi,",
        "Çalışanları için düzenli sağlık gözetimi sağlayarak sağlıklı bir çalışma ortamı oluşturmayı.",
      ],
    },
    {
      title: "Yasal Uyum, Eğitim ve Sürekli İyileştirme",
      items: [
        "Yürürlükteki tüm kalite, çevre ve İSG mevzuatlarına, yasal düzenlemelere, uygunluk yükümlülüklerine ve standart şartlarına tam uyum sağlamayı,",
        "Tüm paydaşlarının bilincini geliştirmek amacıyla düzenli eğitim ve bilinçlendirme faaliyetleri organize ederek güçlü bir kurumsal kültür oluşturmayı,",
        "Süreç yönetiminde sistem yaklaşımıyla maksimum iletişim ve verimliliği sağlamayı, verimlilik esasına dayalı sürekli iyileştirmeyi sürdürülebilir kılmayı,",
        "Stratejilerine bağlı kurumsal yönetim anlayışıyla tüm çalışanlarına liderlik bilincini kazandırmayı ve İSG performansını geliştirmek için yeterli kaynak ayırmayı.",
      ],
    },
    {
      title: "Bütünlük ve Taahhüt",
      items: [
        "Kalite, çevre ve İSG sistemlerini bir bütünlük içinde yönetmeyi, sistemin etkinliğini düzenli olarak izlemeyi ve topluma örnek bir kuruluş olmayı kurumsal yönetim anlayışının bir gereği olarak taahhüt etmektedir.",
      ],
    },
  ],
};

export type Certificate = { code: string; label: string; file: string };
export const certificates: Certificate[] = [
  { code: "ISO 9001", label: "Kalite Yönetim Sistemi", file: "iso-9001.pdf" },
  { code: "ISO 14001", label: "Çevre Yönetim Sistemi", file: "iso-14001.pdf" },
  { code: "ISO 45001", label: "İş Sağlığı ve Güvenliği Yönetim Sistemi", file: "iso-45001.pdf" },
  { code: "ISO 27001", label: "Bilgi Güvenliği Yönetim Sistemi", file: "iso-27001-tr.pdf" },
];

export type Capability = { title: string; desc: string; image?: string };

export type Service = {
  key: string;
  slug: string;
  title: string;
  image: string;
  desc: string;
  longDesc: string;
  items: string[];
  benefits: Capability[];
  capabilities: Capability[]; // "Hizmet Kapsamımız"
};

export const services: Service[] = [
  {
    key: "akilli-ulasim",
    slug: "akilli-ulasim",
    title: "Akıllı Ulaşım Sistemleri",
    image: "/services/akilli-ulasim.webp",
    desc: "Trafiği gerçek zamanlı izleyen, yöneten ve güvenli kılan uçtan uca akıllı ulaşım çözümleri.",
    longDesc:
      "Akıllı Ulaşım Sistemleri (AUS), modern altyapının ayrılmaz bir parçasıdır. MC Sistem olarak otoyol ve şehir içi ulaşım hatlarında trafik yönetimini gerçek zamanlı verilerle optimize eden, güvenli ve verimli sistemler tasarlıyoruz. Tasarımdan saha kurulumuna, devreye almadan uzun vadeli bakıma kadar tüm aşamaları anahtar teslim yürütüyoruz.",
    items: [
      "Trafik İzleme ve Yönetim Sistemleri",
      "Tünel Elektromekanik Sistemleri",
      "Şehiriçi Trafik Yönetim Sistemleri",
      "Ücret Toplama Sistemleri",
    ],
    benefits: [
      { title: "Gerçek Zamanlı Veri", desc: "Saha sensörlerinden anlık akış, hız ve olay verisi." },
      { title: "Güvenlik Odaklı", desc: "Olay tespiti, acil durum yönetimi ve hızlı müdahale." },
      { title: "Ölçeklenebilir Altyapı", desc: "Şehirden otoyola, ihtiyaca göre genişleyebilen mimari." },
      { title: "Akıllı Raporlama", desc: "Karar destek verisi, KPI ve trend analiz panelleri." },
    ],
    capabilities: [
      { title: "Trafik İzleme ve Yönetim Sistemleri", desc: "Sensör ve kameralarla trafik akışını gerçek zamanlı izleyip merkezden yönetiyoruz.", image: "/hizmet/trafik-izleme2.png" },
      { title: "Tünel Elektromekanik Sistemleri", desc: "Tünellerde havalandırma, aydınlatma, yangın algılama ve kontrol sistemlerini kuruyoruz.", image: "/hizmet/tunel-elektromekanik.png" },
      { title: "Şehiriçi Trafik Yönetim Sistemleri", desc: "Sinyalizasyon ve akıllı kavşak çözümleriyle şehir içi trafik akışını optimize ediyoruz.", image: "/hizmet/sehirici-trafik.png" },
      { title: "Ücret Toplama Sistemleri", desc: "Otoyol ve geçişlerde otomatik (elektronik) ücret toplama altyapısı sağlıyoruz.", image: "/hizmet/ucret-toplama.png" },
    ],
  },
  {
    key: "rayli-ulasim",
    slug: "rayli-ulasim",
    title: "Raylı Ulaşım",
    image: "/services/rayli-ulasim.webp",
    desc: "Raylı hatlarda güvenli, kesintisiz ve verimli işletme için sinyalizasyon ve enerji altyapısı.",
    longDesc:
      "Demiryolu işletmeciliği; güvenliğin ve verimliliğin aynı anda en üst düzeyde tutulması gereken karmaşık bir mühendislik alanıdır. MC Sistem olarak sinyalizasyon, telekomünikasyon ve elektromekanik altyapı çözümlerini ana hatlardan kontrol merkezlerine kadar projelerin tamamına uluslararası standartlara uygun olarak entegre ediyoruz.",
    items: ["Sinyalizasyon Sistemleri", "Telekomünikasyon Sistemleri", "Elektrifikasyon Sistemleri"],
    benefits: [
      { title: "Uluslararası Standartlar", desc: "EN 50126/50128/50129 raylı sistem güvenlik standartları." },
      { title: "Sistem Entegrasyonu", desc: "Saha ekipmanı, ağ omurgası ve kontrol merkezi tek elden." },
      { title: "Yüksek Güvenlik", desc: "SIL4 sertifikalı bileşenler ve fail-safe tasarım yaklaşımı." },
      { title: "Anahtar Teslim", desc: "Tasarımdan devreye almaya tüm aşamaları tek noktadan yönetiriz." },
    ],
    capabilities: [
      { title: "Sinyalizasyon Sistemleri", desc: "Raylı hatlarda güvenli ve kesintisiz seyahat için sinyalizasyon altyapısı kuruyoruz.", image: "/hizmet/sinyalizasyon.png" },
      { title: "Telekomünikasyon Sistemleri", desc: "Haberleşme, anons ve veri iletişimi için entegre telekomünikasyon çözümleri sunuyoruz.", image: "/hizmet/telekomunikasyon.png" },
      { title: "Elektrifikasyon Sistemleri", desc: "Katener ve enerji besleme sistemleriyle hatların elektrifikasyonunu gerçekleştiriyoruz.", image: "/hizmet/elektrifikasyon.png" },
    ],
  },
  {
    key: "metro",
    slug: "metro-sistemleri",
    title: "Metro Sistemleri",
    image: "/services/metro.webp",
    desc: "İstasyon ve hat boyu sistemlerin SCADA ile merkezi yönetimi ve yüksek frekanslı sefer altyapısı.",
    longDesc:
      "Metro projeleri, yüksek yolcu yoğunluğunun yönetildiği, güvenliğin ve sürekliliğin tartışmasız öncelik olduğu hassas mühendislik işleridir. MC Sistem; istasyon, tünel ve teknik tesislerde kontrol, haberleşme, güvenlik ve yolcu bilgilendirme sistemlerini sürücüsüz işletmeye uygun (GoA4) seviyede, 17+ kritik alt sistemi tek elden entegre eder.",
    items: ["Elektromekanik ve SCADA Sistemleri", "Sinyalizasyon Sistemleri"],
    benefits: [
      { title: "GoA4 Hazır", desc: "Sürücüsüz işletmeye uygun tam otonom altyapı tasarımı." },
      { title: "Sahada Test Edilmiş", desc: "İstanbul metro hatlarında devreye alınmış sistemler." },
      { title: "Bütünsel Entegrasyon", desc: "17+ alt sistemi tek mimaride buluşturan yönetim." },
      { title: "Operasyonel Destek", desc: "Devreye alım sonrası 7/24 teknik destek ve bakım." },
    ],
    capabilities: [
      { title: "Elektromekanik ve SCADA Sistemleri", desc: "İstasyon ve hat boyu elektromekanik sistemleri SCADA ile merkezden izleyip yönetiyoruz.", image: "/hizmet/scada.png" },
      { title: "Sinyalizasyon Sistemleri", desc: "Metro hatlarında yüksek frekanslı ve güvenli sefer için sinyalizasyon sistemleri kuruyoruz.", image: "/hizmet/sinyalizasyon.png" },
    ],
  },
  {
    key: "havaalani",
    slug: "havaalani",
    title: "Havaalanı",
    image: "/services/havaalani.webp",
    desc: "Hava trafiğinin güvenli yönetimi için seyrüsefer, aydınlatma ve bilgi sistemleri.",
    longDesc:
      "Havalimanları; binlerce yolcunun, ekipmanın ve operasyonel sürecin birlikte çalıştığı son derece dinamik tesislerdir. MC Sistem terminal binalarında bina yönetim sistemleri (BYS), apron aydınlatması, jeneratör/UPS altyapısı, güvenlik ve haberleşme sistemlerini anahtar teslim kurar; Kuveyt T4 dahil uluslararası tecrübeyi her terminale taşır.",
    items: ["Radar ve Seyrüsefer Sistemleri", "Pist Aydınlatma", "Uçak Park Ettirme Sistemi", "Havaalanı Bilgi Sistemi"],
    benefits: [
      { title: "Yüksek Enerji Verimi", desc: "Akıllı BYS ile enerji tüketiminde %30'a varan kazanç." },
      { title: "Güvenli Operasyon", desc: "Çok katmanlı güvenlik, erişim kontrolü ve perimeter sistemleri." },
      { title: "ICAO Uyumlu", desc: "Uluslararası havacılık standartlarına tam uyum." },
      { title: "Yolcu Konforu", desc: "Bilgilendirme, iklimlendirme ve yönlendirme entegrasyonu." },
    ],
    capabilities: [
      { title: "Radar ve Seyrüsefer Sistemleri", desc: "Hava trafiğinin güvenli yönetimi için radar ve seyrüsefer yardımcı sistemleri sağlıyoruz.", image: "/hizmet/radar-ve-seyrusefer.png" },
      { title: "Pist Aydınlatma", desc: "Pist, taksi yolu ve apron aydınlatma (AGL) sistemlerini kuruyor ve devreye alıyoruz.", image: "/hizmet/pist-aydinlatma.png" },
      { title: "Uçak Park Ettirme Sistemi", desc: "Uçakların hassas ve güvenli yanaşması için görsel yanaşma yönlendirme sistemleri sağlıyoruz.", image: "/hizmet/ucak-park.png" },
      { title: "Havaalanı Bilgi Sistemi", desc: "Uçuş bilgi ekranları (FIDS) ve yolcu bilgilendirme sistemlerini entegre ediyoruz.", image: "/hizmet/havaalani-bilgi.png" },
    ],
  },
  {
    key: "yeralti",
    slug: "yeralti-tesisleri",
    title: "Yeraltı Tesisleri",
    image: "/services/yeralti.jpg",
    desc: "Yeraltı altyapı tesisleri ve kablo galerilerinde elektromekanik sistem entegrasyonu.",
    longDesc:
      "Şehirlerin ve büyük altyapı yatırımlarının görünmeyen ama en kritik bileşeni yeraltı tesisleridir. MC Sistem; enerji dağıtım galerileri, fiber optik şebeke, kablo galerileri ve teknik tesis elektromekanik bağlantılarını uluslararası standartlara uygun projelendirir; etütten devreye almaya kadar anahtar teslim yönetir.",
    items: ["Yeraltı Altyapı Sistemleri", "Kablo Galerileri", "Elektromekanik Entegrasyon"],
    benefits: [
      { title: "Sürdürülebilir Altyapı", desc: "Uzun ömürlü tasarım ve düşük bakım maliyetli kurulum." },
      { title: "Standartlara Uygun", desc: "TS EN ve IEC standartlarında projelendirme ve uygulama." },
      { title: "Modüler Genişleme", desc: "İhtiyaca göre büyütülebilir kablo galeri tasarımı." },
      { title: "Anahtar Teslim", desc: "Etüt, tasarım, kurulum ve devreye alma tek bir elden." },
    ],
    capabilities: [
      { title: "Yeraltı Altyapı Sistemleri", desc: "Enerji dağıtım galerileri ve teknik tesis bağlantılarını uluslararası standartlarda projelendiriyoruz.", image: "/hizmet/yeralti-yapi.png" },
      { title: "Kablo Galerileri", desc: "Beton/PVC galeri yapımı, koruma ve havalandırma altyapısını kuruyoruz.", image: "/hizmet/kablo-galerileri.png" },
      { title: "Fiber Optik Şebeke", desc: "Backbone fiber omurgası, ek (splice) ve terminasyon işlerini yürütüyoruz.", image: "/hizmet/fiber-optik.png" },
      { title: "Devreye Alma & Test", desc: "Hi-Pot, megger ve OTDR testleriyle altyapıyı devreye alıp raporluyoruz.", image: "/hizmet/devreye-alma.png" },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  country: string;
  category: string;
  status: "Tamamlandı" | "Devam Ediyor";
  year: number;
  image: string;
  desc: string;
  longDesc: string;
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "kuzey-marmara-otoyolu",
    title: "Kuzey Marmara Otoyolu",
    location: "Kınalı–Odayeri / Kurtköy–Akyazı",
    country: "Türkiye",
    category: "Akıllı Ulaşım & Tünel Elektromekanik",
    status: "Tamamlandı",
    year: 2020,
    image: "/projects/proje-1.jpg",
    desc: "Otoyol genelinde akıllı ulaşım, tünel elektromekanik ve fiberoptik haberleşme altyapısının anahtar teslim kurulumu.",
    longDesc:
      "Türkiye'nin en büyük ulaşım altyapı yatırımlarından biri olan Kuzey Marmara Otoyolu projesinde MC Sistem; akıllı ulaşım sistemleri (AUS), tünel elektromekanik sistemleri, fiberoptik haberleşme altyapısı ve trafik kontrol sistemlerinin tasarımı, temini, kurulumu ve devreye alınmasını anahtar teslim gerçekleştirmiştir. 1000 km'yi aşan fiberoptik altyapı, 160 CCTV kamera ve 86 değişken mesaj işareti entegre edilmiştir.",
    scope: ["Akıllı Ulaşım Sistemleri (AUS)", "Tünel elektromekanik sistemleri", "Fiberoptik haberleşme altyapısı", "Trafik kontrol ve izleme", "Değişken mesaj/işaret panelleri", "Meteoroloji istasyonları"],
  },
  {
    slug: "ovit-tuneli",
    title: "Ovit Tüneli",
    location: "Rize / İkizdere",
    country: "Türkiye",
    category: "Tünel Elektromekanik Sistemleri",
    status: "Tamamlandı",
    year: 2018,
    image: "/projects/proje-2.jpg",
    desc: "Türkiye'nin en uzun çift tüplü karayolu tünellerinden birinde uçtan uca elektromekanik sistem entegrasyonu.",
    longDesc:
      "Ovit Tüneli, Doğu Karadeniz'i iç bölgelere bağlayan stratejik bir geçiştir. MC Sistem bu projede havalandırma, aydınlatma, yangın algılama, CCTV, anons ve enerji dağıtım sistemlerini anahtar teslim olarak kurmuş; tünel içi tüm kritik elektromekanik altyapıyı uluslararası standartlara uygun şekilde devreye almıştır.",
    scope: ["Tünel havalandırma kontrolü", "Aydınlatma sistemleri", "Yangın algılama ve söndürme", "CCTV ve görüntü kayıt", "Anons & acil çağrı", "Enerji dağıtım altyapısı"],
  },
  {
    slug: "ankara-metrosu",
    title: "Ankara Metrosu",
    location: "Ankara / Çayyolu",
    country: "Türkiye",
    category: "Metro Sinyalizasyon & Elektromekanik",
    status: "Tamamlandı",
    year: 2016,
    image: "/projects/proje-3.jpg",
    desc: "İstasyon ve hat boyu elektromekanik ile sinyalizasyon sistemlerinin SCADA tabanlı merkezi entegrasyonu.",
    longDesc:
      "Ankara Metrosu projesinde MC Sistem; istasyonlar ve hat boyu için elektromekanik sistemler, SCADA ile merkezi izleme/yönetim ve sinyalizasyon altyapısını entegre etmiştir. Yolcu konforu ve işletme sürekliliğini önceleyen çözümler, yüksek frekanslı ve güvenli sefer hedefiyle devreye alınmıştır.",
    scope: ["Elektromekanik sistemler", "SCADA merkezi izleme", "Sinyalizasyon altyapısı", "Enerji dağıtımı", "Yangın algılama", "Yolcu bilgilendirme"],
  },
  {
    slug: "zakho-tuneli",
    title: "Zakho Tüneli",
    location: "Duhok / Zakho",
    country: "Irak",
    category: "Tünel Elektromekanik Sistemleri",
    status: "Tamamlandı",
    year: 2019,
    image: "/projects/proje-4.jpg",
    desc: "Yurt dışı tünel projesinde elektromekanik ve kontrol sistemlerinin anahtar teslim kurulumu.",
    longDesc:
      "Irak'taki Zakho Tüneli projesinde MC Sistem, uluslararası saha tecrübesini ortaya koyarak havalandırma, aydınlatma, yangın algılama, haberleşme ve enerji sistemlerini anahtar teslim kurmuştur. Zorlu saha koşullarında uçtan uca mühendislik ve devreye alma yürütülmüştür.",
    scope: ["Havalandırma kontrolü", "Aydınlatma sistemleri", "Yangın algılama", "Haberleşme altyapısı", "Enerji dağıtımı", "Kontrol ve izleme"],
  },
  {
    slug: "kuveyt-altyapi",
    title: "Kuveyt Altyapı Projesi",
    location: "Kuveyt",
    country: "Kuveyt",
    category: "Kontrol, Haberleşme & BMS",
    status: "Tamamlandı",
    year: 2021,
    image: "/projects/proje-5.jpg",
    desc: "Terminal ve teknik tesislerde bina yönetim, güvenlik ve haberleşme sistemlerinin entegrasyonu.",
    longDesc:
      "Kuveyt'teki altyapı projesinde MC Sistem; bina yönetim sistemleri (BYS), güvenlik, haberleşme ve enerji altyapısını entegre etmiştir. Uluslararası havalimanı ve altyapı projelerindeki tecrübe, yüksek güvenlik ve enerji verimliliği hedefiyle sahaya taşınmıştır.",
    scope: ["Bina yönetim sistemleri (BYS)", "Güvenlik & CCTV", "Haberleşme altyapısı", "Yedek enerji (UPS/jeneratör)", "Erişim kontrolü", "Yangın algılama"],
  },
  {
    slug: "dudullu-bostanci-metrosu",
    title: "Dudullu–Bostancı Metrosu",
    location: "İstanbul",
    country: "Türkiye",
    category: "Metro Kontrol & Haberleşme",
    status: "Devam Ediyor",
    year: 2023,
    image: "/projects/proje-6.jpg",
    desc: "14,2 km, 13 istasyonlu GoA4 sürücüsüz hatta kontrol, haberleşme ve güvenlik sistemleri.",
    longDesc:
      "Dudullu – Bostancı Metro hattı, İstanbul Anadolu Yakası'nda 14,2 km uzunluğunda ve 13 istasyondan oluşan GoA4 sürücüsüz işletmeye uygun bir projedir. MC Sistem; istasyon, otopark, depo ve teknik tesisleri kapsayan kontrol, haberleşme ve güvenlik sistemlerini anahtar teslim kurmaktadır. Anons, CCTV, erişim kontrol, telefon, telsiz, yangın algılama ve yolcu bilgilendirme dahil 17 kritik sistem kapsamdadır.",
    scope: ["Anons sistemleri", "CCTV ve görüntü altyapısı", "Erişim kontrol sistemleri", "Telefon & telsiz haberleşmesi", "Yangın algılama", "Yolcu bilgilendirme"],
  },
  {
    slug: "umman-tunel",
    title: "Umman Tünel Projesi",
    location: "Maskat",
    country: "Umman",
    category: "Tünel Elektromekanik Sistemleri",
    status: "Devam Ediyor",
    year: 2022,
    image: "/projects/proje-7.jpg",
    desc: "Körfez bölgesinde tünel elektromekanik sistemlerinin uçtan uca kurulumu ve devreye alınması.",
    longDesc:
      "Umman'daki tünel projesinde MC Sistem; havalandırma, aydınlatma, yangın algılama, haberleşme ve enerji sistemlerini uluslararası standartlara uygun olarak kurmaktadır. Bölgesel iklim ve saha koşullarına göre optimize edilmiş mühendislik çözümleri uygulanmaktadır.",
    scope: ["Tünel havalandırması", "Aydınlatma sistemleri", "Yangın algılama", "Haberleşme altyapısı", "Enerji dağıtımı", "Kontrol ve izleme"],
  },
  {
    slug: "1915-canakkale",
    title: "1915 Çanakkale Bağlantısı",
    location: "Gelibolu – Eceabat",
    country: "Türkiye",
    category: "Elektrik & Elektromekanik Sistemler",
    status: "Devam Ediyor",
    year: 2022,
    image: "/projects/proje-8.jpg",
    desc: "Bağlantı yolları ve tesislerde elektrik ve elektromekanik sistemlerin entegrasyonu.",
    longDesc:
      "1915 Çanakkale Köprüsü bağlantı projesinde MC Sistem; bağlantı yolları ve teknik tesislerde elektrik, aydınlatma, haberleşme ve elektromekanik sistemlerin kurulumunu yürütmektedir. Yüksek görünürlük, güvenlik ve enerji verimliliği önceliklendirilmiştir.",
    scope: ["Elektrik & enerji dağıtımı", "Yol ve tesis aydınlatması", "Haberleşme altyapısı", "CCTV ve güvenlik", "Kontrol sistemleri", "Devreye alma & test"],
  },
];

export const references: { file: string; name: string }[] = [
  // Bakanlıklar (en üstte)
  { file: "referans-19.png", name: "T.C. Ulaştırma ve Altyapı Bakanlığı" },
  { file: "referans-9.png", name: "Irak Ulaştırma Bakanlığı" },
  { file: "referans-20.png", name: "Umman Ulaştırma, Haberleşme ve Bilgi Teknolojileri Bakanlığı" },
  { file: "referans-3.png", name: "Azerbaycan Cumhuriyeti Dijital Kalkınma ve Ulaştırma Bakanlığı" },
  { file: "referans-17.png", name: "Suudi Arabistan Ulaştırma ve Lojistik Hizmetleri Bakanlığı" },
  { file: "referans-cezayir.svg", name: "Cezayir Ulaştırma Bakanlığı" },
  // Kamu kurumları / genel müdürlükler
  { file: "referans-18.png", name: "Türkiye Cumhuriyeti Devlet Demiryolları" },
  { file: "referans-10.png", name: "Karayolları Genel Müdürlüğü" },
  { file: "referans-aygm.jpg", name: "Altyapı Yatırımları Genel Müdürlüğü" },
  { file: "referans-5.png", name: "Devlet Hava Meydanları İşletmesi Genel Müdürlüğü" },
  { file: "referans-12.png", name: "Kuwait Directorate General of Civil Aviation (DGCA)" },
  // Büyük kurumsal şirketler / holdingler (büyükten küçüğe)
  { file: "referans-2.png", name: "ASELSAN Elektronik Sanayi ve Ticaret A.Ş." },
  { file: "referans-16.png", name: "SOCAR" },
  { file: "kalyon.png", name: "Kalyon Holding" },
  { file: "referans-4.png", name: "Cengiz İnşaat Sanayi ve Ticaret A.Ş." },
  { file: "referans-13.png", name: "Limak İnşaat Sanayi ve Ticaret A.Ş." },
  { file: "referans-6.png", name: "Doğuş İnşaat ve Ticaret A.Ş." },
  { file: "referans-11.png", name: "Kolin İnşaat Turizm Sanayi ve Ticaret A.Ş." },
  { file: "referans-14.png", name: "Nurol İnşaat ve Ticaret A.Ş." },
  { file: "referans-8.png", name: "IC İçtaş İnşaat Sanayi ve Ticaret A.Ş." },
  // Diğer firmalar
  { file: "referans-15.png", name: "Özgün İnşaat" },
  { file: "referans-7.png", name: "Eze İnşaat A.Ş." },
];

// Bloglar (mcsistem.com.tr içeriğinden) — şimdilik mock
export type Blog = { slug: string; title: string; date: string; category: string; image: string; excerpt: string; body: string[] };
export const blogs: Blog[] = [
  {
    slug: "ayvacik-kucukkuyu-yolu-assos-ve-troya-tunelleri-trafige-acildi",
    title: "AYVACIK KÜÇÜKKUYU YOLU ASSOS VE TROYA TÜNELLERİ TRAFİĞE AÇILDI.",
    date: "6 Nisan 2023",
    category: "Açılış",
    image: "/haberler/ayvacik-kucukkuyu-yolu-assos-ve-troya-tunelleri-trafige-acildi.jpg",
    excerpt: "Yapımı Kalyon İnşaat tarafından tamamlanan Ayvacık - Küçükkuyu Yolu ve Assos ve Troya Tünelleri trafiğe açıldı. Cumhurbaşkanı Recep Tayyip ERDOĞAN' ın canlı bağlantı ile katıldığı törene…",
    body: ["Yapımı Kalyon İnşaat tarafından tamamlanan Ayvacık - Küçükkuyu Yolu ve Assos ve Troya Tünelleri trafiğe açıldı. Cumhurbaşkanı Recep Tayyip ERDOĞAN' ın canlı bağlantı ile katıldığı törene Ulaştırma ve Altyapı Bakanı Adil KARAİSMAİLOĞLU, Karayolları Genel Müdürü Abdulkadir URALOĞLU' nun yanı sıra milletvekilleri, bürokratlar ve vatandaşlar katıldı. Çanakkale'yi İzmir ve Balıkesir'e bağlayan karayolunun Ayvacık - Küçükkuyu kesiminde hayata geçirilen bu projenin Marmara ve Ege Bölgesi' nin lojistik karayolu altyapısını oldukça güçlendireceği vurgulandı.", "Proje kapsamında bulunan toplam 5,7 km uzunluğundaki Assos ve Troya Tünelleri'nin tüm elektromekanik, kontrol ve haberleşme işleri MC Sistem tarafından design and built tekniğiyle anahtar teslim olarak tamamlanmıştır"],
  },
  {
    slug: "dunyanin-ucakla-en-uzun-tunel-ucusu-rekoru-istanbul-da",
    title: "Dünyanın uçakla en uzun tünel uçuşu’ rekoru İstanbul’da kırıldı.",
    date: "25 Nisan 2022",
    category: "Basında Biz",
    image: "/haberler/dunyanin-ucakla-en-uzun-tunel-ucusu-rekoru-istanbul-da.jpg",
    excerpt: "Dünyada ilk kez saatte 245 kilometre hızla tünelde uçmayı başaran İtalyan pilot dünya rekoru kırdı.",
    body: ["Dünyada ilk kez saatte 245 kilometre hızla tünelde uçmayı başaran İtalyan pilot dünya rekoru kırdı.", "Dario Costa'nın kullandığı yarış uçağı İstanbul' un Çatalca ilçesinde yer alan Kuzey Marmara Otoyolu Çatalca T1 ve T2 Tünelleri'nden 43,44 saniyede geçmeyi başararak dünya havacılık tarihinde yeni bir sayfa açtı.", "Uçuştan günler önce başlayan çalışmalarımız sonucu tüneller uçuş için hazır hale getirildi. T1 ve T2 Tünelleri arasına yerleştirilen Hava Hızı ve Yönü Ölçüm cihazları ile hava akışı sürekli takip edildi. Tünel girişlerinde bulunan Değişken Trafik İşaretlerinin demontajı yapılarak uçağın yükselişinin önündeki riskler minimize edildi.", "Costa özel olarak modifiye edilen Zivko Edge 540 yarış uçağı ile saat 06:43'te hareket etti ve T1 tünelinde yerden bir metre kadar yükselerek uçmaya başladı. İki tünel arasındaki hava boşluğundan direksiyon hakimiyetini kaybetmeden flaş gibi geçen İtalyan pilot T2 tünelinin ağzından giriş yapmayı ve saatte 245 kilometre hızla uçmayı başardı.", "Costa ikinci tünelin çıkışında kalkış yaparak göğe yükseldi ve sevinç çığlıklarıyla başarısını kutladı."],
  },
  {
    slug: "kuzey-marmara-otoyolu-akilli-ulasim-sistemleri-ve-tunel-elektromekanik",
    title: "Kuzey Marmara Otoyolu Akıllı Ulaşım Sistemleri ve Tünel Elektromekanik İşleri MC Sistem tarafından tamamlandı.",
    date: "25 Nisan 2022",
    category: "Proje",
    image: "/haberler/kuzey-marmara-otoyolu-akilli-ulasim-sistemleri-ve-tunel-elektromekanik.jpg",
    excerpt: "Avrupa kıtasında İstanbul’ un Silivri ilçesi Kınalı Kavşağı ‘ndan başlayarak Eyüp ilçesinin Odayeri semtinde sonlanan , Asya kıtasında ise Pendik ilçesinde bulunan Kurnaköy Gişelerinden…",
    body: ["Avrupa kıtasında İstanbul’ un Silivri ilçesi Kınalı Kavşağı ‘ndan başlayarak Eyüp ilçesinin Odayeri semtinde sonlanan , Asya kıtasında ise Pendik ilçesinde bulunan Kurnaköy Gişelerinden başlayarak kesintisiz olarak Akyazı Gişelerine dek devam eden toplam 400 km uzunluğundaki Kuzey Marmara Otoyolu tüm kesimleri ile hizmete açılarak vatandaşlarımıza hizmet sunmaya başlamıştır. Otoyol kullanıcılarına daha konforlu ve daha güvenilir bir hizmet sunabilmek adına Akıllı Ulaşım Sistemleri MC Sistem tarafından design and built tekniğiyle tamamlanmıştır. Akıllı Ulaşım Sistemleri kapsamında 7/24 aktif olan 3 adet Alt Kontrol Merkezi ve 1 adet Ana Kontrol Merkezi tasarlanmış ve imalatı tamamlanmıştır. Otoyol üzerinde; 1000 km Fiberoptik Kablo Altyapı, 86 adet Değişken Mesaj İşareti, 126 adet Değişken Trafik İşareti ,21 adet Meteorolojik İstasyon, 78 adet Trafik Sayım Sensörü, 160 Adet Hareketli Kamera , 350 adet Sabit Olay Algılama Kamerası tesis edilerek devreye alınmıştır.", "Kuzey Marmara Otoyolu ‘nun 4 şeritli tünelleri dünyanın en geniş tünelleri olma özelliğini taşımaktadır. Avrupa kesiminde bulunan 3 adet ve Asya kesiminde bulunan 5 adet toplamda 4 şeritli 8 adet tünelin elektromekanik işleri MC Sistem tarafından design and built tekniğiyle tamamlanmış ve tüm elektronik sistemleri tam otomatik şekilde devreye alınmıştır."],
  },
  {
    slug: "kurtun-tuneli-trafige-acildi",
    title: "Kürtün Tüneli Trafiğe Açıldı",
    date: "15 Mayıs 2021",
    category: "Açılış",
    image: "/haberler/kurtun-tuneli-trafige-acildi.jpg",
    excerpt: "Yapımı Cengiz İnşaat tarafından tamamlanan Trabzon-Gümüşhane ve Tirebolu-Torul akslarının kesiştiği noktada kesintisiz, güvenli ve konforlu trafik akışını tesis etmek amacıyla yapılan…",
    body: ["Yapımı Cengiz İnşaat tarafından tamamlanan Trabzon-Gümüşhane ve Tirebolu-Torul akslarının kesiştiği noktada kesintisiz, güvenli ve konforlu trafik akışını tesis etmek amacıyla yapılan Kürtün Ayrım Kavşağı ve Tüneli Ulaştırma ve Altyapı Bakanı Sayın Adil KARAİSMAİLOĞLU'nun da katılımıyla gerçekleştirilen törenle 24 Nisan 2021 tarihinde hizmete açılmıştır. Proje kapsamında Tirebolu-Torul Yolu'nda yer alan 1942 metre uzunluğunda çift tüplü Kürtün Tüneli elektromekanik işleri anahtar teslim olarak MC Sistem tarafından gerçekleştirilmiştir"],
  },
  {
    slug: "umman-sultanligi-nin-ilk-otoyol-tunelleri-trafige-acildi",
    title: "Umman Sultanlığı’nın İlk Otoyol Tünelleri Trafiğe Açıldı",
    date: "15 Mayıs 2021",
    category: "Açılış",
    image: "/haberler/umman-sultanligi-nin-ilk-otoyol-tunelleri-trafige-acildi.jpg",
    excerpt: "Özkar İnşaat tarafından yapımı gerçekleştirilen 190 km’lik Al Sharqiyah Otoyolu Nidab ve Al Aqq Tünelleri 20 Ocak 2020 tarihinde trafiğe açılmıştır. Tüneller Umman Sultanlığındaki ilk…",
    body: ["Özkar İnşaat tarafından yapımı gerçekleştirilen 190 km’lik Al Sharqiyah Otoyolu Nidab ve Al Aqq Tünelleri 20 Ocak 2020 tarihinde trafiğe açılmıştır. Tüneller Umman Sultanlığındaki ilk tünellerdir.", "1.450 metre ve 650 metre uzunluğunda 2 çift tüp ve her bir yönde 3 şerit olarak inşa edilen tünellerin elektromekanik sistemleri 6 ay gibi kısa bir sürede MC Sistem tarafından anahtar teslim olarak tamamlanmıştır.", "Üstün yapım tekniği ve ileri teknolojisi ile dikkat çeken tüneller Uluslararası standart ve normlara uygun olarak projelendirilmiş ve imal edilmiştir."],
  },
  {
    slug: "menemen-aliaga-candarli-otoyolu-trafige-acildi",
    title: "Menemen - Aliağa - Çandarlı Otoyolu trafiğe açıldı",
    date: "15 Mayıs 2021",
    category: "Açılış",
    image: "/haberler/menemen-aliaga-candarli-otoyolu-trafige-acildi.jpg",
    excerpt: "29 Ekim 2019 tarihinde trafiğe açılan otoyol Kuzey Ege Otoyolu adıyla hizmet verecek. İKA (IC İçtaş, Kalyon) İzmir Otoyolu Yapım Adi Ortaklığı tarafından gerçekleştirilen proje…",
    body: ["29 Ekim 2019 tarihinde trafiğe açılan otoyol Kuzey Ege Otoyolu adıyla hizmet verecek. İKA (IC İçtaş, Kalyon) İzmir Otoyolu Yapım Adi Ortaklığı tarafından gerçekleştirilen proje kapsamında, 1040 metre uzunluğunda 2 tüpten oluşan Buruncuk Tünelinin elektromekanik işleri ile 90 km’lik otoyol ve bağlantı yollarına yönelik akıllı ulaşım sistemleri 5 aylık bir sürede MC Sistem tarafından anahtar teslim olarak tamamlanmıştır. Kuzey Ege Otoyolu, İzmir’in, Aliağa’daki sanayi bölgeleri ile Çandarlı Limanı’na yüksek standartlarda bağlantısını gerçekleştirecek olup, sahip olduğu elektromekanik sistemler ve akıllı ulaşım sistemleri sayesinde trafik güvenliği, can ve mal emniyetini sağlayacaktır."],
  },
  {
    slug: "gumushane-cevre-yolu-nun-acilisi-gerceklesti",
    title: "Gümüşhane Çevre Yolu’nun Açılışı Gerçekleşti",
    date: "15 Mayıs 2021",
    category: "Açılış",
    image: "/haberler/gumushane-cevre-yolu-nun-acilisi-gerceklesti.jpg",
    excerpt: "Gümüşhane şehir geçişi trafiğini düzenleyen 11,25 km’lik Gümüşhane Çevre Yolu’nun açılışı Sayın Cumhurbaşkanımız Recep Tayyip ERDOĞAN tarafından yapıldı. Yol bünyesinde 17 kilometre…",
    body: ["Gümüşhane şehir geçişi trafiğini düzenleyen 11,25 km’lik Gümüşhane Çevre Yolu’nun açılışı Sayın Cumhurbaşkanımız Recep Tayyip ERDOĞAN tarafından yapıldı. Yol bünyesinde 17 kilometre uzunluğunda 9 tünel, 13 köprü ve 4 viyadüğün olduğu Gümüşhane Çevre Yolundaki tüm elektromekanik işler, MC Sistem tarafından anahtar teslim yapılmıştır.", "İnşaatları “Cengiz İnşaat” tarafından yapılan yol, uygulanan modern yapım teknikleri ve üstün kalitesi ile dikkat çekmektedir. Türkiyede tek bir sözleşme altında yapılan en büyük Tünel Elektromekanik İşi olan Gümüşhane Çevre Yolu Elektromekanik İşleri, 14 ayda tamamlanmıştır."],
  },
  {
    slug: "socar-yonetim-binasi-guc-sistemleri-tamamlandi",
    title: "Socar Yönetim Binası Güç Sistemleri Tamamlandı",
    date: "15 Mayıs 2021",
    category: "Proje",
    image: "/haberler/socar-yonetim-binasi-guc-sistemleri-tamamlandi.jpg",
    excerpt: "MC Sistem Socar'ın İzmir Aliağa da yaptığı Yönetim Binasının Güç Sistemlerini tamamladı. Binanın OG, AG, Jeneratör, Trafo, Kablaj ve diğer sistemlere ait işleri MC Sistem tarafından…",
    body: ["MC Sistem Socar'ın İzmir Aliağa da yaptığı Yönetim Binasının Güç Sistemlerini tamamladı. Binanın OG, AG, Jeneratör, Trafo, Kablaj ve diğer sistemlere ait işleri MC Sistem tarafından anahtar teslim olarak gerçekleştirilmiştir. Binanın Ekim ayı içinde faaliyete geçmesi planlanmaktadır."],
  },
  {
    slug: "sabuncubeli-tuneli-trafige-acildi",
    title: "Sabuncubeli Tüneli Trafiğe açıldı",
    date: "15 Mayıs 2021",
    category: "Açılış",
    image: "/haberler/sabuncubeli-tuneli-trafige-acildi.jpg",
    excerpt: "Sabuncubeli Tüneli, 10 Haziran 2018 tarihinde yapılan törenle Başbakan Sayın Binali YILDIRIM tarafından trafiğe açıldı.Yapımı İzmir İnşaat Adi Ortaklığı tarafından gerçekleştirilen 2…",
    body: ["Sabuncubeli Tüneli, 10 Haziran 2018 tarihinde yapılan törenle Başbakan Sayın Binali YILDIRIM tarafından trafiğe açıldı.Yapımı İzmir İnşaat Adi Ortaklığı tarafından gerçekleştirilen 2 tüpten oluşan 4130 metre uzunluğundaki tünelin elektromekanik işleri 5 ay bir sürede MC Sistem tarafından anahtar teslim tamamlanmıştır.Manisa İzmir arasındaki yoğun araç trafiğinin olduğu tünel, yüksek güvenlik ve işletme standartlarında elektromekanik sistemlere sahiptir."],
  },
  {
    slug: "yapimi-cengiz-insaat-tarafindan-gerceklestirilen-kuveyt-havalimani-t4-terminali",
    title: "Yapımı Cengiz inşaat tarafından gerçekleştirilen Kuveyt Havalimanı T4 Terminali 04.07.2018 de Kuveyt Emiri Şeyh Sabah El-Ahmad Al-Jaber Al-Sabah tarafindan açılmıştır",
    date: "15 Mayıs 2021",
    category: "Haber",
    image: "/haberler/yapimi-cengiz-insaat-tarafindan-gerceklestirilen-kuveyt-havalimani-t4-terminali.jpg",
    excerpt: "Yapımı Cengiz inşaat tarafından gerçekleştirilen Kuveyt Havalimanı T4 Terminali 04.07.2018 de Kuveyt Emiri Şeyh Sabah El-Ahmad Al-Jaber Al-Sabah tarafindan açılmıştır.",
    body: ["Yapımı Cengiz inşaat tarafından gerçekleştirilen Kuveyt Havalimanı T4 Terminali 04.07.2018 de Kuveyt Emiri Şeyh Sabah El-Ahmad Al-Jaber Al-Sabah tarafindan açılmıştır.", "Kuveyt Sivil Havacılık Genel Müdürü Şeyh Salman el-Sabah tarafından açılış sırasında yapılan açıklamada Kuveyt'i bölgesel merkez haline getiren T4 terminalinin özellikle Kuveyt Havayolları tarafindan kullanılması ve 2037 yılına kadar 40 milyon yolcuya hizmet vermesi planladığı bilgisi verilmiştir.", "T4 terminali 225.000 metrekareye dağılmış, 14 adet Yolcu kapısı, 6 adet körük,50 Check in Counter,16 adet Self check in cihazi, Business Class lounge, gümrüksüz satış mağazaları, 2.450 dönüm otopark, 3 adet yardımcı bina ile beraber toplamda 60.000 m2 kapalı alana sahiptir.", "Kontrol-Haberlesme, Güvenlik, BMS Sistemleri ve bu Sistemlerin tek platformda entegrasyonunu saglayan IBMS sisteminin tasarım, montaj ve test devreye alma faaliyetleri eksiksiz bir şekilde Mc Sistem ekipleri tarafından 7 ayda gerçekleştirilmiştir."],
  },
  {
    slug: "dunyanin-2nci-en-uzun-cift-tuplu-karayolu-tuneli-trafige",
    title: "Dünyanın 2nci en uzun çift tüplü karayolu tüneli trafiğe açıldı",
    date: "15 Mayıs 2021",
    category: "Açılış",
    image: "/haberler/dunyanin-2nci-en-uzun-cift-tuplu-karayolu-tuneli-trafige.jpg",
    excerpt: "Ovit Tüneli 14 Haziran 2018 tarihinde Cumhurbaşkanı Recep Tayyip Erdoğan'ın katıldığı törenle ulaşıma açıldı. Ovit Dağı geçidinde yapımı tamamlanan 14,3 kilometrelik çift tüplü Ovit…",
    body: ["Ovit Tüneli 14 Haziran 2018 tarihinde Cumhurbaşkanı Recep Tayyip Erdoğan'ın katıldığı törenle ulaşıma açıldı. Ovit Dağı geçidinde yapımı tamamlanan 14,3 kilometrelik çift tüplü Ovit Tüneli, Türkiye'nin en uzun, Çin'de bulunan 18,2 kilometre uzunluğundaki Zhongnanshar çift tüplü kara yolu tünelinden sonra ise dünyanın 2'nci uzun çift tüplü tüneli oldu.", "Tünelin elektromekanik işlerinin tamamı anahtar teslim MC Sistem tarafından 13 ay gibi rekor bir sürede tamamlandı. Elektromekanik ve Kontrol Sistemlerinin yapımında bir çok yenilik içeren tünel, sürüş güvenliği açısından da dünyada bir çok ilke sahiptir.", "Yapımı Cengiz Makyol ASL Ortaklığı tarafından gerçekleştirilen tünel kış ayalarında kapalı olan Karadeniz ile Doğu Anadolu bölgelerinin bağlantısını sağlamanın yanında Karadeniz Limanlarını Doğu Anadolu ya bağlanmasını sağlayacaktır."],
  },
  {
    slug: "yapimi-kolin-insaat-tarafindan-gerceklestirilen-cayyolu-metro-depo-sahasi",
    title: "Yapımı Kolin İnşaat tarafından gerçekleştirilen Çayyolu Metro Depo Sahası Projesinde , Sinyalizasyon ve Elektromekanik işler MC Sistem tarafından anahtar teslim olarak tamamlanmış ve Geçici Kabulü yapılmıştır",
    date: "15 Mayıs 2021",
    category: "Proje",
    image: "/haberler/yapimi-kolin-insaat-tarafindan-gerceklestirilen-cayyolu-metro-depo-sahasi.jpg",
    excerpt: "Yapımı Kolin İnşaat tarafından gerçekleştirilen Çayyolu Metro Depo Sahası Projesinde, Sinyalizasyon ve Elektromekanik işler MC Sistem tarafından anahtar teslim olarak tamamlanmış ve…",
    body: ["Yapımı Kolin İnşaat tarafından gerçekleştirilen Çayyolu Metro Depo Sahası Projesinde, Sinyalizasyon ve Elektromekanik işler MC Sistem tarafından anahtar teslim olarak tamamlanmış ve Geçici Kabulü yapılmıştır.", "GOA1 Seviyesinde Sinyalizasyon Sistemine sahip olan depo ana hatta Ansaldo Sistemi ile de entegre edilmiştir. GOA1 Sistemi ve Ansaldo Sinyalizasyon Sistemi ile olan entegrasyon yerli mühendislik kabiliyetleriyle yapılmıştır.", "Sinyalizasyon Sisteminin yanı sıra Telsiz Sistemi, Anons Sistemi, CCTV Sistemi, Merkezi Saat ve Erişim Kontrol Sistemi, Telefon Sistemi ve Metro SCADA sistemleri de anahtar teslim MC sistem tarafından yapılmıştır.", "140.000m2 alan üzerine kurulu olan Çayyolu Depo Sahası, metro trenlerinin periyodik, arıza, günlük ve ağır bakımlarının yapılması için hizmet verecektir. Proje kapsamında sinyalizasyon sistemleri için yerli kaynaklar kullanılmış olup, mevcut Kızılay- Çayyolu Hattına tam entegrasyonu gerçekleştirilmiştir."],
  },
  {
    slug: "mc-sistem-kuveyt-uluslararasi-havalimani-t4-terminali-kontrol-ve",
    title: "MC Sistem Kuveyt Uluslararası Havalimanı T4 Terminali Kontrol ve Güvenlik Sistemlerinin sözleşmesini Cengiz İnşaat ile imzaladı",
    date: "15 Mayıs 2021",
    category: "Sözleşme",
    image: "/haberler/mc-sistem-kuveyt-uluslararasi-havalimani-t4-terminali-kontrol-ve.jpg",
    excerpt: "MC Sistem Kuveyt Uluslararası Havalimanı T4 Terminali Kontrol ve Güvenlik Sistemlerinin sözleşmesini Cengiz İnşaat ile imzaladı. Kuveyt Uluslararası Havalimanı T4 Terminali 55.000 m2…",
    body: ["MC Sistem Kuveyt Uluslararası Havalimanı T4 Terminali Kontrol ve Güvenlik Sistemlerinin sözleşmesini Cengiz İnşaat ile imzaladı. Kuveyt Uluslararası Havalimanı T4 Terminali 55.000 m2 kapalı alana, 200.000m2 açık alana ve Yıllık 4.5 Milyon yolcu kapasitesine sahip olacaktır. İmzalanan sözleşme kapsamında Havaalanı Network Sistemi, TV/IP Sistemi, Voice/IP Sistemi, Merkezi Saat Sistemi, Erişim Sistemi, CCTV Sistemi, Anons Sistemi, BMS ( Building Management System) ve Oda Ekipmanlarının tasarım ve montaj faaliyetlerine başlamıştır."],
  },
  {
    slug: "caglayan-kavsagi-alt-gecidi-trafige-acildi",
    title: "Çağlayan Kavşağı alt geçidi trafiğe açıldı",
    date: "15 Mayıs 2021",
    category: "Açılış",
    image: "/haberler/caglayan-kavsagi-alt-gecidi-trafige-acildi.jpg",
    excerpt: "Yapımı, Yüngül İnşaat Sanayi ve Ticaret A.Ş. tarafından gerçekleştirilen, Erzincan Çağlayan Kavşağı alt geçidinin elektrik, aydınlatma, trafik ve kontrol sistemleri işleri, MC Sistem…",
    body: ["Yapımı, Yüngül İnşaat Sanayi ve Ticaret A.Ş. tarafından gerçekleştirilen, Erzincan Çağlayan Kavşağı alt geçidinin elektrik, aydınlatma, trafik ve kontrol sistemleri işleri, MC Sistem tarafından 06 Kasım 2017 tarihinde tamamlanarak alt geçit trafiğe açılmıştır."],
  },
  {
    slug: "mc-sistem-dudullu-bostanci-metrosu-kontrol-ve-haberlesme-sistemleri",
    title: "MC Sistem Dudullu Bostancı Metrosu Kontrol ve Haberleşme Sistemleri Sözleşmesini imzaladı",
    date: "15 Mayıs 2021",
    category: "Sözleşme",
    image: "/haberler/mc-sistem-dudullu-bostanci-metrosu-kontrol-ve-haberlesme-sistemleri.jpg",
    excerpt: "MC Sistem Dudullu Bostancı Metro Hattında Kontrol ve Haberleşme Sistemlerinin anahtar teslim sözleşmesini Şenbay Kolin Kalyon İş Ortaklığı ile imzaladı. Dudullu Bostancı hattı 14,2 km…",
    body: ["MC Sistem Dudullu Bostancı Metro Hattında Kontrol ve Haberleşme Sistemlerinin anahtar teslim sözleşmesini Şenbay Kolin Kalyon İş Ortaklığı ile imzaladı. Dudullu Bostancı hattı 14,2 km uzunluğunda olacaktır. Hatta 13 İstasyon ve 1 depo sahası olacaktır. İmzalanan sözleşme kapsamında Telsiz Sistemi, IP/MPLS İletim Sistemi, Araç Üzeri Haberleşme Sistemi, Yangın Algılama Sistemi, Erişim Kontrol Sistemi, Anons Sistemi, Kamera Sistemi, Merkezi Saat , Yolcu Bilgilendirme , Telefon Sistemi, Park Kontrol Sistemi gibi tüm elektronik sistemler anahtar teslim MC sistem tarafından yapılacaktır."],
  },
  {
    slug: "sn-cumhurbaskanimiz-ovit-tunel-santiyesinde",
    title: "Sn. Cumhurbaşkanımız Ovit Tünel Şantiyesinde",
    date: "15 Mayıs 2021",
    category: "Ziyaret",
    image: "/haberler/sn-cumhurbaskanimiz-ovit-tunel-santiyesinde.jpg",
    excerpt: "Sn.Cumhurbaşkanımız Ovit Tünel Şantiyesinde",
    body: ["Sn.Cumhurbaşkanımız Ovit Tünel Şantiyesinde", "Sn Cumhurbaşkanımız Recep Tayyip Erdoğan Ovit Şantiyesinde imalatlarımızı yerinde inceledi. Türkiye nin en uzun Dünya nın ise 3ncü en uzun Karayolu Tüneli olan Ovit Tünelleri nin imalatları hızla devam etmektedir. İnşaatı Cengiz İnşaat tarafından yapılan Tünelin Elektromekanik İşleri anahtar teslim MC Sistem tarafından yapılmaktadır. Mayıs ayında Cengiz İnşaat ile MC Sistem arasında imzalanan sözleşmeye göre Aralık ayında Tünel trafiğe açılacaktır. Karadeniz Bölgesi ile Doğu Anadolu Bölgesi arasındaki en önemli geçit olacak Ovit Tüneli 2.000 metre rakımda 15 km lik çift tüp şeklinde imal edilmektedir."],
  },
  {
    slug: "yapimi-ozdemir-insaat-tarafindan-gerceklestirilen-erzincan-erzurum-devletyolu-uzerindeki",
    title: "Yapımı ÖZDEMİR İnşaat tarafından gerçekleştirilen Erzincan Erzurum Devletyolu üzerindeki Mutu Tünelleri...",
    date: "15 Mayıs 2021",
    category: "Haber",
    image: "/haberler/yapimi-ozdemir-insaat-tarafindan-gerceklestirilen-erzincan-erzurum-devletyolu-uzerindeki.jpg",
    excerpt: "Yapımı ÖZDEMİR İnşaat tarafından gerçekleştirilen Erzincan Erzurum Devletyolu üzerindeki Mutu Tünelleri elektromekanik işleri MC Sistem tarafından 19.12.2016 tarihinde tamamlanarak…",
    body: ["Yapımı ÖZDEMİR İnşaat tarafından gerçekleştirilen Erzincan Erzurum Devletyolu üzerindeki Mutu Tünelleri elektromekanik işleri MC Sistem tarafından 19.12.2016 tarihinde tamamlanarak hizmete açılmıştır. İki şeritli çift tüplü tünellerin elektrik , aydınlatma, trafik kontrol ve otomasyon işleri ÖZDEMİR İnşaat ile MC Sistem arasındaki sözleşme şartlarına uygun olarak başarıyla gerçekleştirilmiştir."],
  },
  {
    slug: "ordu-topcam-devletyolu-uzerindeki-t2-ve-t3-tunelleri-hizmete",
    title: "Ordu Topçam Devletyolu üzerindeki T2 ve T3 Tünelleri Hizmete açıldı",
    date: "15 Mayıs 2021",
    category: "Açılış",
    image: "/haberler/ordu-topcam-devletyolu-uzerindeki-t2-ve-t3-tunelleri-hizmete.jpg",
    excerpt: "Yapımı KALYON İnşaat tarafından gerçekleştirilen Ordu Topçam Devletyolu üzerindeki T2 ve T3 Tünelleri elektromekanik işleri MC Sistem tarafından 24.11.2016 tarihinde tamamlanarak hizmete…",
    body: ["Yapımı KALYON İnşaat tarafından gerçekleştirilen Ordu Topçam Devletyolu üzerindeki T2 ve T3 Tünelleri elektromekanik işleri MC Sistem tarafından 24.11.2016 tarihinde tamamlanarak hizmete açılmıştır. Çift yönlü trafik altında çalışacak tünellerin elektrik , aydınlatma, trafik kontrol ve otomasyon işleri KALYON İnşaat ile MC Sistem arasındaki sözleşme şartlarına uygun olarak başarıyla gerçekleştirilmiştir."],
  },
  {
    slug: "mc-sistem-malatya-havalimani-bakim-hangari-ve-siirt-havalimani",
    title: "MC Sistem Malatya Havalimanı Bakım Hangarı ve Siirt Havalimanı Apron İnşaatı elektromekanik işlerinin sözleşmesini imzaladı",
    date: "15 Mayıs 2021",
    category: "Sözleşme",
    image: "/haberler/mc-sistem-malatya-havalimani-bakim-hangari-ve-siirt-havalimani.jpg",
    excerpt: "MC Sistem Malatya Havalimanı Bakım Hangarı ve Siirt Havalimanı Apron İnşaatı elektromekanik işlerinin sözleşmesini imzaladı. TAI Ana Yükleniciliğinde devam eden Havaalanlarının inşaat…",
    body: ["MC Sistem Malatya Havalimanı Bakım Hangarı ve Siirt Havalimanı Apron İnşaatı elektromekanik işlerinin sözleşmesini imzaladı. TAI Ana Yükleniciliğinde devam eden Havaalanlarının inşaat işleri Unitek İnşaat tarafından anahtar teslim yapılmaktadır. Havaalanlarının elektromekanik işleri için MC Sistem görevli alt yüklenici olarak seçilmiştir. Sistemler altı ay gibi kısa bir sürede tamamlanacaktır."],
  },
  {
    slug: "erzincan-jandarma-kavsagi-alt-gecidi-trafige-acildi",
    title: "Erzincan Jandarma Kavşağı alt geçidi trafiğe açıldı",
    date: "15 Mayıs 2021",
    category: "Açılış",
    image: "/haberler/erzincan-jandarma-kavsagi-alt-gecidi-trafige-acildi.jpg",
    excerpt: "Yapımı, Yüngül İnşaat Sanayi ve Ticaret A.Ş. tarafından gerçekleştirilen, Erzincan Jandarma Kavşağı alt geçidinin elektrik, aydınlatma, trafik ve kontrol sistemleri işleri, MC Sistem…",
    body: ["Yapımı, Yüngül İnşaat Sanayi ve Ticaret A.Ş. tarafından gerçekleştirilen, Erzincan Jandarma Kavşağı alt geçidinin elektrik, aydınlatma, trafik ve kontrol sistemleri işleri, MC Sistem tarafından 26 Aralık 2015 tarihinde tamamlanarak alt geçit trafiğe açılmıştır."],
  },
  {
    slug: "mc-sistem-nrth-100c-sistemi-gelistirme-calismalarina-basladi",
    title: "MC Sistem NRTH-100C Sistemi Geliştirme Çalışmalarına Başladı",
    date: "15 Mayıs 2021",
    category: "Ar-Ge",
    image: "/haberler/mc-sistem-nrth-100c-sistemi-gelistirme-calismalarina-basladi.jpg",
    excerpt: "MC Sistem elektronik anklaşman ve jenerik uygulamalı CTC yazılımından oluşan NRTH-100C Sinyalizasyon Sistemi geliştirme çalışmalarına başladı. Geliştirilecek sistem yüksek güvenlik…",
    body: ["MC Sistem elektronik anklaşman ve jenerik uygulamalı CTC yazılımından oluşan NRTH-100C Sinyalizasyon Sistemi geliştirme çalışmalarına başladı. Geliştirilecek sistem yüksek güvenlik seviyesiyle insan hatasını ortandan kaldıracak ve dispeçerin hatalı yol tayinini imkansız hale getirerek güvenli tren işletmeciliği sağlayacaktır.", "UIC,EN50126,EN50128,EN50129,EN50159,CENELEC ve GOST Standartlarına uygun geliştirilen sistem kullanıldığı ülkenin işletmecilik şartlarına göre kolayca konfigüre edilebilecektir.", "Öncelikli olarak depo ve istasyon sahalarının sinyalizasyonlarında kullanılması planlanan sistem SSI (Solid State Interlocking) teknoloji üzerine kurulu olduğundan kolayca ana hatlarda da kullanılabilecektir.", "MC Sistem geliştirmekte olduğu sistemin sertifikasyon adımlarını sahip olduğu birikim ile gerçekleşirecektir."],
  },
  {
    slug: "mc-sistem-cezayir-de-naciria-tuneli-nin-anahtar-teslim",
    title: "MC Sistem Cezayir de Naciria Tüneli nin Anahtar Teslim Elektromekanik İşleri Sözleşmesini imzaladı",
    date: "15 Mayıs 2021",
    category: "Sözleşme",
    image: "/haberler/mc-sistem-cezayir-de-naciria-tuneli-nin-anahtar-teslim.jpg",
    excerpt: "MC Sistem Naciria Tünelinin elektromekanik işlerini anahtar teslim yapmak üzere Özgün İnşaat ile sözleşme imzaladı. Naciria Tüneli Cezayirde Thenia Thizi-Ouzou Arasında yapını devam eden…",
    body: ["MC Sistem Naciria Tünelinin elektromekanik işlerini anahtar teslim yapmak üzere Özgün İnşaat ile sözleşme imzaladı. Naciria Tüneli Cezayirde Thenia Thizi-Ouzou Arasında yapını devam eden demiryolu hattı üzerinde bulunmaktadır. Uzunluğu 1516 metre olan tünel gelişmiş elektromekanik sistemlere sahiptir.", "Tünel içine kurulacak elektromekanik sistemler İstasyon Binası içine tesis edilecek olan Kontrol Merkezinden yönetilecektir. Uluslararası Demiryolu Güvenlik standartlarına uygun olarak kurulacak sistemler sinyalizasyon sinyalizasyon sistemi ile de uyumlu çalışacaktır."],
  },
  {
    slug: "mc-sistem-irak-ta-gali-zakho-tuneli-nin-anahtar",
    title: "MC Sistem Irak ta Gali Zakho Tüneli nin Anahtar Teslim Elektromekanik İşleri Sözleşmesini imzaladı",
    date: "15 Mayıs 2021",
    category: "Sözleşme",
    image: "/haberler/mc-sistem-irak-ta-gali-zakho-tuneli-nin-anahtar.jpg",
    excerpt: "MC Sistem Gali-Zakho Tünelinin elektromekanik işlerini anahtar teslim yapmak üzere Limak İnşaat ile sözleşme imzaladı. 2x2 şeritli olacak karayolu tüneli, Duhok şehri ile kuzey batısında…",
    body: ["MC Sistem Gali-Zakho Tünelinin elektromekanik işlerini anahtar teslim yapmak üzere Limak İnşaat ile sözleşme imzaladı. 2x2 şeritli olacak karayolu tüneli, Duhok şehri ile kuzey batısında yer alan Zakho’yu birbirine bağlamaktadır. Dağın içerisinden geçen tünel, 3.590metrelik iki ayrı tüpten oluşmaktadır.", "Türkiye ile Irak Kürt Bölgesel Yönetimi arasındaki ticaret yolunda güvenli ve konforlu bir ulaşım sağlanacak olan Gali Zakho Tüneli nin bölgenin genel ekonomik gelişimine ciddi fayda sağlaması beklenmektedir.", "“Design and Built” sözleşme kapsamında MC Sistem Gali Zakho Tüneline “Directive of the European Parliament and of the Council” direktiflerine uygun elektromekanik sistemleri entegre edecektir. Tüm sistemler Kontrol Merkezindeki SCADA Sistemi üzerinden otomatik senaryolar ile çalışacaktır."],
  },
];

// Banner daktilo metinleri
export const heroWords = [
  "Akıllı Ulaşım Sistemleri",
  "Raylı Ulaşım Sistemleri",
  "Metro Sistemleri",
  "Havaalanı Sistemleri",
  "Yeraltı Tesisleri",
  "Elektromekanik Sistemler",
];
