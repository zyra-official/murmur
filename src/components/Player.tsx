"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Hls from "hls.js";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Heart,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAudio } from "@/store/audio";
import Image from "next/image";
export function MusicPlayer({ className }: { className?: string }) {
  const { current, audios, fetchAudios } = useAudio((state) => state);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([0]);
  const audioRef = useRef<HTMLMediaElement | null>(null);
  const handlePlayPause = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current;
      if (audioElement) {
        if (audioElement.paused) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
      }
    }
  };
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
  }, [current, audios]);
  return (
    <div
      className={cn(
        " h-24 w-full bg-background/60 backdrop-blur-xl border-t border-border",
        className,
      )}
    >
      <audio className="hidden" ref={audioRef}>
        hls not supported
      </audio>
      {/* <div className="fixed  right-0 h-24 bg-background/60 backdrop-blur-xl border-t border-border"> */}
      <div className=" h-full mx-auto px-2 sm:px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 w-1/2 md:w-1/3">
          <Image
            className="h-7 w-7 sm:h-14 sm:w-14 rounded-md bg-cover bg-center"
            src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1000"
            alt="music"
            width={56}
            height={56}
          />
          <div>
            <h4 className="text-sm font-medium ">{audios[current]?.title}</h4>
            <p className="text-xs text-muted-foreground">
              {audios[current]?.artist}{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end sm:items-center space-y-2 flex-1  sm:px-2 md:px-4 max-w-2xl">
          <div className="flex  items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:block hover:text-primary"
            >
              {/* <Shuffle className="h-4 w-4" /> */}
              <Repeat className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="sm:block hidden hover:text-primary"
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="h-8 w-8 bg-primary hover:bg-primary/90"
              onClick={() => {
                setIsPlaying(!isPlaying);
                handlePlayPause();
              }}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:block hover:text-primary"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <div className=" hidden w-full sm:flex items-center space-x-2 text-xs text-muted-foreground">
            <span>1:23</span>
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="flex-1"
            />
            <span>3:45</span>
          </div>
        </div>
        <div className="hidden sm:flex justify-end">
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
