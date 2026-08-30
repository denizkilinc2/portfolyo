import type { Dil } from "./config";

/* ============================================
   YETENEK LİSTELERİ
   Hakkımda bölümündeki dört grubun içerikleri.
   Grup BAŞLIKLARI sözlükte (yetenekAI vb.),
   burada sadece madde metinleri var.
   ============================================ */

export type YetenekGrup = "ai" | "gomulu" | "mobil" | "web";

export const yetenekListe: Record<YetenekGrup, Record<Dil, string[]>> = {
  ai: {
    tr: [
      "PyTorch, TensorFlow, Keras",
      "Vision Transformer, ResNet, VGG",
      "YOLOv8, OpenCV, MediaPipe",
      "TensorFlow Lite, cihaz üzerinde çıkarım",
      "Scikit-learn, Pandas, NumPy",
    ],
    en: [
      "PyTorch, TensorFlow, Keras",
      "Vision Transformer, ResNet, VGG",
      "YOLOv8, OpenCV, MediaPipe",
      "TensorFlow Lite, on-device inference",
      "Scikit-learn, Pandas, NumPy",
    ],
    de: [
      "PyTorch, TensorFlow, Keras",
      "Vision Transformer, ResNet, VGG",
      "YOLOv8, OpenCV, MediaPipe",
      "TensorFlow Lite, On-Device-Inferenz",
      "Scikit-learn, Pandas, NumPy",
    ],
    nl: [
      "PyTorch, TensorFlow, Keras",
      "Vision Transformer, ResNet, VGG",
      "YOLOv8, OpenCV, MediaPipe",
      "TensorFlow Lite, on-device inference",
      "Scikit-learn, Pandas, NumPy",
    ],
  },

  gomulu: {
    tr: [
      "ROS2, otonom navigasyon",
      "NVIDIA Jetson, CUDA",
      "STM32, ARM Cortex-M, Arduino",
      "UART, SPI, I2C, PWM, MQTT",
      "C, C++",
    ],
    en: [
      "ROS2, autonomous navigation",
      "NVIDIA Jetson, CUDA",
      "STM32, ARM Cortex-M, Arduino",
      "UART, SPI, I2C, PWM, MQTT",
      "C, C++",
    ],
    de: [
      "ROS2, autonome Navigation",
      "NVIDIA Jetson, CUDA",
      "STM32, ARM Cortex-M, Arduino",
      "UART, SPI, I2C, PWM, MQTT",
      "C, C++",
    ],
    nl: [
      "ROS2, autonome navigatie",
      "NVIDIA Jetson, CUDA",
      "STM32, ARM Cortex-M, Arduino",
      "UART, SPI, I2C, PWM, MQTT",
      "C, C++",
    ],
  },

  mobil: {
    tr: [
      "Kotlin, Jetpack Compose",
      "MVVM mimarisi",
      "React Native, Expo, Flutter",
      "Google ML Kit entegrasyonu",
    ],
    en: [
      "Kotlin, Jetpack Compose",
      "MVVM architecture",
      "React Native, Expo, Flutter",
      "Google ML Kit integration",
    ],
    de: [
      "Kotlin, Jetpack Compose",
      "MVVM-Architektur",
      "React Native, Expo, Flutter",
      "Google ML Kit Integration",
    ],
    nl: [
      "Kotlin, Jetpack Compose",
      "MVVM-architectuur",
      "React Native, Expo, Flutter",
      "Google ML Kit-integratie",
    ],
  },

  web: {
    tr: [
      "Next.js, React, TypeScript",
      "Node.js, Express, Laravel",
      "FastAPI, Flask, WebSockets",
      "PostgreSQL, MySQL",
      "Tailwind CSS, Three.js",
    ],
    en: [
      "Next.js, React, TypeScript",
      "Node.js, Express, Laravel",
      "FastAPI, Flask, WebSockets",
      "PostgreSQL, MySQL",
      "Tailwind CSS, Three.js",
    ],
    de: [
      "Next.js, React, TypeScript",
      "Node.js, Express, Laravel",
      "FastAPI, Flask, WebSockets",
      "PostgreSQL, MySQL",
      "Tailwind CSS, Three.js",
    ],
    nl: [
      "Next.js, React, TypeScript",
      "Node.js, Express, Laravel",
      "FastAPI, Flask, WebSockets",
      "PostgreSQL, MySQL",
      "Tailwind CSS, Three.js",
    ],
  },
};