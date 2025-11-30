"use client";

import { useState } from "react";

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bennett, Lance",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

interface ArrayCardioResults {
  fifteen?: typeof inventors;
  fullNames?: string[];
  ordered?: typeof inventors;
  totalYears?: number;
  oldest?: typeof inventors;
  alpha?: string[];
}

export default function ArrayCardio1() {
  const [results, setResults] = useState<ArrayCardioResults>({});

  const runExercises = () => {
    // 1. Filter inventors born in the 1500s
    const fifteen = inventors.filter(
      (inventor) => inventor.year >= 1500 && inventor.year < 1600,
    );

    // 2. Map to full names
    const fullNames = inventors.map(
      (inventor) => `${inventor.first} ${inventor.last}`,
    );

    // 3. Sort by birth year
    const ordered = [...inventors].sort((a, b) => a.year - b.year);

    // 4. Calculate total years lived
    const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);

    // 5. Sort inventors by years lived
    const oldest = [...inventors].sort((a, b) => {
      const lastGuy = a.passed - a.year;
      const nextGuy = b.passed - b.year;
      return lastGuy > nextGuy ? -1 : 1;
    });

    // 6. Sort people alphabetically by last name
    const alpha = [...people].sort((lastOne, nextOne) => {
      const [aLast] = lastOne.split(", ");
      const [bLast] = nextOne.split(", ");
      return aLast > bLast ? 1 : -1;
    });

    setResults({
      fifteen,
      fullNames,
      ordered,
      totalYears,
      oldest: oldest.slice(0, 3),
      alpha,
    });
  };

  return (
    <div className="min-h-[60vh] space-y-6 p-8">
      <button
        onClick={runExercises}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Run Array Exercises
      </button>

      {results.fifteen && (
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">
              1. Inventors born in the 1500s:
            </h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(results.fifteen, null, 2)}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">2. Full names:</h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(results.fullNames, null, 2)}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">3. Sorted by birth year:</h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(results.ordered, null, 2)}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">4. Total years lived:</h3>
            <p className="text-lg">{results.totalYears} years</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">5. Oldest 3 inventors:</h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(results.oldest, null, 2)}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">
              6. People sorted alphabetically:
            </h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(results.alpha, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
