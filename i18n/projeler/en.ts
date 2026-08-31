import type { KismiProjeMetinleri } from "./tipler";

/* Henüz çevrilmemiş projeler Türkçe metne düşer. */
export const projelerEn: KismiProjeMetinleri = {
  rhinoai: {
    ad: "RhinoAI",
    ozet:
      "A mobile AI application that objectively measures facial proportions before and after rhinoplasty. Face landmark detection and deep learning inference run in real time, entirely on the device.",
    vurgular: [
      "Detection of 468 facial reference points via ML Kit Face Mesh, with asymmetry calculations.",
      "Live analysis of nasolabial and dorsal angles at 30+ FPS on the camera stream.",
      "Low-latency on-device inference using models optimised and converted to TFLite.",
      "Modern, reactive Android architecture built on MVVM and Jetpack Compose.",
      "Released as open source on GitHub.",
    ],
    rol: "Solo developer — mobile and edge AI",
    problem:
      "Surgical planning and asymmetry assessment before and after rhinoplasty rely largely on the surgeon's subjective observation. There was no lightweight mobile tool showing a patient their angular and millimetric ratios in the moment. Existing mobile solutions upload the photo to a server, which creates a privacy problem and makes the app dependent on an internet connection.",
    cozum:
      "I built a native Android architecture on Kotlin and Jetpack Compose. ML Kit Face Mesh integration maps facial landmarks within milliseconds, and TensorFlow Lite models run directly on the device for image analysis and nasal angle calculations. The heavier classification models were converted to TFLite and shrunk through quantisation.",
    sonuc:
      "The result is an application running fully locally at zero server cost, analysing facial contours and nasolabial/dorsal angles at 30+ FPS on the live camera stream. It was released as open source.",
    neden: [
      {
        baslik: "Why on-device inference?",
        aciklama:
          "Rather than sending the camera stream to a Python FastAPI backend, I chose to run everything on the device. In a health-related application, the photo never leaving the phone is a stronger privacy guarantee than any measure that could be taken server-side. The same decision also brought zero latency and independence from network connectivity.",
      },
      {
        baslik: "Why TensorFlow Lite?",
        aciklama:
          "The Vision Transformer based model was far too heavy to run directly on mobile. TFLite conversion and quantisation brought both the model size and the inference time down to an acceptable level.",
      },
      {
        baslik: "Why Jetpack Compose?",
        aciklama:
          "The app had to draw landmarks over a live camera preview in real time. Compose's reactive model handles an interface that updates every frame far more cleanly than XML-based views.",
      },
    ],
  },

  "otonom-insansiz-kara-araci": {
    ad: "Autonomous Unmanned Ground Vehicle",
    ozet:
      "An embedded systems project developed within a technology development society, combining real-time object detection, obstacle avoidance and autonomous driving algorithms.",
    vurgular: [
      "High-FPS object and obstacle detection with CUDA-accelerated YOLOv8 on a Jetson Orin Nano.",
      "Distributed ROS2 node architecture separating the sensing, decision and motion layers.",
      "Low-latency delivery of detected object positions to the motor driver control algorithms.",
      "Dynamic route correction, field-tested on demanding terrain.",
    ],
    rol: "Autonomous algorithms and embedded computer vision",
    problem:
      "On rough terrain and in fields containing obstacles, the vehicle had to perceive its environment in real time, avoid obstacles and follow a target route without human intervention. The real difficulty: seeing an obstacle isn't enough — the decision has to be made before impact, and on a power-constrained embedded board at that.",
    cozum:
      "I built a distributed ROS2 node architecture in which the sensing, decision and motion layers run as independent nodes communicating over low-latency message channels. I optimised the YOLOv8 model with CUDA acceleration on a Jetson Orin Nano to build the detection pipeline; the positions of detected objects feed directly into the motor driver control algorithms.",
    sonuc:
      "The outcome is a working autonomous ground vehicle platform with real-time obstacle detection and dynamic route correction, field-tested on demanding courses.",
    neden: [
      {
        baslik: "Why CUDA-accelerated YOLOv8?",
        aciklama:
          "Lightweight CPU models such as MobileNet would have consumed less power, but lost accuracy on the small and complex obstacles found in the field. Hardware acceleration on the Jetson made it possible to reach high FPS without sacrificing accuracy.",
      },
      {
        baslik: "Why ROS2?",
        aciklama:
          "The camera, the sensors and the motor control all needed to run independently of one another. ROS2's node architecture made it possible to replace one part without breaking the others.",
      },
      {
        baslik: "Why the Jetson Orin Nano?",
        aciklama:
          "The onboard system had to support CUDA while staying within a power budget that the vehicle's battery could sustain.",
      },
    ],
  },

  "time-to-work": {
    ad: "Time to Work International B.V.",
    ozet:
      "A multilingual, SEO-focused corporate web platform built from scratch for a Netherlands-based company providing international workforce and employment services.",
    vurgular: [
      "Modular architecture on the Next.js App Router, combining SSR and static generation.",
      "Dynamic multilingual (i18n) structure with no performance penalty.",
      "Fluid interface interactions and a corporate design language built with Framer Motion.",
      "Responsive application flow working smoothly across all devices.",
    ],
    rol: "Frontend architecture, localisation and deployment",
    problem:
      "The company's existing web infrastructure was slow, fell short of responsive standards and handled its multilingual support clumsily. As the digital face of a company serving international candidates and businesses, it also failed to convey the corporate identity.",
    cozum:
      "I built a modular, SEO-focused architecture on the Next.js App Router, TypeScript and Tailwind CSS. I integrated Framer Motion for interface interactions, and designed the multilingual structure so that every language gets its own generated page without any performance cost.",
    sonuc:
      "The corporate platform went live and now runs at ttw-international.nl, letting international candidates and companies apply comfortably from any device.",
    neden: [
      {
        baslik: "Why Next.js SSR/SSG rather than a classic React SPA?",
        aciklama:
          "For an international employment company, search traffic translates directly into business. In a single-page React application the content is rendered in the browser and appears late to search engines. Server-side rendering and static pages maximised both indexing and first-load performance.",
      },
      {
        baslik: "Why dynamic i18n?",
        aciklama:
          "Multilingual sites usually either split every language into its own codebase or ship all translations to the client. The first makes maintenance impossible, the second inflates page weight. I built a structure where each page carries only the copy for its own language.",
      },
      {
        baslik: "Why Tailwind?",
        aciklama:
          "The design had to follow the company's identity, and a ready-made component library would have meant fighting that identity on every screen. Tailwind provided a consistent scale and colour system while the design was built from scratch.",
      },
    ],
  },

  focuspulse: {
    ad: "FocusPulse",
    ozet:
      "An Android application that analyses attention and focus during work sessions through camera data. All processing happens on the device; the image never leaves it.",
    vurgular: [
      "Distraction detection through blink frequency, head pose estimation and gaze direction tracking.",
      "On-device image processing architecture computing a live distraction index.",
      "Low-latency inference using models converted to the TFLite format.",
      "Dynamic break suggestions and alert feedback.",
      "Data is processed entirely locally, never reaching any server.",
    ],
    rol: "Solo developer — Android and edge AI",
    problem:
      "Loss of focus and fatigue during remote work and long sessions cannot be tracked objectively. Most existing solutions send the camera feed to the cloud — asking the user to give up their privacy in order to be monitored.",
    cozum:
      "I developed an Android application that analyses blink frequency, head pose and gaze direction entirely on the device. I prototyped the model side in Python and OpenCV, then converted it to TFLite; the app runs those lightweight models locally. The signals are turned into a live distraction index, which drives dynamic break suggestions.",
    sonuc:
      "The result is a working Android application that never lets the user's image leave the device, computes a live focus index and produces break feedback.",
    neden: [
      {
        baslik: "Why on-device inference instead of the cloud?",
        aciklama:
          "Cloud-based vision APIs offer stronger models but contradict the purpose of the system: in an application that watches someone continuously while they work, sending the image to the cloud is unacceptable. Lightweight on-device inference removed that problem entirely and eliminated network dependency.",
      },
      {
        baslik: "Why was the model built in Python but the app in Kotlin?",
        aciklama:
          "For model experimentation and validation, the Python ecosystem is incomparably faster. But the final product was going to be an Android application; converting the model to TFLite and running it from Kotlin gave native performance without slowing development.",
      },
      {
        baslik: "Why behavioural signals instead of direct classification?",
        aciklama:
          "Rather than a single \"focused / distracted\" classification, I chose to measure separate signals — blinking, head pose, gaze direction — and derive an index from them. That kept the result explainable: the user can see why they were alerted.",
      },
    ],
  },

  "codelens-ar": {
    ad: "CodeLens AR",
    ozet:
      "A platform that scans and analyses code blocks and text through augmented reality or camera-based visual input, aimed at speeding up developer workflows.",
    vurgular: [
      "Real-time optical recognition and image processing pipeline over a live camera stream.",
      "Optimised data and push delivery architecture between the client and back-office services.",
      "Purpose-driven interface design focused on improving developer productivity.",
    ],
  },

  "akilli-atik-yonetimi": {
    ad: "Smart Waste Management",
    ozet:
      "The backend and database infrastructure of an IoT-enabled platform that centrally monitors waste collection processes, container fill levels and operational data.",
    vurgular: [
      "A publish/ack data pipeline for reliably processing readings from IoT sensor nodes.",
      "Relational schema design, migration management and query optimisation on PostgreSQL for data consistency.",
      "RESTful API architecture providing role-based access control and end-to-end data synchronisation.",
    ],
    rol: "Backend and database architecture",
  },

  "vit-bigru-pipeline": {
    ad: "Hybrid ViT-BiGRU Pipeline",
    ozet:
      "A hybrid deep learning pipeline capturing spatial features with a Vision Transformer and temporal patterns with bidirectional GRU networks.",
    vurgular: [
      "ViT blocks as the spatial feature extractor, feeding their vectors into BiGRU layers.",
      "CUDA-accelerated training and validation loops on PyTorch and TensorFlow.",
      "Data preprocessing, augmentation and regularisation techniques to prevent overfitting.",
      "Visualisation of confusion matrices, ROC curves and training metrics.",
    ],
    rol: "Deep learning researcher and model developer",
    problem:
      "Purely convolutional or purely recurrent architectures cannot capture two things at once in sequential visual data: the spatial detail within a frame and the long-range temporal context across frames. Strengthening one weakens the other.",
    cozum:
      "I coded a hybrid pipeline in which Vision Transformer blocks act as the spatial feature extractor and their output vectors feed into bidirectional BiGRU layers. I set up CUDA-accelerated training and validation loops on Python, PyTorch and TensorFlow, and visualised the results through confusion matrices, ROC curves and training metrics.",
    sonuc:
      "The outcome is a model architecture suited to both academic and practical use, delivering a measurable increase in accuracy and F1-score on complex temporal datasets compared to standard CNN-LSTM models.",
    neden: [
      {
        baslik: "Why BiGRU instead of LSTM?",
        aciklama:
          "GRU runs on fewer parameters than LSTM, which significantly reduced training time and memory consumption. Because the structure is bidirectional, the model still sees both past and future context — so what was saved in parameters wasn't lost in performance.",
      },
      {
        baslik: "Why ViT instead of a CNN?",
        aciklama:
          "Convolutional layers capture local patterns well but struggle to relate distant regions of a frame. The self-attention structure of a Vision Transformer evaluates relationships across the whole frame in one step, feeding a richer feature vector into the sequence model.",
      },
    ],
  },

  "fuzyon-akademi": {
    ad: "Füzyon Akademi",
    ozet:
      "The corporate website of a workshop in Gaziantep teaching robotics, software, AI and drone technology. It began as a static site and was transformed into a dynamic platform with an admin panel the organisation manages itself, then deployed to production.",
    vurgular: [
      "A three-dimensional hero scene built with pure CSS perspective and preserve-3d, without Three.js.",
      "PHP + MySQL admin panel with CRUD for the gallery, external links, content blocks and education programmes.",
      "Full SEO setup with JSON-LD structured data, a sitemap and Search Console integration.",
      "Hashed login with password_hash and session fixation protection via session_regenerate_id.",
      "A custom lightbox gallery that opens by category and can be browsed with arrow keys.",
    ],
    rol: "Design, development and deployment",
    problem:
      "The organisation's entire digital presence consisted of social media accounts. It could not be found in search engines and had no channel to present its programmes or achievements. On top of that, a team without technical background needed to stop depending on a developer for every content change.",
    cozum:
      "I first designed a lightweight, fast corporate site without any framework, deriving the colour palette from the organisation's logo and making it manageable from a single point through CSS variables. I then converted the site into a dynamic PHP and MySQL structure with a four-tab admin panel: gallery, links, content blocks and education programmes. Finally I migrated the site to the organisation's cPanel hosting and took it live, resolving DNS, SSL and character encoding issues along the way.",
    sonuc:
      "The organisation now updates the gallery, its programmes and all page copy without needing a developer. The site is live with a valid SSL certificate and connected to Google Search Console and Business Profile.",
    neden: [
      {
        baslik: "Why no framework?",
        aciklama:
          "At its core this was a static brochure site. Adding React or Vue would have increased load time and complexity while delivering no real benefit. Plain HTML, CSS and JavaScript gave the fastest result.",
      },
      {
        baslik: "Why PHP and MySQL?",
        aciklama:
          "The organisation's existing cPanel hosting supported PHP and MySQL at no extra cost. A Node-based solution would have meant a new server and a monthly bill.",
      },
      {
        baslik: "Why not Three.js for the 3D scene?",
        aciklama:
          "Three.js would have added hundreds of kilobytes to the page. I achieved the same visual effect using the browser's own perspective and preserve-3d properties, with zero additional packages.",
      },
      {
        baslik: "Why a rule-based assistant?",
        aciklama:
          "A real AI API would have required a monthly fee and exposed the key on the client side, creating a security hole. A keyword-matching FAQ assistant met the need for free and safely.",
      },
    ],
  },

  "otel-temizlik-takip": {
    ad: "Hotel Housekeeping Tracker",
    ozet:
      "A QR-based, multilingual hotel operations system. Separate permission layers for admins, managers and staff, with guests reaching their own interface by scanning a code. Built as a commercial product sold to hotels and configured individually for each installation.",
    vurgular: [
      "Four distinct roles and permission layers: admin, manager, staff and guest.",
      "QR scanning flow that updates room status instantly; the manager sees every floor on a single screen.",
      "Multilingual interface, serving both international guests and staff who speak different languages.",
      "Reporting by floor, room and staff member, with a full history of past cleaning records.",
      "Configurable architecture allowing a separate, customised installation for each hotel.",
    ],
    rol: "End-to-end development",
    problem:
      "The core difficulty in hotel housekeeping is that everyone needs to know a room's current state at the same moment. When information flow breaks down between the room attendant, the floor supervisor and reception, a guest can be sent to a room that isn't ready. On top of that, the system had to work for staff speaking different languages, and every hotel it was sold to needed its own configuration.",
    cozum:
      "I assigned a QR code to every room; staff scan it on entry and the status is written to the central system immediately. Permissions are split into four layers: the admin manages the system, the manager sees the live status of every floor on one screen, staff see only their own assignments, and guests reach a dedicated interface through the code. The interface was built multilingual from the start. To allow a separate installation per hotel, room structure, hotel details and branding were all kept configurable.",
    sonuc:
      "The system is live at teknohygiene.com. It is positioned as a commercial product: each hotel that buys it gets its own installation, customised to that hotel's structure.",
    neden: [
      {
        baslik: "Why QR codes?",
        aciklama:
          "NFC or a dedicated handheld terminal would have required a hardware investment. QR codes work with the staff's own phones — all the hotel has to do is put paper labels on the doors.",
      },
      {
        baslik: "Why web instead of a mobile app?",
        aciklama:
          "An app would have meant every staff member installing it, waiting for store approval and downloading updates. With a browser-based system, scanning the code opens the right page directly — there is no installation step at all.",
      },
      {
        baslik: "Why multilingual?",
        aciklama:
          "Hotel staff and guests often don't share a language. Language support wasn't bolted on later; it was a design decision from the first day.",
      },
      {
        baslik: "Why Laravel?",
        aciklama:
          "Authorisation, multiple roles and an admin panel all come built into the framework. It also runs at no extra cost on the cPanel hosting the target customers already use.",
      },
    ],
  },

  "stm32-arduino-gomulu": {
    ad: "STM32 & Arduino Embedded Systems",
    ozet:
      "Low-level embedded software built around synchronous sensor data collection, low-latency output to local displays and a reliable communication standard between microcontrollers.",
    vurgular: [
      "Register- and driver-level coding on STM32 using the HAL/LL libraries.",
      "Communication drivers for SSD1306 OLED displays and sensor modules over I2C, SPI and UART.",
      "Real-time reading architecture managed by interrupts and timers, immune to lock-ups.",
      "Memory and code optimisation for low power consumption and real-time response times.",
    ],
    rol: "Embedded software developer",
    problem:
      "At the hardware level, sensor data such as temperature, acceleration and distance had to be collected synchronously, written to local displays with low latency, and a reliable communication standard had to be established between microcontrollers.",
    cozum:
      "Using C and C++, I wrote register- and driver-level code on STM32 with the HAL/LL libraries and on the Arduino Uno. I developed communication drivers for SSD1306 OLED displays and various sensor modules over I2C, SPI and UART, and built the reading loop on interrupts and timers.",
    sonuc:
      "The result was a set of stable hardware prototypes, free of lock-ups, managed by interrupts and capable of real-time data reading and visualisation.",
    neden: [
      {
        baslik: "Why interrupt-driven reading instead of polling?",
        aciklama:
          "A continuous polling loop keeps the microcontroller's CPU busy for nothing, and any signal falling between two polls is lost. Moving to hardware interrupts and timer-based periodic reads freed the CPU and captured signals with zero loss.",
      },
      {
        baslik: "Why code at the HAL/LL level?",
        aciklama:
          "Ready-made libraries produce quick results but hide what the hardware is actually doing. Working down at register level made timing and power behaviour directly controllable, and let problems be solved by measurement rather than guesswork.",
      },
    ],
  },

  "gercek-zamanli-backend": {
    ad: "Real-Time Backend Services",
    ozet:
      "A microservice-based backend infrastructure built on bidirectional socket communication and event-driven data flow, managing many concurrent clients.",
    vurgular: [
      "Event-driven, bidirectional socket architectures on both Python and Node.js.",
      "Low-latency live data delivery through WebSockets and Flask-SocketIO.",
      "Type-safe, automatically documented REST endpoints built with FastAPI and Pydantic.",
      "Centralised setup of PostgreSQL and MySQL connections and session management.",
    ],
    rol: "Backend and systems architecture",
    problem:
      "In a classic REST architecture the client has to keep asking the server for data. This consumes server resources for nothing and, in systems that need live data, causes both high latency and inconsistency between clients.",
    cozum:
      "I built bidirectional, event-driven socket architectures using Flask-SocketIO and FastAPI on the Python side and Express with WebSockets on the Node.js side. When data changes, the server notifies the client itself — the client doesn't have to ask. Behind that I set up PostgreSQL and MySQL connections and session management centrally.",
    sonuc:
      "The result is a set of scalable services that cut data delivery between clients down to milliseconds, reduced server load and handled concurrent connections without errors.",
    neden: [
      {
        baslik: "Why WebSockets rather than HTTP long polling?",
        aciklama:
          "Long polling carries the HTTP headers again on every request and constantly opens and closes the connection. A persistent socket removes that overhead entirely, minimising both bandwidth and response time.",
      },
      {
        baslik: "Why both Python and Node.js?",
        aciklama:
          "Different services had different needs. FastAPI and Pydantic worked better where data processing and type safety mattered; Node.js and Express handled heavy concurrent connection management better. Rather than forcing a single language, I wrote each service in the tool that suited its job.",
      },
    ],
  },

  "resnet-vgg-kiyaslama": {
    ad: "ResNet50 & VGG19 Model Comparison",
    ozet:
      "An analytical study training two classic convolutional architectures on the same dataset through transfer learning, then comparing them on accuracy, inference time and model size.",
    vurgular: [
      "Optimising pretrained ResNet50 and VGG19 models on the same dataset through transfer learning.",
      "Fine-tuning strategies with layer-wise weight freezing and custom classification heads.",
      "Comparison scripts visualising loss/accuracy curves, confusion matrices and inference latency.",
      "Architecture performance comparison across precision, recall and F1-score.",
    ],
    rol: "Data science and model evaluation",
    problem:
      "For a specific image classification problem, it was unknown which convolutional architecture struck the better balance across accuracy, inference time, model size and overfitting. The decision had to rest on measurement rather than intuition.",
    cozum:
      "Applying transfer learning principles, I optimised pretrained ResNet50 and VGG19 models on the same dataset, fine-tuning them with layer-wise weight freezing and custom classification heads. Using Matplotlib and Seaborn I built comparison scripts visualising loss/accuracy curves, the confusion matrix and inference latency metrics.",
    sonuc:
      "The outcome is a thorough analysis laying out the strengths and weaknesses of both architectures statistically, providing a basis for hardware and model selection in future edge deployments.",
    neden: [
      {
        baslik: "Why do ResNet's residual connections matter?",
        aciklama:
          "In flat deep architectures like VGG, gradients vanish as layers are added, so the model learns worse despite being deeper. ResNet's skip connections solve this; the measurements experimentally showed higher accuracy and speed with fewer parameters.",
      },
      {
        baslik: "Why transfer learning?",
        aciklama:
          "Training both architectures from scratch would have taken far longer, and the dataset size wasn't suited to it. Starting from pretrained weights and adapting the final layers kept the comparison fair and reproducible.",
      },
    ],
  },

  "anadolu-diyabet-okulu": {
    ad: "Anadolu Diabetes School",
    ozet:
      "A multi-module education platform for people with diabetes and their families. It brings together public pages, a lesson and student panel, course sales through a cart and order flow, an admin panel, and a separately authenticated Chronic Guide module.",
    vurgular: [
      "Multi-module platform architecture running the student panel, lesson tracking and content management together.",
      "Lesson videos hosted on Bunny Stream — the file goes straight from the user's browser to the service, never touching the server.",
      "Course sales infrastructure built around a cart and order flow.",
      "An independent Chronic Guide module with its own login and permissions.",
      "Migration to cPanel and deployment to production with an SSL certificate.",
    ],
    rol: "End-to-end development and deployment",
    problem:
      "The organisation's existing site was a plain brochure page, with no infrastructure to publish educational content, track student progress or sell courses. There was also a hard technical constraint: the organisation's shared hosting package did not allow video hosting, yet lesson videos were the very core of the platform.",
    cozum:
      "I rebuilt the site from the ground up as a multi-module platform: public pages, a student panel serving the free lessons, a sales layer with cart and order flow, an admin panel for content management, and a separately authenticated Chronic Guide module. I solved the video constraint by hosting files on Bunny Stream — when an admin uploads, the file travels directly from the browser to Bunny and never passes through the hosting server. Finally I migrated the platform to cPanel, switched the DNS and took it live with SSL.",
    sonuc:
      "The platform is live at anadoludiyabetokulu.com with a valid SSL certificate. The organisation updates lesson content, page copy and course structure itself through the admin panel, and the video infrastructure runs entirely independently of the hosting constraint.",
    neden: [
      {
        baslik: "Why Bunny Stream?",
        aciklama:
          "Shared hosting packages don't allow video hosting, and even if they did, the bandwidth would run out after the first hundred viewers. With Bunny Stream the file uploads straight from the user's browser to the service, so the server carries neither the storage nor the bandwidth load.",
      },
      {
        baslik: "Why the move to MySQL?",
        aciklama:
          "Development started on PostgreSQL, but the organisation's cPanel hosting offered MySQL. Matching the development database to production removed any surprises during migration.",
      },
      {
        baslik: "Why is Chronic Guide a separate module?",
        aciklama:
          "It served a different audience with a different access model. Building it with its own login and permissions, rather than embedding it in the main platform, let both sides evolve without affecting each other.",
      },
      {
        baslik: "Why Laravel?",
        aciklama:
          "Student accounts, authorisation, the order flow and the admin panel were all built on structures the framework already provides. It also runs at no extra cost on the organisation's existing cPanel hosting.",
      },
    ],
  },

  "stok-takip": {
    ad: "Inventory Tracking App",
    ozet:
      "A mobile inventory management application covering stock in and out, live inventory tracking and reporting.",
    vurgular: [
      "Stock in and out operations with live inventory status tracking.",
      "Category-based listing, search and filtering.",
      "Cross-platform support from a single codebase using React Native and Expo.",
    ],
  },

  ai4change: {
    ad: "AI4Change",
    ozet:
      "A project developed within the Kodluyoruz programme, applying data analytics and machine learning to problems in the civil society and social impact space.",
    vurgular: [
      "Cleaning, feature engineering and analysis of raw social data.",
      "Predictive models built with decision trees and classification/regression algorithms.",
      "Turning results into clear visualisations aimed at decision-makers.",
    ],
  },

  "kullanici-yonetim-sistemi": {
    ad: "User Management System",
    ozet:
      "A multi-layered web backend architecture providing role-based access control, dynamic data queries and session security.",
    vurgular: [
      "A database layer secured against SQL injection and XSS through PDO and prepared statements.",
      "Session and cookie based authentication, bcrypt hashing and an authorisation architecture.",
      "Relational schema design, foreign key optimisation and indexing.",
    ],
  },

  "2d-buyucu-savasi": {
    ad: "2D Wizard Battle & Desktop Simulations",
    ozet:
      "Two desktop game and simulation projects built from scratch on object-oriented principles, a custom game loop and a hand-written physics engine.",
    vurgular: [
      "Modular game engine structure centred on inheritance, polymorphism and encapsulation.",
      "AABB collision detection, projectile mechanics and health/energy management written from scratch.",
      "Pathfinding algorithms over a dynamic grid and minefield.",
      "A game loop with smooth framerate letting two players compete simultaneously on the keyboard.",
    ],
    rol: "Independent developer — game loop, physics and interface",
    problem:
      "Object-oriented programming principles, collision and physics algorithms and dynamic pathfinding logic had to be simulated in a desktop interface environment without dropping frames.",
    cozum:
      "In Java and Swing I built a modular game engine structure centred on inheritance, polymorphism and encapsulation. I developed AABB collision detection, projectile mechanics, health bars and state management from scratch, along with pathfinding algorithms over a dynamic grid and minefield.",
    sonuc:
      "The result was a set of desktop applications and simulations with no memory leaks and a smooth framerate, letting two players compete simultaneously via keyboard controls.",
    neden: [
      {
        baslik: "Why no ready-made game engine?",
        aciklama:
          "The goal wasn't to ship a game but to learn how the game loop and physics calculations work by writing them directly. A ready-made engine hides that layer. Writing my own fixed-step loop on Graphics2D meant seeing thread management and timing logic first-hand.",
      },
      {
        baslik: "Why fixed-step updates?",
        aciklama:
          "Framerate-dependent updates produce different physics behaviour on fast and slow machines. With a fixed-step loop the physics gives the same result everywhere; rendering speed and simulation speed advance independently.",
      },
    ],
  },
};