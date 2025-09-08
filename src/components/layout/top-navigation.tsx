import { Search, Bell, Wallet, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function TopNavigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-surface/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-text-primary">SocialFi</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
            <Input
              type="search"
              placeholder="Search users, posts, tokens..."
              className="pl-10 bg-surface-secondary border-0 focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-2">
          {/* Wallet Balance */}
          <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2">
            <Wallet className="h-4 w-4" />
            <span className="text-sm font-medium">1,234.5 SOCIAL</span>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              3
            </Badge>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}