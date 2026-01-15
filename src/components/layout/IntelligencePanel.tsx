import { Sparkles, Bot, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function IntelligencePanel() {
  return (
    <aside className="h-full bg-card border-l border-border flex flex-col">
      {/* Header */}
      <div className="h-16 px-4 flex items-center gap-2 border-b border-border">
        <Sparkles size={18} className="text-accent" />
        <span className="font-medium">Intelligence</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent ml-auto">
          Coming Soon
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        {/* AI Assistant Placeholder */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4">
            <Bot size={32} className="text-accent" />
          </div>
          <h3 className="font-display text-lg font-semibold mb-2">
            AI Copilot
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Your intelligent assistant for fashion operations. Get suggestions, automate tasks, and streamline workflows.
          </p>

          {/* Feature Preview */}
          <div className="w-full space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 text-left">
              <Zap size={16} className="text-accent shrink-0" />
              <span className="text-sm">Smart event scheduling</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 text-left">
              <Zap size={16} className="text-accent shrink-0" />
              <span className="text-sm">Shoot coordination</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 text-left">
              <Zap size={16} className="text-accent shrink-0" />
              <span className="text-sm">Asset organization</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 text-left">
              <Zap size={16} className="text-accent shrink-0" />
              <span className="text-sm">Vendor recommendations</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-border">
          <Button variant="accent" className="w-full" disabled>
            <span>Join Waitlist</span>
            <ArrowRight size={16} />
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Be first to access AI features
          </p>
        </div>
      </div>
    </aside>
  );
}
