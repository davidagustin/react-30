"use client";

import { useEffect, useRef, useState } from "react";

const holes = Array.from({ length: 6 }, (_, i) => i);

export default function WhackAMole() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [activeHole, setActiveHole] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      gameIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      intervalRef.current = setInterval(() => {
        setActiveHole(Math.floor(Math.random() * holes.length));
        setTimeout(() => setActiveHole(null), 800);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
      setActiveHole(null);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
    };
  }, [isPlaying, timeLeft]);

  function startGame() {
    setScore(0);
    setTimeLeft(10);
    setIsPlaying(true);
  }

  function whack(hole: number) {
    if (activeHole === hole && isPlaying) {
      setScore((prev) => prev + 1);
      setActiveHole(null);
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-8">
          <div className="mb-4 text-4xl font-bold">Score: {score}</div>
          <div className="mb-4 text-2xl">Time: {timeLeft}s</div>
          {!isPlaying && timeLeft === 0 && (
            <div className="mb-4 text-2xl font-bold text-red-600">
              Game Over! Final Score: {score}
            </div>
          )}
        </div>
        {!isPlaying && (
          <button
            onClick={startGame}
            className="mb-8 rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
          >
            Start Game
          </button>
        )}
        <div className="grid grid-cols-3 gap-4">
          {holes.map((hole) => (
            <button
              key={hole}
              onClick={() => whack(hole)}
              disabled={!isPlaying}
              className={`h-32 w-32 rounded-full border-4 border-gray-800 bg-gray-600 transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 ${
                activeHole === hole
                  ? "bg-yellow-500 ring-4 ring-yellow-300"
                  : ""
              }`}
            >
              {activeHole === hole && "🐹"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
