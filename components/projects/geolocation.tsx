"use client";

import { useState } from "react";

export default function Geolocation() {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  function getLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
    );
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold">Geolocation</h2>
        <button
          onClick={getLocation}
          disabled={loading}
          className="mb-4 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Getting Location..." : "Get My Location"}
        </button>
        {error && (
          <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-800 dark:bg-red-900 dark:text-red-200">
            {error}
          </div>
        )}
        {location && (
          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div>
              <strong>Latitude:</strong> {location.latitude.toFixed(6)}
            </div>
            <div>
              <strong>Longitude:</strong> {location.longitude.toFixed(6)}
            </div>
            {location.accuracy && (
              <div>
                <strong>Accuracy:</strong> {location.accuracy.toFixed(2)} meters
              </div>
            )}
            <div className="mt-4">
              <a
                href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
