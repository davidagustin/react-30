"use client";

import { useRef, useState } from "react";

const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

export default function ClickDrag() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleMouseDown(e: React.MouseEvent) {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  }

  function handleMouseLeave() {
    setIsDown(false);
  }

  function handleMouseUp() {
    setIsDown(false);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-2xl font-bold">Click and Drag</h2>
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex cursor-grab gap-4 overflow-x-auto whitespace-nowrap active:cursor-grabbing"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex h-64 w-64 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
