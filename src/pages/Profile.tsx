import { ArrowLeft, Settings, Share, MoreHorizontal, MapPin, Calendar, Link as LinkIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TopNavigation } from "@/components/layout/top-navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { PostCard } from "@/components/social/post-card";

const userProfile = {
  name: "Alex Chen",
  username: "alexbuilds",
  avatar: "/placeholder.svg",
  banner: "/placeholder.svg",
  bio: "Building the future of social finance 🚀 | Web3 Developer | DeFi Enthusiast | Creator Economy Advocate",
  location: "San Francisco, CA",
  website: "alexchen.dev",
  joinDate: "March 2023",
  badges: ["Verified", "Top Creator", "Early Adopter"],
  stats: {
    followers: 12500,
    following: 890,
    posts: 342,
    tokensEarned: 15600
  }
};

const userPosts = [
  {
    user: {
      name: userProfile.name,
      username: userProfile.username,
      avatar: userProfile.avatar,
      badges: ["Verified", "Top Creator"]
    },
    content: {
      text: "Just deployed my first smart contract on Ethereum! The journey from idea to mainnet was incredible. Special thanks to the dev community for all the support. 🚀✨",
      timestamp: "2h",
    },
    engagement: {
      likes: 247,
      comments: 28,
      shares: 15,
      tips: 42
    },
    isLiked: true
  },
  {
    user: {
      name: userProfile.name,
      username: userProfile.username,
      avatar: userProfile.avatar,
      badges: ["Verified", "Top Creator"]
    },
    content: {
      text: "The intersection of social media and blockchain technology is creating unprecedented opportunities for creators. We're witnessing the birth of a new creator economy.",
      timestamp: "1d",
    },
    engagement: {
      likes: 189,
      comments: 34,
      shares: 23,
      tips: 67
    }
  }
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-feed-background">
      <TopNavigation />
      
      <main className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Profile Card */}
        <Card className="bg-gradient-card shadow-elevated border-0 mb-6">
          {/* Banner */}
          <div className="h-32 bg-gradient-primary rounded-t-xl relative">
            <div className="absolute -bottom-8 left-6">
              <Avatar className="h-16 w-16 border-4 border-white dark:border-card">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="text-xl">{userProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <CardContent className="pt-12 pb-6">
            {/* Profile Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h1 className="text-xl font-bold text-text-primary">{userProfile.name}</h1>
                    {userProfile.badges.map((badge) => (
                      <Badge 
                        key={badge} 
                        variant="secondary" 
                        className="text-xs bg-token-bg text-token-text border-0"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-text-secondary">@{userProfile.username}</p>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              {/* Bio */}
              <p className="text-text-primary leading-relaxed">{userProfile.bio}</p>

              {/* Details */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{userProfile.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <LinkIcon className="h-4 w-4" />
                  <span className="text-primary">{userProfile.website}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {userProfile.joinDate}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border/50">
                <div className="text-center">
                  <div className="text-lg font-bold text-text-primary">{userProfile.stats.posts}</div>
                  <div className="text-xs text-text-secondary">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-text-primary">{userProfile.stats.followers.toLocaleString()}</div>
                  <div className="text-xs text-text-secondary">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-text-primary">{userProfile.stats.following}</div>
                  <div className="text-xs text-text-secondary">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-token-text">{userProfile.stats.tokensEarned.toLocaleString()}</div>
                  <div className="text-xs text-text-secondary">Tokens</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts */}
        <div className="space-y-6 mb-20">
          <h2 className="text-lg font-semibold text-text-primary">Recent Posts</h2>
          {userPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Profile;