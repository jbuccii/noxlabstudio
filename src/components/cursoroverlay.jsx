import React, { useEffect, useState } from "react";

export default function CursorOverlay() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="cursor-overlay"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}
