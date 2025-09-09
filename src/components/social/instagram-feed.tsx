import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const sampleStories = [
  { id: 1, username: "alexbuilds", avatar: "/placeholder.svg", hasStory: true },
  { id: 2, username: "cryptomaya", avatar: "/placeholder.svg", hasStory: true },
  { id: 3, username: "samweb3", avatar: "/placeholder.svg", hasStory: false },
  { id: 4, username: "emmadefi", avatar: "/placeholder.svg", hasStory: true },
  { id: 5, username: "defiking", avatar: "/placeholder.svg", hasStory: true },
];

const samplePosts = [
  {
    id: 1,
    user: {
      username: "alexbuilds",
      avatar: "/placeholder.svg",
      verified: true
    },
    image: "/placeholder.svg",
    likes: 1247,
    caption: "Just deployed my first smart contract! The future is here 🚀 #web3 #blockchain",
    timestamp: "2 hours ago",
    isLiked: false
  },
  {
    id: 2,
    user: {
      username: "cryptomaya",
      avatar: "/placeholder.svg",
      verified: false
    },
    image: "/placeholder.svg",
    likes: 892,
    caption: "Beautiful sunset from my DeFi meetup in Miami ✨ Amazing community!",
    timestamp: "5 hours ago",
    isLiked: true
  },
  {
    id: 3,
    user: {
      username: "emmadefi",
      avatar: "/placeholder.svg",
      verified: true
    },
    image: "/placeholder.svg",
    likes: 2156,
    caption: "New NFT drop coming soon! Can't wait to share this collection with you all 💎",
    timestamp: "1 day ago",
    isLiked: false
  }
];

export function InstagramFeed() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Stories */}
      <div className="flex space-x-3 px-4 overflow-x-auto pb-2">
        <div className="flex flex-col items-center space-y-1 flex-shrink-0">
          <div className="relative">
            <Avatar className="h-16 w-16 border-2 border-primary">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>+</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              +
            </div>
          </div>
          <span className="text-xs text-text-secondary">Your story</span>
        </div>
        
        {sampleStories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <Avatar 
              className={cn(
                "h-16 w-16 border-2",
                story.hasStory ? "border-primary" : "border-border"
              )}
            >
              <AvatarImage src={story.avatar} />
              <AvatarFallback>{story.username.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-text-secondary max-w-[60px] truncate">
              {story.username}
            </span>
          </div>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {samplePosts.map((post) => (
          <Card key={post.id} className="bg-surface border-border shadow-card">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4 pb-3">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback>{post.user.username.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-semibold text-text-primary">
                    {post.user.username}
                  </span>
                  {post.user.verified && (
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">✓</span>
                    </div>
                  )}
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            {/* Post Image */}
            <div className="relative">
              <img 
                src={post.image} 
                alt="Post content"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Post Actions */}
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <Heart 
                      className={cn(
                        "h-6 w-6",
                        post.isLiked ? "fill-red-500 text-red-500" : "text-text-primary"
                      )} 
                    />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <MessageCircle className="h-6 w-6 text-text-primary" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <Send className="h-6 w-6 text-text-primary" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  <Bookmark className="h-6 w-6 text-text-primary" />
                </Button>
              </div>

              {/* Likes */}
              <div className="mb-2">
                <span className="text-sm font-semibold text-text-primary">
                  {post.likes.toLocaleString()} likes
                </span>
              </div>

              {/* Caption */}
              <div className="mb-2">
                <span className="text-sm text-text-primary">
                  <span className="font-semibold">{post.user.username}</span>{" "}
                  {post.caption}
                </span>
              </div>

              {/* Timestamp */}
              <div className="text-xs text-text-secondary">
                {post.timestamp}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}