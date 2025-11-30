"use client";

import { useEffect, useState } from "react";

export default function LocalStorage() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("items");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  function addItem() {
    if (!inputValue.trim()) return;
    const newItems = [...items, inputValue];
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
    setInputValue("");
  }

  function removeItem(index: number) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  }

  function toggleItem(index: number) {
    const newItems = items.map((item, i) =>
      i === index
        ? item.startsWith("✓ ")
          ? item.slice(2)
          : `✓ ${item}`
        : item,
    );
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  }

  function clearAll() {
    setItems([]);
    localStorage.removeItem("items");
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-md space-y-4">
        <h2 className="text-2xl font-bold">LocalStorage Demo</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addItem()}
            placeholder="Add an item"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={addItem}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900"
            >
              <span
                onClick={() => toggleItem(index)}
                className={`cursor-pointer flex-1 ${
                  item.startsWith("✓ ") ? "line-through text-gray-500" : ""
                }`}
              >
                {item}
              </span>
              <button
                onClick={() => removeItem(index)}
                className="ml-2 text-red-600 hover:text-red-800"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
        {items.length > 0 && (
          <button
            onClick={clearAll}
            className="w-full rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
