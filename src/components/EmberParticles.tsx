import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
  hue: string;
}

const SPARK_COLORS = [
  '242, 179, 61', // #F2B33D dourado âmbar
  '232, 102, 30', // #E8661E laranja fogo
  '194, 49, 26',  // #C2311A vermelho brasa
];

export function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const count = width < 640 ? 18 : 30;
    const sparks: Spark[] = Array.from({ length: count }, () =>
      createSpark(width, height, true)
    );

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.x += s.vx + Math.sin(s.y * 0.015) * 0.25;
        s.y += s.vy;
        s.alpha -= s.decay;

        if (s.alpha <= 0 || s.y < -10) {
          sparks[i] = createSpark(width, height, false);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.hue}, ${s.alpha.toFixed(3)})`;
        ctx.shadowColor = `rgba(${s.hue}, 0.65)`;
        ctx.shadowBlur = s.radius * 4;
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 opacity-75"
    />
  );
}

function createSpark(width: number, height: number, randomY: boolean): Spark {
  const safeW = Math.max(width, 320);
  const safeH = Math.max(height, 480);
  return {
    x: Math.random() * safeW,
    y: randomY ? Math.random() * safeH : safeH * (0.72 + Math.random() * 0.28),
    vx: (Math.random() - 0.5) * 0.45,
    vy: -(0.35 + Math.random() * 0.85),
    radius: 0.9 + Math.random() * 1.9,
    alpha: 0.35 + Math.random() * 0.55,
    decay: 0.0018 + Math.random() * 0.0028,
    hue: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
  };
}
