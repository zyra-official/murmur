"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function FeaturedContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-white/10 border-white/20 backdrop-blur-lg overflow-hidden">
        <CardContent className="p-0 relative aspect-[16/9]">
          <Image
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800&q=80"
            alt="Meditation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <Badge className="w-fit mb-2 bg-[#FFD166] text-black">
              Featured
            </Badge>
            <h3 className="text-2xl font-bold text-white mb-2">
              Daily Meditation
            </h3>
            <p className="text-white/90">Start your day with mindfulness</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/10 border-white/20 backdrop-blur-lg overflow-hidden">
        <CardContent className="p-0 relative aspect-[16/9]">
          <Image
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
            alt="Focus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <Badge className="w-fit mb-2 bg-[#F1A8B2] text-black">New</Badge>
            <h3 className="text-2xl font-bold text-white mb-2">Deep Focus</h3>
            <p className="text-white/90">Enhance your productivity</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
