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
      "Een QR-gebaseerd, meertalig hotelbeheersysteem. Aparte rechtenlagen voor beheerders, managers en medewerkers; gasten bereiken hun eigen interface door een code te scannen. Gebouwd als commercieel product dat aan hotels wordt verkocht en per installatie apart wordt geconfigureerd.",
    vurgular: [
      "Vier afzonderlijke rollen en rechtenlagen: beheerder, manager, medewerker en gast.",
      "QR-scanflow die de kamerstatus direct bijwerkt; de leiding ziet alle verdiepingen op één scherm.",
      "Meertalige interface — zowel voor internationale gasten als voor medewerkers met verschillende talen.",
      "Rapportage per verdieping, kamer en medewerker, met een volledige historiek van schoonmaakbeurten.",
      "Configureerbare architectuur die per hotel een eigen, aangepaste installatie mogelijk maakt.",
    ],
    rol: "Volledige ontwikkeling",
    problem:
      "De kern van het probleem bij hotelschoonmaak is dat iedereen op hetzelfde moment moet weten in welke staat een kamer verkeert. Zodra de informatiestroom tussen kamermeisje, verdiepingschef en receptie hapert, wordt een gast naar een kamer gestuurd die nog niet klaar is. Daarbovenop moest het systeem werken met personeel dat verschillende talen spreekt, en voor elk verkocht hotel apart configureerbaar zijn.",
    cozum:
      "Ik heb elke kamer een QR-code toegewezen; medewerkers scannen die bij binnenkomst en de status wordt direct naar het centrale systeem geschreven. De rechten zijn in vier lagen verdeeld: de beheerder beheert het systeem, de manager ziet de live status van alle verdiepingen op één scherm, medewerkers zien alleen hun eigen taken en gasten komen via de code op een eigen interface. De interface is vanaf het begin meertalig opgezet. Om per hotel een eigen installatie mogelijk te maken, zijn kamerstructuur, hotelgegevens en merkelementen configureerbaar gehouden.",
    sonuc:
      "Het systeem draait live op teknohygiene.com. Het is gepositioneerd als commercieel product: elk hotel dat het aanschaft krijgt een eigen installatie, aangepast aan de structuur van dat hotel.",
    neden: [
      {
        baslik: "Waarom QR-codes?",
        aciklama:
          "NFC of een eigen handterminal zou een hardware-investering hebben gevraagd. QR-codes werken met de telefoons van de medewerkers zelf — het hotel hoeft alleen papieren labels op de deuren te plakken.",
      },
      {
        baslik: "Waarom web in plaats van een mobiele app?",
        aciklama:
          "Bij een app zou elke medewerker moeten installeren, op storegoedkeuring moeten wachten en updates moeten downloaden. In een browsergebaseerd systeem opent de scan direct de juiste pagina — er is helemaal geen installatiestap.",
      },
      {
        baslik: "Waarom meertalig?",
        aciklama:
          "Hotelpersoneel en gasten spreken vaak niet dezelfde taal. Taalondersteuning is er niet later bij gebouwd, maar was vanaf dag één een ontwerpbeslissing.",
      },
      {
        baslik: "Waarom Laravel?",
        aciklama:
          "Autorisatie, meerdere rollen en een beheerpaneel zitten al in het framework. Bovendien draait het zonder extra kosten op de cPanel-hosting die de doelklanten toch al gebruiken.",
      },
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
      "Een educatief platform met meerdere modules voor mensen met diabetes en hun naasten. Het brengt publieke pagina's, een les- en studentenpaneel, cursusverkoop via winkelwagen en bestelflow, een beheerpaneel en een apart ingelogde Chronische Gids-module samen.",
    vurgular: [
      "Platformarchitectuur met meerdere modules die studentenpaneel, lesvoortgang en contentbeheer samen laat draaien.",
      "Lesvideo's gehost op Bunny Stream — het bestand gaat rechtstreeks van de browser van de gebruiker naar de dienst en raakt de server nooit.",
      "Verkoopinfrastructuur voor cursussen met winkelwagen en bestelflow.",
      "Een zelfstandige Chronische Gids-module met eigen login en rechten.",
      "Migratie naar cPanel en livegang met een SSL-certificaat.",
    ],
    rol: "Volledige ontwikkeling en deployment",
    problem:
      "De bestaande site van de organisatie was een eenvoudige presentatiepagina, zonder infrastructuur om educatieve content te publiceren, de voortgang van studenten te volgen of cursussen te verkopen. Daarbij kwam een harde technische beperking: het shared hosting-pakket stond geen videohosting toe, terwijl lesvideo's juist de kern van het platform vormden.",
    cozum:
      "Ik heb de site vanaf de grond opnieuw opgebouwd als platform met meerdere modules: publieke pagina's, een studentenpaneel voor de gratis lessen, een verkooplaag met winkelwagen en bestelflow, een beheerpaneel voor de content en een apart ingelogde Chronische Gids-module. De videobeperking heb ik opgelost door de bestanden op Bunny Stream te hosten — bij een upload gaat het bestand rechtstreeks vanuit de browser naar Bunny en passeert het de hostingserver nooit. Tot slot heb ik het platform naar cPanel gemigreerd, de DNS omgezet en het met SSL live gezet.",
    sonuc:
      "Het platform draait live op anadoludiyabetokulu.com met een geldig SSL-certificaat. De organisatie werkt lescontent, paginateksten en cursusstructuur zelf bij via het beheerpaneel; de video-infrastructuur functioneert volledig los van de hostingbeperking.",
    neden: [
      {
        baslik: "Waarom Bunny Stream?",
        aciklama:
          "Shared hosting-pakketten staan geen videohosting toe, en zelfs als dat wel zo was, zou de bandbreedte na de eerste honderd kijkers op zijn. Met Bunny Stream uploadt het bestand rechtstreeks vanuit de browser naar de dienst, waardoor de server noch opslag- noch bandbreedtelast draagt.",
      },
      {
        baslik: "Waarom de overstap naar MySQL?",
        aciklama:
          "De ontwikkeling begon met PostgreSQL, maar de cPanel-hosting van de organisatie bood MySQL. Dezelfde database in ontwikkeling en productie gebruiken voorkwam verrassingen bij de migratie.",
      },
      {
        baslik: "Waarom is de Chronische Gids een aparte module?",
        aciklama:
          "Die bediende een ander publiek met een ander toegangsmodel. Door hem met een eigen login en eigen rechten te bouwen in plaats van in het hoofdplatform te verwerken, konden beide kanten zich onafhankelijk ontwikkelen.",
      },
      {
        baslik: "Waarom Laravel?",
        aciklama:
          "Studentaccounts, autorisatie, de bestelflow en het beheerpaneel zijn allemaal gebouwd op structuren die het framework al meebrengt. Bovendien draait het zonder extra kosten op de bestaande cPanel-hosting van de organisatie.",
      },
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