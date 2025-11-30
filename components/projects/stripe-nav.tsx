"use client";

import { useRef, useState } from "react";

const triggers = [
  { text: "About", dropdown: ["History", "Team", "Careers"] },
  { text: "Products", dropdown: ["Web", "Mobile", "Desktop"] },
  { text: "Contact", dropdown: ["Email", "Phone", "Chat"] },
];

export default function StripeNav() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dropdownCoords, setDropdownCoords] = useState({ width: 0, left: 0 });
  const triggerRefs = useRef<(HTMLLIElement | null)[]>([]);

  function handleEnter(index: number) {
    const trigger = triggerRefs.current[index];
    if (!trigger) return;
    const { offsetWidth, offsetLeft } = trigger;
    setDropdownCoords({ width: offsetWidth, left: offsetLeft });
    setActiveIndex(index);
  }

  function handleLeave() {
    setActiveIndex(null);
  }

  return (
    <nav className="min-h-[60vh] bg-gray-100 p-8 dark:bg-gray-900">
      <ul className="relative mx-auto flex max-w-4xl items-center gap-8">
        {triggers.map((trigger, index) => (
          <li
            key={index}
            ref={(el) => {
              triggerRefs.current[index] = el;
            }}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={handleLeave}
            className="relative"
          >
            <button className="px-4 py-2 font-semibold hover:text-blue-600">
              {trigger.text}
            </button>
            {activeIndex === index && (
              <div
                className="absolute top-full left-0 mt-2 rounded-lg bg-white shadow-lg dark:bg-gray-800"
                style={{
                  width: `${dropdownCoords.width}px`,
                  transform: `translateX(${dropdownCoords.left - dropdownCoords.left}px)`,
                }}
              >
                {trigger.dropdown.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
        {activeIndex !== null && (
          <div
            className="absolute top-full left-0 z-0 h-2 rounded bg-blue-500 transition-all duration-300"
            style={{
              width: `${dropdownCoords.width}px`,
              transform: `translateX(${dropdownCoords.left}px)`,
            }}
          />
        )}
      </ul>
    </nav>
  );
}
