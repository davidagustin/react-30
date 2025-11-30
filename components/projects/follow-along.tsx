"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#portfolio", text: "Portfolio" },
  { href: "#contact", text: "Contact" },
];

export default function FollowAlong() {
  const [highlight, setHighlight] = useState({ width: 0, left: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  function handleEnter(index: number) {
    const link = linkRefs.current[index];
    if (!link) return;
    const { offsetWidth, offsetLeft } = link;
    setHighlight({ width: offsetWidth, left: offsetLeft });
  }

  return (
    <div className="min-h-[60vh] p-8">
      <nav className="relative mx-auto max-w-4xl">
        <ul className="flex gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <a
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                href={link.href}
                onMouseEnter={() => handleEnter(index)}
                className="relative z-10 block px-4 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <span
          className="absolute bottom-0 left-0 z-0 h-1 rounded bg-blue-500 transition-all duration-300"
          style={{
            width: `${highlight.width}px`,
            transform: `translateX(${highlight.left}px)`,
          }}
        />
      </nav>
      <div className="mx-auto mt-16 max-w-4xl space-y-4">
        <h2 className="text-2xl font-bold">Follow Along Link Highlighter</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Hover over the navigation links above to see the highlight follow
          along.
        </p>
      </div>
    </div>
  );
}
