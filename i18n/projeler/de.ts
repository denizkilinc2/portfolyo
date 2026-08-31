import type { KismiProjeMetinleri } from "./tipler";

/* Henüz çevrilmemiş projeler Türkçe metne düşer. */
export const projelerDe: KismiProjeMetinleri = {
  rhinoai: {
    ad: "RhinoAI",
    ozet:
      "Eine mobile KI-Anwendung, die Gesichtsproportionen vor und nach einer Rhinoplastik objektiv vermisst. Landmark-Erkennung und Deep-Learning-Inferenz laufen in Echtzeit vollständig auf dem Gerät.",
    vurgular: [
      "Erkennung von 468 Gesichtsreferenzpunkten mit ML Kit Face Mesh und Berechnung von Asymmetriewerten.",
      "Live-Analyse von Nasolabial- und Dorsalwinkeln mit über 30 FPS im Kamerastream.",
      "Latenzarme On-Device-Inferenz mit Modellen, die für TFLite optimiert und konvertiert wurden.",
      "Moderne, reaktive Android-Architektur auf Basis von MVVM und Jetpack Compose.",
      "Als Open Source auf GitHub veröffentlicht.",
    ],
    rol: "Einzelentwickler — Mobile und Edge-KI",
    problem:
      "Operationsplanung und Asymmetriebewertung vor und nach einer Rhinoplastik beruhen weitgehend auf der subjektiven Einschätzung des Arztes. Es fehlte ein leichtes mobiles Werkzeug, das Patientinnen und Patienten ihre Winkel- und Millimeterverhältnisse unmittelbar zeigt. Bestehende mobile Lösungen laden das Foto auf einen Server, was ein Datenschutzproblem schafft und die App von einer Internetverbindung abhängig macht.",
    cozum:
      "Ich habe eine native Android-Architektur auf Kotlin und Jetpack Compose aufgebaut. Die ML-Kit-Face-Mesh-Integration kartiert Gesichtspunkte innerhalb von Millisekunden; für Bildanalyse und Nasenwinkelberechnungen laufen TensorFlow-Lite-Modelle direkt auf dem Gerät. Die schwereren Klassifikationsmodelle wurden nach TFLite konvertiert und durch Quantisierung verkleinert.",
    sonuc:
      "Entstanden ist eine vollständig lokal und ohne Serverkosten laufende Anwendung, die Gesichtskonturen sowie Nasolabial- und Dorsalwinkel mit über 30 FPS im Live-Kamerastream analysiert. Sie wurde als Open Source veröffentlicht.",
    neden: [
      {
        baslik: "Warum Inferenz auf dem Gerät?",
        aciklama:
          "Statt den Kamerastream an ein Python-FastAPI-Backend zu senden, habe ich alles auf dem Gerät ausgeführt. In einer Gesundheitsanwendung ist die Tatsache, dass das Foto das Telefon nie verlässt, eine stärkere Datenschutzgarantie als jede serverseitige Maßnahme. Dieselbe Entscheidung brachte zudem null Latenz und Unabhängigkeit vom Netz.",
      },
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
      "Verteilte ROS2-Knotenarchitektur mit getrennten Ebenen für Wahrnehmung, Entscheidung und Bewegung.",
      "Latenzarme Übergabe erkannter Objektpositionen an die Motortreiber-Steuerungsalgorithmen.",
      "Dynamische Routenkorrektur, im Feld auf anspruchsvollem Gelände getestet.",
    ],
    rol: "Autonome Algorithmen und eingebettete Bildverarbeitung",
    problem:
      "Auf schwierigem Untergrund und in Feldern mit Hindernissen musste das Fahrzeug seine Umgebung in Echtzeit erfassen, Hindernissen ausweichen und ohne menschliches Eingreifen einer Zielroute folgen. Die eigentliche Schwierigkeit: Ein Hindernis zu sehen reicht nicht — die Entscheidung muss vor dem Aufprall fallen, und das auf einem leistungsbegrenzten Embedded-Board.",
    cozum:
      "Ich habe eine verteilte ROS2-Knotenarchitektur aufgebaut, in der Wahrnehmung, Entscheidung und Bewegung als unabhängige Knoten über latenzarme Nachrichtenkanäle kommunizieren. Das YOLOv8-Modell habe ich mit CUDA-Beschleunigung auf einem Jetson Orin Nano optimiert und daraus die Erkennungspipeline gebaut; die Positionen erkannter Objekte fließen direkt in die Motortreiber-Steuerung.",
    sonuc:
      "Entstanden ist eine funktionierende autonome Landfahrzeugplattform mit Echtzeit-Hinderniserkennung und dynamischer Routenkorrektur, im Feld auf anspruchsvollen Parcours getestet.",
    neden: [
      {
        baslik: "Warum CUDA-beschleunigtes YOLOv8?",
        aciklama:
          "Leichte CPU-Modelle wie MobileNet hätten weniger Energie verbraucht, aber bei kleinen und komplexen Hindernissen im Feld an Genauigkeit verloren. Die Hardwarebeschleunigung auf dem Jetson ermöglichte hohe FPS-Werte ohne Genauigkeitsverlust.",
      },
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
      "Eine mehrsprachige, SEO-orientierte Unternehmensplattform, von Grund auf gebaut für ein niederländisches Unternehmen im Bereich internationale Arbeitskräfte und Personalvermittlung.",
    vurgular: [
      "Modulare Architektur auf dem Next.js App Router, die SSR und statische Generierung kombiniert.",
      "Dynamische mehrsprachige (i18n) Struktur ohne Performance-Einbußen.",
      "Flüssige Oberflächeninteraktionen und eine unternehmerische Designsprache mit Framer Motion.",
      "Responsiver Bewerbungsablauf, der auf allen Geräten reibungslos funktioniert.",
    ],
    rol: "Frontend-Architektur, Lokalisierung und Deployment",
    problem:
      "Die bestehende Web-Infrastruktur des Unternehmens war langsam, blieb hinter responsiven Standards zurück und verarbeitete die Mehrsprachigkeit schwerfällig. Als digitales Gesicht eines Unternehmens, das internationale Kandidaten und Firmen bedient, spiegelte sie zudem die Corporate Identity nur unzureichend wider.",
    cozum:
      "Ich habe eine modulare, SEO-orientierte Architektur auf dem Next.js App Router, TypeScript und Tailwind CSS aufgebaut. Für die Oberflächeninteraktionen habe ich Framer Motion integriert und die mehrsprachige Struktur so entworfen, dass jede Sprache eine eigene generierte Seite erhält, ohne Performance zu kosten.",
    sonuc:
      "Die Unternehmensplattform ging live und läuft unter ttw-international.nl, sodass internationale Kandidaten und Firmen von jedem Gerät aus bequem Bewerbungen einreichen können.",
    neden: [
      {
        baslik: "Warum Next.js SSR/SSG statt einer klassischen React-SPA?",
        aciklama:
          "Für ein internationales Personalvermittlungsunternehmen bedeutet Suchmaschinen-Traffic unmittelbar Geschäft. In einer Single-Page-React-Anwendung wird der Inhalt im Browser gerendert und erscheint Suchmaschinen verzögert. Serverseitiges Rendering und statische Seiten maximierten sowohl Indexierung als auch Ladeperformance.",
      },
      {
        baslik: "Warum dynamisches i18n?",
        aciklama:
          "Mehrsprachige Websites teilen üblicherweise entweder jede Sprache in eine eigene Codebasis auf oder liefern alle Übersetzungen an den Client aus. Ersteres macht die Wartung unmöglich, Letzteres bläht die Seitengröße auf. Ich habe eine Struktur gebaut, in der jede Seite nur die Texte ihrer eigenen Sprache trägt.",
      },
      {
        baslik: "Warum Tailwind?",
        aciklama:
          "Das Design musste der Corporate Identity folgen, und eine fertige Komponentenbibliothek hätte bedeutet, auf jedem Bildschirm gegen diese Identität anzukämpfen. Tailwind lieferte ein konsistentes Skalen- und Farbsystem, während das Design von Grund auf entstand.",
      },
    ],
  },

  focuspulse: {
    ad: "FocusPulse",
    ozet:
      "Eine Android-Anwendung, die Aufmerksamkeit und Konzentration während der Arbeit über Kameradaten analysiert. Die gesamte Verarbeitung findet auf dem Gerät statt; das Bild verlässt es nie.",
    vurgular: [
      "Erkennung von Ablenkung über Blinzelfrequenz, Kopfhaltung und Blickrichtung.",
      "On-Device-Bildverarbeitungsarchitektur, die einen Live-Ablenkungsindex berechnet.",
      "Latenzarme Inferenz mit nach TFLite konvertierten Modellen.",
      "Dynamische Pausenvorschläge und Hinweisrückmeldungen.",
      "Daten werden vollständig lokal verarbeitet und erreichen keinen Server.",
    ],
    rol: "Einzelentwickler — Android und Edge-KI",
    problem:
      "Konzentrationsverlust und Ermüdung bei Remote-Arbeit und langen Arbeitsphasen lassen sich nicht objektiv nachverfolgen. Die meisten bestehenden Lösungen senden den Kamerastream in die Cloud — sie verlangen also, dass man für die Beobachtung die eigene Privatsphäre aufgibt.",
    cozum:
      "Ich habe eine Android-Anwendung entwickelt, die Blinzelfrequenz, Kopfhaltung und Blickrichtung vollständig auf dem Gerät analysiert. Die Modellseite habe ich in Python und OpenCV prototypisiert und anschließend nach TFLite konvertiert; die App führt diese leichtgewichtigen Modelle lokal aus. Die Signale werden zu einem Live-Ablenkungsindex verrechnet, aus dem dynamische Pausenvorschläge entstehen.",
    sonuc:
      "Entstanden ist eine funktionierende Android-Anwendung, die das Bild des Nutzers nie das Gerät verlassen lässt, einen Live-Fokusindex berechnet und Pausenrückmeldungen erzeugt.",
    neden: [
      {
        baslik: "Warum On-Device-Inferenz statt Cloud?",
        aciklama:
          "Cloudbasierte Vision-APIs bieten stärkere Modelle, widersprechen aber dem Zweck des Systems: In einer Anwendung, die jemanden während der Arbeit dauerhaft beobachtet, ist das Senden des Bildes in die Cloud inakzeptabel. Leichtgewichtige Inferenz auf dem Gerät beseitigte dieses Problem vollständig und machte das Netz überflüssig.",
      },
      {
        baslik: "Warum wurde das Modell in Python gebaut, die App aber in Kotlin?",
        aciklama:
          "Für Modellexperimente und Validierung ist das Python-Ökosystem unvergleichlich schneller. Das Endprodukt sollte jedoch eine Android-Anwendung sein; die Konvertierung nach TFLite und die Ausführung über Kotlin brachten native Performance, ohne die Entwicklung zu verlangsamen.",
      },
      {
        baslik: "Warum Verhaltenssignale statt direkter Klassifikation?",
        aciklama:
          "Statt einer einzelnen Einstufung als „konzentriert / abgelenkt\" habe ich einzelne Signale gemessen — Blinzeln, Kopfhaltung, Blickrichtung — und daraus einen Index abgeleitet. So blieb das Ergebnis erklärbar: Der Nutzer sieht, warum er einen Hinweis erhalten hat.",
      },
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
      "Eine hybride Deep-Learning-Pipeline, die räumliche Merkmale mit einem Vision Transformer und zeitliche Muster mit bidirektionalen GRU-Netzen erfasst.",
    vurgular: [
      "ViT-Blöcke als räumlicher Merkmalsextraktor, deren Vektoren in BiGRU-Schichten einfließen.",
      "CUDA-beschleunigte Trainings- und Validierungsschleifen auf PyTorch und TensorFlow.",
      "Datenvorverarbeitung, Data Augmentation und Regularisierungstechniken gegen Overfitting.",
      "Visualisierung von Konfusionsmatrizen, ROC-Kurven und Trainingsmetriken.",
    ],
    rol: "Deep-Learning-Forscher und Modellentwickler",
    problem:
      "Rein konvolutionale oder rein rekurrente Architekturen können in sequentiellen Bilddaten nicht beides gleichzeitig erfassen: das räumliche Detail innerhalb eines Frames und den langreichweitigen zeitlichen Kontext über Frames hinweg. Stärkt man das eine, schwächt man das andere.",
    cozum:
      "Ich habe eine hybride Pipeline programmiert, in der Vision-Transformer-Blöcke als räumlicher Merkmalsextraktor dienen und ihre Ausgabevektoren in bidirektionale BiGRU-Schichten einfließen. Auf Python, PyTorch und TensorFlow habe ich CUDA-beschleunigte Trainings- und Validierungsschleifen aufgebaut und die Ergebnisse über Konfusionsmatrizen, ROC-Kurven und Trainingsmetriken visualisiert.",
    sonuc:
      "Entstanden ist eine für akademische wie praktische Nutzung geeignete Modellarchitektur, die auf komplexen zeitlichen Datensätzen eine messbare Steigerung bei Genauigkeit und F1-Score gegenüber Standard-CNN-LSTM-Modellen erzielt.",
    neden: [
      {
        baslik: "Warum BiGRU statt LSTM?",
        aciklama:
          "GRU arbeitet mit weniger Parametern als LSTM, was Trainingszeit und Speicherverbrauch deutlich senkte. Da die Struktur bidirektional ist, sieht das Modell weiterhin sowohl vergangenen als auch zukünftigen Kontext — was an Parametern gespart wurde, ging nicht an Leistung verloren.",
      },
      {
        baslik: "Warum ViT statt CNN?",
        aciklama:
          "Konvolutionale Schichten erfassen lokale Muster gut, tun sich aber schwer damit, weit entfernte Bildbereiche in Beziehung zu setzen. Die Self-Attention-Struktur des Vision Transformers bewertet Zusammenhänge im gesamten Frame in einem Schritt und speist einen reichhaltigeren Merkmalsvektor in das Sequenzmodell.",
      },
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
      "Ein QR-basiertes, mehrsprachiges Hotelbetriebssystem. Getrennte Berechtigungsebenen für Administratoren, Manager und Personal; Gäste gelangen per Code-Scan zu ihrer eigenen Oberfläche. Entwickelt als kommerzielles Produkt, das an Hotels verkauft und für jede Installation individuell konfiguriert wird.",
    vurgular: [
      "Vier getrennte Rollen und Berechtigungsebenen: Administrator, Manager, Personal und Gast.",
      "QR-Scan-Ablauf mit sofortiger Aktualisierung des Zimmerstatus; die Leitung sieht alle Etagen auf einem Bildschirm.",
      "Mehrsprachige Oberfläche — für internationale Gäste wie auch für Personal mit unterschiedlichen Sprachen.",
      "Auswertungen nach Etage, Zimmer und Mitarbeiter samt vollständigem Verlauf der Reinigungen.",
      "Konfigurierbare Architektur, die für jedes Hotel eine eigene, angepasste Installation erlaubt.",
    ],
    rol: "Durchgängige Entwicklung",
    problem:
      "Die zentrale Schwierigkeit in der Hotelreinigung besteht darin, dass alle Beteiligten den aktuellen Zustand eines Zimmers gleichzeitig kennen müssen. Bricht der Informationsfluss zwischen Zimmermädchen, Etagenleitung und Rezeption ab, wird ein Gast in ein noch nicht fertiges Zimmer geschickt. Zusätzlich musste das System mit Personal funktionieren, das unterschiedliche Sprachen spricht, und für jedes verkaufte Hotel individuell konfigurierbar sein.",
    cozum:
      "Ich habe jedem Zimmer einen QR-Code zugewiesen; das Personal scannt ihn beim Betreten, und der Status wird sofort ins zentrale System geschrieben. Die Berechtigungen sind in vier Ebenen aufgeteilt: Der Administrator verwaltet das System, die Leitung sieht den Live-Status aller Etagen auf einem Bildschirm, das Personal nur die eigenen Aufgaben, und der Gast erreicht über den Code eine eigene Oberfläche. Die Oberfläche war von Beginn an mehrsprachig angelegt. Damit für jedes Hotel eine eigene Installation möglich ist, wurden Zimmerstruktur, Hoteldaten und Markenelemente konfigurierbar gehalten.",
    sonuc:
      "Das System ist unter teknohygiene.com live. Es ist als kommerzielles Produkt positioniert: Jedes Hotel, das es erwirbt, erhält eine eigene, an seine Struktur angepasste Installation.",
    neden: [
      {
        baslik: "Warum QR-Codes?",
        aciklama:
          "NFC oder ein eigenes Handterminal hätten eine Hardware-Investition erfordert. QR-Codes funktionieren mit den Telefonen des Personals — das Hotel muss lediglich Papieretiketten an den Türen anbringen.",
      },
      {
        baslik: "Warum Web statt einer mobilen App?",
        aciklama:
          "Eine App hätte bedeutet, dass jeder Mitarbeiter sie installiert, auf die Store-Freigabe wartet und Updates herunterlädt. In einem browserbasierten System öffnet der Scan direkt die richtige Seite — ein Installationsschritt entfällt vollständig.",
      },
      {
        baslik: "Warum mehrsprachig?",
        aciklama:
          "Hotelpersonal und Gäste sprechen häufig nicht dieselbe Sprache. Die Sprachunterstützung wurde nicht nachträglich ergänzt, sondern war vom ersten Tag an eine Designentscheidung.",
      },
      {
        baslik: "Warum Laravel?",
        aciklama:
          "Autorisierung, mehrere Rollen und ein Verwaltungspanel bringt das Framework bereits mit. Zudem läuft es ohne Zusatzkosten auf dem cPanel-Hosting, das die Zielkunden ohnehin nutzen.",
      },
    ],
  },

  "stm32-arduino-gomulu": {
    ad: "STM32- & Arduino-Embedded-Systeme",
    ozet:
      "Hardwarenahe Embedded-Software rund um synchrone Sensordatenerfassung, latenzarme Ausgabe auf lokale Displays und einen zuverlässigen Kommunikationsstandard zwischen Mikrocontrollern.",
    vurgular: [
      "Register- und treiberseitige Programmierung auf STM32 mit den HAL/LL-Bibliotheken.",
      "Kommunikationstreiber für SSD1306-OLED-Displays und Sensormodule über I2C, SPI und UART.",
      "Echtzeit-Leseachitektur, gesteuert über Interrupts und Timer, immun gegen Blockaden.",
      "Speicher- und Codeoptimierung für geringen Stromverbrauch und Echtzeit-Reaktionszeiten.",
    ],
    rol: "Embedded-Softwareentwickler",
    problem:
      "Auf Hardwareebene mussten Sensordaten wie Temperatur, Beschleunigung und Abstand synchron erfasst, mit geringer Latenz auf lokale Displays geschrieben und ein zuverlässiger Kommunikationsstandard zwischen Mikrocontrollern etabliert werden.",
    cozum:
      "Mit C und C++ habe ich auf STM32 mit den HAL/LL-Bibliotheken sowie auf dem Arduino Uno register- und treiberseitig programmiert. Über I2C, SPI und UART habe ich Kommunikationstreiber für SSD1306-OLED-Displays und verschiedene Sensormodule entwickelt und die Leseschleife auf Interrupts und Timer aufgebaut.",
    sonuc:
      "Entstanden sind stabile Hardware-Prototypen ohne Blockaden, interruptgesteuert und fähig zu Echtzeit-Datenerfassung und -Visualisierung.",
    neden: [
      {
        baslik: "Warum interruptgesteuertes Lesen statt Polling?",
        aciklama:
          "Eine kontinuierliche Abfrageschleife beschäftigt die CPU des Mikrocontrollers ohne Nutzen, und jedes Signal, das zwischen zwei Abfragen fällt, geht verloren. Der Wechsel zu Hardware-Interrupts und timerbasiertem periodischem Lesen entlastete die CPU und erfasste Signale ohne Verlust.",
      },
      {
        baslik: "Warum Code auf HAL/LL-Ebene?",
        aciklama:
          "Fertige Bibliotheken liefern schnelle Ergebnisse, verbergen aber, was die Hardware tatsächlich tut. Die Arbeit auf Registerebene machte Timing- und Energieverhalten direkt steuerbar und erlaubte es, Probleme durch Messung statt durch Vermutung zu lösen.",
      },
    ],
  },

  "gercek-zamanli-backend": {
    ad: "Echtzeit-Backend-Dienste",
    ozet:
      "Eine Microservice-basierte Backend-Infrastruktur auf Basis bidirektionaler Socket-Kommunikation und ereignisgesteuerter Datenflüsse, die viele gleichzeitige Clients verwaltet.",
    vurgular: [
      "Ereignisgesteuerte, bidirektionale Socket-Architekturen auf Python- und Node.js-Seite.",
      "Latenzarme Live-Datenübertragung über WebSockets und Flask-SocketIO.",
      "Typsichere, automatisch dokumentierte REST-Endpunkte mit FastAPI und Pydantic.",
      "Zentrale Einrichtung von PostgreSQL- und MySQL-Verbindungen sowie Sitzungsverwaltung.",
    ],
    rol: "Backend- und Systemarchitektur",
    problem:
      "In einer klassischen REST-Architektur muss der Client den Server ständig nach Daten fragen. Das verbraucht Serverressourcen ohne Nutzen und führt in Systemen mit Live-Daten sowohl zu hoher Latenz als auch zu Inkonsistenzen zwischen den Clients.",
    cozum:
      "Ich habe bidirektionale, ereignisgesteuerte Socket-Architekturen aufgebaut — mit Flask-SocketIO und FastAPI auf der Python-Seite sowie Express und WebSockets auf der Node.js-Seite. Ändern sich Daten, benachrichtigt der Server den Client von sich aus; der Client muss nicht fragen. Dahinter habe ich PostgreSQL- und MySQL-Verbindungen sowie die Sitzungsverwaltung zentral eingerichtet.",
    sonuc:
      "Entstanden sind skalierbare Dienste, die die Datenübertragung zwischen Clients auf Millisekunden senken, die Serverlast reduzieren und gleichzeitige Verbindungen fehlerfrei verwalten.",
    neden: [
      {
        baslik: "Warum WebSockets statt HTTP Long Polling?",
        aciklama:
          "Long Polling überträgt bei jeder Anfrage erneut die HTTP-Header und baut die Verbindung ständig auf und ab. Eine dauerhafte Socket-Verbindung beseitigt diesen Overhead vollständig und minimiert sowohl Bandbreite als auch Antwortzeit.",
      },
      {
        baslik: "Warum sowohl Python als auch Node.js?",
        aciklama:
          "Verschiedene Dienste hatten verschiedene Anforderungen. Wo Datenverarbeitung und Typsicherheit zählten, lieferten FastAPI und Pydantic bessere Ergebnisse; bei der Verwaltung vieler gleichzeitiger Verbindungen Node.js und Express. Statt eine einzige Sprache zu erzwingen, habe ich jeden Dienst mit dem passenden Werkzeug geschrieben.",
      },
    ],
  },

  "resnet-vgg-kiyaslama": {
    ad: "ResNet50- & VGG19-Modellvergleich",
    ozet:
      "Eine analytische Studie, die zwei klassische Convolutional-Architekturen per Transfer Learning auf demselben Datensatz trainiert und sie anschließend in Genauigkeit, Inferenzzeit und Modellgröße vergleicht.",
    vurgular: [
      "Optimierung vortrainierter ResNet50- und VGG19-Modelle auf demselben Datensatz per Transfer Learning.",
      "Fine-Tuning-Strategien mit schichtweisem Einfrieren der Gewichte und eigenen Klassifikationsköpfen.",
      "Vergleichsskripte zur Visualisierung von Loss/Accuracy-Kurven, Konfusionsmatrizen und Inferenzlatenz.",
      "Architekturvergleich anhand von Precision, Recall und F1-Score.",
    ],
    rol: "Data Science und Modellbewertung",
    problem:
      "Für ein konkretes Bildklassifikationsproblem war unklar, welche Convolutional-Architektur die bessere Balance aus Genauigkeit, Inferenzzeit, Modellgröße und Overfitting bietet. Die Entscheidung sollte auf Messung beruhen, nicht auf Intuition.",
    cozum:
      "Nach den Prinzipien des Transfer Learning habe ich vortrainierte ResNet50- und VGG19-Modelle auf demselben Datensatz optimiert und mit schichtweisem Einfrieren der Gewichte sowie eigenen Klassifikationsköpfen feinabgestimmt. Mit Matplotlib und Seaborn habe ich Vergleichsskripte gebaut, die Loss/Accuracy-Kurven, die Konfusionsmatrix und Inferenzlatenz-Metriken visualisieren.",
    sonuc:
      "Entstanden ist eine gründliche Analyse, die Stärken und Schwächen beider Architekturen statistisch darlegt und eine Grundlage für Hardware- und Modellauswahl bei künftigen Edge-Deployments bietet.",
    neden: [
      {
        baslik: "Warum sind ResNets Residualverbindungen entscheidend?",
        aciklama:
          "In flachen tiefen Architekturen wie VGG verschwinden Gradienten mit zunehmender Schichtzahl, sodass das Modell trotz größerer Tiefe schlechter lernt. ResNets Skip Connections lösen dies; die Messungen zeigten experimentell höhere Genauigkeit und Geschwindigkeit bei weniger Parametern.",
      },
      {
        baslik: "Warum Transfer Learning?",
        aciklama:
          "Beide Architekturen von Grund auf zu trainieren hätte deutlich länger gedauert, und die Datensatzgröße war dafür nicht geeignet. Der Start von vortrainierten Gewichten und die Anpassung der letzten Schichten hielten den Vergleich fair und reproduzierbar.",
      },
    ],
  },

  "anadolu-diyabet-okulu": {
    ad: "Anadolu Diabetes-Schule",
    ozet:
      "Eine mehrmodulige Bildungsplattform für Menschen mit Diabetes und ihre Angehörigen. Sie vereint öffentliche Seiten, ein Kurs- und Schülerpanel, Kursverkauf über Warenkorb und Bestellablauf, ein Verwaltungspanel sowie ein separat authentifiziertes Modul „Chronik-Ratgeber\".",
    vurgular: [
      "Mehrmodulige Plattformarchitektur, die Schülerpanel, Kursverfolgung und Inhaltsverwaltung zusammenführt.",
      "Kursvideos auf Bunny Stream gehostet — die Datei geht direkt vom Browser des Nutzers an den Dienst und berührt den Server nie.",
      "Verkaufsinfrastruktur für Kurse mit Warenkorb und Bestellablauf.",
      "Ein eigenständiges Modul „Chronik-Ratgeber\" mit eigenem Login und eigenen Berechtigungen.",
      "Migration auf cPanel und Livegang mit SSL-Zertifikat.",
    ],
    rol: "Durchgängige Entwicklung und Deployment",
    problem:
      "Die bestehende Website der Einrichtung war eine schlichte Präsentationsseite ohne Infrastruktur, um Bildungsinhalte zu veröffentlichen, den Lernfortschritt zu verfolgen oder Kurse zu verkaufen. Hinzu kam eine harte technische Einschränkung: Das Shared-Hosting-Paket erlaubte kein Video-Hosting — dabei waren Kursvideos der eigentliche Kern der Plattform.",
    cozum:
      "Ich habe die Website von Grund auf als mehrmodulige Plattform neu aufgebaut: öffentliche Seiten, ein Schülerpanel für die kostenlosen Kurse, eine Verkaufsebene mit Warenkorb und Bestellablauf, ein Verwaltungspanel für die Inhalte sowie ein separat authentifiziertes Modul „Chronik-Ratgeber\". Die Video-Einschränkung habe ich gelöst, indem die Dateien auf Bunny Stream liegen — beim Upload wandert die Datei direkt vom Browser zu Bunny und passiert den Hosting-Server nie. Zuletzt habe ich die Plattform auf cPanel migriert, das DNS umgestellt und sie mit SSL live geschaltet.",
    sonuc:
      "Die Plattform ist unter anadoludiyabetokulu.com mit gültigem SSL-Zertifikat online. Die Einrichtung aktualisiert Kursinhalte, Seitentexte und Kursstruktur selbst über das Verwaltungspanel; die Video-Infrastruktur läuft vollständig unabhängig von der Hosting-Einschränkung.",
    neden: [
      {
        baslik: "Warum Bunny Stream?",
        aciklama:
          "Shared-Hosting-Pakete erlauben kein Video-Hosting, und selbst wenn, wäre die Bandbreite nach den ersten hundert Zuschauern erschöpft. Mit Bunny Stream lädt die Datei direkt vom Browser des Nutzers zum Dienst — der Server trägt weder Speicher- noch Bandbreitenlast.",
      },
      {
        baslik: "Warum der Wechsel zu MySQL?",
        aciklama:
          "Die Entwicklung begann mit PostgreSQL, das cPanel-Hosting der Einrichtung bot jedoch MySQL. Dieselbe Datenbank in Entwicklung und Produktion zu verwenden, verhinderte Überraschungen bei der Migration.",
      },
      {
        baslik: "Warum ist der Chronik-Ratgeber ein eigenes Modul?",
        aciklama:
          "Er richtet sich an eine andere Zielgruppe mit einem anderen Zugriffsmodell. Ihn mit eigenem Login und eigenen Berechtigungen zu bauen, statt ihn in die Hauptplattform einzubetten, ließ beide Seiten unabhängig voneinander wachsen.",
      },
      {
        baslik: "Warum Laravel?",
        aciklama:
          "Schülerkonten, Autorisierung, Bestellablauf und Verwaltungspanel wurden alle auf Strukturen aufgebaut, die das Framework bereits mitbringt. Zudem läuft es ohne Zusatzkosten auf dem bestehenden cPanel-Hosting der Einrichtung.",
      },
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
      "Zwei Desktop-Spiel- und Simulationsprojekte, von Grund auf gebaut auf objektorientierten Prinzipien, einer eigenen Game-Loop und einer selbst geschriebenen Physik-Engine.",
    vurgular: [
      "Modulare Game-Engine-Struktur, zentriert auf Vererbung, Polymorphie und Kapselung.",
      "Selbst geschriebene AABB-Kollisionserkennung, Projektilmechanik und Lebens-/Energieverwaltung.",
      "Pathfinding-Algorithmen über ein dynamisches Grid und ein Minenfeld.",
      "Eine Game-Loop mit flüssiger Bildrate, in der zwei Spieler gleichzeitig über die Tastatur antreten.",
    ],
    rol: "Unabhängiger Entwickler — Game-Loop, Physik und Oberfläche",
    problem:
      "Objektorientierte Programmierprinzipien, Kollisions- und Physikalgorithmen sowie dynamische Pathfinding-Logik mussten in einer Desktop-Oberfläche simuliert werden, ohne dass die Bildrate einbricht.",
    cozum:
      "In Java und Swing habe ich eine modulare Game-Engine-Struktur aufgebaut, zentriert auf Vererbung, Polymorphie und Kapselung. AABB-Kollisionserkennung, Projektilmechanik, Lebensbalken und Zustandsverwaltung habe ich von Grund auf entwickelt, ebenso Pathfinding-Algorithmen über ein dynamisches Grid und ein Minenfeld.",
    sonuc:
      "Entstanden sind Desktop-Anwendungen und Simulationen ohne Speicherlecks und mit flüssiger Bildrate, in denen zwei Spieler über Tastatursteuerung gleichzeitig antreten können.",
    neden: [
      {
        baslik: "Warum keine fertige Game-Engine?",
        aciklama:
          "Ziel war nicht, ein Spiel zu veröffentlichen, sondern zu verstehen, wie Game-Loop und Physikberechnungen funktionieren, indem man sie selbst schreibt. Eine fertige Engine verbirgt diese Ebene. Eine eigene Loop mit festem Zeitschritt auf Graphics2D zu schreiben, machte Thread-Verwaltung und Timing-Logik unmittelbar sichtbar.",
      },
      {
        baslik: "Warum feste Zeitschritte?",
        aciklama:
          "Bildratenabhängige Updates erzeugen auf schnellen und langsamen Rechnern unterschiedliches Physikverhalten. Mit fester Schrittweite liefert die Physik überall dasselbe Ergebnis; Renderrate und Simulationsrate laufen unabhängig voneinander.",
      },
    ],
  },
};