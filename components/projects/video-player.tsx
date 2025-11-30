"use client";

import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function handleProgress() {
    const video = videoRef.current;
    if (!video) return;
    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);
  }

  function scrub(e: React.MouseEvent<HTMLDivElement>) {
    const video = videoRef.current;
    if (!video) return;
    const scrubTime =
      (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const video = videoRef.current;
    if (!video) return;
    const newVolume = Number(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
  }

  function handlePlaybackRateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const video = videoRef.current;
    if (!video) return;
    const newRate = Number(e.target.value);
    video.playbackRate = newRate;
    setPlaybackRate(newRate);
  }

  function skip(seconds: number) {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime += seconds;
  }

  return (
    <div className="min-h-[60vh] p-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative mb-4">
          <video
            ref={videoRef}
            className="w-full"
            onTimeUpdate={handleProgress}
            onEnded={() => setPlaying(false)}
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <button
            onClick={togglePlay}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            {playing ? "⏸" : "▶"}
          </button>
          <button onClick={() => skip(-10)} className="px-2">
            ⏪ 10s
          </button>
          <button onClick={() => skip(25)} className="px-2">
            25s ⏩
          </button>
          <div
            className="flex-1 cursor-pointer rounded bg-gray-200 dark:bg-gray-700"
            onClick={scrub}
          >
            <div
              className="h-2 rounded bg-blue-600"
              style={{ width: `${progress}%` }}
            />
          </div>
          <label className="flex items-center gap-2">
            <span>🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
            <span>{Math.round(volume * 100)}%</span>
          </label>
          <label className="flex items-center gap-2">
            <span>⚡</span>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={playbackRate}
              onChange={handlePlaybackRateChange}
              className="w-24"
            />
            <span>{playbackRate}x</span>
          </label>
        </div>
      </div>
    </div>
  );
}
