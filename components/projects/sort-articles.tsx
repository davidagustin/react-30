"use client";

import { useState } from "react";

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

export default function SortArticles() {
  const [sorted, setSorted] = useState<string[]>([]);

  function strip(bandName: string) {
    return bandName.replace(/^(a |the |an )/i, "").trim();
  }

  function sortBands() {
    const sortedBands = [...bands].sort((a, b) =>
      strip(a) > strip(b) ? 1 : -1,
    );
    setSorted(sortedBands);
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold">Sort Without Articles</h2>
        <button
          onClick={sortBands}
          className="mb-4 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Sort Bands
        </button>
        <ul className="space-y-2">
          {(sorted.length > 0 ? sorted : bands).map((band, index) => (
            <li
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
            >
              {band}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
