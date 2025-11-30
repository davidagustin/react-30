"use client";

import { useState } from "react";

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

interface ArrayCardio2Results {
  isAdult?: boolean;
  allAdults?: boolean;
  comment?: { text: string; id: number };
  index?: number;
  newComments?: typeof comments;
}

export default function ArrayCardio2() {
  const [results, setResults] = useState<ArrayCardio2Results>({});

  const runExercises = () => {
    // 1. Is at least one person 19 or older?
    const isAdult = people.some(
      (person) => new Date().getFullYear() - person.year >= 19,
    );

    // 2. Is everyone 19 or older?
    const allAdults = people.every(
      (person) => new Date().getFullYear() - person.year >= 19,
    );

    // 3. Find the comment with ID 823423
    const comment = comments.find((comment) => comment.id === 823423);

    // 4. Find the index of the comment with ID 823423
    const index = comments.findIndex((comment) => comment.id === 823423);

    // 5. Delete the comment with ID 823423
    const newComments = comments.filter((comment) => comment.id !== 823423);

    setResults({
      isAdult,
      allAdults,
      comment,
      index,
      newComments,
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

      {results.isAdult !== undefined && (
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">
              1. Is at least one person 19 or older?
            </h3>
            <p className="text-lg">{results.isAdult ? "Yes" : "No"}</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">2. Is everyone 19 or older?</h3>
            <p className="text-lg">{results.allAdults ? "Yes" : "No"}</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">
              3. Find comment with ID 823423:
            </h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(results.comment, null, 2)}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">
              4. Index of comment with ID 823423:
            </h3>
            <p className="text-lg">{results.index}</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold">
              5. Comments without ID 823423:
            </h3>
            <pre className="overflow-auto text-sm">
              {JSON.stringify(results.newComments, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
