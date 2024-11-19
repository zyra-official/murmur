import { Card, CardContent } from "@/components/ui/card";
import { Brain, Coffee, Sparkles, Music, Book, Moon } from "lucide-react";

const categories = [
  { name: "Focus", icon: Brain, color: "#2F5061" },
  { name: "Relaxation", icon: Coffee, color: "#88BDBC" },
  { name: "Inspiration", icon: Sparkles, color: "#FFD166" },
  { name: "Ambient", icon: Music, color: "#F1A8B2" },
  { name: "Learning", icon: Book, color: "#6D9DC5" },
  { name: "Sleep", icon: Moon, color: "#3C3C3C" },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 ">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Card
            key={category.name}
            className="group hover:scale-105 transition-all duration-200 border-gray-100  backdrop-blur-lg cursor-pointer shadow-md"
          >
            <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
              <div
                className="p-3 rounded-full"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <Icon className="w-6 h-6" style={{ color: category.color }} />
              </div>
              <span className="font-medium">{category.name}</span>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
