import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";
import { IntelligencePanel } from "./IntelligencePanel";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [intelligenceOpen, setIntelligenceOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-background border-b border-border flex items-center justify-between px-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-muted rounded-lg"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <span className="font-display font-semibold">FashionOS</span>
        <button
          onClick={() => setIntelligenceOpen(!intelligenceOpen)}
          className="p-2 hover:bg-muted rounded-lg"
        >
          <Sparkles size={20} />
        </button>
      </div>

      {/* Left Panel - Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-200 ease-in-out
          lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          pt-14 lg:pt-0
        `}
      >
        <DashboardSidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Center Panel - Main Content */}
      <div className="flex-1 min-w-0 overflow-auto pt-14 lg:pt-0">
        <Outlet />
      </div>

      {/* Right Panel - Intelligence */}
      <div
        className={`
          fixed lg:static inset-y-0 right-0 z-40 w-80 transform transition-transform duration-200 ease-in-out
          lg:translate-x-0 ${intelligenceOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
          pt-14 lg:pt-0 hidden lg:block
        `}
      >
        <IntelligencePanel />
      </div>

      {/* Mobile Intelligence Panel */}
      {intelligenceOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setIntelligenceOpen(false)}
          />
          <div className="lg:hidden fixed inset-y-0 right-0 z-40 w-80 pt-14">
            <IntelligencePanel />
          </div>
        </>
      )}
    </div>
  );
}
