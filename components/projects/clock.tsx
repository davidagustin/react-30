"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegrees = (seconds / 60) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="relative">
        <svg
          className="h-96 w-96"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="200"
            cy="200"
            r="190"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-gray-800 dark:text-gray-200"
          />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x = 200 + 170 * Math.cos(angle);
            const y = 200 + 170 * Math.sin(angle);
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-2xl font-bold fill-current text-gray-800 dark:text-gray-200"
              >
                {i + 1}
              </text>
            );
          })}
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="120"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            transform={`rotate(${hourDegrees} 200 200)`}
            className="text-gray-900 dark:text-gray-100"
          />
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="80"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            transform={`rotate(${minuteDegrees} 200 200)`}
            className="text-gray-900 dark:text-gray-100"
          />
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="60"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${secondDegrees} 200 200)`}
            className="text-red-500"
          />
          <circle
            cx="200"
            cy="200"
            r="12"
            fill="currentColor"
            className="text-gray-900 dark:text-gray-100"
          />
        </svg>
      </div>
    </div>
  );
}
