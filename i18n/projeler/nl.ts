import type { KismiProjeMetinleri } from "./tipler";

/* Henüz çevrilmemiş projeler Türkçe metne düşer. */
export const projelerNl: KismiProjeMetinleri = {
  rhinoai: {
    ad: "RhinoAI",
    ozet:
      "Een mobiele AI-toepassing die rhinoplastiek- en gezichtsproportieanalyses uitvoert op basis van een foto. Landmarkdetectie en deep learning-inferentie draaien in realtime, volledig op het apparaat zelf.",
    vurgular: [
      "Detectie van 468 gezichtsreferentiepunten via ML Kit Face Mesh, met berekening van asymmetriewaarden.",
      "On-device inferentie met lage latentie dankzij modellen die geoptimaliseerd en omgezet zijn naar TFLite.",
      "Moderne, reactieve Android-architectuur op basis van MVVM en Jetpack Compose.",
    ],
    rol: "Volledige ontwikkeling",
    problem:
      "Een analyse van gezichtsproporties vóór een rhinoplastiek vereist normaal gesproken een meting door een specialist in een klinische omgeving — iets wat iemand niet zelf kan doen. Bestaande mobiele oplossingen uploaden de foto naar een server, wat een privacyprobleem oplevert en de app afhankelijk maakt van een internetverbinding.",
    cozum:
      "Ik heb een Android-applicatie gebouwd die zowel de landmarkdetectie als de deep learning-inferentie volledig op het apparaat uitvoert. ML Kit Face Mesh detecteert 468 referentiepunten, waaruit gezichtsverhoudingen en asymmetriewaarden worden berekend. De zwaardere classificatiemodellen zijn omgezet naar TensorFlow Lite en verkleind via kwantisatie.",
    sonuc:
      "De foto verlaat het apparaat nooit, de analyse werkt zonder internetverbinding en er zijn geen serverkosten.",
    neden: [
      {
        baslik: "Waarom TensorFlow Lite?",
        aciklama:
          "Het op Vision Transformer gebaseerde model was veel te zwaar om rechtstreeks op mobiel te draaien. De TFLite-conversie en kwantisatie brachten zowel de modelgrootte als de inferentietijd terug tot een acceptabel niveau.",
      },
      {
        baslik: "Waarom Jetpack Compose?",
        aciklama:
          "De app moest landmarks in realtime over een live camerabeeld tekenen. Het reactieve model van Compose gaat veel schoner om met een interface die elk frame ververst dan XML-gebaseerde views.",
      },
    ],
  },

  "otonom-insansiz-kara-araci": {
    ad: "Autonoom onbemand grondvoertuig",
    ozet:
      "Een embedded systems-project ontwikkeld binnen een technologievereniging, dat realtime objectdetectie, obstakelvermijding en autonome rijalgoritmes combineert.",
    vurgular: [
      "Objectdetectie met hoge framerate via CUDA-versneld YOLOv8 op een Jetson Orin Nano.",
      "Communicatiearchitectuur met lage latentie voor sensor- en cameradata tussen ROS2-nodes.",
      "Route-optimalisatie en autonome navigatie onder dynamische omgevingsomstandigheden.",
    ],
    rol: "Computer vision en autonome rijsoftware",
    problem:
      "Voor een autonoom grondvoertuig is een obstakel zien niet genoeg — de beslissing moet vallen vóór de botsing. De echte uitdaging was objectdetectie met hoge framerate draaien op een embedded board met beperkt vermogen, en die data zonder vertraging doorgeven aan de bewegingsbesturing.",
    cozum:
      "Ik heb waarneming, besluitvorming en beweging opgezet als afzonderlijke ROS2-nodes, met communicatie over berichtkanalen met lage latentie. Het YOLOv8-model draait met CUDA-versnelling op een Jetson Orin Nano; de positie van gedetecteerde objecten voedt een navigatienode die dynamische route-optimalisatie uitvoert.",
    sonuc:
      "Het voertuig navigeert autonoom in omgevingen met vooraf onbekende obstakels en herberekent zijn route in realtime.",
    neden: [
      {
        baslik: "Waarom ROS2?",
        aciklama:
          "De camera, de sensoren en de motorbesturing moesten onafhankelijk van elkaar draaien. De node-architectuur van ROS2 maakte het mogelijk één onderdeel te vervangen zonder de rest te breken.",
      },
      {
        baslik: "Waarom de Jetson Orin Nano?",
        aciklama:
          "Het systeem aan boord moest CUDA ondersteunen en tegelijk binnen een verbruik blijven dat de accu van het voertuig aankon.",
      },
    ],
  },

  "time-to-work": {
    ad: "Time to Work International B.V.",
    ozet:
      "Een snel, meertalig zakelijk webplatform gebouwd voor een Nederlands bedrijf dat internationale arbeidsbemiddeling en consultancy aanbiedt.",
    vurgular: [
      "Sterke SEO en snelle laadtijden via de Next.js App Router en SSR/SSG-architectuur.",
      "Vloeiende micro-interacties en een zakelijke ontwerptaal opgebouwd met Framer Motion.",
      "Meertalig contentbeheer via i18n en een volledig responsieve interface-architectuur.",
    ],
    rol: "Volledige ontwikkeling",
  },

  focuspulse: {
    ad: "FocusPulse",
    ozet:
      "Een privacygericht systeem dat aandacht en concentratie tijdens het werken analyseert via cameradata. Alle verwerking gebeurt lokaal op het apparaat.",
    vurgular: [
      "Detectie van afleiding via knipperfrequentie, hoofdpositie en kijkrichting.",
      "Volledig lokale verwerking zonder data naar een server te sturen — privacy én lage latentie.",
      "Concentratiescores en statistische rapportage per werkperiode.",
    ],
  },

  "codelens-ar": {
    ad: "CodeLens AR",
    ozet:
      "Een platform dat codeblokken en tekst scant en analyseert via augmented reality of camerabeeld, gericht op het versnellen van workflows voor ontwikkelaars.",
    vurgular: [
      "Realtime tekstherkenning en beeldverwerkingspipeline over een live camerastream.",
      "Geoptimaliseerde data- en push-architectuur tussen de client en backofficediensten.",
      "Doelgericht interfaceontwerp gericht op het verhogen van de productiviteit van ontwikkelaars.",
    ],
  },

  "akilli-atik-yonetimi": {
    ad: "Slim afvalbeheer",
    ozet:
      "De backend- en database-infrastructuur van een IoT-platform dat afvalinzamelprocessen, vulniveaus van containers en operationele data centraal monitort.",
    vurgular: [
      "Een publish/ack-datapijplijn voor het betrouwbaar verwerken van metingen uit IoT-sensornodes.",
      "Relationeel schemaontwerp, migratiebeheer en query-optimalisatie op PostgreSQL voor dataconsistentie.",
      "RESTful API-architectuur met rolgebaseerde toegangscontrole en volledige datasynchronisatie.",
    ],
    rol: "Backend- en databasearchitectuur",
  },

  "vit-bigru-pipeline": {
    ad: "Hybride ViT-BiGRU-pijplijn",
    ozet:
      "Een hybride deep learning-model dat een Vision Transformer voor ruimtelijke kenmerkextractie combineert met Bi-directional GRU-netwerken voor het vastleggen van temporele patronen.",
    vurgular: [
      "Self-attention-gebaseerde kenmerkextractie met ViT, sequentiemodellering via BiGRU-lagen.",
      "Datavoorbewerking, data-augmentatie en regularisatietechnieken tegen overfitting.",
      "Visualisatie van confusiematrices, ROC-curves en trainingsmetrieken.",
    ],
  },

  "fuzyon-akademi": {
    ad: "Füzyon Akademi",
    ozet:
      "De zakelijke website van een werkplaats in Gaziantep die robotica, softwareontwikkeling, AI en dronetechnologie onderwijst. Begonnen als statische site en omgevormd tot een dynamisch platform met een adminpaneel dat de organisatie zelf beheert, waarna het live is gezet.",
    vurgular: [
      "Een driedimensionale hero-scène gebouwd met pure CSS perspective en preserve-3d, zonder Three.js.",
      "PHP- en MySQL-adminpaneel met CRUD voor galerij, externe links, contentblokken en opleidingsprogramma's.",
      "Volledige SEO-inrichting met JSON-LD, sitemap en Search Console-integratie.",
      "Versleutelde login met password_hash en bescherming tegen session fixation via session_regenerate_id.",
      "Een eigen lightbox-galerij die per categorie opent en met pijltoetsen doorlopen kan worden.",
    ],
    rol: "Ontwerp, ontwikkeling en deployment",
    problem:
      "De volledige digitale aanwezigheid van de organisatie bestond uit socialemedia-accounts. Ze was niet vindbaar in zoekmachines en had geen kanaal om haar programma's en resultaten te presenteren. Daarnaast moest een team zonder technische achtergrond niet langer afhankelijk zijn van een ontwikkelaar voor elke tekstwijziging.",
    cozum:
      "Ik heb eerst een lichte, snelle zakelijke website ontworpen zonder framework, waarbij ik het kleurenpalet uit het logo afleidde en via CSS-variabelen vanuit één punt beheerbaar maakte. Daarna heb ik de site omgezet naar een dynamische PHP- en MySQL-structuur met een adminpaneel met vier tabbladen: galerij, links, contentblokken en opleidingsprogramma's. Tot slot heb ik de site gemigreerd naar de cPanel-hosting van de organisatie en daarbij DNS-, SSL- en tekencoderingsproblemen opgelost.",
    sonuc:
      "De organisatie werkt de galerij, de programma's en alle teksten nu zelf bij, zonder ontwikkelaar. De site staat live met een geldig SSL-certificaat en is gekoppeld aan Google Search Console en het bedrijfsprofiel.",
    neden: [
      {
        baslik: "Waarom geen framework?",
        aciklama:
          "In de kern was dit een statische presentatiesite. React of Vue toevoegen zou de laadtijd en complexiteit hebben verhoogd zonder echt voordeel. Puur HTML, CSS en JavaScript gaven het snelste resultaat.",
      },
      {
        baslik: "Waarom PHP en MySQL?",
        aciklama:
          "De bestaande cPanel-hosting van de organisatie ondersteunde PHP en MySQL zonder extra kosten. Een Node-gebaseerde oplossing had een nieuwe server en maandelijkse kosten betekend.",
      },
      {
        baslik: "Waarom geen Three.js voor de 3D-scène?",
        aciklama:
          "Three.js zou honderden kilobytes aan de pagina hebben toegevoegd. Hetzelfde visuele effect heb ik bereikt met de eigen perspective- en preserve-3d-eigenschappen van de browser, zonder extra pakketten.",
      },
      {
        baslik: "Waarom een regelgebaseerde assistent?",
        aciklama:
          "Een echte AI-API zou maandelijkse kosten met zich meebrengen en de sleutel aan de clientzijde blootstellen, wat een beveiligingslek oplevert. Een FAQ-assistent op basis van trefwoorden voorzag gratis en veilig in de behoefte.",
      },
    ],
  },

  "otel-temizlik-takip": {
    ad: "Hotelschoonmaakbeheer",
    ozet:
      "Een beheersysteem dat het schoonmaken van hotelkamers volgt via QR-codes. Medewerkers scannen de kamer, de leiding ziet de actuele status van alle verdiepingen op één scherm.",
    vurgular: [
      "QR-gebaseerde scanflow voor kamers met directe statusupdates.",
      "Beheerpaneel met rechten, ingedeeld per verdieping, kamer en medewerker.",
      "Rapportage en historiek op basis van een relationeel databaseschema.",
    ],
  },

  "stm32-arduino-gomulu": {
    ad: "STM32- & Arduino-embeddedsystemen",
    ozet:
      "Laagniveau embedded software ontwikkeld binnen het hardwarewerk bij Turuncu Bilişim, met sensorintegratie, dataverwerking en aansturing van randapparatuur.",
    vurgular: [
      "Uitlezen en verwerken van analoge en digitale sensordata via I2C, SPI en UART.",
      "Nauwkeurige hardwarebesturing met interrupts, timers en PWM-signalen.",
      "Geheugen- en codeoptimalisatie voor laag verbruik en realtime responstijden.",
    ],
  },

  "gercek-zamanli-backend": {
    ad: "Realtime backenddiensten",
    ozet:
      "Een backendinfrastructuur op microservicebasis voor meerdere gelijktijdige clients, die bidirectionele socketcommunicatie en asynchrone datastromen beheert.",
    vurgular: [
      "Event-gedreven live datalevering met lage latentie via WebSockets en Flask-SocketIO.",
      "Typeveilige, automatisch gedocumenteerde REST-endpoints met FastAPI en Pydantic.",
      "Versleutelde communicatie tussen lokale en externe apparaten via Tailscale-integratie.",
    ],
  },

  "resnet-vgg-kiyaslama": {
    ad: "ResNet50- & VGG19-modelvergelijking",
    ozet:
      "Een analytisch onderzoek dat klassieke convolutionele architecturen via transfer learning traint op een eigen dataset en vervolgens nauwkeurigheid en inferentiesnelheid vergelijkt.",
    vurgular: [
      "Fine-tuningstrategieën met laagsgewijs bevriezen van gewichten en eigen classificatielagen.",
      "Vergelijking van architecturen op precision-, recall- en F1-score-metrieken.",
      "Trainingslussen geoptimaliseerd met CUDA-versnelling.",
    ],
  },

  "anadolu-diyabet-okulu": {
    ad: "Anadolu Diabetesschool",
    ozet:
      "Een zorgplatform met educatieve content voor mensen met diabetes en hun naasten, volledig ontwikkeld inclusief contentbeheerpaneel.",
    vurgular: [
      "Dynamische content en paginastructuur, bewerkbaar vanuit het beheerpaneel.",
      "Responsieve interface-architectuur die aansluit op de huisstijl van de organisatie.",
      "Schaalbare backend op basis van Laravel en PostgreSQL.",
    ],
  },

  "stok-takip": {
    ad: "Voorraadbeheer-app",
    ozet:
      "Een mobiele applicatie voor voorraadbeheer met in- en uitgaande goederen, actuele voorraadstatus en rapportage.",
    vurgular: [
      "In- en uitgaande voorraadmutaties met actuele statusweergave.",
      "Overzicht, zoeken en filteren per categorie.",
      "Ondersteuning voor meerdere platformen vanuit één codebase met React Native en Expo.",
    ],
  },

  ai4change: {
    ad: "AI4Change",
    ozet:
      "Een project ontwikkeld binnen het Kodluyoruz-programma, dat data-analyse en machine learning toepast op vraagstukken rond maatschappelijke organisaties en sociale impact.",
    vurgular: [
      "Opschonen, feature engineering en analyse van ruwe maatschappelijke data.",
      "Voorspellende modellen met beslisbomen en classificatie- en regressiealgoritmes.",
      "Resultaten vertaald naar heldere visualisaties voor besluitvormers.",
    ],
  },

  "kullanici-yonetim-sistemi": {
    ad: "Gebruikersbeheersysteem",
    ozet:
      "Een gelaagde webbackend-architectuur met rolgebaseerde toegangscontrole, dynamische dataquery's en sessiebeveiliging.",
    vurgular: [
      "Databaselaag beveiligd tegen SQL-injectie en XSS via PDO en prepared statements.",
      "Authenticatie op basis van sessies en cookies, bcrypt-hashing en een autorisatie-architectuur.",
      "Relationeel schemaontwerp, optimalisatie van foreign keys en indexering.",
    ],
  },

  "2d-buyucu-savasi": {
    ad: "2D-tovenaarsgevecht & desktopsimulaties",
    ozet:
      "Twee game- en simulatieprojecten opgebouwd rond objectgeoriënteerde programmeerprincipes, game loop-logica en algoritme-analyse.",
    vurgular: [
      "Personagemechanieken, projectielfysica en levens-/energiesystemen met overerving, polymorfisme en encapsulatie.",
      "Een realtime game loop gedreven door collisiedetectie en toetsenbordinvoer.",
      "Dynamisch matrixbeheer en pathfinding-algoritmes.",
    ],
  },
};