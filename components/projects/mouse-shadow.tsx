"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseShadow() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!heroRef.current) return;
      const { offsetWidth: width, offsetHeight: height } = heroRef.current;
      const { offsetX: x, offsetY: y } = e;
      const xWalk = Math.round((x / width) * 100 - 50);
      const yWalk = Math.round((y / height) * 100 - 50);

      setCoords({ x: xWalk, y: yWalk });
    }

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMove);
      return () => hero.removeEventListener("mousemove", handleMove);
    }
  }, []);

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div
        ref={heroRef}
        className="relative flex h-96 w-full max-w-4xl items-center justify-center rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900"
      >
        <h1
          className="text-6xl font-bold text-gray-900 dark:text-white"
          style={{
            textShadow: `${coords.x * 2}px ${coords.y * 2}px 0 rgba(0,0,0,0.2)`,
          }}
        >
          🐭 Mouse Shadow
        </h1>
      </div>
    </div>
  );
}
