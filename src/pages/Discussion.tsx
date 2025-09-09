import { TopNavigation } from "@/components/layout/top-navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { Feed } from "@/components/social/feed";

const Discussion = () => {
  return (
    <div className="min-h-screen bg-feed-background">
      <TopNavigation />
      
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text-primary mb-2">Discussions</h1>
          <p className="text-text-secondary">Join the conversation in the SocialFi community</p>
        </div>
        
        <Feed />
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Discussion;