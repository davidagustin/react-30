"use client";

import { useEffect, useMemo, useState } from "react";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

interface City {
  city: string;
  state: string;
  population: string;
}

export default function TypeAhead() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data: City[]) => setCities(data))
      .catch(() => {
        // Fallback data
        setCities([
          { city: "New York", state: "NY", population: "8175133" },
          { city: "Los Angeles", state: "CA", population: "3792621" },
          { city: "Chicago", state: "IL", population: "2695598" },
        ]);
      });
  }, []);

  const filteredCities = useMemo(() => {
    if (!searchTerm) return [];
    const regex = new RegExp(searchTerm, "gi");
    return cities
      .filter((place) => regex.test(place.city) || regex.test(place.state))
      .slice(0, 10);
  }, [searchTerm, cities]);

  function highlightMatch(text: string, term: string) {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-300">
          {part}
        </mark>
      ) : (
        part
      ),
    );
  }

  return (
    <div className="min-h-[60vh] p-8">
      <form className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="City or State"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </form>
      <ul className="space-y-1">
        {filteredCities.map((place, index) => (
          <li
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
          >
            <span className="text-lg font-semibold">
              {highlightMatch(place.city, searchTerm)},{" "}
              {highlightMatch(place.state, searchTerm)}
            </span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              {Number(place.population).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
