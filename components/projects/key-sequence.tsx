"use client";

import { useEffect, useState } from "react";

const secretCode = "wesbos";

export default function KeySequence() {
  const [pressed, setPressed] = useState<string[]>([]);
  const [matched, setMatched] = useState(false);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      setPressed((prev) => {
        const newPressed = [...prev, e.key].slice(-secretCode.length);
        if (newPressed.join("").toLowerCase() === secretCode) {
          setMatched(true);
          setTimeout(() => setMatched(false), 2000);
        }
        return newPressed;
      });
    }

    window.addEventListener("keyup", handleKeyPress);
    return () => window.removeEventListener("keyup", handleKeyPress);
  }, []);

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold">Key Sequence Detection</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Type the secret code: <code className="font-mono">{secretCode}</code>
        </p>
        <div className="mb-4 flex justify-center gap-2">
          {secretCode.split("").map((char, i) => (
            <div
              key={i}
              className={`h-12 w-12 rounded border-2 text-center leading-[3rem] ${
                pressed[pressed.length - secretCode.length + i] === char
                  ? "border-green-500 bg-green-100 dark:bg-green-900"
                  : "border-gray-300 dark:border-gray-700"
              }`}
            >
              {char.toUpperCase()}
            </div>
          ))}
        </div>
        {matched && (
          <div className="rounded-lg bg-green-500 p-4 text-white">
            🎉 Secret code matched!
          </div>
        )}
      </div>
    </div>
  );
}
