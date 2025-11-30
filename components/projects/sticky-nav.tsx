"use client";

import { useEffect, useState } from "react";

export default function StickyNav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh]">
      <nav
        className={`fixed top-0 z-50 w-full transition-all ${
          isSticky ? "bg-white shadow-lg dark:bg-gray-900" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">LOGO</div>
            <ul className="flex gap-6">
              <li>
                <a href="#home" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="space-y-32 p-8 pt-32">
        <section id="home" className="min-h-screen">
          <h1 className="text-4xl font-bold">Home Section</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Scroll down to see the sticky navigation effect.
          </p>
        </section>
        <section id="about" className="min-h-screen">
          <h1 className="text-4xl font-bold">About Section</h1>
        </section>
        <section id="contact" className="min-h-screen">
          <h1 className="text-4xl font-bold">Contact Section</h1>
        </section>
      </div>
    </div>
  );
}
