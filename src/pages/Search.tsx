import { Search as SearchIcon, TrendingUp, Users, Hash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TopNavigation } from "@/components/layout/top-navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

const trendingTopics = [
  { tag: "DeFi", posts: "12.5K posts" },
  { tag: "NFTs", posts: "8.7K posts" },
  { tag: "Web3", posts: "15.2K posts" },
  { tag: "Blockchain", posts: "9.8K posts" },
];

const suggestedUsers = [
  { name: "Alex Chen", username: "alexbuilds", avatar: "/placeholder.svg", followers: "12.5K" },
  { name: "Maya Rodriguez", username: "cryptomaya", avatar: "/placeholder.svg", followers: "8.7K" },
  { name: "Sam Wilson", username: "samweb3", avatar: "/placeholder.svg", followers: "15.2K" },
];

const Search = () => {
  return (
    <div className="min-h-screen bg-feed-background">
      <TopNavigation />
      
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Search Bar */}
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
          <Input 
            placeholder="Search users, posts, and topics..."
            className="pl-10 bg-surface border-border"
          />
        </div>

        {/* Trending Topics */}
        <Card className="bg-surface border-border shadow-card mb-6">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-lg font-semibold text-text-primary">Trending Topics</h2>
            </div>
            <div className="space-y-3">
              {trendingTopics.map((topic) => (
                <div key={topic.tag} className="flex items-center justify-between py-2 hover:bg-surface-secondary/50 rounded-lg px-2 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <Hash className="h-4 w-4 text-text-secondary" />
                    <div>
                      <div className="font-medium text-text-primary">#{topic.tag}</div>
                      <div className="text-sm text-text-secondary">{topic.posts}</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    Trending
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Suggested Users */}
        <Card className="bg-surface border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Users className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-lg font-semibold text-text-primary">Suggested Users</h2>
            </div>
            <div className="space-y-4">
              {suggestedUsers.map((user) => (
                <div key={user.username} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-text-primary">{user.name}</div>
                      <div className="text-sm text-text-secondary">@{user.username}</div>
                      <div className="text-xs text-text-secondary">{user.followers} followers</div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Search;