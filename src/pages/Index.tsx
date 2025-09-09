import { TopNavigation } from "@/components/layout/top-navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { InstagramFeed } from "@/components/social/instagram-feed";

const Index = () => {
  return (
    <div className="min-h-screen bg-feed-background">
      <TopNavigation />
      
      <main className="py-6 pb-20">
        <InstagramFeed />
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Index;
