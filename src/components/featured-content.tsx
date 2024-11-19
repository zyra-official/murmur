"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const featuredItems = [
  {
    id: 1,
    imageSrc:
      "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/onepersonbusiness/onepersonbusiness.jpg",
    altText: "one person business",
    badgeText: "Featured",
    badgeColor: "bg-[#FFD166]",
    title: "Building Blocks",
    description: "Start your day with mindfulness",
  },
  {
    id: 2,
    imageSrc:
      "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/thescienceofselflearning/thescienceofselflearning.jpg",
    altText: "Focus",
    badgeText: "New",
    badgeColor: "bg-[#F1A8B2]",
    title: "Deep Focus",
    description: "Enhance your productivity",
  },
];

export default function FeaturedContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featuredItems.map((item) => (
        <Card
          key={item.id}
          className="bg-white/10 border-white/20 backdrop-blur-lg overflow-hidden"
        >
          <CardContent className="p-0 relative aspect-[16/9]">
            <Image
              src={item.imageSrc}
              alt={item.altText}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <Badge className={`w-fit mb-2 ${item.badgeColor} text-black`}>
                {item.badgeText}
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/90">{item.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
