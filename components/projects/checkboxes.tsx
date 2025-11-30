"use client";

import { useRef, useState } from "react";

const items = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
  { id: 4, text: "Item 4" },
  { id: 5, text: "Item 5" },
  { id: 6, text: "Item 6" },
  { id: 7, text: "Item 7" },
  { id: 8, text: "Item 8" },
  { id: 9, text: "Item 9" },
  { id: 10, text: "Item 10" },
];

export default function Checkboxes() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const lastCheckedRef = useRef<number | null>(null);

  function handleClick(id: number, e: React.MouseEvent<HTMLInputElement>) {
    if (e.shiftKey && lastCheckedRef.current !== null) {
      const start = Math.min(id, lastCheckedRef.current);
      const end = Math.max(id, lastCheckedRef.current);
      const newChecked = new Set(checked);
      for (let i = start; i <= end; i++) {
        newChecked.add(i);
      }
      setChecked(newChecked);
    } else {
      const newChecked = new Set(checked);
      if (newChecked.has(id)) {
        newChecked.delete(id);
      } else {
        newChecked.add(id);
      }
      setChecked(newChecked);
    }
    lastCheckedRef.current = id;
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-md space-y-2 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-bold">
          Hold Shift and Check Checkboxes
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Click a checkbox, then hold Shift and click another to select all in
          between.
        </p>
        {items.map((item) => (
          <label
            key={item.id}
            className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <input
              type="checkbox"
              checked={checked.has(item.id)}
              onChange={() => {}}
              onClick={(e) => handleClick(item.id, e)}
              className="h-5 w-5 cursor-pointer"
            />
            <span>{item.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
