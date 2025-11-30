"use client";

import { useEffect, useRef, useState } from "react";

export default function Countdown() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [displayTime, setDisplayTime] = useState("00:00");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, secondsLeft]);

  useEffect(() => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    setDisplayTime(
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
    );
  }, [secondsLeft]);

  function setTimer(minutes: number) {
    setSecondsLeft(minutes * 60);
    setIsRunning(false);
  }

  function toggleTimer() {
    if (secondsLeft === 0) return;
    setIsRunning(!isRunning);
  }

  function resetTimer() {
    setSecondsLeft(0);
    setIsRunning(false);
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-8">
          <div className="mb-4 text-6xl font-bold">{displayTime}</div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setTimer(5)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              5 min
            </button>
            <button
              onClick={() => setTimer(10)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              10 min
            </button>
            <button
              onClick={() => setTimer(15)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              15 min
            </button>
            <button
              onClick={() => setTimer(20)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              20 min
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={toggleTimer}
            disabled={secondsLeft === 0}
            className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 disabled:opacity-50"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={resetTimer}
            className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
