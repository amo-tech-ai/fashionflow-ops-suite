import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Camera,
  FolderOpen,
  Users,
  Sparkles,
  Settings,
  Building2,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DashboardSidebarProps {
  onClose?: () => void;
}

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Events", href: "/dashboard/events", icon: Calendar },
  { label: "Shoots", href: "/dashboard/shoots", icon: Camera },
  { label: "Media", href: "/dashboard/media", icon: FolderOpen },
  { label: "CRM", href: "/dashboard/crm", icon: Users },
  { label: "Intelligence", href: "/dashboard/intelligence", icon: Sparkles, badge: "Soon" },
];

const brands = [
  { id: "1", name: "Main Brand", initial: "M" },
  { id: "2", name: "Sub Brand", initial: "S" },
];

export function DashboardSidebar({ onClose }: DashboardSidebarProps) {
  const location = useLocation();
  const [brandSelectorOpen, setBrandSelectorOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <aside className="h-full bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div className="h-16 px-4 flex items-center border-b border-sidebar-border">
        <Link to="/dashboard" className="flex items-center gap-2" onClick={onClose}>
          <span className="font-display text-xl font-semibold text-sidebar-foreground">
            FashionOS
          </span>
        </Link>
      </div>

      {/* Brand Selector */}
      <div className="p-3 border-b border-sidebar-border">
        <button
          onClick={() => setBrandSelectorOpen(!brandSelectorOpen)}
          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-medium text-sm">
            {selectedBrand.initial}
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium">{selectedBrand.name}</p>
          </div>
          <ChevronDown
            size={16}
            className={cn(
              "text-sidebar-foreground/50 transition-transform",
              brandSelectorOpen && "rotate-180"
            )}
          />
        </button>

        {brandSelectorOpen && (
          <div className="mt-2 space-y-1">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => {
                  setSelectedBrand(brand);
                  setBrandSelectorOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 p-2 rounded-lg transition-colors",
                  brand.id === selectedBrand.id
                    ? "bg-sidebar-accent"
                    : "hover:bg-sidebar-accent/50"
                )}
              >
                <div className="w-6 h-6 rounded bg-sidebar-foreground/10 flex items-center justify-center text-xs font-medium">
                  {brand.initial}
                </div>
                <span className="text-sm">{brand.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              isActive(item.href)
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            )}
          >
            <item.icon size={18} />
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-sidebar-primary/20 text-sidebar-primary">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-sidebar-border">
        <Link
          to="/dashboard/settings"
          onClick={onClose}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
            isActive("/dashboard/settings")
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
          )}
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
