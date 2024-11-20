import Image from "next/image";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface AudioContent {
  title: string;
  artist: string;
  duration: string;
  src: string;
  image: string;
  category: string;
}

export default function Discover() {
  const audioContent: AudioContent[] = [
    {
      title: "The Untold Truth About Money: How to Build Wealth From Nothing.",
      artist: "James Jani",
      duration: "20 min 15 sec",
      category: "money",
      src: "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/UntoldTruthAboutMoney/output.m3u8",
      image:
        "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/UntoldTruthAboutMoney/untoldtruthaboutmoney.jpg",
    },
    {
      title: "How to Get Rich And Build Wealth.",
      artist: "Navel ",
      duration: "30 min 39 sec",
      category: "money",
      src: "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/navelhowtogetrich/output.m3u8",
      image:
        "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/navelhowtogetrich/howtogetrich.jpg",
    },
    {
      title: "Turn Yourself Into Business: The One Person Business",
      artist: "Dan Koe",
      duration: "34 min 01 sec",
      category: "business",
      src: "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/onepersonbusiness/output.m3u8",
      image:
        "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/onepersonbusiness/onepersonbusiness.jpg",
    },
    {
      title: "How to Teach Yourself Anything, Learn More in Less Time.",
      artist: "Peter Hollins",
      duration: "33 min 01 sec",
      category: "learning",
      src: "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/thescienceofselflearning/output.m3u8",
      image:
        "https://s3.ap-south-1.amazonaws.com/murmur.m3u8/thescienceofselflearning/thescienceofselflearning.jpg",
    },
  ];

  return (
    <div className="container px-4 my-6 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
        Discover
      </h2>
      <div className="space-y-4 ">
        {audioContent.map((content, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col xsm:flex-row items-center space-x-4">
                <div className="relative w-full   xsm:w-24 min-h-24 flex-shrink-0">
                  <Image
                    src={content.image}
                    alt={content.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-l-lg h-full object-cover"
                  />
                </div>
                <div className="flex-grow py-4 pr-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="md:font-semibold md:text-lg">
                      {content.title}
                    </h3>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-full p-2"
                    >
                      <Play className="h-4 w-4" />
                      <span className="sr-only">Play {content.title}</span>
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {content?.description}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {content.category}
                    </span>
                    <span>{content.duration}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
