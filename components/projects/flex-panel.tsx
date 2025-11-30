"use client";

import { useState } from "react";

const panels = [
  {
    id: 1,
    top: "Hey",
    bottom: "Let's",
    bgImage: "https://source.unsplash.com/800x600/?nature",
  },
  {
    id: 2,
    top: "Give",
    bottom: "All",
    bgImage: "https://source.unsplash.com/800x600/?ocean",
  },
  {
    id: 3,
    top: "You Can",
    bottom: "Give",
    bgImage: "https://source.unsplash.com/800x600/?mountain",
  },
  {
    id: 4,
    top: "In",
    bottom: "Spring",
    bgImage: "https://source.unsplash.com/800x600/?forest",
  },
  {
    id: 5,
    top: "Keep",
    bottom: "Going",
    bgImage: "https://source.unsplash.com/800x600/?sunset",
  },
];

export default function FlexPanel() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="flex min-h-[60vh]">
      {panels.map((panel) => (
        <div
          key={panel.id}
          onClick={() => setActiveId(activeId === panel.id ? null : panel.id)}
          className={`flex flex-1 cursor-pointer flex-col items-center justify-center overflow-hidden transition-all duration-500 ${
            activeId === panel.id ? "flex-[5]" : "flex-1"
          }`}
          style={{
            backgroundImage: `url(${panel.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p
            className={`text-4xl font-bold text-white transition-transform duration-500 ${
              activeId === panel.id ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {panel.top}
          </p>
          <p
            className={`text-4xl font-bold text-white transition-transform duration-500 ${
              activeId === panel.id ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {panel.bottom}
          </p>
        </div>
      ))}
    </div>
  );
}
