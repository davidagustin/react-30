"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "https://source.unsplash.com/800x600/?nature",
  "https://source.unsplash.com/800x600/?ocean",
  "https://source.unsplash.com/800x600/?mountain",
  "https://source.unsplash.com/800x600/?forest",
  "https://source.unsplash.com/800x600/?sunset",
  "https://source.unsplash.com/800x600/?desert",
];

export default function SlideIn() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    function checkSlide() {
      imageRefs.current.forEach((img) => {
        if (!img) return;
        const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
        const imageBottom = img.offsetTop + img.height;
        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
          img.classList.add("active");
        } else {
          img.classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", checkSlide);
    checkSlide();

    return () => window.removeEventListener("scroll", checkSlide);
  }, []);

  return (
    <div className="min-h-[200vh] space-y-32 p-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Scroll to see images slide in
        </h1>
      </div>
      {images.map((src, i) => (
        <img
          key={i}
          ref={(el) => {
            imageRefs.current[i] = el;
          }}
          src={src}
          alt={`Slide ${i + 1}`}
          className="mx-auto block w-3/4 transform opacity-0 transition-all duration-500 ease-in-out translate-x-[-200px] [&.active]:opacity-100 [&.active]:translate-x-0"
        />
      ))}
    </div>
  );
}
