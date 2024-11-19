"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock } from "lucide-react";

const recommendedTracks = [
  {
    title: "The Untold Truth About Money: How to Build Wealth From Nothing.",
    artist: "James Jani",
    duration: "20 min 15 sec",
    category: "money",
    image: "/untoldtruthaboutmoney.jpg",
  },
  {
    title: "How to Get Rich And Build Wealth.",
    artist: "Navel ",
    duration: "30 min 39 sec",
    category: "money",
    image: "/howtogetrich.jpg",
  },
  {
    title: "Turn Yourself Into Business: The One Person Business",
    artist: "Dan Koe",
    duration: "34 min 01 sec",
    category: "business",
    image: "/onepersonbusiness.jpg",
  },
  {
    title: "How to Teach Yourself Anything, Learn More in Less Time.",
    artist: "Peter Hollins",
    duration: "33 min 01 sec",
    category: "learning",
    image: "/thescienceofselflearning.jpg",
  },
];

export function RecommendedContent() {
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
