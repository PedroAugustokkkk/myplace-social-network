import { ArrowLeft, Wallet as WalletIcon, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TopNavigation } from "@/components/layout/top-navigation";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { WalletDashboard } from "@/components/wallet/wallet-dashboard";

const walletProviders = [
  {
    name: "MetaMask",
    icon: "🦊",
    description: "Most popular Web3 wallet",
    status: "disconnected"
  },
  {
    name: "WalletConnect",
    icon: "🔗",
    description: "Connect any mobile wallet",
    status: "disconnected"
  },
  {
    name: "Coinbase Wallet",
    icon: "💼",
    description: "Secure and user-friendly",
    status: "disconnected"
  }
];

const Wallet = () => {
  const isConnected = false; // This would come from wallet connection state

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

        {!isConnected ? (
          /* Wallet Connection */
          <div className="space-y-6 pb-20">
            <Card className="bg-gradient-primary text-white border-0 shadow-elevated">
              <CardHeader className="text-center">
                <WalletIcon className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
                <p className="text-white/80">
                  Connect a wallet to start earning and managing your tokens
                </p>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {walletProviders.map((provider) => (
                <Card key={provider.name} className="bg-surface border-border shadow-card hover:shadow-elevated transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{provider.icon}</div>
                        <div>
                          <div className="font-semibold text-text-primary">{provider.name}</div>
                          <div className="text-sm text-text-secondary">{provider.description}</div>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-surface border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Why connect a wallet?</h3>
                    <ul className="text-sm text-text-secondary space-y-2">
                      <li className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Receive tips and rewards from your content</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Stake tokens to earn passive income</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Send and receive payments securely</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="pb-20">
            <WalletDashboard />
          </div>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Wallet;