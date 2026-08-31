import type { ProjeMetinleri } from "./tipler";

export const projelerTr: ProjeMetinleri = {
  rhinoai: {
    ad: "RhinoAI",
    ozet:
      "Rinoplasti öncesi ve sonrası yüz oranlarını nesnel biçimde ölçen mobil yapay zekâ uygulaması. Yüz landmark tespiti ve derin öğrenme çıkarımı tamamen cihaz üzerinde, gerçek zamanlı çalışır.",
    vurgular: [
      "ML Kit Face Mesh ile 468 yüz referans noktasının tespiti ve asimetri hesaplamaları.",
      "Canlı kamera akışında 30+ FPS ile nazolabial ve dorsal açıların anlık analizi.",
      "TFLite formatına optimize edilmiş modellerle cihaz üzerinde düşük gecikmeli çıkarım.",
      "MVVM ve Jetpack Compose ile modern, reaktif Android mimarisi.",
      "Açık kaynak olarak GitHub'da yayımlandı.",
    ],
    rol: "Bireysel geliştirici — mobil ve uç yapay zekâ",
    problem:
      "Rinoplasti öncesi ve sonrası analizde ameliyat planlaması ve asimetri tespiti büyük ölçüde hekimin öznel gözlemine dayanıyor. Hastaya açısal ve milimetrik oranları anlık gösteren hafif bir mobil araç yoktu. Mevcut mobil çözümler ise fotoğrafı sunucuya yüklüyor — bu hem mahremiyet sorunu yaratıyor hem de internet bağlantısına bağımlı kılıyor.",
    cozum:
      "Kotlin ve Jetpack Compose üzerine yerel bir Android mimarisi kurdum. ML Kit Face Mesh entegrasyonuyla yüz işaretçileri milisaniyeler içinde haritalanıyor; görüntü analizi ve burun açısı hesaplamaları için TensorFlow Lite modellerini doğrudan cihaz üzerinde çalıştırdım. Ağır sınıflandırma modelleri TFLite formatına dönüştürülüp niceleme ile küçültüldü.",
    sonuc:
      "Sıfır sunucu maliyetiyle tamamen yerel çalışan, canlı kamera akışında 30+ FPS ile yüz hatlarını ve nazolabial/dorsal açıları analiz eden bir uygulama ortaya çıktı. Açık kaynak olarak yayımlandı.",
    neden: [
      {
        baslik: "Neden cihaz üzerinde çıkarım?",
        aciklama:
          "Görüntü akışını bir Python FastAPI arka ucuna göndermek yerine her şeyi cihazda çalıştırmayı seçtim. Sağlıkla ilgili bir uygulamada fotoğrafın hiç cihazdan çıkmaması, sunucu tarafında alınabilecek her önlemden daha güçlü bir mahremiyet güvencesi. Aynı karar sıfır gecikme ve internet bağımsızlığı da getirdi.",
      },
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
      "Teknoloji Geliştirme ve Uygulama Topluluğu bünyesinde geliştirilen; gerçek zamanlı nesne tespiti, engel sakınma ve otonom sürüş algoritmalarını barındıran gömülü sistem projesi.",
    vurgular: [
      "Jetson Orin Nano üzerinde CUDA hızlandırmalı YOLOv8 ile yüksek FPS'li nesne ve engel tespiti.",
      "ROS2 tabanlı dağıtık düğüm mimarisiyle sensör, karar ve hareket katmanlarının ayrıştırılması.",
      "Algılanan nesne konumlarının motor sürücü kontrol algoritmalarına düşük gecikmeli aktarımı.",
      "Zorlu parkurlarda sahada test edilmiş dinamik rota düzeltme yeteneği.",
    ],
    rol: "Otonom algoritmalar ve gömülü görüntü işleme",
    problem:
      "Zorlu zemin koşullarında ve engelli sahalarda aracın insan müdahalesi olmadan çevreyi gerçek zamanlı algılaması, engellerden kaçınması ve hedef rotayı takip etmesi gerekiyordu. Asıl zorluk şuydu: nesneyi görmek yetmez, kararın çarpmadan önce verilmesi gerekir — üstelik sınırlı güce sahip gömülü bir kart üzerinde.",
    cozum:
      "ROS2 tabanlı dağıtık bir düğüm mimarisi kurguladım; algılama, karar ve hareket katmanları birbirinden bağımsız düğümler olarak çalışıyor ve aralarında düşük gecikmeli mesaj kanallarıyla haberleşiyor. YOLOv8 modelini Jetson Orin Nano üzerinde CUDA hızlandırmasıyla optimize ederek nesne tespit boru hattını kurdum; tespit edilen nesnelerin konumu doğrudan motor sürücü kontrol algoritmalarına aktarılıyor.",
    sonuc:
      "Gerçek zamanlı engel algılama ve dinamik rota düzeltme yeteneğine sahip, zorlu parkurlarda sahada test edilmiş çalışan bir otonom kara aracı platformu ortaya çıktı.",
    neden: [
      {
        baslik: "Neden CUDA hızlandırmalı YOLOv8?",
        aciklama:
          "MobileNet gibi CPU üzerinde koşan hafif modeller daha az güç harcardı ama sahadaki küçük ve karmaşık engellerde doğruluk kaybı veriyordu. Jetson üzerinde donanım hızlandırması, doğruluktan ödün vermeden yüksek FPS'e ulaşmayı sağladı.",
      },
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
      "Uluslararası iş gücü ve istihdam hizmeti sunan Hollanda merkezli şirket için sıfırdan kurulan, çok dilli ve SEO odaklı kurumsal web platformu.",
    vurgular: [
      "Next.js App Router üzerine kurulu, SSR ve statik üretimi birlikte kullanan modüler mimari.",
      "Performans kaybı yaratmayan dinamik çok dilli (i18n) yapı.",
      "Framer Motion ile akıcı arayüz etkileşimleri ve kurumsal tasarım dili.",
      "Tüm cihazlarda sorunsuz çalışan duyarlı başvuru akışı.",
    ],
    rol: "Frontend mimarisi, lokalizasyon ve dağıtım",
    problem:
      "Şirketin mevcut web altyapısı yavaştı, duyarlı tasarım standartlarının gerisindeydi ve çok dilli desteği hantal çalışıyordu. Uluslararası aday ve şirketlere hitap eden bir kurumun dijital yüzü olarak kurumsal kimliği yansıtmakta da yetersiz kalıyordu.",
    cozum:
      "Next.js App Router, TypeScript ve Tailwind CSS temelinde modüler ve SEO odaklı bir mimari kurdum. Arayüz etkileşimleri için Framer Motion entegre ettim. Çok dilli yapıyı, her dil için ayrı sayfa üretilecek ve performans bedeli doğurmayacak şekilde kurguladım.",
    sonuc:
      "Uluslararası adayların ve şirketlerin her cihazdan rahatça başvuru yapabildiği kurumsal platform yayına alındı ve halen ttw-international.nl adresinde çalışıyor.",
    neden: [
      {
        baslik: "Neden Next.js SSR/SSG, klasik React SPA değil?",
        aciklama:
          "Uluslararası bir istihdam şirketinde arama motorundan gelen trafik doğrudan iş demek. Tek sayfalık bir React uygulamasında içerik tarayıcıda üretilir ve arama motorları için gecikmeli görünür. Sunucu tarafı üretim ve statik sayfalarla hem indeksleme hem ilk yükleme süresi maksimuma çıktı.",
      },
      {
        baslik: "Neden dinamik i18n?",
        aciklama:
          "Çok dilli siteler genelde ya her dili ayrı bir kod tabanına ayırır ya da tüm çevirileri istemciye yükler. İlki bakımı imkânsızlaştırır, ikincisi sayfa boyutunu şişirir. Sayfa başına yalnızca o dilin metinlerinin gittiği bir yapı kurdum.",
      },
      {
        baslik: "Neden Tailwind?",
        aciklama:
          "Kurumsal kimliğe özel bir tasarım gerekiyordu ve hazır bileşen kütüphanesi kullanmak her ekranda kimliği zorlamak demekti. Tailwind, tasarımı sıfırdan kurarken tutarlı bir ölçek ve renk sistemi sağladı.",
      },
    ],
  },

  focuspulse: {
    ad: "FocusPulse",
    ozet:
      "Çalışma seansları sırasında odak ve dikkat durumunu kamera verisi üzerinden analiz eden Android uygulaması. Tüm işlem cihaz üzerinde yapılır, görüntü hiç dışarı çıkmaz.",
    vurgular: [
      "Göz kırpma frekansı, kafa pozisyonu ve bakış yönü takibiyle dikkat dağınıklığı tespiti.",
      "Anlık odak dağılma indeksi hesaplayan, cihaz üzerinde çalışan görüntü işleme mimarisi.",
      "TFLite formatına dönüştürülmüş modellerle düşük gecikmeli çıkarım.",
      "Dinamik mola önerileri ve uyarı geri bildirimleri.",
      "Veri hiçbir sunucuya gitmeden tamamen yerel işlenir.",
    ],
    rol: "Bireysel geliştirici — Android ve uç yapay zekâ",
    problem:
      "Uzaktan çalışmada ve yoğun seanslarda odak kaybı ile yorgunluk nesnel olarak takip edilemiyor. Piyasadaki çözümlerin çoğu ise kamera görüntüsünü buluta aktarıyor — yani çalışanı izlemek için mahremiyetinden vazgeçmesini istiyor.",
    cozum:
      "Göz kırpma frekansı, kafa pozisyonu ve bakış yönünü analiz eden, tamamen cihaz üzerinde çalışan bir Android uygulaması geliştirdim. Model tarafını Python ve OpenCV ile prototipleyip TFLite formatına dönüştürdüm; uygulama içinde bu hafifletilmiş modeller çalışıyor. Sinyaller anlık bir odak dağılma indeksine dönüştürülüyor ve buna göre dinamik mola önerileri üretiliyor.",
    sonuc:
      "Kullanıcı görüntüsünü asla cihaz dışına çıkarmayan, anlık odak indeksini hesaplayan ve mola geri bildirimleri üreten çalışan bir Android uygulaması ortaya çıktı.",
    neden: [
      {
        baslik: "Neden bulut değil, cihaz üzerinde çıkarım?",
        aciklama:
          "Bulut tabanlı görsel analiz API'leri daha güçlü modeller sunuyor ama sistemin amacıyla çelişiyor: kişinin çalışırken sürekli izlendiği bir uygulamada görüntünün buluta gitmesi kabul edilemez. Cihaz üzerinde hafifletilmiş çıkarım hem bu sorunu tamamen ortadan kaldırdı hem de ağ bağımlılığını sıfırladı.",
      },
      {
        baslik: "Neden model Python'da geliştirildi ama uygulama Kotlin?",
        aciklama:
          "Model denemeleri ve doğrulama için Python ekosistemi karşılaştırılamayacak kadar hızlı. Ama son ürün bir Android uygulaması olacaktı; modeli TFLite'a dönüştürüp Kotlin tarafında çalıştırmak, geliştirme hızından ödün vermeden yerel performans sağladı.",
      },
      {
        baslik: "Neden davranış sinyalleri, doğrudan sınıflandırma değil?",
        aciklama:
          "\"Odaklanmış / dağınık\" diye tek bir sınıflandırma yapmak yerine göz kırpma, kafa pozisyonu ve bakış yönü gibi ayrı sinyalleri ölçüp bunlardan bir indeks türetmeyi seçtim. Böylece sonuç açıklanabilir kaldı — kullanıcı neden uyarı aldığını görebiliyor.",
      },
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
      "Görsel verilerden uzamsal öznitelikleri Vision Transformer ile, zamansal örüntüleri çift yönlü GRU ağlarıyla yakalayan hibrit derin öğrenme ardışık düzeni.",
    vurgular: [
      "ViT bloklarının uzamsal öznitelik çıkarıcı olarak kullanılması, çıkan vektörlerin BiGRU katmanlarına aktarılması.",
      "PyTorch ve TensorFlow üzerinde CUDA hızlandırmalı eğitim ve doğrulama döngüleri.",
      "Veri ön işleme, data augmentation ve overfitting önleyici düzenlileştirme teknikleri.",
      "Confusion matrix, ROC eğrileri ve eğitim metriklerinin görselleştirilmesi.",
    ],
    rol: "Derin öğrenme araştırmacısı ve model geliştirici",
    problem:
      "Yalnızca konvolüsyonel ya da yalnızca tekrarlamalı mimariler, ardışık görsel verilerde iki şeyi aynı anda yakalayamıyor: karedeki uzamsal detay ile kareler arasındaki uzun vadeli zamansal bağlam. Biri güçlendiğinde diğeri zayıflıyor.",
    cozum:
      "Vision Transformer bloklarının uzamsal öznitelik çıkarıcı olarak kullanıldığı, çıkan vektörlerin çift yönlü BiGRU katmanlarına aktarıldığı hibrit bir ardışık düzen kodladım. Python, PyTorch ve TensorFlow üzerinde CUDA hızlandırmalı eğitim ve doğrulama döngülerini kurdum; sonuçları confusion matrix, ROC eğrileri ve eğitim metrikleriyle görselleştirdim.",
    sonuc:
      "Standart CNN-LSTM modellerine kıyasla karmaşık zamansal veri kümelerinde doğruluk ve F1-score metriklerinde ölçülebilir artış sağlayan, akademik ve pratik kullanıma uygun bir model mimarisi elde edildi.",
    neden: [
      {
        baslik: "Neden LSTM değil BiGRU?",
        aciklama:
          "GRU, LSTM'e göre daha az parametreyle çalışıyor; bu eğitim süresini ve bellek tüketimini ciddi oranda düşürdü. Çift yönlü yapı sayesinde model hem geçmiş hem gelecek bağlamı görebiliyor, dolayısıyla parametreden kazanılan yer başarımdan kaybettirmedi.",
      },
      {
        baslik: "Neden ViT, CNN değil?",
        aciklama:
          "Konvolüsyonel katmanlar yerel örüntüleri iyi yakalıyor ama uzak bölgeler arasındaki ilişkiyi kurmakta zorlanıyor. Vision Transformer'ın self-attention yapısı, karenin tamamındaki ilişkileri tek adımda değerlendirdiği için sekans modeline daha zengin bir öznitelik vektörü besliyor.",
      },
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
      "QR kod tabanlı, çok dilli otel operasyon sistemi. Admin, müdür ve personel için ayrı yetki katmanları; misafirler QR okutarak kendi arayüzüne giriyor. Otellere satılan ve her kuruluma özel yapılandırılan ticari bir ürün olarak geliştirildi.",
    vurgular: [
      "Admin, müdür, personel ve misafir olmak üzere dört ayrı rol ve yetki katmanı.",
      "QR kod okutma akışıyla oda durumunun anlık güncellenmesi; müdür tüm katları tek ekrandan izliyor.",
      "Çok dilli arayüz — hem yabancı misafirler hem de farklı dil konuşan personel için.",
      "Kat, oda ve personel bazlı raporlama ile geçmiş temizlik kayıtlarının takibi.",
      "Her otel için ayrı kurulum ve özelleştirme yapılabilecek yapılandırılabilir mimari.",
    ],
    rol: "Uçtan uca geliştirme",
    problem:
      "Otel temizlik operasyonunda asıl zorluk, bir odanın o an hangi durumda olduğunu tüm ekibin aynı anda bilmesi. Kat görevlisi, kat şefi ve resepsiyon arasındaki bilgi akışı koptuğunda misafir hazır olmayan bir odaya yönlendirilebiliyor. Bunun üzerine, sistemin farklı dilleri konuşan personelle çalışması ve satılan her otelin kendi ihtiyacına göre yapılandırılabilmesi gerekiyordu.",
    cozum:
      "Her odaya bir QR kod tanımladım; personel odaya girdiğinde kodu okutuyor ve durum anında merkezi sisteme yazılıyor. Yetkileri dört katmana ayırdım: admin sistemi yönetiyor, müdür tüm katların anlık durumunu tek ekrandan görüyor, personel yalnızca kendi görevlerini, misafir ise QR üzerinden kendine ayrılmış arayüze ulaşıyor. Arayüzü baştan çok dilli kurguladım. Her otele ayrı kurulum yapılabilmesi için otel bilgileri, oda yapısı ve marka öğeleri yapılandırılabilir tutuldu.",
    sonuc:
      "Sistem teknohygiene.com adresinde canlıda. Ticari ürün olarak konumlandırıldı; satılan her otel için ayrı kurulum yapılıp o otelin yapısına göre özelleştiriliyor.",
    neden: [
      {
        baslik: "Neden QR kod?",
        aciklama:
          "NFC veya özel bir el terminali donanım yatırımı gerektirirdi. QR kod, personelin kendi telefonuyla çalışıyor; otelin tek yapması gereken kâğıt etiketleri odalara asmak.",
      },
      {
        baslik: "Neden mobil uygulama değil de web?",
        aciklama:
          "Uygulama olsaydı her personelin kurulum yapması, mağaza onayı beklemesi ve güncellemeleri indirmesi gerekirdi. Tarayıcı üzerinden çalışan bir sistemde QR okutmak doğrudan doğru sayfayı açıyor, kurulum adımı hiç yok.",
      },
      {
        baslik: "Neden çok dilli?",
        aciklama:
          "Otel personeli ve misafir kitlesi çoğu zaman aynı dili konuşmuyor. Dil desteği sonradan eklenen bir özellik değil, sistemin ilk günden tasarım kararıydı.",
      },
      {
        baslik: "Neden Laravel?",
        aciklama:
          "Yetkilendirme, çoklu rol ve yönetim paneli gibi ihtiyaçların tamamı çerçevenin içinde hazır geliyor. Ayrıca hedef müşterilerin kullandığı cPanel hosting'lerde ek maliyetsiz çalışıyor.",
      },
    ],
  },

  "stm32-arduino-gomulu": {
    ad: "STM32 & Arduino Gömülü Sistemler",
    ozet:
      "Sensör verilerinin senkron toplanması, yerel ekranlara düşük gecikmeyle basılması ve mikrodenetleyiciler arası haberleşme standardının kurulması üzerine geliştirilen düşük seviyeli gömülü yazılımlar.",
    vurgular: [
      "STM32 üzerinde HAL/LL kütüphaneleriyle register ve sürücü seviyesinde kodlama.",
      "I2C, SPI ve UART protokolleri üzerinden SSD1306 OLED ekran ve sensör modülleri için haberleşme sürücüleri.",
      "Kesmeler ve zamanlayıcılarla yönetilen, kilitlenmeye kapalı gerçek zamanlı okuma mimarisi.",
      "Düşük güç tüketimi ve gerçek zamanlı tepki süreleri için bellek ve kod optimizasyonu.",
    ],
    rol: "Gömülü yazılım geliştirici",
    problem:
      "Donanım düzeyinde sıcaklık, ivme ve mesafe gibi sensör verilerinin senkron biçimde toplanması, yerel ekranlara düşük gecikmeyle basılması ve mikrodenetleyiciler arası güvenli bir haberleşme standardının kurulması gerekiyordu.",
    cozum:
      "C ve C++ kullanarak STM32 üzerinde HAL/LL kütüphaneleriyle ve Arduino Uno üzerinde register seviyesinde kodlama yaptım. I2C, SPI ve UART protokolleri üzerinden SSD1306 OLED ekranlar ve çeşitli sensör modülleri için haberleşme sürücüleri geliştirdim. Okuma döngüsünü kesmeler ve zamanlayıcılar üzerine kurdum.",
    sonuc:
      "Donanım kilitlenmelerinden arındırılmış, kesmelerle yönetilen, gerçek zamanlı veri okuma ve görselleştirme yapabilen stabil donanım prototipleri üretildi.",
    neden: [
      {
        baslik: "Neden kesme tabanlı okuma, polling değil?",
        aciklama:
          "Sürekli yoklama döngüsü mikrodenetleyicinin işlemcisini boşuna meşgul ediyor ve iki yoklama arasına düşen anlık sinyaller kaçıyor. Donanım kesmeleri ve zamanlayıcı tabanlı periyodik okumaya geçince işlemci boşta kalabildi ve sinyaller sıfır kayıpla yakalandı.",
      },
      {
        baslik: "Neden HAL/LL seviyesinde kod?",
        aciklama:
          "Hazır kütüphaneler hızlı sonuç verir ama donanımın gerçekte ne yaptığını gizler. Register seviyesine inmek, zamanlama ve güç davranışını doğrudan kontrol etmeyi ve sorunları tahmin yerine ölçerek çözmeyi mümkün kıldı.",
      },
    ],
  },

  "gercek-zamanli-backend": {
    ad: "Gerçek Zamanlı Backend Servisleri",
    ozet:
      "Çift yönlü soket haberleşmesi ve olay tabanlı veri akışı üzerine kurulu, eşzamanlı çok sayıda istemciyi yöneten mikroservis mimarili backend altyapısı.",
    vurgular: [
      "Python ve Node.js tarafında olay tabanlı, çift yönlü soket mimarileri.",
      "WebSockets ve Flask-SocketIO ile düşük gecikmeli anlık veri iletimi.",
      "FastAPI ve Pydantic ile tip güvenli, otomatik dokümante edilen REST uç noktaları.",
      "PostgreSQL ve MySQL bağlantılarının ve oturum yönetiminin merkezi kurgusu.",
    ],
    rol: "Backend ve sistem mimarisi",
    problem:
      "Klasik REST mimarisinde istemcinin veriyi almak için sürekli istek atması gerekiyor. Bu, sunucu kaynaklarını gereksiz yere tüketiyor ve anlık veri gerektiren sistemlerde hem yüksek gecikmeye hem de istemciler arasında veri tutarsızlığına yol açıyor.",
    cozum:
      "Python tarafında Flask-SocketIO ve FastAPI, Node.js tarafında Express ve WebSockets kullanarak çift yönlü, olay tabanlı soket mimarileri kurdum. Veri değiştiğinde sunucu istemciye kendisi haber veriyor; istemcinin sorması gerekmiyor. Arka planda PostgreSQL ve MySQL bağlantılarını ve oturum yönetimini merkezi biçimde kurguladım.",
    sonuc:
      "İstemciler arasında veri iletim süresini milisaniyeler seviyesine indiren, sunucu yükünü düşüren ve eşzamanlı bağlantıları hatasız yöneten ölçeklenebilir servisler hayata geçti.",
    neden: [
      {
        baslik: "Neden WebSockets, HTTP long polling değil?",
        aciklama:
          "Long polling her istekte HTTP başlıklarını yeniden taşıyor ve bağlantıyı sürekli kurup kapatıyor. Kalıcı soket bağlantısında bu yük tamamen ortadan kalkıyor; hem bant genişliği hem yanıt süresi minimuma iniyor.",
      },
      {
        baslik: "Neden hem Python hem Node.js?",
        aciklama:
          "Farklı servislerin farklı ihtiyaçları vardı. Veri işleme ve tip güvenliği gereken uçlarda FastAPI ve Pydantic, yoğun eşzamanlı bağlantı yönetiminde Node.js ve Express daha iyi sonuç verdi. Tek dile zorlamak yerine her servisi kendi işine uygun araçla yazdım.",
      },
    ],
  },

  "resnet-vgg-kiyaslama": {
    ad: "ResNet50 & VGG19 Model Kıyaslama",
    ozet:
      "İki klasik konvolüsyonel mimariyi aynı veri kümesinde transfer learning ile eğitip doğruluk, çıkarım süresi ve model boyutu ekseninde karşılaştıran analitik çalışma.",
    vurgular: [
      "Transfer learning ile önceden eğitilmiş ResNet50 ve VGG19 modellerinin aynı veri kümesinde optimize edilmesi.",
      "Katman bazlı ağırlık dondurma ve özel sınıflandırma katmanlarıyla fine-tuning stratejileri.",
      "Loss/accuracy eğrileri, confusion matrix ve çıkarım gecikmesi metriklerini görselleştiren karşılaştırma betikleri.",
      "Precision, recall ve F1-score üzerinden mimari performans karşılaştırması.",
    ],
    rol: "Veri bilimi ve model değerlendirme",
    problem:
      "Belirli bir görüntü sınıflandırma probleminde hangi konvolüsyonel mimarinin doğruluk, çıkarım süresi, model boyutu ve aşırı öğrenme dengesinde daha verimli olduğu bilinmiyordu. Karar sezgiye değil ölçüme dayanmalıydı.",
    cozum:
      "Transfer learning prensiplerini uygulayarak önceden eğitilmiş ResNet50 ve VGG19 modellerini aynı veri kümesi üzerinde optimize ettim. Katman bazlı ağırlık dondurma ve özel sınıflandırma katmanlarıyla fine-tuning yaptım. Matplotlib ve Seaborn kullanarak loss/accuracy eğrilerini, confusion matrix'i ve çıkarım gecikmesi metriklerini görselleştiren karşılaştırma betikleri geliştirdim.",
    sonuc:
      "İki mimarinin güçlü ve zayıf yönlerini istatistiksel olarak ortaya koyan, ileride uç birim dağıtımlarında donanım ve model seçimine dayanak sağlayan kapsamlı bir analiz çıktısı elde edildi.",
    neden: [
      {
        baslik: "Neden ResNet'in artık bağlantıları kritik?",
        aciklama:
          "VGG gibi düz derin mimarilerde katman sayısı arttıkça gradyanlar kayboluyor ve model daha derin olmasına rağmen daha kötü öğreniyor. ResNet'in skip connection yapısı bu sorunu çözüyor; ölçümler daha az parametreyle daha yüksek doğruluk ve hız verdiğini deneysel olarak gösterdi.",
      },
      {
        baslik: "Neden transfer learning?",
        aciklama:
          "İki mimariyi sıfırdan eğitmek hem çok daha uzun sürerdi hem de veri kümesinin boyutu buna elverişli değildi. Önceden eğitilmiş ağırlıklardan başlayıp son katmanları uyarlamak, karşılaştırmayı adil ve tekrarlanabilir kıldı.",
      },
    ],
  },

  "anadolu-diyabet-okulu": {
    ad: "Anadolu Diyabet Okulu",
    ozet:
      "Diyabet hastaları ve yakınları için kurulan çok modüllü eğitim platformu. Tanıtım sayfaları, ders ve öğrenci paneli, sepet ve sipariş akışıyla kurs satışı, yönetim paneli ve ayrı girişli Kronik Rehber modülünü bir arada barındırıyor.",
    vurgular: [
      "Öğrenci paneli, ders takibi ve içerik yönetimini bir arada yürüten çok modüllü platform mimarisi.",
      "Ders videolarının Bunny Stream üzerinde barındırılması; dosya kullanıcının tarayıcısından doğrudan servise gidiyor, sunucudan hiç geçmiyor.",
      "Sepet ve sipariş akışıyla kurulmuş kurs satış altyapısı.",
      "Ayrı giriş ve yetkilendirmeye sahip bağımsız Kronik Rehber modülü.",
      "cPanel ortamına taşınıp SSL sertifikasıyla canlıya alınması.",
    ],
    rol: "Uçtan uca geliştirme ve canlıya alma",
    problem:
      "Kurumun elindeki site sade bir tanıtım sayfasıydı; eğitim içeriğini yayımlayacak, öğrencilerin ilerlemesini takip edecek veya kurs satışı yapacak bir altyapısı yoktu. Buna ek olarak ciddi bir teknik kısıt vardı: kurumun paylaşımlı hosting paketi video barındırmaya izin vermiyordu, oysa platformun özü ders videolarıydı.",
    cozum:
      "Siteyi baştan aşağı yeniden kurdum ve çok modüllü bir platforma dönüştürdüm: tanıtım sayfaları, ücretsiz derslerin sunulduğu öğrenci paneli, sepet ve sipariş akışıyla satış katmanı, içerik yönetimi için admin paneli ve ayrı girişi olan Kronik Rehber modülü. Video kısıtını, dosyaları Bunny Stream üzerinde barındırarak çözdüm — yönetici panelden yükleme yaptığında dosya doğrudan tarayıcıdan Bunny'ye gidiyor, hosting sunucusuna hiç uğramıyor. Son aşamada platformu cPanel ortamına taşıyıp DNS'i çevirdim ve SSL ile canlıya aldım.",
    sonuc:
      "Platform anadoludiyabetokulu.com adresinde SSL sertifikasıyla yayında. Kurum ders içeriğini, sayfa metinlerini ve kurs yapısını yönetim panelinden kendisi güncelleyebiliyor; video altyapısı hosting kısıtından tamamen bağımsız çalışıyor.",
    neden: [
      {
        baslik: "Neden Bunny Stream?",
        aciklama:
          "Paylaşımlı hosting paketleri video barındırmaya izin vermiyor ve verse bile bant genişliği ilk yüz izleyicide tükenirdi. Bunny Stream ile dosya kullanıcının tarayıcısından doğrudan servise yükleniyor; sunucu ne depolama ne de bant genişliği yükü alıyor.",
      },
      {
        baslik: "Neden MySQL'e geçildi?",
        aciklama:
          "Geliştirme PostgreSQL ile başlamıştı ama kurumun cPanel hosting'i MySQL sunuyordu. Canlı ortamla geliştirme ortamının aynı veritabanını kullanması, taşıma sırasında sürpriz çıkmasını engelledi.",
      },
      {
        baslik: "Neden Kronik Rehber ayrı bir modül?",
        aciklama:
          "Farklı bir kullanıcı kitlesine ve farklı bir erişim mantığına sahipti. Ana platformun içine gömmek yerine ayrı giriş ve yetkilendirmeyle kurgulamak, iki tarafın da birbirini etkilemeden gelişmesine izin verdi.",
      },
      {
        baslik: "Neden Laravel?",
        aciklama:
          "Öğrenci hesapları, yetkilendirme, sipariş akışı ve yönetim paneli gibi katmanların tamamı çerçevenin sunduğu yapılarla kuruldu. Ayrıca kurumun mevcut cPanel hosting'inde ek maliyet olmadan çalışıyor.",
      },
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
      "Nesne yönelimli programlama prensipleri, özel bir oyun döngüsü ve fizik motoru üzerine sıfırdan kurulmuş iki masaüstü oyun ve simülasyon projesi.",
    vurgular: [
      "Kalıtım, polimorfizm ve kapsülleme merkezli modüler oyun motoru yapısı.",
      "Sıfırdan yazılmış AABB çarpışma algılama, mermi mekaniği ve can/enerji yönetimi.",
      "Dinamik grid ve mayın tarlası üzerinde yol bulma algoritmaları.",
      "İki oyuncunun klavyeyle eşzamanlı oynayabildiği, akıcı kare oranına sahip oyun döngüsü.",
    ],
    rol: "Bağımsız geliştirici — oyun döngüsü, fizik ve arayüz",
    problem:
      "Nesne yönelimli programlama prensiplerini, çarpışma ve fizik algoritmalarını ve dinamik yol bulma mantığını masaüstü bir arayüz ortamında, kare düşüşü yaşamadan simüle etmek gerekiyordu.",
    cozum:
      "Java ve Swing ortamında kalıtım, polimorfizm ve kapsülleme merkezli modüler bir oyun motoru yapısı kurdum. AABB çarpışma algılama, mermi mekaniği, can barı ve durum yönetimini sıfırdan geliştirdim; ayrıca dinamik grid ve mayın tarlası üzerinde yol bulma algoritmaları yazdım.",
    sonuc:
      "İki oyuncunun klavye kontrolleriyle eşzamanlı rekabet edebildiği, bellek sızıntısı olmayan ve akıcı kare oranına sahip masaüstü uygulamalar ve simülasyonlar tamamlandı.",
    neden: [
      {
        baslik: "Neden hazır oyun motoru kullanılmadı?",
        aciklama:
          "Amaç bir oyun yayımlamak değil, oyun döngüsünün ve fizik hesaplarının nasıl çalıştığını doğrudan yazarak öğrenmekti. Hazır bir motor bu katmanı gizler. Graphics2D üzerinde sabit adımlı kendi döngümü yazmak, iş parçacığı yönetimini ve zamanlama mantığını doğrudan görmemi sağladı.",
      },
      {
        baslik: "Neden sabit adımlı güncelleme?",
        aciklama:
          "Kare hızına bağlı güncelleme, hızlı ve yavaş makinelerde farklı fizik davranışı üretiyor. Sabit adımlı döngüde fizik her makinede aynı sonucu veriyor; çizim hızı ayrı, hesap hızı ayrı ilerliyor.",
      },
    ],
  },
};