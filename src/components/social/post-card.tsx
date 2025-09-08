import { Heart, MessageCircle, Share, Zap, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface PostCardProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    badges?: string[];
  };
  content: {
    text: string;
    image?: string;
    timestamp: string;
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
    tips: number;
  };
  isLiked?: boolean;
}

export function PostCard({ user, content, engagement, isLiked = false }: PostCardProps) {
  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-text-primary">{user.name}</h4>
                {user.badges?.map((badge) => (
                  <Badge 
                    key={badge} 
                    variant="secondary" 
                    className="text-xs bg-token-bg text-token-text border-0"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-text-secondary">@{user.username} · {content.timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="text-text-primary leading-relaxed mb-3">{content.text}</p>
        {content.image && (
          <div className="rounded-xl overflow-hidden">
            <img 
              src={content.image} 
              alt="Post image" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-3 border-t border-border/50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`space-x-2 h-8 px-2 ${isLiked ? 'text-red-500' : 'text-text-secondary'}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{engagement.likes}</span>
            </Button>

            <Button variant="ghost" size="sm" className="space-x-2 h-8 px-2 text-text-secondary">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{engagement.comments}</span>
            </Button>

            <Button variant="ghost" size="sm" className="space-x-2 h-8 px-2 text-text-secondary">
              <Share className="h-4 w-4" />
              <span className="text-sm">{engagement.shares}</span>
            </Button>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            className="space-x-2 h-8 px-3 bg-token-bg text-token-text border-primary/20 hover:bg-primary hover:text-primary-foreground"
          >
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">{engagement.tips}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}