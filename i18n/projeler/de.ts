import type { KismiProjeMetinleri } from "./tipler";

/* Henüz çevrilmemiş projeler Türkçe metne düşer. */
export const projelerDe: KismiProjeMetinleri = {
  rhinoai: {
    ad: "RhinoAI",
    ozet:
      "Eine mobile KI-Anwendung, die anhand eines Nutzerfotos Rhinoplastik- und Gesichtsproportionsanalysen durchführt. Landmark-Erkennung und Deep-Learning-Inferenz laufen in Echtzeit vollständig auf dem Gerät.",
    vurgular: [
      "Erkennung von 468 Gesichtsreferenzpunkten mit ML Kit Face Mesh und Berechnung von Asymmetriewerten.",
      "Latenzarme On-Device-Inferenz mit Modellen, die für TFLite optimiert und konvertiert wurden.",
      "Moderne, reaktive Android-Architektur auf Basis von MVVM und Jetpack Compose.",
    ],
    rol: "Durchgängige Entwicklung",
    problem:
      "Die Analyse von Gesichtsproportionen vor einer Rhinoplastik erfordert normalerweise eine fachärztliche Vermessung in der Klinik — etwas, das eine Person nicht selbst durchführen kann. Bestehende mobile Lösungen laden das Foto auf einen Server hoch, was ein Datenschutzproblem schafft und die App von einer Internetverbindung abhängig macht.",
    cozum:
      "Ich habe eine Android-Anwendung entwickelt, die sowohl die Landmark-Erkennung als auch die Deep-Learning-Inferenz vollständig auf dem Gerät ausführt. ML Kit Face Mesh erkennt 468 Referenzpunkte, aus denen Gesichtsverhältnisse und Asymmetriewerte berechnet werden. Die schwereren Klassifikationsmodelle wurden nach TensorFlow Lite konvertiert und durch Quantisierung verkleinert.",
    sonuc:
      "Das Foto verlässt das Gerät nie, die Analyse funktioniert ohne Internetverbindung, und es entstehen keine Serverkosten.",
    neden: [
      {
        baslik: "Warum TensorFlow Lite?",
        aciklama:
          "Das Vision-Transformer-basierte Modell war deutlich zu schwer, um direkt auf dem Mobilgerät zu laufen. Die TFLite-Konvertierung und Quantisierung brachten sowohl Modellgröße als auch Inferenzzeit auf ein akzeptables Niveau.",
      },
      {
        baslik: "Warum Jetpack Compose?",
        aciklama:
          "Die App musste Landmarks in Echtzeit über eine Live-Kameravorschau zeichnen. Das reaktive Modell von Compose bewältigt eine Oberfläche, die sich in jedem Frame aktualisiert, deutlich sauberer als XML-basierte Views.",
      },
    ],
  },

  "otonom-insansiz-kara-araci": {
    ad: "Autonomes unbemanntes Landfahrzeug",
    ozet:
      "Ein Embedded-Systems-Projekt, entwickelt innerhalb einer Technologiegesellschaft, das Echtzeit-Objekterkennung, Hindernisvermeidung und autonome Fahralgorithmen vereint.",
    vurgular: [
      "Objekt- und Hinderniserkennung mit hoher Bildrate durch CUDA-beschleunigtes YOLOv8 auf einem Jetson Orin Nano.",
      "Latenzarme Kommunikationsarchitektur für Sensor- und Kameradaten über ROS2-Knoten.",
      "Routenoptimierung und autonome Navigation unter dynamischen Umgebungsbedingungen.",
    ],
    rol: "Bildverarbeitung und autonome Fahrsoftware",
    problem:
      "Für ein autonomes Landfahrzeug reicht es nicht, ein Hindernis zu sehen — die Entscheidung muss vor dem Aufprall fallen. Die eigentliche Herausforderung bestand darin, Objekterkennung mit hoher Bildrate auf einem leistungsbegrenzten Embedded-Board auszuführen und diese Daten ohne Verzögerung an die Bewegungssteuerung zu übergeben.",
    cozum:
      "Ich habe Wahrnehmung, Entscheidung und Bewegung als getrennte ROS2-Knoten strukturiert, deren Kommunikation über latenzarme Nachrichtenkanäle läuft. Das YOLOv8-Modell läuft mit CUDA-Beschleunigung auf einem Jetson Orin Nano; die Position erkannter Objekte fließt in einen Navigationsknoten, der eine dynamische Routenoptimierung durchführt.",
    sonuc:
      "Das Fahrzeug navigiert autonom in Umgebungen mit zuvor nicht definierten Hindernissen und berechnet seine Route in Echtzeit neu.",
    neden: [
      {
        baslik: "Warum ROS2?",
        aciklama:
          "Kamera, Sensoren und Motorsteuerung mussten unabhängig voneinander laufen. Die Knotenarchitektur von ROS2 ermöglichte es, einen Teil auszutauschen, ohne die anderen zu beeinträchtigen.",
      },
      {
        baslik: "Warum der Jetson Orin Nano?",
        aciklama:
          "Das System an Bord musste CUDA unterstützen und gleichzeitig innerhalb eines Leistungsbudgets bleiben, das die Fahrzeugbatterie tragen konnte.",
      },
    ],
  },

  "time-to-work": {
    ad: "Time to Work International B.V.",
    ozet:
      "Eine leistungsstarke, mehrsprachige Unternehmenswebsite für ein niederländisches Unternehmen, das internationale Personalvermittlung und Beratung anbietet.",
    vurgular: [
      "Starke SEO und schnelle Ladezeiten durch den Next.js App Router und SSR/SSG-Architektur.",
      "Flüssige Mikro-Interaktionen und eine unternehmerische Designsprache mit Framer Motion.",
      "Mehrsprachige Inhaltsverwaltung über i18n und eine vollständig responsive Oberflächenarchitektur.",
    ],
    rol: "Durchgängige Entwicklung",
  },

  focuspulse: {
    ad: "FocusPulse",
    ozet:
      "Ein datenschutzorientiertes System, das Aufmerksamkeit und Konzentration während der Arbeit über Kameradaten analysiert. Die gesamte Verarbeitung findet lokal auf dem Gerät statt.",
    vurgular: [
      "Erkennung von Ablenkung über Blinzelfrequenz, Kopfhaltung und Blickrichtung.",
      "Vollständig lokale Verarbeitung ohne Serverübertragung — für Datenschutz und geringe Latenz.",
      "Konzentrationswerte und statistische Auswertungen pro Arbeitsperiode.",
    ],
  },

  "codelens-ar": {
    ad: "CodeLens AR",
    ozet:
      "Eine Plattform, die Codeblöcke und Texte über Augmented Reality oder kamerabasierte visuelle Eingaben erfasst und analysiert, um Entwickler-Workflows zu beschleunigen.",
    vurgular: [
      "Echtzeit-Texterkennung und Bildverarbeitungs-Pipeline über einen Live-Kamerastream.",
      "Optimierte Daten- und Push-Übertragungsarchitektur zwischen Client und Backoffice-Diensten.",
      "Zielgerichtetes Interface-Design zur Steigerung der Entwicklerproduktivität.",
    ],
  },

  "akilli-atik-yonetimi": {
    ad: "Intelligente Abfallwirtschaft",
    ozet:
      "Die Backend- und Datenbankinfrastruktur einer IoT-gestützten Plattform, die Abfallsammelprozesse, Füllstände von Containern und Betriebsdaten zentral überwacht.",
    vurgular: [
      "Eine Publish/Ack-Datenpipeline zur zuverlässigen Verarbeitung von Messwerten aus IoT-Sensorknoten.",
      "Relationales Schemadesign, Migrationsverwaltung und Abfrageoptimierung auf PostgreSQL für Datenkonsistenz.",
      "RESTful-API-Architektur mit rollenbasierter Zugriffskontrolle und durchgängiger Datensynchronisation.",
    ],
    rol: "Backend- und Datenbankarchitektur",
  },

  "vit-bigru-pipeline": {
    ad: "Hybride ViT-BiGRU-Pipeline",
    ozet:
      "Ein hybrides Deep-Learning-Modell, das einen Vision Transformer zur räumlichen Merkmalsextraktion mit Bi-directional-GRU-Netzen zur Erfassung zeitlicher Muster kombiniert.",
    vurgular: [
      "Self-Attention-basierte Merkmalsextraktion mit ViT, Sequenzmodellierung über BiGRU-Schichten.",
      "Datenvorverarbeitung, Data Augmentation und Regularisierungstechniken gegen Overfitting.",
      "Visualisierung von Konfusionsmatrizen, ROC-Kurven und Trainingsmetriken.",
    ],
  },

  "fuzyon-akademi": {
    ad: "Füzyon Akademi",
    ozet:
      "Die Unternehmenswebsite einer Werkstatt in Gaziantep, die Robotik, Softwareentwicklung, KI und Drohnentechnologie unterrichtet. Aus einer statischen Website wurde eine dynamische Plattform mit einem Admin-Panel, das die Einrichtung selbst verwaltet — anschließend live gestellt.",
    vurgular: [
      "Eine dreidimensionale Hero-Szene, gebaut mit reinem CSS perspective und preserve-3d, ohne Three.js.",
      "PHP- und MySQL-Admin-Panel mit CRUD für Galerie, externe Links, Inhaltsblöcke und Bildungsprogramme.",
      "Vollständiges SEO-Setup mit JSON-LD, Sitemap und Search-Console-Integration.",
      "Verschlüsselter Login mit password_hash und Schutz vor Session Fixation über session_regenerate_id.",
      "Eine eigene Lightbox-Galerie, die nach Kategorien öffnet und per Pfeiltasten navigierbar ist.",
    ],
    rol: "Design, Entwicklung und Deployment",
    problem:
      "Die gesamte digitale Präsenz der Einrichtung bestand aus Social-Media-Konten. Sie war in Suchmaschinen nicht auffindbar und hatte keinen Kanal, um ihre Programme und Erfolge darzustellen. Hinzu kam, dass ein Team ohne technischen Hintergrund für jede Inhaltsänderung nicht länger von einem Entwickler abhängig sein sollte.",
    cozum:
      "Zunächst habe ich eine leichte, schnelle Unternehmenswebsite ohne Framework entworfen und die aus dem Logo abgeleitete Farbpalette über CSS-Variablen zentral steuerbar gemacht. Danach habe ich die Website in eine dynamische PHP- und MySQL-Struktur überführt und ein Admin-Panel mit vier Bereichen ergänzt: Galerie, Links, Inhaltsblöcke und Bildungsprogramme. Zuletzt habe ich die Seite auf das cPanel-Hosting der Einrichtung migriert und dabei DNS-, SSL- und Zeichenkodierungsprobleme gelöst.",
    sonuc:
      "Die Einrichtung aktualisiert Galerie, Programme und sämtliche Texte nun selbst, ohne einen Entwickler zu benötigen. Die Website ist mit gültigem SSL-Zertifikat online und an Google Search Console sowie das Unternehmensprofil angebunden.",
    neden: [
      {
        baslik: "Warum kein Framework?",
        aciklama:
          "Im Kern war dies eine statische Präsentationsseite. React oder Vue hätten Ladezeit und Komplexität erhöht, ohne echten Nutzen zu bringen. Reines HTML, CSS und JavaScript lieferten das schnellste Ergebnis.",
      },
      {
        baslik: "Warum PHP und MySQL?",
        aciklama:
          "Das bestehende cPanel-Hosting der Einrichtung unterstützte PHP und MySQL ohne Zusatzkosten. Eine Node-basierte Lösung hätte einen neuen Server und laufende monatliche Kosten bedeutet.",
      },
      {
        baslik: "Warum kein Three.js für die 3D-Szene?",
        aciklama:
          "Three.js hätte der Seite Hunderte Kilobyte hinzugefügt. Denselben visuellen Effekt habe ich mit den nativen Eigenschaften perspective und preserve-3d erreicht — ganz ohne zusätzliche Pakete.",
      },
      {
        baslik: "Warum ein regelbasierter Assistent?",
        aciklama:
          "Eine echte KI-API hätte monatliche Gebühren verursacht und den Schlüssel clientseitig offengelegt, was eine Sicherheitslücke bedeutet hätte. Ein schlagwortbasierter FAQ-Assistent erfüllte den Bedarf kostenlos und sicher.",
      },
    ],
  },

  "otel-temizlik-takip": {
    ad: "Hotel-Reinigungsverwaltung",
    ozet:
      "Ein Verwaltungssystem, das die Zimmerreinigung in Hotels über QR-Codes verfolgt. Das Personal scannt das Zimmer, die Leitung sieht den Live-Status aller Etagen auf einem einzigen Bildschirm.",
    vurgular: [
      "QR-basierter Scan-Ablauf für Zimmer mit sofortiger Statusaktualisierung.",
      "Rechtebasiertes Verwaltungspanel, gegliedert nach Etage, Zimmer und Mitarbeiter.",
      "Auswertungen und Verlaufsverfolgung auf Basis eines relationalen Datenbankschemas.",
    ],
  },

  "stm32-arduino-gomulu": {
    ad: "STM32- & Arduino-Embedded-Systeme",
    ozet:
      "Hardwarenahe Embedded-Software, entwickelt im Rahmen der Hardwarearbeiten bei Turuncu Bilişim — mit Sensorintegration, Datenverarbeitung und Peripheriesteuerung.",
    vurgular: [
      "Auslesen und Verarbeiten analoger und digitaler Sensordaten über I2C, SPI und UART.",
      "Präzise Hardwaresteuerung mittels Interrupts, Timern und PWM-Signalen.",
      "Speicher- und Codeoptimierung für geringen Stromverbrauch und Echtzeit-Reaktionszeiten.",
    ],
  },

  "gercek-zamanli-backend": {
    ad: "Echtzeit-Backend-Dienste",
    ozet:
      "Eine Microservice-basierte Backend-Infrastruktur für mehrere gleichzeitige Clients, die bidirektionale Socket-Kommunikation und asynchrone Datenflüsse verwaltet.",
    vurgular: [
      "Latenzarme, ereignisgesteuerte Live-Datenübertragung über WebSockets und Flask-SocketIO.",
      "Typsichere, automatisch dokumentierte REST-Endpunkte mit FastAPI und Pydantic.",
      "Verschlüsselte Dienstkommunikation zwischen lokalen und entfernten Geräten über Tailscale.",
    ],
  },

  "resnet-vgg-kiyaslama": {
    ad: "ResNet50- & VGG19-Modellvergleich",
    ozet:
      "Eine analytische Studie, die klassische Convolutional-Architekturen per Transfer Learning auf einem eigenen Datensatz trainiert und anschließend Genauigkeit sowie Inferenzgeschwindigkeit vergleicht.",
    vurgular: [
      "Fine-Tuning-Strategien mit schichtweisem Einfrieren der Gewichte und eigenen Klassifikationsköpfen.",
      "Architekturvergleich anhand von Precision-, Recall- und F1-Score-Metriken.",
      "Mit CUDA-Beschleunigung optimierte Trainingsschleifen.",
    ],
  },

  "anadolu-diyabet-okulu": {
    ad: "Anadolu Diabetes-Schule",
    ozet:
      "Eine Gesundheitsplattform mit Bildungsinhalten für Menschen mit Diabetes und ihre Angehörigen, durchgängig entwickelt einschließlich Content-Management-Panel.",
    vurgular: [
      "Dynamische Inhalte und Seitenstruktur, im Verwaltungspanel bearbeitbar.",
      "Responsive Oberflächenarchitektur im Einklang mit der Corporate Identity.",
      "Skalierbares Backend auf Basis von Laravel und PostgreSQL.",
    ],
  },

  "stok-takip": {
    ad: "Bestandsverwaltungs-App",
    ozet:
      "Eine mobile Anwendung zur Bestandsverwaltung mit Wareneingang und -ausgang, Live-Inventarverfolgung und Auswertungen.",
    vurgular: [
      "Wareneingangs- und -ausgangsvorgänge mit Live-Verfolgung des Bestandsstatus.",
      "Kategoriebasierte Auflistung, Suche und Filterung.",
      "Plattformübergreifende Unterstützung aus einer einzigen Codebasis mit React Native und Expo.",
    ],
  },

  ai4change: {
    ad: "AI4Change",
    ozet:
      "Ein im Rahmen des Kodluyoruz-Programms entwickeltes Projekt, das Datenanalyse und maschinelles Lernen auf Fragestellungen aus Zivilgesellschaft und sozialer Wirkung anwendet.",
    vurgular: [
      "Bereinigung, Feature Engineering und Analyse unstrukturierter Sozialdaten.",
      "Prognosemodelle mit Entscheidungsbäumen sowie Klassifikations- und Regressionsalgorithmen.",
      "Aufbereitung der Ergebnisse in verständliche Visualisierungen für Entscheidungsträger.",
    ],
  },

  "kullanici-yonetim-sistemi": {
    ad: "Benutzerverwaltungssystem",
    ozet:
      "Eine mehrschichtige Web-Backend-Architektur mit rollenbasierter Zugriffskontrolle, dynamischen Datenabfragen und Sitzungssicherheit.",
    vurgular: [
      "Datenbankschicht, über PDO und Prepared Statements gegen SQL-Injection und XSS abgesichert.",
      "Session- und Cookie-basierte Authentifizierung, bcrypt-Hashing und Autorisierungsarchitektur.",
      "Relationales Schemadesign, Fremdschlüsseloptimierung und Indizierung.",
    ],
  },

  "2d-buyucu-savasi": {
    ad: "2D-Zaubererkampf & Desktop-Simulationen",
    ozet:
      "Zwei Spiel- und Simulationsprojekte, aufgebaut auf objektorientierten Programmierprinzipien, Game-Loop-Logik und Algorithmenanalyse.",
    vurgular: [
      "Charaktermechaniken, Projektilphysik und Lebens-/Energiesysteme mit Vererbung, Polymorphie und Kapselung.",
      "Eine Echtzeit-Game-Loop auf Basis von Kollisionserkennung und Tastatureingaben.",
      "Dynamische Matrixverwaltung und Pathfinding-Algorithmen.",
    ],
  },
};