"use client";

import { useEffect, useRef, useState } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hue, setHue] = useState(0);
  const [lineWidth, setLineWidth] = useState(50);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = lineWidth;

    function draw(e: MouseEvent) {
      if (!isDrawing || !ctx) return;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }

    function startDrawing(e: MouseEvent) {
      if (!ctx) return;
      setIsDrawing(true);
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }

    function stopDrawing() {
      if (!ctx) return;
      setIsDrawing(false);
      ctx.beginPath();
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, [isDrawing, hue, lineWidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[60vh]">
      <div className="mb-4 flex gap-4 p-4">
        <button
          onClick={() => {
            const canvas = canvasRef.current;
            if (canvas) {
              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
              }
            }
          }}
          className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          Clear
        </button>
        <label className="flex items-center gap-2">
          Line Width:
          <input
            type="range"
            min="1"
            max="100"
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
            className="w-32"
          />
          {lineWidth}
        </label>
      </div>
      <canvas
        ref={canvasRef}
        className="cursor-crosshair border border-gray-300 dark:border-gray-700"
      />
    </div>
  );
}
