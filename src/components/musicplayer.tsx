"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  ListMusic,
  Shuffle,
  Repeat,
  Maximize2,
} from "lucide-react";
import Hls from "hls.js";
import Image from "next/image";
import { useAudio } from "@/store/audio";
interface MusicPlayerProps {
  className?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ className }) => {
  const { audios, current, fetchAudios } = useAudio((state) => state);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [liked, setLiked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    fetchAudios();
  }, [fetchAudios]);
  useEffect(() => {
    if (Hls.isSupported() && audios[current]?.src) {
      const hls = new Hls();
      hls.loadSource(audios[current]?.src);
      if (!audioRef.current) return;
      hls.attachMedia(audioRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        audioRef.current?.focus();
      });
    }
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <div
      className={`h-24 w-full bg-gradient-to-r from-white to-gray-50 text-white ${className}`}
    >
      <audio className="hidden" ref={audioRef}>
        HLS not supported
      </audio>
      <div className="h-full flex items-center px-4">
        {/* Album Art & Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={audios[current]?.image}
              alt={""}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              width={100}
              height={100}
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-black font-semibold truncate">
              {audios[current]?.title}
            </h2>
            <p className="text-sm text-gray-500 truncate">
              {audios[current]?.artist}
            </p>
          </div>
        </div>

        {/* Main Controls */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Repeat className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md px-4">
            <div className="relative w-full h-1 bg-gray-700 rounded-full cursor-pointer">
              <div
                className="absolute h-full bg-blue-500 rounded-full"
                style={{ width: `\${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Volume & Additional Controls */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button
            onClick={() => setLiked(!liked)}
            className={`hover:scale-110 transition-transform ${
              liked ? "text-red-500" : "text-gray-400"
            }`}
          >
            <Heart className="w-5 h-5" fill={liked ? "currentColor" : "none"} />
          </button>
          <div className="hidden sm:flex items-center gap-2 w-32">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <div className="flex-1">
              <div className="relative w-full h-1 bg-gray-700 rounded-full cursor-pointer">
                <div
                  className="absolute h-full bg-gray-400 rounded-full"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowPlaylist(!showPlaylist)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ListMusic className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors ml-2">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>

        {/* Playlist Dropdown */}
        {showPlaylist && (
          <div className="absolute top-24 right-4 w-72 bg-gray-800 rounded-lg p-2 shadow-xl">
            <div className="space-y-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer"
                >
                  <Image
                    src={audios[current]?.cover}
                    alt=""
                    className="w-8 h-8 rounded object-cover"
                    width={100}
                    height={100}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {audios[current]?.title} {i}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {audios[current]?.artist}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {audios[current]?.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
