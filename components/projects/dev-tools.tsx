"use client";

export default function DevTools() {
  return (
    <div className="min-h-[60vh] space-y-6 p-8">
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-2xl font-bold">Dev Tools Domination</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Open your browser's developer console to see various console methods
          in action.
        </p>
        <div className="space-y-2">
          <p className="text-sm">
            <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
              console.log()
            </code>{" "}
            - Regular logging
          </p>
          <p className="text-sm">
            <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
              console.warn()
            </code>{" "}
            - Warning messages
          </p>
          <p className="text-sm">
            <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
              console.error()
            </code>{" "}
            - Error messages
          </p>
          <p className="text-sm">
            <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
              console.info()
            </code>{" "}
            - Informational messages
          </p>
          <p className="text-sm">
            <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
              console.table()
            </code>{" "}
            - Display data in a table
          </p>
          <p className="text-sm">
            <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
              console.time() / console.timeEnd()
            </code>{" "}
            - Measure execution time
          </p>
          <p className="text-sm">
            <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
              console.group() / console.groupEnd()
            </code>{" "}
            - Group related logs
          </p>
        </div>
        <button
          onClick={() => {
            console.log("Regular log");
            console.warn("Warning message");
            console.error("Error message");
            console.info("Info message");
            console.table([
              { name: "John", age: 30 },
              { name: "Jane", age: 25 },
            ]);
            console.time("timer");
            setTimeout(() => {
              console.timeEnd("timer");
            }, 1000);
            console.group("Group 1");
            console.log("Inside group");
            console.groupEnd();
          }}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Run Console Examples
        </button>
      </div>
    </div>
  );
}
