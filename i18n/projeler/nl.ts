import type { KismiProjeMetinleri } from "./tipler";

/* Henüz çevrilmemiş projeler Türkçe metne düşer. */
export const projelerNl: KismiProjeMetinleri = {
  rhinoai: {
    ad: "RhinoAI",
    ozet:
      "Een mobiele AI-toepassing die gezichtsproporties vóór en na een rhinoplastiek objectief meet. Landmarkdetectie en deep learning-inferentie draaien in realtime, volledig op het apparaat zelf.",
    vurgular: [
      "Detectie van 468 gezichtsreferentiepunten via ML Kit Face Mesh, met berekening van asymmetriewaarden.",
      "Live analyse van nasolabiale en dorsale hoeken met 30+ FPS op de camerastream.",
      "On-device inferentie met lage latentie dankzij modellen die geoptimaliseerd en omgezet zijn naar TFLite.",
      "Moderne, reactieve Android-architectuur op basis van MVVM en Jetpack Compose.",
      "Uitgebracht als open source op GitHub.",
    ],
    rol: "Solo-ontwikkelaar — mobiel en edge-AI",
    problem:
      "Operatieplanning en asymmetriebeoordeling vóór en na een rhinoplastiek berusten grotendeels op de subjectieve waarneming van de arts. Er ontbrak een lichte mobiele tool die de patiënt zijn hoek- en millimeterverhoudingen direct laat zien. Bestaande mobiele oplossingen uploaden de foto naar een server, wat een privacyprobleem oplevert en de app afhankelijk maakt van een internetverbinding.",
    cozum:
      "Ik heb een native Android-architectuur gebouwd op Kotlin en Jetpack Compose. De ML Kit Face Mesh-integratie brengt gezichtspunten binnen milliseconden in kaart; voor beeldanalyse en berekening van neushoeken draaien TensorFlow Lite-modellen rechtstreeks op het apparaat. De zwaardere classificatiemodellen zijn omgezet naar TFLite en verkleind via kwantisatie.",
    sonuc:
      "Het resultaat is een applicatie die volledig lokaal en zonder serverkosten draait en gezichtscontouren plus nasolabiale/dorsale hoeken met 30+ FPS op de live camerastream analyseert. Uitgebracht als open source.",
    neden: [
      {
        baslik: "Waarom inferentie op het apparaat?",
        aciklama:
          "In plaats van de camerastream naar een Python FastAPI-backend te sturen, heb ik alles op het apparaat laten draaien. In een zorgtoepassing is het feit dat de foto de telefoon nooit verlaat een sterkere privacygarantie dan welke servermaatregel dan ook. Dezelfde keuze leverde ook nul latentie en onafhankelijkheid van het netwerk op.",
      },
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
      "Gedistribueerde ROS2-node-architectuur met gescheiden lagen voor waarneming, besluitvorming en beweging.",
      "Levering met lage latentie van gedetecteerde objectposities aan de motoraandrijvingsalgoritmes.",
      "Dynamische routecorrectie, getest in het veld op zwaar terrein.",
    ],
    rol: "Autonome algoritmes en embedded computer vision",
    problem:
      "Op ruw terrein en in velden met obstakels moest het voertuig zijn omgeving in realtime waarnemen, obstakels ontwijken en zonder menselijk ingrijpen een route volgen. De echte moeilijkheid: een obstakel zien is niet genoeg — de beslissing moet vallen vóór de botsing, en dat op een embedded board met beperkt vermogen.",
    cozum:
      "Ik heb een gedistribueerde ROS2-node-architectuur gebouwd waarin waarneming, besluitvorming en beweging als onafhankelijke nodes draaien en communiceren over berichtkanalen met lage latentie. Het YOLOv8-model heb ik met CUDA-versnelling geoptimaliseerd op een Jetson Orin Nano om de detectiepijplijn te bouwen; de posities van gedetecteerde objecten gaan rechtstreeks naar de motoraandrijvingsbesturing.",
    sonuc:
      "Het resultaat is een werkend autonoom grondvoertuigplatform met realtime obstakeldetectie en dynamische routecorrectie, in het veld getest op zware parcoursen.",
    neden: [
      {
        baslik: "Waarom CUDA-versneld YOLOv8?",
        aciklama:
          "Lichte CPU-modellen zoals MobileNet zouden minder energie verbruiken, maar verloren nauwkeurigheid bij de kleine en complexe obstakels in het veld. Hardwareversnelling op de Jetson maakte hoge FPS mogelijk zonder in te leveren op nauwkeurigheid.",
      },
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
      "Een meertalig, SEO-gericht zakelijk webplatform, vanaf nul gebouwd voor een Nederlands bedrijf in internationale arbeidsbemiddeling en personeelsdiensten.",
    vurgular: [
      "Modulaire architectuur op de Next.js App Router, die SSR en statische generatie combineert.",
      "Dynamische meertalige (i18n) structuur zonder prestatieverlies.",
      "Vloeiende interface-interacties en een zakelijke ontwerptaal opgebouwd met Framer Motion.",
      "Responsieve sollicitatieflow die op alle apparaten soepel werkt.",
    ],
    rol: "Frontend-architectuur, lokalisatie en deployment",
    problem:
      "De bestaande webinfrastructuur van het bedrijf was traag, bleef achter bij responsieve standaarden en verwerkte meertaligheid omslachtig. Als digitaal gezicht van een bedrijf dat internationale kandidaten en werkgevers bedient, weerspiegelde ze de huisstijl bovendien onvoldoende.",
    cozum:
      "Ik heb een modulaire, SEO-gerichte architectuur gebouwd op de Next.js App Router, TypeScript en Tailwind CSS. Voor de interface-interacties heb ik Framer Motion geïntegreerd, en de meertalige structuur zo opgezet dat elke taal een eigen gegenereerde pagina krijgt zonder prestatiekosten.",
    sonuc:
      "Het zakelijke platform is live gegaan en draait op ttw-international.nl, waar internationale kandidaten en bedrijven vanaf elk apparaat comfortabel kunnen solliciteren.",
    neden: [
      {
        baslik: "Waarom Next.js SSR/SSG in plaats van een klassieke React-SPA?",
        aciklama:
          "Voor een internationaal arbeidsbemiddelingsbedrijf betekent zoekverkeer direct omzet. In een single-page React-applicatie wordt de inhoud in de browser gerenderd en verschijnt die vertraagd voor zoekmachines. Server-side rendering en statische pagina's maximaliseerden zowel indexering als laadprestaties.",
      },
      {
        baslik: "Waarom dynamische i18n?",
        aciklama:
          "Meertalige sites splitsen doorgaans elke taal in een eigen codebase of sturen alle vertalingen naar de client. Het eerste maakt onderhoud onmogelijk, het tweede blaast de paginagrootte op. Ik heb een structuur gebouwd waarin elke pagina alleen de teksten van haar eigen taal meedraagt.",
      },
      {
        baslik: "Waarom Tailwind?",
        aciklama:
          "Het ontwerp moest de huisstijl volgen, en een kant-en-klare componentenbibliotheek zou betekenen dat je op elk scherm tegen die huisstijl vecht. Tailwind leverde een consistent schaal- en kleursysteem terwijl het ontwerp vanaf nul werd opgebouwd.",
      },
    ],
  },

  focuspulse: {
    ad: "FocusPulse",
    ozet:
      "Een Android-applicatie die aandacht en concentratie tijdens het werken analyseert via cameradata. Alle verwerking gebeurt op het apparaat; het beeld verlaat het nooit.",
    vurgular: [
      "Detectie van afleiding via knipperfrequentie, hoofdpositie en kijkrichting.",
      "On-device beeldverwerkingsarchitectuur die een live afleidingsindex berekent.",
      "Inferentie met lage latentie via naar TFLite geconverteerde modellen.",
      "Dynamische pauzesuggesties en waarschuwingsfeedback.",
      "Data wordt volledig lokaal verwerkt en bereikt nooit een server.",
    ],
    rol: "Solo-ontwikkelaar — Android en edge-AI",
    problem:
      "Concentratieverlies en vermoeidheid tijdens thuiswerken en lange werksessies zijn niet objectief te volgen. De meeste bestaande oplossingen sturen het camerabeeld naar de cloud — ze vragen dus je privacy op te geven om gemonitord te worden.",
    cozum:
      "Ik heb een Android-applicatie ontwikkeld die knipperfrequentie, hoofdpositie en kijkrichting volledig op het apparaat analyseert. De modelkant heb ik geprototypeerd in Python en OpenCV en vervolgens omgezet naar TFLite; de app draait die lichtgewicht modellen lokaal. De signalen worden omgezet in een live afleidingsindex, die dynamische pauzesuggesties aanstuurt.",
    sonuc:
      "Het resultaat is een werkende Android-applicatie die het beeld van de gebruiker nooit het apparaat laat verlaten, een live focusindex berekent en pauzefeedback genereert.",
    neden: [
      {
        baslik: "Waarom on-device inferentie in plaats van de cloud?",
        aciklama:
          "Cloudgebaseerde vision-API's bieden sterkere modellen maar botsen met het doel van het systeem: in een applicatie die iemand tijdens het werken continu observeert, is het versturen van het beeld naar de cloud onacceptabel. Lichtgewicht inferentie op het apparaat nam dat probleem volledig weg en maakte het netwerk overbodig.",
      },
      {
        baslik: "Waarom is het model in Python gebouwd maar de app in Kotlin?",
        aciklama:
          "Voor modelexperimenten en validatie is het Python-ecosysteem onvergelijkbaar sneller. Maar het eindproduct zou een Android-applicatie worden; het model omzetten naar TFLite en vanuit Kotlin draaien gaf native prestaties zonder de ontwikkeling te vertragen.",
      },
      {
        baslik: "Waarom gedragssignalen in plaats van directe classificatie?",
        aciklama:
          "In plaats van één enkele indeling \"gefocust / afgeleid\" heb ik gekozen om afzonderlijke signalen te meten — knipperen, hoofdpositie, kijkrichting — en daaruit een index af te leiden. Zo bleef het resultaat verklaarbaar: de gebruiker ziet waarom hij een melding kreeg.",
      },
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
      "Een hybride deep learning-pijplijn die ruimtelijke kenmerken vastlegt met een Vision Transformer en temporele patronen met bidirectionele GRU-netwerken.",
    vurgular: [
      "ViT-blokken als ruimtelijke kenmerkextractor, waarvan de vectoren doorstromen naar BiGRU-lagen.",
      "CUDA-versnelde trainings- en validatielussen op PyTorch en TensorFlow.",
      "Datavoorbewerking, data-augmentatie en regularisatietechnieken tegen overfitting.",
      "Visualisatie van confusiematrices, ROC-curves en trainingsmetrieken.",
    ],
    rol: "Deep learning-onderzoeker en modelontwikkelaar",
    problem:
      "Zuiver convolutionele of zuiver recurrente architecturen kunnen in sequentiële beelddata niet beide tegelijk vastleggen: het ruimtelijke detail binnen een frame en de langeafstandscontext over frames heen. Versterk je het één, dan verzwak je het ander.",
    cozum:
      "Ik heb een hybride pijplijn geprogrammeerd waarin Vision Transformer-blokken fungeren als ruimtelijke kenmerkextractor en hun uitvoervectoren doorstromen naar bidirectionele BiGRU-lagen. Op Python, PyTorch en TensorFlow heb ik CUDA-versnelde trainings- en validatielussen opgezet en de resultaten gevisualiseerd via confusiematrices, ROC-curves en trainingsmetrieken.",
    sonuc:
      "Het resultaat is een modelarchitectuur die geschikt is voor zowel academisch als praktisch gebruik en op complexe temporele datasets een meetbare verbetering in nauwkeurigheid en F1-score realiseert ten opzichte van standaard CNN-LSTM-modellen.",
    neden: [
      {
        baslik: "Waarom BiGRU in plaats van LSTM?",
        aciklama:
          "GRU werkt met minder parameters dan LSTM, wat de trainingstijd en het geheugengebruik aanzienlijk verlaagde. Omdat de structuur bidirectioneel is, ziet het model nog steeds zowel verleden als toekomstige context — wat aan parameters werd bespaard, ging niet verloren aan prestaties.",
      },
      {
        baslik: "Waarom ViT in plaats van een CNN?",
        aciklama:
          "Convolutionele lagen leggen lokale patronen goed vast maar hebben moeite ver uiteenliggende delen van een frame met elkaar te verbinden. De self-attention-structuur van een Vision Transformer beoordeelt verbanden in het hele frame in één stap en voedt zo een rijkere kenmerkvector aan het sequentiemodel.",
      },
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
      "Laagniveau embedded software rond synchrone sensordata-verzameling, uitvoer met lage latentie naar lokale displays en een betrouwbare communicatiestandaard tussen microcontrollers.",
    vurgular: [
      "Register- en driverniveau programmeren op STM32 met de HAL/LL-bibliotheken.",
      "Communicatiedrivers voor SSD1306 OLED-displays en sensormodules via I2C, SPI en UART.",
      "Realtime leesarchitectuur aangestuurd door interrupts en timers, bestand tegen vastlopers.",
      "Geheugen- en codeoptimalisatie voor laag verbruik en realtime responstijden.",
    ],
    rol: "Embedded softwareontwikkelaar",
    problem:
      "Op hardwareniveau moesten sensordata zoals temperatuur, versnelling en afstand synchroon worden verzameld, met lage latentie naar lokale displays worden geschreven, en moest er een betrouwbare communicatiestandaard tussen microcontrollers komen.",
    cozum:
      "Met C en C++ heb ik op STM32 met de HAL/LL-bibliotheken en op de Arduino Uno op register- en driverniveau geprogrammeerd. Via I2C, SPI en UART heb ik communicatiedrivers ontwikkeld voor SSD1306 OLED-displays en diverse sensormodules, en de leeslus opgebouwd op interrupts en timers.",
    sonuc:
      "Het resultaat is een reeks stabiele hardwareprototypes zonder vastlopers, aangestuurd door interrupts en in staat tot realtime data-uitlezing en visualisatie.",
    neden: [
      {
        baslik: "Waarom interrupt-gestuurd lezen in plaats van polling?",
        aciklama:
          "Een continue pollinglus houdt de CPU van de microcontroller voor niets bezig, en elk signaal dat tussen twee pollings valt, gaat verloren. De overstap naar hardware-interrupts en timergebaseerd periodiek lezen ontlastte de CPU en ving signalen zonder verlies op.",
      },
      {
        baslik: "Waarom code op HAL/LL-niveau?",
        aciklama:
          "Kant-en-klare bibliotheken leveren snel resultaat maar verbergen wat de hardware daadwerkelijk doet. Werken op registerniveau maakte timing- en verbruiksgedrag direct stuurbaar en liet problemen oplossen door meten in plaats van gissen.",
      },
    ],
  },

  "gercek-zamanli-backend": {
    ad: "Realtime backenddiensten",
    ozet:
      "Een backendinfrastructuur op microservicebasis, gebouwd op bidirectionele socketcommunicatie en event-gedreven datastromen, die veel gelijktijdige clients beheert.",
    vurgular: [
      "Event-gedreven, bidirectionele socketarchitecturen aan zowel Python- als Node.js-zijde.",
      "Live datalevering met lage latentie via WebSockets en Flask-SocketIO.",
      "Typeveilige, automatisch gedocumenteerde REST-endpoints met FastAPI en Pydantic.",
      "Centrale inrichting van PostgreSQL- en MySQL-verbindingen en sessiebeheer.",
    ],
    rol: "Backend- en systeemarchitectuur",
    problem:
      "In een klassieke REST-architectuur moet de client de server steeds om data blijven vragen. Dat verbruikt serverresources voor niets en veroorzaakt in systemen met live data zowel hoge latentie als inconsistentie tussen clients.",
    cozum:
      "Ik heb bidirectionele, event-gedreven socketarchitecturen gebouwd met Flask-SocketIO en FastAPI aan de Python-kant en Express met WebSockets aan de Node.js-kant. Wanneer data verandert, meldt de server dat zelf aan de client; die hoeft er niet om te vragen. Daarachter heb ik PostgreSQL- en MySQL-verbindingen en sessiebeheer centraal ingericht.",
    sonuc:
      "Het resultaat is een set schaalbare diensten die datalevering tussen clients terugbrengen tot milliseconden, de serverbelasting verlagen en gelijktijdige verbindingen foutloos afhandelen.",
    neden: [
      {
        baslik: "Waarom WebSockets in plaats van HTTP long polling?",
        aciklama:
          "Long polling draagt bij elke aanvraag opnieuw de HTTP-headers mee en bouwt de verbinding voortdurend op en af. Een permanente socketverbinding neemt die overhead volledig weg en minimaliseert zowel bandbreedte als responstijd.",
      },
      {
        baslik: "Waarom zowel Python als Node.js?",
        aciklama:
          "Verschillende diensten hadden verschillende behoeften. Waar dataverwerking en typeveiligheid telden, werkten FastAPI en Pydantic beter; bij het beheren van veel gelijktijdige verbindingen Node.js en Express. In plaats van één taal af te dwingen, heb ik elke dienst geschreven met het gereedschap dat bij het werk paste.",
      },
    ],
  },

  "resnet-vgg-kiyaslama": {
    ad: "ResNet50- & VGG19-modelvergelijking",
    ozet:
      "Een analytisch onderzoek dat twee klassieke convolutionele architecturen via transfer learning op dezelfde dataset traint en ze vervolgens vergelijkt op nauwkeurigheid, inferentietijd en modelgrootte.",
    vurgular: [
      "Optimalisatie van voorgetrainde ResNet50- en VGG19-modellen op dezelfde dataset via transfer learning.",
      "Fine-tuningstrategieën met laagsgewijs bevriezen van gewichten en eigen classificatielagen.",
      "Vergelijkingsscripts die loss/accuracy-curves, confusiematrices en inferentielatentie visualiseren.",
      "Architectuurvergelijking op precision, recall en F1-score.",
    ],
    rol: "Data science en modelevaluatie",
    problem:
      "Voor een specifiek beeldclassificatieprobleem was onbekend welke convolutionele architectuur de betere balans bood tussen nauwkeurigheid, inferentietijd, modelgrootte en overfitting. De beslissing moest op meting berusten, niet op intuïtie.",
    cozum:
      "Volgens de principes van transfer learning heb ik voorgetrainde ResNet50- en VGG19-modellen op dezelfde dataset geoptimaliseerd en fijngesteld met laagsgewijs bevriezen van gewichten en eigen classificatielagen. Met Matplotlib en Seaborn heb ik vergelijkingsscripts gebouwd die loss/accuracy-curves, de confusiematrix en inferentielatentie visualiseren.",
    sonuc:
      "Het resultaat is een grondige analyse die de sterke en zwakke punten van beide architecturen statistisch blootlegt en een basis biedt voor hardware- en modelkeuze bij toekomstige edge-deployments.",
    neden: [
      {
        baslik: "Waarom zijn ResNets residuele verbindingen cruciaal?",
        aciklama:
          "In vlakke diepe architecturen zoals VGG verdwijnen gradiënten naarmate er lagen bijkomen, waardoor het model ondanks meer diepte slechter leert. De skip connections van ResNet lossen dit op; de metingen toonden experimenteel hogere nauwkeurigheid en snelheid met minder parameters.",
      },
      {
        baslik: "Waarom transfer learning?",
        aciklama:
          "Beide architecturen vanaf nul trainen zou veel langer hebben geduurd, en de datasetgrootte leende zich er niet voor. Starten vanaf voorgetrainde gewichten en de laatste lagen aanpassen hield de vergelijking eerlijk en reproduceerbaar.",
      },
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
      "Twee desktopgame- en simulatieprojecten, vanaf nul gebouwd op objectgeoriënteerde principes, een eigen game loop en een zelfgeschreven physics-engine.",
    vurgular: [
      "Modulaire game engine-structuur rond overerving, polymorfisme en encapsulatie.",
      "Zelfgeschreven AABB-collisiedetectie, projectielmechanica en levens-/energiebeheer.",
      "Pathfinding-algoritmes over een dynamisch grid en mijnenveld.",
      "Een game loop met vloeiende framerate waarin twee spelers gelijktijdig via het toetsenbord strijden.",
    ],
    rol: "Onafhankelijk ontwikkelaar — game loop, physics en interface",
    problem:
      "Objectgeoriënteerde programmeerprincipes, collisie- en physics-algoritmes en dynamische pathfinding-logica moesten in een desktopomgeving worden gesimuleerd zonder framerateverlies.",
    cozum:
      "In Java en Swing heb ik een modulaire game engine-structuur gebouwd rond overerving, polymorfisme en encapsulatie. AABB-collisiedetectie, projectielmechanica, levensbalken en toestandsbeheer heb ik vanaf nul ontwikkeld, evenals pathfinding-algoritmes over een dynamisch grid en mijnenveld.",
    sonuc:
      "Het resultaat is een reeks desktopapplicaties en simulaties zonder geheugenlekken en met een vloeiende framerate, waarin twee spelers gelijktijdig via toetsenbordbesturing kunnen strijden.",
    neden: [
      {
        baslik: "Waarom geen kant-en-klare game engine?",
        aciklama:
          "Het doel was niet een game uitbrengen, maar begrijpen hoe de game loop en physicsberekeningen werken door ze zelf te schrijven. Een kant-en-klare engine verbergt die laag. Mijn eigen loop met vaste tijdstap op Graphics2D schrijven maakte threadbeheer en timinglogica direct zichtbaar.",
      },
      {
        baslik: "Waarom vaste tijdstappen?",
        aciklama:
          "Framerate-afhankelijke updates geven op snelle en trage machines ander physicsgedrag. Met een vaste tijdstap levert de physics overal hetzelfde resultaat; renderfrequentie en simulatiefrequentie lopen onafhankelijk van elkaar.",
      },
    ],
  },
};