"use client";

import { useState } from "react";

interface ReferencesResults {
  age?: number;
  age2?: number;
  players?: string[];
  team?: string[];
  person?: { name: string; age: number; number?: number };
  captain?: { name: string; age: number; number?: number };
  team2?: string[];
  team3?: string[];
  team4?: string[];
  cap2?: { name: string; age: number; number: number };
  cap3?: { name: string; age: number };
  wes?: {
    name: string;
    age: number;
    social: { twitter: string; facebook: string };
  };
  dev?: {
    name: string;
    age: number;
    social: { twitter: string; facebook: string };
  };
}

export default function References() {
  const [results, setResults] = useState<ReferencesResults>({});

  const runExamples = () => {
    // Numbers, strings, booleans are copied
    let age = 100;
    const age2 = age;
    age = 200;

    // Arrays and objects are references
    const players = ["Wes", "Sarah", "Ryan", "Poppy"];
    const team = players;
    team[3] = "Lux";

    const person: { name: string; age: number; number?: number } = {
      name: "Wes Bos",
      age: 80,
    };
    const captain = person;
    captain.number = 99;

    // Copying arrays
    const team2 = players.slice();
    const team3 = [...players];
    const team4 = Array.from(players);

    // Copying objects
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    const cap3 = { ...person };

    // Deep clone
    const wes = {
      name: "Wes",
      age: 100,
      social: { twitter: "@wesbos", facebook: "wesbos.developer" },
    };
    const dev = JSON.parse(JSON.stringify(wes));
    dev.social.twitter = "@coolman";

    setResults({
      age,
      age2,
      players,
      team,
      person,
      captain,
      team2,
      team3,
      team4,
      cap2,
      cap3,
      wes,
      dev,
    });
  };

  return (
    <div className="min-h-[60vh] space-y-6 p-8">
      <button
        onClick={runExamples}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Run Reference Examples
      </button>

      {results.age !== undefined && (
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">Primitives are copied:</h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(
                { age: results.age, age2: results.age2 },
                null,
                2,
              )}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">Arrays are references:</h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(
                { players: results.players, team: results.team },
                null,
                2,
              )}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">Objects are references:</h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(
                { person: results.person, captain: results.captain },
                null,
                2,
              )}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">Copying arrays:</h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(
                {
                  team2: results.team2,
                  team3: results.team3,
                  team4: results.team4,
                },
                null,
                2,
              )}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">Copying objects:</h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(
                { cap2: results.cap2, cap3: results.cap3 },
                null,
                2,
              )}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">Deep clone:</h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify({ wes: results.wes, dev: results.dev }, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
