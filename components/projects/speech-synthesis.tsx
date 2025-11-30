"use client";

import { useEffect, useRef, useState } from "react";

export default function SpeechSynthesis() {
  const [text, setText] = useState("Hello! I love JavaScript!");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [voice, setVoice] = useState("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;
      const loadVoices = () => {
        setVoices(synthRef.current?.getVoices() || []);
      };
      loadVoices();
      synthRef.current.onvoiceschanged = loadVoices;
    }
  }, []);

  function speak() {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = pitch;
    if (voice) {
      utterance.voice = voices.find((v) => v.name === voice) || null;
    }
    synthRef.current.speak(utterance);
  }

  function stop() {
    synthRef.current?.cancel();
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold">Speech Synthesis</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-4 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          rows={4}
        />
        <div className="space-y-2">
          <label className="block">
            Rate: {rate}
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full"
            />
          </label>
          <label className="block">
            Pitch: {pitch}
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={pitch}
              onChange={(e) => setPitch(Number(e.target.value))}
              className="w-full"
            />
          </label>
          <label className="block">
            Voice:
            <select
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Default</option>
              {voices.map((v, i) => (
                <option key={i} value={v.name}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex gap-4">
          <button
            onClick={speak}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Speak
          </button>
          <button
            onClick={stop}
            className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
