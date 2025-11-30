"use client";

import { useEffect, useState } from "react";

const drumSounds: Record<string, { key: string; sound: string; name: string }> =
  {
    KeyA: { key: "A", sound: "/sounds/clap.wav", name: "Clap" },
    KeyS: { key: "S", sound: "/sounds/hihat.wav", name: "Hihat" },
    KeyD: { key: "D", sound: "/sounds/kick.wav", name: "Kick" },
    KeyF: { key: "F", sound: "/sounds/openhat.wav", name: "Openhat" },
    KeyG: { key: "G", sound: "/sounds/boom.wav", name: "Boom" },
    KeyH: { key: "H", sound: "/sounds/ride.wav", name: "Ride" },
    KeyJ: { key: "J", sound: "/sounds/snare.wav", name: "Snare" },
    KeyK: { key: "K", sound: "/sounds/tom.wav", name: "Tom" },
    KeyL: { key: "L", sound: "/sounds/tink.wav", name: "Tink" },
  };

export default function DrumKit() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const drum = drumSounds[e.code];
      if (drum) {
        playSound(drum.sound, e.code);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function playSound(soundPath: string, keyCode: string) {
    const audio = new Audio(soundPath);
    audio.play().catch(() => {
      // Fallback: use data URLs or create audio elements
      console.log("Audio playback failed, using fallback");
    });
    setActiveKey(keyCode);
    setTimeout(() => setActiveKey(null), 150);
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {Object.entries(drumSounds).map(([code, drum]) => (
          <button
            key={code}
            onClick={() => playSound(drum.sound, code)}
            className={`flex h-24 w-24 flex-col items-center justify-center rounded-lg border-4 border-gray-800 bg-gray-700 text-white transition-all hover:scale-105 active:scale-95 ${
              activeKey === code
                ? "scale-110 border-yellow-400 bg-yellow-600"
                : ""
            }`}
          >
            <kbd className="text-2xl font-bold">{drum.key}</kbd>
            <span className="text-xs uppercase">{drum.name}</span>
          </button>
        ))}
      </div>
      <p className="absolute bottom-4 text-sm text-gray-600 dark:text-gray-400">
        Press keys or click buttons to play sounds
      </p>
    </div>
  );
}
