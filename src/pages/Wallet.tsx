import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopNavigation } from "@/components/layout/top-navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { WalletDashboard } from "@/components/wallet/wallet-dashboard";

const Wallet = () => {
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
          <h1 className="text-xl font-bold text-text-primary">Wallet & Rewards</h1>
          <div></div>
        </div>

        <div className="pb-20">
          <WalletDashboard />
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Wallet;