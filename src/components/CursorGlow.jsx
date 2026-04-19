import React, { useEffect, useRef } from "react";
import "../styles/CursorGlow.css";

/**
 * Subtle spotlight that follows the cursor — adds atmospheric depth
 * without being distracting. Uses rAF for 60fps tracking.
 */
export default function CursorGlow() {
  const ref = useRef(null);
  const pos = useRef({ x: -200, y: -200, tx: -200, ty: -200 });
  const raf = useRef(0);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const onMove = (e) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
    };

    const tick = () => {
      pos.current.x += (pos.current.tx - pos.current.x) * 0.15;
      pos.current.y += (pos.current.ty - pos.current.y) * 0.15;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - 300}px, ${
          pos.current.y - 300
        }px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
