"use client";

import { useState } from "react";

const videos = [
  { time: "4:33" },
  { time: "2:33" },
  { time: "1:23:33" },
  { time: "23:33" },
  { time: "3:21" },
  { time: "4:31" },
  { time: "6:02" },
  { time: "11:59" },
  { time: "1:02:33" },
];

export default function ReduceTimes() {
  const [total, setTotal] = useState<string>("");

  function calculateTotal() {
    const totalSeconds = videos.reduce((acc, video) => {
      const parts = video.time.split(":").map(Number);
      if (parts.length === 2) {
        return acc + parts[0] * 60 + parts[1];
      } else {
        return acc + parts[0] * 3600 + parts[1] * 60 + parts[2];
      }
    }, 0);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formatted = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    setTotal(formatted);
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold">Adding Up Times with Reduce</h2>
        <button
          onClick={calculateTotal}
          className="mb-4 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Calculate Total Time
        </button>
        <div className="mb-4 space-y-2">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900"
            >
              {video.time}
            </div>
          ))}
        </div>
        {total && (
          <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-4 text-center dark:bg-blue-900">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Time:
            </p>
            <p className="text-3xl font-bold">{total}</p>
          </div>
        )}
      </div>
    </div>
  );
}
