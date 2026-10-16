"use client";

import { useEffect, useRef } from "react";

const REPEL_STRENGTH = 46;
const NODE_AREA = 15500;
const MIN_NODES = 30;
const MAX_SPEED = 22;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
}

interface Palette {
  node: string;
  line: string;
  link: string;
  nodeAlpha: number;
  lineAlpha: number;
  linkAlpha: number;
  linkDistance: number;
  lineWidth: number;
  maxNodes: number;
  mouseRadius: number;
}

const LIGHT: Palette = {
  node: "#0D9488",
  line: "#0D9488",
  link: "#0D9488",
  nodeAlpha: 0.28,
  lineAlpha: 0.075,
  linkAlpha: 0.1,
  linkDistance: 124,
  lineWidth: 0.75,
  maxNodes: 56,
  mouseRadius: 165,
};

const DARK: Palette = {
  node: "#5EEAD4",
  line: "#5EEAD4",
  link: "#5EEAD4",
  nodeAlpha: 0.4,
  lineAlpha: 0.13,
  linkAlpha: 0.22,
  linkDistance: 148,
  lineWidth: 1,
  maxNodes: 132,
  mouseRadius: 190,
};

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let palette = DARK;
    let raf = 0;
    let running = true;
    let lastTime = 0;

    const mouse = { x: -9999, y: -9999, active: false };
    let alphaScale = 1;

    const seed = () => {
      const count = Math.round((width * height) / NODE_AREA);
      const total = Math.min(palette.maxNodes, Math.max(MIN_NODES, count));
      nodes = Array.from({ length: total }, () => ({
        x: random(0, width),
        y: random(0, height),
        vx: random(-0.16, 0.16),
        vy: random(-0.16, 0.16),
        r: random(0.9, 2.1),
        phase: random(0, Math.PI * 2),
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const isDark = () => document.documentElement.classList.contains("dark");

    const draw = (time: number) => {
      const delta = lastTime ? Math.min((time - lastTime) / 16.67, 3) : 1;
      lastTime = time;

      if (!reduceMotion) {
        const fadeZone = window.innerHeight * 0.8;
        const target = 1 - 0.6 * Math.min(1, Math.max(0, window.scrollY / fadeZone));
        alphaScale += (target - alphaScale) * Math.min(1, 0.08 * delta);
      }

      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        if (!reduceMotion) {
          node.phase += 0.012 * delta;
          node.vx += Math.cos(node.phase) * 0.0055 * delta;
          node.vy += Math.sin(node.phase * 0.85) * 0.0055 * delta;

          if (mouse.active) {
            const dx = node.x - mouse.x;
            const dy = node.y - mouse.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < palette.mouseRadius * palette.mouseRadius && distSq > 0.01) {
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / palette.mouseRadius) ** 2 * REPEL_STRENGTH;
              node.vx += (dx / dist) * force * 0.016 * delta;
              node.vy += (dy / dist) * force * 0.016 * delta;
            }
          }

          node.vx *= 0.988;
          node.vy *= 0.988;

          const speed = Math.hypot(node.vx, node.vy);
          if (speed > MAX_SPEED) {
            node.vx = (node.vx / speed) * MAX_SPEED;
            node.vy = (node.vy / speed) * MAX_SPEED;
          }

          node.x += node.vx * delta;
          node.y += node.vy * delta;

          const margin = 24;
          if (node.x < -margin) node.x = width + margin;
          if (node.x > width + margin) node.x = -margin;
          if (node.y < -margin) node.y = height + margin;
          if (node.y > height + margin) node.y = -margin;
        }
      }

      ctx.lineWidth = palette.lineWidth;
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const reach = palette.linkDistance;
          if (Math.abs(dx) > reach || Math.abs(dy) > reach) continue;
          const dist = Math.hypot(dx, dy);
          if (dist > reach) continue;
          const alpha = (1 - dist / reach) * palette.lineAlpha * alphaScale;
          ctx.strokeStyle = palette.line;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      if (mouse.active) {
        for (const node of nodes) {
          const dist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
          if (dist > palette.mouseRadius) continue;
          const alpha = (1 - dist / palette.mouseRadius) ** 2 * palette.linkAlpha * alphaScale;
          ctx.strokeStyle = palette.link;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = palette.lineWidth * 0.8;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      ctx.fillStyle = palette.node;
      for (const node of nodes) {
        ctx.globalAlpha = palette.nodeAlpha * alphaScale;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (running && !reduceMotion) raf = requestAnimationFrame(draw);
    };

    const loop = (time: number) => {
      lastTime = time;
      raf = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduceMotion && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const applyPalette = () => {
      const next = isDark() ? DARK : LIGHT;
      if (next === palette) return;
      palette = next;
      seed();
    };

    const observer = new MutationObserver(applyPalette);

    palette = isDark() ? DARK : LIGHT;
    resize();
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    if (reduceMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
