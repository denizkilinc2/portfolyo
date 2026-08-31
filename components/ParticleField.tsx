"use client";

import { useEffect, useRef } from "react";

/* ============================================
   AYARLAR
   Masaüstü ve mobil için ayrı değerler.
   ============================================ */
const AYAR = {
  masaustu: {
    yogunluk: 13000,
    maksParcacik: 110,
    bagMesafesi: 135,
    etkiMesafesi: 180,
    guc: 1.6,
    maksDarbe: 7,
    darbeAraligi: 26,
    parallax: 26,
  },
  mobil: {
    /* Daha seyrek parçacık, daha kısa bağlantı:
       telefonun işlemcisini ve pilini korur. */
    yogunluk: 22000,
    maksParcacik: 45,
    bagMesafesi: 105,
    etkiMesafesi: 130,
    guc: 1.9,
    maksDarbe: 3,
    darbeAraligi: 40,
    parallax: 0,
  },
};

const SONUM = 0.94;

type Nokta = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  px: number;
  py: number;
  pvx: number;
  pvy: number;
  z: number;
  r: number;
  faz: number;
};

type Darbe = { a: number; b: number; t: number; hiz: number };
type Dalga = { x: number; y: number; r: number; alfa: number };

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* Animasyon azaltma tercihinde hiç çalışma */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    /* Gerçek fare var mı? Yoksa dokunmatik kipte çalışıyoruz. */
    const fareVar = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const a = fareVar ? AYAR.masaustu : AYAR.mobil;

    let genislik = 0;
    let yukseklik = 0;
    let noktalar: Nokta[] = [];
    let darbeler: Darbe[] = [];
    let dalgalar: Dalga[] = [];
    let frame = 0;
    let sayac = 0;
    let duruyor = false;

    /* Etki noktası: masaüstünde fare, mobilde parmak.
       Ekran dışındayken çok uzakta tutuyoruz. */
    let etkiX = -9999;
    let etkiY = -9999;

    /* Parmak kalktıktan sonra etkinin yumuşakça sönmesi için */
    let etkiSonme = 0;

    let parX = 0;
    let parY = 0;
    let parHedefX = 0;
    let parHedefY = 0;

    let renkCizgi = "#24242f";
    let renkNokta = "#34343f";
    let renkVurgu = "#f4b740";

    const renkleriOku = () => {
      const s = getComputedStyle(document.documentElement);
      renkCizgi = s.getPropertyValue("--line").trim() || renkCizgi;
      renkNokta = s.getPropertyValue("--line-strong").trim() || renkNokta;
      renkVurgu = s.getPropertyValue("--accent").trim() || renkVurgu;
    };

    const rgba = (hex: string, alfa: number) => {
      const temiz = hex.replace("#", "");
      const tam =
        temiz.length === 3 ? temiz.split("").map((c) => c + c).join("") : temiz;
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
         Mobilde 2 ile sınırlıyoruz, 3x ekranlarda gereksiz yük olmasın. */
      const oran = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = genislik * oran;
      canvas.height = yukseklik * oran;
      ctx.setTransform(oran, 0, 0, oran, 0, 0);

      const adet = Math.min(
        a.maksParcacik,
        Math.floor((genislik * yukseklik) / a.yogunluk)
      );

      noktalar = Array.from({ length: adet }, () => {
        const z = Math.random();
        return {
          x: Math.random() * genislik,
          y: Math.random() * yukseklik,
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

    const darbeBaslat = () => {
      if (darbeler.length >= a.maksDarbe || noktalar.length < 2) return;

      const i = Math.floor(Math.random() * noktalar.length);
      const komsular: number[] = [];

      for (let j = 0; j < noktalar.length; j++) {
        if (j === i) continue;
        const d = Math.hypot(
          noktalar[i].x - noktalar[j].x,
          noktalar[i].y - noktalar[j].y
        );
        if (d < a.bagMesafesi) komsular.push(j);
      }

      if (komsular.length === 0) return;

      darbeler.push({
        a: i,
        b: komsular[Math.floor(Math.random() * komsular.length)],
        t: 0,
        hiz: 0.012 + Math.random() * 0.014,
      });
    };

    const ciz = () => {
      sayac += 1;
      ctx.clearRect(0, 0, genislik, yukseklik);

      /* Parmak kalktıysa etkiyi yavaşça söndür */
      if (etkiSonme > 0) {
        etkiSonme -= 1;
        if (etkiSonme === 0) {
          etkiX = -9999;
          etkiY = -9999;
        }
      }

      /* --- Parallax (sadece masaüstü) --- */
      if (a.parallax > 0 && etkiX > -9000) {
        parHedefX = (etkiX / genislik - 0.5) * -a.parallax;
        parHedefY = (etkiY / yukseklik - 0.5) * -a.parallax;
      }
      parX += (parHedefX - parX) * 0.05;
      parY += (parHedefY - parY) * 0.05;

      /* --- Fizik --- */
      for (const n of noktalar) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -30) n.x = genislik + 30;
        if (n.x > genislik + 30) n.x = -30;
        if (n.y < -30) n.y = yukseklik + 30;
        if (n.y > yukseklik + 30) n.y = -30;

        const dx = n.x + n.px - etkiX;
        const dy = n.y + n.py - etkiY;
        const uzaklik = Math.hypot(dx, dy);

        if (uzaklik < a.etkiMesafesi && uzaklik > 0.1) {
          const g = (1 - uzaklik / a.etkiMesafesi) * a.guc * (0.4 + n.z * 0.9);
          n.pvx += (dx / uzaklik) * g;
          n.pvy += (dy / uzaklik) * g;
        }

        for (const d of dalgalar) {
          const wx = n.x + n.px - d.x;
          const wy = n.y + n.py - d.y;
          const wd = Math.hypot(wx, wy);
          const bant = Math.abs(wd - d.r);
          if (bant < 55 && wd > 0.1) {
            const g = (1 - bant / 55) * d.alfa * 2.4;
            n.pvx += (wx / wd) * g;
            n.pvy += (wy / wd) * g;
          }
        }

        n.pvx += -n.px * 0.012;
        n.pvy += -n.py * 0.012;
        n.pvx *= SONUM;
        n.pvy *= SONUM;
        n.px += n.pvx;
        n.py += n.pvy;

        n.faz += 0.014;
      }

      const kx = (n: Nokta) => n.x + n.px + parX * (0.25 + n.z * 0.85);
      const ky = (n: Nokta) => n.y + n.py + parY * (0.25 + n.z * 0.85);

      /* --- Bağlantı çizgileri --- */
      for (let i = 0; i < noktalar.length; i++) {
        const p = noktalar[i];
        const ax = kx(p);
        const ay = ky(p);

        for (let j = i + 1; j < noktalar.length; j++) {
          const q = noktalar[j];
          const bx = kx(q);
          const by = ky(q);

          const mesafe = Math.hypot(ax - bx, ay - by);
          if (mesafe > a.bagMesafesi) continue;

          const gucluluk = 1 - mesafe / a.bagMesafesi;
          const derinlik = 0.35 + ((p.z + q.z) / 2) * 0.65;

          const ortaX = (ax + bx) / 2;
          const ortaY = (ay + by) / 2;
          const uzak = Math.hypot(ortaX - etkiX, ortaY - etkiY);
          const yakinlik = uzak < a.etkiMesafesi ? 1 - uzak / a.etkiMesafesi : 0;

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
      if (sayac % a.darbeAraligi === 0) darbeBaslat();

      darbeler = darbeler.filter((d) => {
        d.t += d.hiz;
        if (d.t >= 1) return false;

        const p = noktalar[d.a];
        const q = noktalar[d.b];
        if (!p || !q) return false;

        const ax = kx(p);
        const ay = ky(p);
        const bx = kx(q);
        const by = ky(q);

        if (Math.hypot(ax - bx, ay - by) > a.bagMesafesi * 1.3) return false;

        const x = ax + (bx - ax) * d.t;
        const y = ay + (by - ay) * d.t;
        const parlaklik = Math.sin(d.t * Math.PI);

        const izT = Math.max(0, d.t - 0.16);
        ctx.strokeStyle = rgba(renkVurgu, parlaklik * 0.5);
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(ax + (bx - ax) * izT, ay + (by - ay) * izT);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = rgba(renkVurgu, parlaklik * 0.95);
        ctx.beginPath();
        ctx.arc(x, y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = rgba(renkVurgu, parlaklik * 0.15);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      /* --- Dokunma / tıklama dalgaları --- */
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
        const uzak = Math.hypot(x - etkiX, y - etkiY);
        const yakinlik = uzak < a.etkiMesafesi ? 1 - uzak / a.etkiMesafesi : 0;

        const nabiz = 1 + Math.sin(n.faz) * 0.16;
        const yaricap = n.r * nabiz * (1 + yakinlik * 0.5);
        const derinlik = 0.3 + n.z * 0.7;

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

    /* Ekran koordinatını canvas koordinatına çevirir */
    const konum = (clientX: number, clientY: number) => {
      const kutu = canvas.getBoundingClientRect();
      return { x: clientX - kutu.left, y: clientY - kutu.top };
    };

    const dalgaEkle = (x: number, y: number) => {
      if (x < 0 || y < 0 || x > genislik || y > yukseklik) return;
      if (dalgalar.length > 3) return;
      dalgalar.push({ x, y, r: 0, alfa: 1 });
    };

    /* --- Masaüstü olayları --- */
    const onMouseMove = (e: MouseEvent) => {
      const p = konum(e.clientX, e.clientY);
      etkiX = p.x;
      etkiY = p.y;
    };

    const onMouseDown = (e: MouseEvent) => {
      const p = konum(e.clientX, e.clientY);
      dalgaEkle(p.x, p.y);
    };

    /* --- Dokunmatik olayları --- */
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const p = konum(t.clientX, t.clientY);
      etkiX = p.x;
      etkiY = p.y;
      etkiSonme = 0;
      dalgaEkle(p.x, p.y);
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const p = konum(t.clientX, t.clientY);
      etkiX = p.x;
      etkiY = p.y;
      etkiSonme = 0;
    };

    /* Parmak kalkınca etki hemen kesilmesin, ~1 saniye sönsün */
    const onTouchEnd = () => {
      etkiSonme = 60;
    };

    const onVisibility = () => {
      if (document.hidden) {
        duruyor = true;
        cancelAnimationFrame(frame);
      } else if (duruyor) {
        duruyor = false;
        frame = requestAnimationFrame(ciz);
      }
    };

    const gozlemci = new MutationObserver(renkleriOku);
    gozlemci.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    renkleriOku();
    kur();
    frame = requestAnimationFrame(ciz);

    window.addEventListener("resize", kur);
    document.addEventListener("visibilitychange", onVisibility);

    if (fareVar) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("mousedown", onMouseDown);
    } else {
      /* passive: true — sayfa kaydırmayı engellemiyoruz */
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
    }

    return () => {
      cancelAnimationFrame(frame);
      gozlemci.disconnect();
      window.removeEventListener("resize", kur);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
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