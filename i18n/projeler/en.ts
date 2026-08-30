import type { KismiProjeMetinleri } from "./tipler";

/* Henüz çevrilmemiş projeler Türkçe metne düşer. */
export const projelerEn: KismiProjeMetinleri = {
  rhinoai: {
    ad: "RhinoAI",
    ozet:
      "A mobile AI application that performs rhinoplasty and facial proportion analysis from a user's photo. Face landmark detection and deep learning inference run in real time, entirely on the device.",
    vurgular: [
      "Detection of 468 facial reference points via ML Kit Face Mesh, with asymmetry calculations.",
      "Low-latency on-device inference using models optimised and converted to TFLite.",
      "Modern, reactive Android architecture built on MVVM and Jetpack Compose.",
    ],
    rol: "End-to-end development",
    problem:
      "Facial proportion analysis before rhinoplasty normally requires an expert measurement in a clinical setting — something a person cannot do on their own. Existing mobile solutions upload the photo to a server, which creates a privacy problem and makes the app dependent on an internet connection.",
    cozum:
      "I built an Android application that runs both face landmark detection and deep learning inference entirely on the device. ML Kit Face Mesh detects 468 reference points, from which facial ratios and asymmetry values are calculated. The heavier classification models were converted to TensorFlow Lite and shrunk through quantisation.",
    sonuc:
      "The photo never leaves the device, the analysis works without an internet connection, and server costs are zero.",
    neden: [
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
      "Low-latency communication architecture for sensor and camera data across ROS2 nodes.",
      "Route optimisation and autonomous navigation under dynamic environmental conditions.",
    ],
    rol: "Computer vision and autonomous driving software",
    problem:
      "For an autonomous ground vehicle, seeing an obstacle is not enough — the decision has to be made before impact. The real challenge was running high-frame-rate object detection on a power-constrained embedded board and delivering that data to motion control without delay.",
    cozum:
      "I structured perception, decision and motion as separate ROS2 nodes, with communication running over low-latency message channels. The YOLOv8 model runs on a Jetson Orin Nano with CUDA acceleration, and the position of detected objects feeds into a navigation node that performs dynamic route optimisation.",
    sonuc:
      "The vehicle navigates autonomously in environments containing previously undefined obstacles, recalculating its route in real time.",
    neden: [
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
      "A high-performance, multilingual corporate web platform built for a Netherlands-based company providing international employment and consultancy services.",
    vurgular: [
      "Strong SEO and fast loading through the Next.js App Router and SSR/SSG architecture.",
      "Fluid micro-interactions and a corporate design language built with Framer Motion.",
      "Multilingual content management via i18n and a fully responsive interface architecture.",
    ],
    rol: "End-to-end development",
  },

  focuspulse: {
    ad: "FocusPulse",
    ozet:
      "A privacy-first tracking system that analyses a person's attention and focus during work through camera data. All processing happens locally on the device.",
    vurgular: [
      "Distraction detection through blink frequency, head pose estimation and gaze direction tracking.",
      "Full local processing without sending data to any server, giving both privacy and low latency.",
      "Focus scores and statistical reporting generated per working period.",
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
      "A hybrid deep learning model combining a Vision Transformer for spatial feature extraction with Bi-directional GRU networks for capturing temporal patterns.",
    vurgular: [
      "Self-attention based feature extraction with ViT, sequence modelling through BiGRU layers.",
      "Data preprocessing, augmentation and regularisation techniques to prevent overfitting.",
      "Visualisation of confusion matrices, ROC curves and training metrics.",
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
      "A management system that tracks hotel room cleaning through QR codes. Staff scan the room, and the manager sees the live status of every floor on a single screen.",
    vurgular: [
      "QR-based room scanning flow with instant status updates.",
      "Permission-controlled management panel organised by floor, room and staff member.",
      "Reporting and history tracking built on a relational database schema.",
    ],
  },

  "stm32-arduino-gomulu": {
    ad: "STM32 & Arduino Embedded Systems",
    ozet:
      "Low-level embedded software developed as part of hardware work at Turuncu Bilişim, covering sensor integration, data processing and peripheral control.",
    vurgular: [
      "Reading and processing analogue and digital sensor data over I2C, SPI and UART protocols.",
      "Precise hardware control using interrupts, timers and PWM signals.",
      "Memory and code optimisation for low power consumption and real-time response times.",
    ],
  },

  "gercek-zamanli-backend": {
    ad: "Real-Time Backend Services",
    ozet:
      "A microservice-based backend infrastructure supporting multiple concurrent clients, managing bidirectional socket communication and asynchronous data flow.",
    vurgular: [
      "Low-latency, event-driven live data delivery through WebSockets and Flask-SocketIO.",
      "Type-safe, automatically documented REST endpoints built with FastAPI and Pydantic.",
      "Encrypted service communication between local and remote devices via Tailscale integration.",
    ],
  },



  "resnet-vgg-kiyaslama": {
    ad: "ResNet50 & VGG19 Model Comparison",
    ozet:
      "An analytical study training classic convolutional architectures on a custom dataset through transfer learning, then benchmarking their accuracy and inference speed.",
    vurgular: [
      "Fine-tuning strategies with layer-wise weight freezing and custom classification heads.",
      "Architecture performance comparison across precision, recall and F1-score metrics.",
      "Training loops optimised with CUDA acceleration.",
    ],
  },

  "anadolu-diyabet-okulu": {
    ad: "Anadolu Diabetes School",
    ozet:
      "A corporate health platform providing educational content for people with diabetes and their families, developed end to end together with its content management panel.",
    vurgular: [
      "Dynamic content and page structure editable from the management panel.",
      "Responsive interface architecture aligned with the organisation's corporate identity.",
      "Scalable backend built on Laravel and PostgreSQL.",
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
      "Two game and simulation projects built around object-oriented programming principles, game loop logic and algorithm analysis.",
    vurgular: [
      "Character mechanics, projectile physics and health/energy systems built with inheritance, polymorphism and encapsulation.",
      "A real-time game loop driven by collision detection and keyboard input.",
      "Dynamic matrix management and pathfinding algorithms.",
    ],
  },
};