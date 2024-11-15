"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Repeat,
  Shuffle,
  Heart,
  Maximize2,
} from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [progress, setProgress] = useState([0]);

  return (
    <div className=" h-24 w-full bg-background/60 backdrop-blur-xl border-t border-border">
      {/* <div className="fixed  right-0 h-24 bg-background/60 backdrop-blur-xl border-t border-border"> */}
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 w-1/4">
          <div
            className="h-14 w-14 rounded-md bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1000)",
            }}
          />
          <div>
            <h4 className="text-sm font-medium">Focused Flow</h4>
            <p className="text-xs text-muted-foreground">Ambient Minds</p>
          </div>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-col items-center space-y-2 flex-1 px-4 max-w-2xl">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="h-8 w-8 bg-primary hover:bg-primary/90"
              onClick={() => setIsPlaying(!isPlaying)}
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
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="w-full flex items-center space-x-2 text-xs text-muted-foreground">
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

        <div className="flex items-center space-x-4 w-1/4 justify-end">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-4 w-4" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-24"
            />
          </div>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
