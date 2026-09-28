"use client";

import { useEffect, useRef } from "react";

const LINK_DISTANCE = 148;
const MOUSE_RADIUS = 190;
const REPEL_STRENGTH = 46;
const NODE_AREA = 15500;
const MIN_NODES = 30;
const MAX_NODES = 132;
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
}

const LIGHT: Palette = {
  node: "#0D9488",
  line: "#0D9488",
  link: "#0F766E",
  nodeAlpha: 0.5,
  lineAlpha: 0.16,
};

const DARK: Palette = {
  node: "#5EEAD4",
  line: "#5EEAD4",
  link: "#5EEAD4",
  nodeAlpha: 0.4,
  lineAlpha: 0.13,
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

    const seed = () => {
      const count = Math.round((width * height) / NODE_AREA);
      const total = Math.min(MAX_NODES, Math.max(MIN_NODES, count));
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
            if (distSq < MOUSE_RADIUS * MOUSE_RADIUS && distSq > 0.01) {
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / MOUSE_RADIUS) ** 2 * REPEL_STRENGTH;
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

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (Math.abs(dx) > LINK_DISTANCE || Math.abs(dy) > LINK_DISTANCE) continue;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DISTANCE) continue;
          const alpha = (1 - dist / LINK_DISTANCE) * palette.lineAlpha;
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
          if (dist > MOUSE_RADIUS) continue;
          const alpha = (1 - dist / MOUSE_RADIUS) ** 2 * 0.22;
          ctx.strokeStyle = palette.link;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      ctx.fillStyle = palette.node;
      for (const node of nodes) {
        ctx.globalAlpha = palette.nodeAlpha;
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

    const observer = new MutationObserver(() => {
      palette = isDark() ? DARK : LIGHT;
    });

    resize();
    palette = isDark() ? DARK : LIGHT;
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
