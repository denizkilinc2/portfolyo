import type { ProjeMetinleri } from "./tipler";

export const projelerTr: ProjeMetinleri = {
  rhinoai: {
    ad: "RhinoAI",
    ozet:
      "Kullanıcıların yüz fotoğrafları üzerinden rinoplasti ve fasiyal oran analizi yapan mobil yapay zekâ uygulaması. Yüz landmark tespiti ve derin öğrenme modellerini cihaz üzerinde gerçek zamanlı koşturur.",
    vurgular: [
      "ML Kit Face Mesh ile 468 yüz referans noktasının tespiti ve asimetri hesaplamaları.",
      "TFLite formatına optimize edilmiş modellerle cihaz üzerinde düşük gecikmeli çıkarım.",
      "MVVM ve Jetpack Compose ile modern, reaktif Android mimarisi.",
    ],
    rol: "Uçtan uca geliştirme",
    problem:
      "Rinoplasti öncesi yüz oranı analizi, klinik ortamda uzman ölçümü gerektiren ve kişinin kendi başına erişemediği bir süreç. Mevcut mobil çözümler ise fotoğrafı sunucuya yüklüyor — bu hem gizlilik sorunu yaratıyor hem de internet bağlantısına bağımlı kılıyor.",
    cozum:
      "Yüz landmark tespitini ve derin öğrenme çıkarımını tamamen cihaz üzerinde çalıştıran bir Android uygulaması geliştirdim. ML Kit Face Mesh ile 468 referans noktası tespit ediliyor, bu noktalardan fasiyal oranlar ve asimetri değerleri hesaplanıyor. Ağır sınıflandırma modelleri TensorFlow Lite formatına dönüştürülüp niceleme ile küçültüldü.",
    sonuc:
      "Fotoğraf hiçbir zaman cihazdan çıkmıyor, analiz internet bağlantısı olmadan çalışıyor. Sunucu maliyeti sıfır.",
    neden: [
      {
        baslik: "Neden TensorFlow Lite?",
        aciklama:
          "Vision Transformer tabanlı model doğrudan mobilde çalışamayacak kadar ağırdı. TFLite dönüşümü ve niceleme, model boyutunu ve çıkarım süresini kabul edilebilir seviyeye indirdi.",
      },
      {
        baslik: "Neden Jetpack Compose?",
        aciklama:
          "Kamera önizlemesi üzerine gerçek zamanlı landmark çizimi gerekiyordu. Compose'un reaktif yapısı, her karede güncellenen bu arayüzü XML tabanlı görünümlere göre çok daha temiz yönetiyor.",
      },
    ],
  },

  "otonom-insansiz-kara-araci": {
    ad: "Otonom İnsansız Kara Aracı",
    ozet:
      "Teknoloji Geliştirme Topluluğu bünyesinde geliştirilen; gerçek zamanlı nesne tespiti, engel sakınma ve otonom sürüş algoritmalarını barındıran gömülü sistem projesi.",
    vurgular: [
      "Jetson Orin Nano üzerinde CUDA hızlandırmalı YOLOv8 ile yüksek FPS'li nesne ve engel tespiti.",
      "ROS2 düğümleri arasında sensör ve kamera verisinin düşük gecikmeli haberleşme mimarisi.",
      "Dinamik ortam koşullarında rota optimizasyonu ve otonom navigasyon.",
    ],
    rol: "Görüntü işleme ve otonom sürüş yazılımı",
    problem:
      "Otonom bir kara aracının engelden kaçınabilmesi için nesneyi görmesi yetmez; kararı çarpmadan önce vermesi gerekir. Sınırlı güce sahip gömülü bir kartta yüksek kare hızında nesne tespiti çalıştırmak ve bu veriyi hareket kontrolüne gecikmesiz iletmek, projenin asıl zorluğuydu.",
    cozum:
      "Algılama, karar ve hareket katmanlarını ayrı ROS2 düğümleri olarak kurguladım; aralarındaki iletişimi düşük gecikmeli mesaj kanalları üzerinden yürüttüm. YOLOv8 modelini Jetson Orin Nano üzerinde CUDA hızlandırmasıyla çalıştırdım. Tespit edilen nesnelerin konumu, dinamik rota optimizasyonu yapan navigasyon düğümüne besleniyor.",
    sonuc:
      "Araç, önceden tanımlanmamış engellerin bulunduğu ortamda rotasını gerçek zamanlı yeniden hesaplayarak otonom ilerleyebiliyor.",
    neden: [
      {
        baslik: "Neden ROS2?",
        aciklama:
          "Kamera, sensörler ve motor kontrolü birbirinden bağımsız çalışması gereken parçalar. ROS2'nin düğüm mimarisi, bir parçayı diğerlerini bozmadan değiştirmeye izin verdi.",
      },
      {
        baslik: "Neden Jetson Orin Nano?",
        aciklama:
          "Araç üzerinde çalışacak sistemin hem CUDA destekli olması hem de araç bataryasıyla beslenebilecek güç tüketiminde kalması gerekiyordu.",
      },
    ],
  },

  "time-to-work": {
    ad: "Time to Work International B.V.",
    ozet:
      "Uluslararası istihdam ve danışmanlık hizmeti sunan Hollanda merkezli şirket için geliştirilen yüksek performanslı, çok dilli kurumsal web platformu.",
    vurgular: [
      "Next.js App Router ve SSR/SSG mimarisiyle üst düzey SEO ve hızlı yükleme.",
      "Framer Motion ile akıcı mikro-etkileşimler ve kurumsal tasarım dili.",
      "i18n ile çok dilli içerik yönetimi ve mobil uyumlu arayüz mimarisi.",
    ],
    rol: "Uçtan uca geliştirme",
  },

  focuspulse: {
    ad: "FocusPulse",
    ozet:
      "Kullanıcının çalışma esnasındaki dikkat ve odak durumunu kamera verisi üzerinden analiz eden, gizlilik odaklı takip sistemi. Tüm işlem cihaz üzerinde yapılır.",
    vurgular: [
      "Göz kırpma frekansı, kafa pozisyonu ve bakış yönü takibiyle dikkat dağınıklığı tespiti.",
      "Veriyi hiçbir sunucuya göndermeden tamamen yerel işleyerek gizlilik ve düşük gecikme.",
      "Çalışma periyotlarına göre odaklanma skorları ve istatistiksel raporlama.",
    ],
  },

  "codelens-ar": {
    ad: "CodeLens AR",
    ozet:
      "Artırılmış gerçeklik veya kamera tabanlı görsel girdi üzerinden kod bloklarını ve metinleri tarayıp analiz eden, geliştirici iş akışlarını hızlandırmaya yönelik platform.",
    vurgular: [
      "Kamera akışı üzerinden gerçek zamanlı optik tanıma ve görüntü işleme pipeline'ı.",
      "İstemci tarafı ile arka ofis servisleri arasında optimize edilmiş veri ve push iletim mimarisi.",
      "Geliştirici üretkenliğini artırmaya yönelik hedef odaklı arayüz tasarımı.",
    ],
  },

  "akilli-atik-yonetimi": {
    ad: "Akıllı Atık Yönetimi",
    ozet:
      "Atık toplama süreçlerinin, konteyner doluluk oranlarının ve operasyonel verilerin merkezi olarak izlenmesini sağlayan IoT destekli platformun backend ve veritabanı altyapısı.",
    vurgular: [
      "IoT sensör düğümlerinden gelen veriyi güvenilir işlemek için publish/ack tabanlı veri iletim hattı.",
      "PostgreSQL üzerinde veri tutarlılığını sağlayan ilişkisel şema, migration yönetimi ve sorgu optimizasyonu.",
      "Rol tabanlı erişim kontrolü ve uçtan uca veri senkronizasyonu sunan RESTful API mimarisi.",
    ],
    rol: "Backend ve veritabanı mimarisi",
  },

  "vit-bigru-pipeline": {
    ad: "Hybrid ViT-BiGRU Pipeline",
    ozet:
      "Görsel verilerden uzamsal öznitelik çıkarmak için Vision Transformer, zamansal örüntüleri yakalamak için Bi-directional GRU ağlarını birleştiren hibrit derin öğrenme modeli.",
    vurgular: [
      "ViT ile self-attention tabanlı öznitelik çıkarımı, BiGRU katmanlarıyla sekans modelleme.",
      "Veri ön işleme, data augmentation ve overfitting önleyici düzenlileştirme teknikleri.",
      "Confusion matrix, ROC eğrileri ve eğitim metriklerinin görselleştirilmesi.",
    ],
  },

  "fuzyon-akademi": {
    ad: "Füzyon Akademi",
    ozet:
      "Gaziantep'te robotik kodlama, yazılım, yapay zekâ ve drone eğitimi veren atölyenin kurumsal web sitesi. Statik tanıtım sitesinden başlayıp, kurumun kendi içeriğini yönetebildiği admin panelli dinamik bir platforma dönüştürüldü ve canlıya alındı.",
    vurgular: [
      "Three.js kullanmadan, saf CSS perspective ve preserve-3d ile kurulmuş 3 boyutlu hero sahnesi.",
      "PHP + MySQL admin paneli: galeri, dış bağlantılar, içerik metinleri ve eğitim programları için CRUD.",
      "JSON-LD yapılandırılmış veri, sitemap ve Search Console entegrasyonuyla tam SEO kurulumu.",
      "password_hash ve session_regenerate_id ile şifrelenmiş giriş ve oturum sabitleme koruması.",
      "Kategoriye göre açılan, ok tuşlarıyla gezilebilen özel lightbox galeri sistemi.",
    ],
    rol: "Tasarım, geliştirme ve canlıya alma",
    problem:
      "Kurumun dijital varlığı yalnızca sosyal medya hesaplarından ibaretti. Arama motorlarında bulunamıyor, eğitim programlarını ve başarılarını anlatabileceği bir mecrası yoktu. Ayrıca teknik bilgisi olmayan bir ekibin, her içerik değişikliği için geliştiriciye bağımlı kalmaması gerekiyordu.",
    cozum:
      "Önce framework kullanmadan, hafif ve hızlı bir kurumsal tanıtım sitesi tasarladım; kurumun logosundan türetilen renk paletini CSS değişkenleri üzerinden tek noktadan yönetilebilir kıldım. Ardından siteyi PHP ve MySQL tabanlı dinamik bir yapıya çevirip dört sekmeli bir admin paneli ekledim: galeri, bağlantılar, içerik metinleri ve eğitim programları. Son aşamada siteyi kurumun cPanel hosting'ine taşıyıp DNS, SSL ve karakter kodlama sorunlarını çözerek canlıya aldım.",
    sonuc:
      "Kurum artık galeriyi, eğitim programlarını ve tüm metinleri geliştiriciye ihtiyaç duymadan kendisi güncelleyebiliyor. Site Google Search Console ve İşletme Profili'ne bağlı, geçerli SSL sertifikasıyla yayında.",
    neden: [
      {
        baslik: "Neden framework kullanılmadı?",
        aciklama:
          "Site özünde statik bir tanıtım sitesiydi. React veya Vue eklemek yükleme süresini ve karmaşıklığı artırır, hiçbir gerçek fayda sağlamazdı. Saf HTML, CSS ve JavaScript en hızlı sonucu verdi.",
      },
      {
        baslik: "Neden PHP ve MySQL?",
        aciklama:
          "Kurumun mevcut cPanel hosting'i PHP ve MySQL'i ek maliyet olmadan destekliyordu. Node tabanlı bir çözüm yeni bir sunucu ve aylık gider anlamına gelirdi.",
      },
      {
        baslik: "Neden 3D sahne için Three.js değil?",
        aciklama:
          "Three.js siteye yüz kilobaytlarca ek yük bindirirdi. Aynı görsel etkiyi CSS'in kendi perspective ve preserve-3d özellikleriyle, sıfır ek paketle elde ettim.",
      },
      {
        baslik: "Neden kural tabanlı asistan?",
        aciklama:
          "Gerçek bir yapay zekâ API'si hem aylık ücret gerektirirdi hem de anahtarın istemci tarafında görünmesi güvenlik açığı yaratırdı. Anahtar kelime eşleştirmeli SSS asistanı, ihtiyacı ücretsiz ve güvenli biçimde karşıladı.",
      },
    ],
  },

  "otel-temizlik-takip": {
    ad: "Otel Temizlik Takip",
    ozet:
      "Otellerde oda temizliğini QR kod üzerinden takip eden yönetim sistemi. Personel odayı okutuyor, yönetici tüm katların anlık durumunu tek ekrandan görüyor.",
    vurgular: [
      "QR kod tabanlı oda okutma akışı ve anlık durum güncellemesi.",
      "Kat, oda ve personel bazlı yetkilendirilmiş yönetim paneli.",
      "İlişkisel veritabanı şeması üzerinde raporlama ve geçmiş takibi.",
    ],
  },

  "stm32-arduino-gomulu": {
    ad: "STM32 & Arduino Gömülü Sistemler",
    ozet:
      "Turuncu Bilişim bünyesindeki donanım çalışmaları kapsamında geliştirilen; sensör entegrasyonu, veri işleme ve çevresel birim kontrolü sağlayan düşük seviyeli gömülü yazılımlar.",
    vurgular: [
      "I2C, SPI ve UART protokolleri üzerinden analog/dijital sensör verilerinin okunması ve işlenmesi.",
      "Kesmeler, zamanlayıcılar ve PWM sinyalleriyle hassas donanım kontrolü.",
      "Düşük güç tüketimi ve gerçek zamanlı tepki süreleri için bellek ve kod optimizasyonu.",
    ],
  },

  "gercek-zamanli-backend": {
    ad: "Gerçek Zamanlı Backend Servisleri",
    ozet:
      "Çoklu istemci desteği sunan, çift yönlü soket haberleşmesi ve asenkron veri akışını yöneten mikroservis mimarili backend altyapısı.",
    vurgular: [
      "WebSockets ve Flask-SocketIO ile düşük gecikmeli, olay güdümlü anlık veri iletimi.",
      "FastAPI ve Pydantic ile tip güvenli, otomatik dokümante edilen REST uç noktaları.",
      "Tailscale entegrasyonuyla yerel ve uzak cihazlar arasında şifreli servis haberleşmesi.",
    ],
  },



  "resnet-vgg-kiyaslama": {
    ad: "ResNet50 & VGG19 Model Kıyaslama",
    ozet:
      "Klasik konvolüsyonel mimarileri transfer learning yöntemiyle özel bir veri kümesinde eğiten, doğruluk ve çıkarım hızı kıyaslaması yapan analitik çalışma.",
    vurgular: [
      "Katman bazlı ağırlık dondurma ve özel sınıflandırma katmanlarıyla fine-tuning stratejileri.",
      "Precision, recall ve F1-score metrikleri üzerinden mimari performans karşılaştırması.",
      "CUDA hızlandırmasıyla optimize edilmiş eğitim döngüleri.",
    ],
  },

  "anadolu-diyabet-okulu": {
    ad: "Anadolu Diyabet Okulu",
    ozet:
      "Diyabet hastaları ve yakınları için eğitim içerikleri sunan kurumsal sağlık platformu. İçerik yönetim paneliyle birlikte uçtan uca geliştirildi.",
    vurgular: [
      "Yönetim panelinden düzenlenebilen dinamik içerik ve sayfa yapısı.",
      "Kurumsal kimliğe uygun, mobil uyumlu arayüz mimarisi.",
      "Laravel ve PostgreSQL üzerine kurulu ölçeklenebilir backend.",
    ],
  },

  "stok-takip": {
    ad: "Stok Takip Uygulaması",
    ozet:
      "Ürün giriş-çıkışı, envanter takibi ve raporlama sunan mobil stok yönetim uygulaması.",
    vurgular: [
      "Ürün giriş-çıkış işlemleri ve anlık envanter durumu takibi.",
      "Kategori bazlı listeleme, arama ve filtreleme.",
      "React Native ve Expo ile tek kod tabanından çoklu platform desteği.",
    ],
  },

  ai4change: {
    ad: "AI4Change",
    ozet:
      "Kodluyoruz programı kapsamında, sivil toplum ve sosyal fayda alanındaki problemleri veri analitiği ve makine öğrenmesiyle çözmeye yönelik geliştirilen proje.",
    vurgular: [
      "Ham sosyal verilerin temizlenmesi, öznitelik mühendisliği ve analizi.",
      "Karar ağaçları ve sınıflandırma/regresyon algoritmalarıyla tahminleme modelleri.",
      "Sonuçların karar vericilere yönelik anlaşılır görselleştirmelere dönüştürülmesi.",
    ],
  },

  "kullanici-yonetim-sistemi": {
    ad: "Kullanıcı Yönetim Sistemi",
    ozet:
      "Rol tabanlı erişim kontrolü, dinamik veri sorguları ve oturum güvenliği sağlayan çok katmanlı web backend mimarisi.",
    vurgular: [
      "PDO ve prepared statements ile SQL Injection ve XSS'e karşı güvenli veritabanı katmanı.",
      "Session/cookie tabanlı oturum yönetimi, bcrypt şifreleme ve yetkilendirme mimarisi.",
      "İlişkisel şema tasarımı, foreign key optimizasyonları ve indeksleme.",
    ],
  },

  "2d-buyucu-savasi": {
    ad: "2D Büyücü Savaşı & Masaüstü Simülasyonlar",
    ozet:
      "Nesne yönelimli programlama prensipleri, oyun döngüsü mantığı ve algoritma analizi üzerine kurulu iki oyun/simülasyon projesi.",
    vurgular: [
      "Kalıtım, polimorfizm ve kapsülleme ile karakter mekanikleri, mermi fizikleri ve can/enerji sistemleri.",
      "Çarpışma algılama ve klavye girdilerine dayalı gerçek zamanlı oyun döngüsü.",
      "Dinamik matris yönetimi ve yol izleme algoritmaları.",
    ],
  },
};