"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PlayCircle, Clock, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { useLayoutEffect, useRef } from "react";

const featuredPlaylists = [
  {
    title: "Wealth Awakening",
    description: "Start your day with wealth-building insights",
    duration: "30 min",
    image: "/wealthplaylist.jpg",
    category: "money",
  },
  {
    title: "Deep Focus Zone",
    description: "Ambient sounds for maximum productivity",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000",
    category: "Focus",
  },
  {
    title: "Evening Wind Down",
    description: "Gentle transitions for peaceful nights",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1495197359483-d092478c170a?q=80&w=1000",
    category: "Relaxation",
  },
  {
    title: "Creative Flow",
    description: "Inspire your creative process",
    duration: "50 min",
    image:
      "https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?q=80&w=1000",
    category: "Focus",
  },
];

export function FeaturedPlaylists() {
  const featuredPlaylistRef = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const section = featuredPlaylistRef.current;
    if (!section) return;
    console.log(section.clientWidth);
  });
  return (
    <section ref={featuredPlaylistRef} className="space-y-6 my-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">
          Featured Playlists
        </h2>
        <Button variant="link" className="text-muted-foreground">
          View all
        </Button>
      </div>
      {/* <ScrollArea className="-mx-4 px-4"> */}
      <ScrollArea className="grid grid-cols-1 ">
        <div className="flex space-x-4 pb-4  overflow-auto">
          {featuredPlaylists.map((playlist) => (
            <Card key={playlist.title} className=" w-[320px]">
              <CardHeader className="relative p-0">
                <div
                  className="aspect-[4/3] rounded-t-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${playlist.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <CardTitle className="text-white mb-1">
                      {playlist.title}
                    </CardTitle>
                    <CardDescription className="text-white/90">
                      {playlist.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:text-primary"
                    >
                      <PlayCircle className="h-5 w-5" />
                      <span className="sr-only">Play</span>
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:text-primary"
                    >
                      <Bookmark className="h-5 w-5" />
                      <span className="sr-only">Save</span>
                    </Button>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    {playlist.duration}
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
