import { TrendingUp, ArrowUpRight, ArrowDownLeft, Layers, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function WalletDashboard() {
  const tokenBalance = 1234.56;
  const usdValue = 2468.90;
  const weeklyEarnings = 156.78;

  return (
    <div className="space-y-6">
      {/* Balance Card */}
      <Card className="bg-gradient-primary text-white border-0 shadow-elevated">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">Total Balance</CardTitle>
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-3xl font-bold">{tokenBalance.toLocaleString()} SOCIAL</div>
            <div className="text-lg opacity-90">${usdValue.toLocaleString()} USD</div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        <Button className="h-16 flex-col space-y-1 bg-surface-secondary hover:bg-surface border-0">
          <ArrowUpRight className="h-5 w-5" />
          <span className="text-xs">Send</span>
        </Button>
        <Button className="h-16 flex-col space-y-1 bg-surface-secondary hover:bg-surface border-0">
          <ArrowDownLeft className="h-5 w-5" />
          <span className="text-xs">Receive</span>
        </Button>
        <Button className="h-16 flex-col space-y-1 bg-surface-secondary hover:bg-surface border-0">
          <Layers className="h-5 w-5" />
          <span className="text-xs">Stake</span>
        </Button>
      </div>

      {/* Earnings This Week */}
      <Card className="bg-gradient-card shadow-card border-0">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-text-primary">Weekly Earnings</CardTitle>
            <TrendingUp className="h-5 w-5 text-success" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="text-2xl font-bold text-text-primary">
              +{weeklyEarnings.toLocaleString()} SOCIAL
            </div>
            <div className="text-text-secondary">From tips, rewards, and staking</div>
            
            {/* Breakdown */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Tips received</span>
                <span className="text-text-primary font-medium">89.23 SOCIAL</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Content rewards</span>
                <span className="text-text-primary font-medium">45.67 SOCIAL</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Staking rewards</span>
                <span className="text-text-primary font-medium">21.88 SOCIAL</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-gradient-card shadow-card border-0">
        <CardHeader>
          <CardTitle className="text-lg text-text-primary">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: "tip", amount: "+12.5", from: "@alexbuilds", time: "2h ago" },
              { type: "reward", amount: "+25.0", from: "Post engagement", time: "5h ago" },
              { type: "tip", amount: "+8.3", from: "@cryptomaya", time: "1d ago" },
              { type: "stake", amount: "+15.7", from: "Staking rewards", time: "2d ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                    <Gift className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      {activity.type === "tip" ? "Tip received" : 
                       activity.type === "reward" ? "Content reward" : "Staking reward"}
                    </div>
                    <div className="text-xs text-text-secondary">{activity.from}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-success">
                    {activity.amount} SOCIAL
                  </div>
                  <div className="text-xs text-text-secondary">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}