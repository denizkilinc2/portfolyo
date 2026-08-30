"use client";

import { useEffect, useRef } from "react";

/* ============================================
   AYARLAR
   Efekti güçlendirmek/zayıflatmak için burayı değiştir.
   ============================================ */
/* Kaç piksel kare alana bir parçacık düşsün (büyük değer = az parçacık) */
const YOGUNLUK = 13000;
const MAKS_PARCACIK = 110;
/* İki nokta arası bu mesafeden yakınsa çizgi çizilir */
const BAG_MESAFESI = 135;
/* Farenin etki alanı */
const FARE_MESAFESI = 180;
/* Fare itme gücü */
const FARE_GUCU = 1.6;
/* Hareketin sönümlenmesi (1'e yakın = daha uzun savrulma) */
const SONUM = 0.94;
/* Aynı anda ekranda olabilecek veri darbesi sayısı */
const MAKS_DARBE = 7;
/* Kaç karede bir yeni darbe denensin */
const DARBE_ARALIGI = 26;
/* Fare parallax şiddeti (piksel) */
const PARALLAX = 26;

type Nokta = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  /* Kuvvetlerden gelen kayma ve hızı */
  px: number;
  py: number;
  pvx: number;
  pvy: number;
  /* Derinlik: 0 = uzak, 1 = yakın */
  z: number;
  r: number;
  /* Nabız animasyonu için faz */
  faz: number;
};

type Darbe = {
  a: number;
  b: number;
  /* 0 -> 1 arası ilerleme */
  t: number;
  hiz: number;
};

type Dalga = {
  x: number;
  y: number;
  r: number;
  alfa: number;
};

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* Dokunmatik cihazlarda ve animasyon azaltma tercihinde çalışma */
    const fareVar = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const azalt = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fareVar || azalt) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let genislik = 0;
    let yukseklik = 0;
    let noktalar: Nokta[] = [];
    let darbeler: Darbe[] = [];
    let dalgalar: Dalga[] = [];
    let frame = 0;
    let sayac = 0;
    let duruyor = false;

    /* Fare konumu — ekran dışındayken çok uzakta tutuyoruz */
    let fareX = -9999;
    let fareY = -9999;
    /* Yumuşatılmış parallax kayması */
    let parX = 0;
    let parY = 0;
    let parHedefX = 0;
    let parHedefY = 0;

    /* Tema renkleri */
    let renkCizgi = "#24242f";
    let renkNokta = "#34343f";
    let renkVurgu = "#f4b740";

    const renkleriOku = () => {
      const s = getComputedStyle(document.documentElement);
      renkCizgi = s.getPropertyValue("--line").trim() || renkCizgi;
      renkNokta = s.getPropertyValue("--line-strong").trim() || renkNokta;
      renkVurgu = s.getPropertyValue("--accent").trim() || renkVurgu;
    };

    /* Hex rengi rgba'ya çevirir — saydamlık verebilmek için */
    const rgba = (hex: string, alfa: number) => {
      const temiz = hex.replace("#", "");
      const tam =
        temiz.length === 3
          ? temiz.split("").map((c) => c + c).join("")
          : temiz;
      const r = parseInt(tam.slice(0, 2), 16);
      const g = parseInt(tam.slice(2, 4), 16);
      const b = parseInt(tam.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alfa})`;
    };

    const kur = () => {
      const kutu = canvas.getBoundingClientRect();
      genislik = kutu.width;
      yukseklik = kutu.height;

      /* Retina ekranlarda net görünmesi için piksel oranı.
         2 ile sınırlıyoruz, 3x ekranlarda gereksiz yük olmasın. */
      const oran = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = genislik * oran;
      canvas.height = yukseklik * oran;
      ctx.setTransform(oran, 0, 0, oran, 0, 0);

      const adet = Math.min(
        MAKS_PARCACIK,
        Math.floor((genislik * yukseklik) / YOGUNLUK)
      );

      noktalar = Array.from({ length: adet }, () => {
        const z = Math.random();
        return {
          x: Math.random() * genislik,
          y: Math.random() * yukseklik,
          /* Yakın katmanlar daha hızlı süzülür */
          vx: (Math.random() - 0.5) * (0.12 + z * 0.24),
          vy: (Math.random() - 0.5) * (0.12 + z * 0.24),
          px: 0,
          py: 0,
          pvx: 0,
          pvy: 0,
          z,
          r: 0.5 + z * 1.5,
          faz: Math.random() * Math.PI * 2,
        };
      });

      darbeler = [];
      dalgalar = [];
    };

    /* Yeni veri darbesi başlat: rastgele bir noktadan komşusuna */
    const darbeBaslat = () => {
      if (darbeler.length >= MAKS_DARBE || noktalar.length < 2) return;

      const a = Math.floor(Math.random() * noktalar.length);
      const komsular: number[] = [];

      for (let j = 0; j < noktalar.length; j++) {
        if (j === a) continue;
        const d = Math.hypot(
          noktalar[a].x - noktalar[j].x,
          noktalar[a].y - noktalar[j].y
        );
        if (d < BAG_MESAFESI) komsular.push(j);
      }

      if (komsular.length === 0) return;

      darbeler.push({
        a,
        b: komsular[Math.floor(Math.random() * komsular.length)],
        t: 0,
        hiz: 0.012 + Math.random() * 0.014,
      });
    };

    const ciz = () => {
      sayac += 1;
      ctx.clearRect(0, 0, genislik, yukseklik);

      /* --- Parallax kaymasını yumuşat --- */
      if (fareX > -9000) {
        parHedefX = (fareX / genislik - 0.5) * -PARALLAX;
        parHedefY = (fareY / yukseklik - 0.5) * -PARALLAX;
      }
      parX += (parHedefX - parX) * 0.05;
      parY += (parHedefY - parY) * 0.05;

      /* --- Fizik --- */
      for (const n of noktalar) {
        n.x += n.vx;
        n.y += n.vy;

        /* Kenardan çıkanı diğer kenardan sok */
        if (n.x < -30) n.x = genislik + 30;
        if (n.x > genislik + 30) n.x = -30;
        if (n.y < -30) n.y = yukseklik + 30;
        if (n.y > yukseklik + 30) n.y = -30;

        /* Fare itmesi — kuvvet olarak ekleniyor */
        const dx = n.x + n.px - fareX;
        const dy = n.y + n.py - fareY;
        const uzaklik = Math.hypot(dx, dy);

        if (uzaklik < FARE_MESAFESI && uzaklik > 0.1) {
          /* Yakın katmanlar daha çok itilir — derinlik hissi */
          const guc =
            (1 - uzaklik / FARE_MESAFESI) * FARE_GUCU * (0.4 + n.z * 0.9);
          n.pvx += (dx / uzaklik) * guc;
          n.pvy += (dy / uzaklik) * guc;
        }

        /* Tıklama dalgalarının itmesi */
        for (const d of dalgalar) {
          const wx = n.x + n.px - d.x;
          const wy = n.y + n.py - d.y;
          const wd = Math.hypot(wx, wy);
          /* Sadece dalga cephesindeki bant etkilenir */
          const bant = Math.abs(wd - d.r);
          if (bant < 55 && wd > 0.1) {
            const guc = (1 - bant / 55) * d.alfa * 2.4;
            n.pvx += (wx / wd) * guc;
            n.pvy += (wy / wd) * guc;
          }
        }

        /* Yaya bağlı gibi yerine dönme + sönümleme */
        n.pvx += -n.px * 0.012;
        n.pvy += -n.py * 0.012;
        n.pvx *= SONUM;
        n.pvy *= SONUM;
        n.px += n.pvx;
        n.py += n.pvy;

        n.faz += 0.014;
      }

      /* Bir noktanın ekrandaki son konumu (parallax dahil) */
      const kx = (n: Nokta) => n.x + n.px + parX * (0.25 + n.z * 0.85);
      const ky = (n: Nokta) => n.y + n.py + parY * (0.25 + n.z * 0.85);

      /* --- Bağlantı çizgileri --- */
      for (let i = 0; i < noktalar.length; i++) {
        const a = noktalar[i];
        const ax = kx(a);
        const ay = ky(a);

        for (let j = i + 1; j < noktalar.length; j++) {
          const b = noktalar[j];
          const bx = kx(b);
          const by = ky(b);

          const mesafe = Math.hypot(ax - bx, ay - by);
          if (mesafe > BAG_MESAFESI) continue;

          const gucluluk = 1 - mesafe / BAG_MESAFESI;
          /* Derin katmanların çizgileri daha soluk */
          const derinlik = 0.35 + ((a.z + b.z) / 2) * 0.65;

          /* Çizginin orta noktası fareye yakınsa kehribara dön */
          const ortaX = (ax + bx) / 2;
          const ortaY = (ay + by) / 2;
          const fareUzak = Math.hypot(ortaX - fareX, ortaY - fareY);
          const yakinlik =
            fareUzak < FARE_MESAFESI ? 1 - fareUzak / FARE_MESAFESI : 0;

          ctx.strokeStyle =
            yakinlik > 0.05
              ? rgba(renkVurgu, gucluluk * yakinlik * 0.6 * derinlik)
              : rgba(renkCizgi, gucluluk * 0.5 * derinlik);

          ctx.lineWidth = yakinlik > 0.05 ? 0.4 + yakinlik * 0.9 : 0.6;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }

      /* --- Veri darbeleri --- */
      if (sayac % DARBE_ARALIGI === 0) darbeBaslat();

      darbeler = darbeler.filter((d) => {
        d.t += d.hiz;
        if (d.t >= 1) return false;

        const a = noktalar[d.a];
        const b = noktalar[d.b];
        if (!a || !b) return false;

        const ax = kx(a);
        const ay = ky(a);
        const bx = kx(b);
        const by = ky(b);

        /* Bağlantı koptuysa darbeyi de bitir */
        if (Math.hypot(ax - bx, ay - by) > BAG_MESAFESI * 1.3) return false;

        const x = ax + (bx - ax) * d.t;
        const y = ay + (by - ay) * d.t;

        /* Başta ve sonda sönük, ortada parlak */
        const parlaklik = Math.sin(d.t * Math.PI);

        /* Arkasında bıraktığı kısa iz */
        const izT = Math.max(0, d.t - 0.16);
        ctx.strokeStyle = rgba(renkVurgu, parlaklik * 0.5);
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(ax + (bx - ax) * izT, ay + (by - ay) * izT);
        ctx.lineTo(x, y);
        ctx.stroke();

        /* Işık noktası */
        ctx.fillStyle = rgba(renkVurgu, parlaklik * 0.95);
        ctx.beginPath();
        ctx.arc(x, y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        /* Çevresindeki hale */
        ctx.fillStyle = rgba(renkVurgu, parlaklik * 0.15);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      /* --- Tıklama dalgaları --- */
      dalgalar = dalgalar.filter((d) => {
        d.r += 11;
        d.alfa *= 0.955;
        if (d.alfa < 0.02) return false;

        ctx.strokeStyle = rgba(renkVurgu, d.alfa * 0.35);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.stroke();

        return true;
      });

      /* --- Noktalar --- */
      for (const n of noktalar) {
        const x = kx(n);
        const y = ky(n);
        const fareUzak = Math.hypot(x - fareX, y - fareY);
        const yakin = fareUzak < FARE_MESAFESI;
        const yakinlik = yakin ? 1 - fareUzak / FARE_MESAFESI : 0;

        /* Hafif nabız — hepsi aynı anda atmasın diye faz farkı var */
        const nabiz = 1 + Math.sin(n.faz) * 0.16;
        const yaricap = n.r * nabiz * (1 + yakinlik * 0.5);
        const derinlik = 0.3 + n.z * 0.7;

        /* Fareye yakın noktaların etrafında hale */
        if (yakinlik > 0.15) {
          ctx.fillStyle = rgba(renkVurgu, yakinlik * 0.12);
          ctx.beginPath();
          ctx.arc(x, y, yaricap * 4.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle =
          yakinlik > 0.05
            ? rgba(renkVurgu, (0.35 + yakinlik * 0.55) * derinlik)
            : rgba(renkNokta, 0.55 * derinlik);

        ctx.beginPath();
        ctx.arc(x, y, yaricap, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(ciz);
    };

    const onMove = (e: MouseEvent) => {
      const kutu = canvas.getBoundingClientRect();
      fareX = e.clientX - kutu.left;
      fareY = e.clientY - kutu.top;
    };

    const onClick = (e: MouseEvent) => {
      const kutu = canvas.getBoundingClientRect();
      const x = e.clientX - kutu.left;
      const y = e.clientY - kutu.top;
      /* Sadece hero alanı içindeki tıklamalar dalga üretsin */
      if (x < 0 || y < 0 || x > genislik || y > yukseklik) return;
      if (dalgalar.length > 3) return;
      dalgalar.push({ x, y, r: 0, alfa: 1 });
    };

    /* Sekme arka plana alınınca animasyonu durdur */
    const onVisibility = () => {
      if (document.hidden) {
        duruyor = true;
        cancelAnimationFrame(frame);
      } else if (duruyor) {
        duruyor = false;
        frame = requestAnimationFrame(ciz);
      }
    };

    /* Tema değişince renkleri yeniden oku */
    const gozlemci = new MutationObserver(renkleriOku);
    gozlemci.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    renkleriOku();
    kur();
    frame = requestAnimationFrame(ciz);

    window.addEventListener("resize", kur);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onClick);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      gozlemci.disconnect();
      window.removeEventListener("resize", kur);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onClick);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}