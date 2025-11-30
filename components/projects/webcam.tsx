"use client";

import { useEffect, useRef, useState } from "react";

export default function Webcam() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string>("");

  async function startWebcam() {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setError("");
      }
    } catch (err) {
      setError("Unable to access webcam. Please check permissions.");
      console.error(err);
    }
  }

  function stopWebcam() {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  }

  function takePhoto() {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  }

  useEffect(() => {
    return () => {
      stopWebcam();
    };
  }, [stream]);

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-4xl space-y-4">
        <div className="flex gap-4">
          <button
            onClick={startWebcam}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Start Webcam
          </button>
          <button
            onClick={stopWebcam}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Stop Webcam
          </button>
          <button
            onClick={takePhoto}
            disabled={!stream}
            className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50"
          >
            Take Photo
          </button>
        </div>
        {error && (
          <div className="rounded-lg bg-red-100 p-4 text-red-800 dark:bg-red-900 dark:text-red-200">
            {error}
          </div>
        )}
        <div className="flex gap-4">
          <div className="flex-1">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full rounded-lg border border-gray-200 dark:border-gray-800"
            />
          </div>
          <div className="flex-1">
            <canvas
              ref={canvasRef}
              className="w-full rounded-lg border border-gray-200 dark:border-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
