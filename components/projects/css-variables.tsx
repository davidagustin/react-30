"use client";

import { useState } from "react";

export default function CSSVariables() {
  const [spacing, setSpacing] = useState(10);
  const [blur, setBlur] = useState(10);
  const [baseColor, setBaseColor] = useState("#ffc600");

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mb-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Spacing: {spacing}px
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={spacing}
            onChange={(e) => setSpacing(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Blur: {blur}px
          </label>
          <input
            type="range"
            min="0"
            max="25"
            value={blur}
            onChange={(e) => setBlur(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Base Color
          </label>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="h-10 w-full cursor-pointer"
          />
        </div>
      </div>
      <div
        className="rounded-lg p-8"
        style={{
          padding: `${spacing}px`,
          filter: `blur(${blur}px)`,
          backgroundColor: baseColor,
        }}
      >
        <img
          src="https://source.unsplash.com/800x600/?nature"
          alt="Nature"
          className="w-full rounded-lg"
          style={{
            filter: `blur(${blur}px)`,
          }}
        />
      </div>
    </div>
  );
}
