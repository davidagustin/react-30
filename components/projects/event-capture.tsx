"use client";

import { useState } from "react";

export default function EventCapture() {
  const [logs, setLogs] = useState<string[]>([]);

  function addLog(message: string) {
    setLogs((prev) => [...prev, message]);
  }

  function clearLogs() {
    setLogs([]);
  }

  function handleClick(
    e: React.MouseEvent,
    element: string,
    useCapture: boolean = false,
  ) {
    if (useCapture) {
      e.stopPropagation();
    }
    addLog(`${element} clicked (capture: ${useCapture})`);
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold">
          Event Capture, Propagation, Bubbling and Once
        </h2>
        <button
          onClick={clearLogs}
          className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          Clear Logs
        </button>
        <div
          className="rounded-lg border-4 border-blue-500 bg-blue-100 p-8 dark:bg-blue-900"
          onClick={(e) => handleClick(e, "DIV 3", false)}
        >
          <div
            className="rounded-lg border-4 border-purple-500 bg-purple-100 p-8 dark:bg-purple-900"
            onClick={(e) => handleClick(e, "DIV 2", false)}
          >
            <div
              className="rounded-lg border-4 border-pink-500 bg-pink-100 p-8 dark:bg-pink-900"
              onClick={(e) => handleClick(e, "DIV 1", false)}
            >
              <button
                className="rounded-lg bg-white px-6 py-3 font-bold hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                onClick={(e) => handleClick(e, "BUTTON", false)}
              >
                Click Me!
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="font-semibold">Event Log:</h3>
          {logs.length === 0 ? (
            <p className="text-gray-500">
              Click the button to see event propagation
            </p>
          ) : (
            logs.map((log, i) => (
              <div key={i} className="text-sm">
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
