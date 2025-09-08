import { Home, Compass, Plus, Wallet, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: Plus, label: "Create", path: "/create" },
  { icon: Wallet, label: "Wallet", path: "/wallet" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function BottomNavigation() {
  const currentPath = window.location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border">
      <div className="flex items-center justify-around h-16 px-2">
        {navigationItems.map(({ icon: Icon, label, path }) => {
          const isActive = currentPath === path;
          return (
            <button
              key={path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 text-xs transition-colors",
                isActive 
                  ? "text-primary" 
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "scale-110")} />
              <span className="font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}