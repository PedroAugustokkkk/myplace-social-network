import { Home, Search, Compass, Plus, MessageSquare, Wallet, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: Plus, label: "Create", path: "/create" },
  { icon: MessageSquare, label: "Discussion", path: "/discussion" },
  { icon: Wallet, label: "Wallet", path: "/wallet" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function BottomNavigation() {
  const currentPath = window.location.pathname;
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border">
      <div className="flex items-center justify-around h-16 px-1 overflow-x-auto">
        {navigationItems.map(({ icon: Icon, label, path }) => {
          const isActive = currentPath === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={cn(
                "flex flex-col items-center justify-center min-w-[60px] h-full space-y-1 text-xs transition-colors",
                isActive 
                  ? "text-primary" 
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              <Icon className={cn("h-4 w-4", isActive && "scale-110")} />
              <span className="font-medium text-[10px]">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}