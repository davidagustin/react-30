"use client";

import { useRef, useState } from "react";

export default function VideoSpeed() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [speed, setSpeed] = useState(1);

  function handleSpeedChange(newSpeed: number) {
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
      setSpeed(newSpeed);
    }
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative mb-4">
          <video
            ref={videoRef}
            className="w-full"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          />
        </div>
        <div className="flex items-center justify-center gap-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <button
            onClick={() => handleSpeedChange(0.5)}
            className={`rounded px-4 py-2 ${
              speed === 0.5
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            0.5x
          </button>
          <button
            onClick={() => handleSpeedChange(1)}
            className={`rounded px-4 py-2 ${
              speed === 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            1x
          </button>
          <button
            onClick={() => handleSpeedChange(1.5)}
            className={`rounded px-4 py-2 ${
              speed === 1.5
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            1.5x
          </button>
          <button
            onClick={() => handleSpeedChange(2)}
            className={`rounded px-4 py-2 ${
              speed === 2
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            2x
          </button>
          <span className="ml-4">Current: {speed}x</span>
        </div>
      </div>
    </div>
  );
}
