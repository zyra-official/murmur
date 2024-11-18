"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock } from "lucide-react";

const recommendedTracks = [
  {
    title: "Focused Flow",
    artist: "Ambient Minds",
    duration: "15 min",
    category: "Focus",
    image:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1000",
  },
  {
    title: "Ocean Waves",
    artist: "Nature Sounds",
    duration: "20 min",
    category: "Relaxation",
    image:
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1000",
  },
  {
    title: "Productivity Boost",
    artist: "Brain Waves",
    duration: "25 min",
    category: "Focus",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000",
  },
  {
    title: "Mindful Moments",
    artist: "Zen Masters",
    duration: "10 min",
    category: "Relaxation",
    image:
      "https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=1000",
  },
];

export function RecommendedTracks() {
  return (
    <section className="my-6 ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recommended for You
        </h2>
        <Button variant="link" className="text-muted-foreground">
          View all
        </Button>
      </div>
      <ScrollArea className="grid grid-cols-1 ">
        <div className="flex space-x-4 pb-4 overflow-auto ">
          {recommendedTracks.map((track) => (
            <Card key={track.title} className="w-[350px] shrink-0">
              <CardHeader className="relative p-0">
                <div
                  className="aspect-square rounded-t-lg bg-cover bg-center h-[150px] "
                  style={{ backgroundImage: `url(${track.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-4 right-4 h-10 w-10 rounded-full"
                  >
                    <PlayCircle className="h-6 w-6" />
                    <span className="sr-only">Play</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-base mb-1">{track.title}</CardTitle>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{track.artist}</span>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {track.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
