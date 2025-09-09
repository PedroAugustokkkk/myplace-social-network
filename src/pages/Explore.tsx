import { Grid, Play, Heart, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TopNavigation } from "@/components/layout/top-navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

const exploreContent = [
  {
    id: 1,
    image: "/placeholder.svg",
    type: "image",
    likes: 245,
    comments: 28,
    isVideo: false
  },
  {
    id: 2,
    image: "/placeholder.svg",
    type: "video",
    likes: 892,
    comments: 156,
    isVideo: true
  },
  {
    id: 3,
    image: "/placeholder.svg",
    type: "image",
    likes: 567,
    comments: 89,
    isVideo: false
  },
  {
    id: 4,
    image: "/placeholder.svg",
    type: "image",
    likes: 1234,
    comments: 234,
    isVideo: false
  },
  {
    id: 5,
    image: "/placeholder.svg",
    type: "video",
    likes: 445,
    comments: 67,
    isVideo: true
  },
  {
    id: 6,
    image: "/placeholder.svg",
    type: "image",
    likes: 778,
    comments: 123,
    isVideo: false
  },
];

const categories = [
  { name: "All", active: true },
  { name: "DeFi", active: false },
  { name: "NFTs", active: false },
  { name: "Gaming", active: false },
  { name: "Art", active: false },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-feed-background">
      <TopNavigation />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Explore</h1>
          
          {/* Categories */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={category.active ? "default" : "secondary"}
                className={`px-4 py-2 cursor-pointer whitespace-nowrap ${
                  category.active 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-surface-secondary text-text-secondary hover:bg-surface"
                }`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-1 mb-20">
          {exploreContent.map((item) => (
            <Card key={item.id} className="aspect-square relative overflow-hidden border-0 bg-surface group cursor-pointer">
              <img 
                src={item.image} 
                alt="Explore content"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              
              {/* Video indicator */}
              {item.isVideo && (
                <div className="absolute top-2 right-2">
                  <div className="bg-black/50 rounded-full p-1">
                    <Play className="h-3 w-3 text-white fill-white" />
                  </div>
                </div>
              )}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 fill-white" />
                    <span className="text-sm font-medium">{item.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4 fill-white" />
                    <span className="text-sm font-medium">{item.comments}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Explore;