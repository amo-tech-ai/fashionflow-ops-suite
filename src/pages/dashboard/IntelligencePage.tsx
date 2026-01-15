import { Sparkles, Bot, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingFeatures = [
  { title: "Smart Scheduling", description: "AI-powered event and shoot scheduling that considers team availability, venue constraints, and optimal timing." },
  { title: "Automated Workflows", description: "Create intelligent automations for repetitive tasks like sending reminders, updating statuses, and notifying teams." },
  { title: "Predictive Analytics", description: "Get insights on event success likelihood, budget predictions, and resource optimization suggestions." },
  { title: "Natural Language Commands", description: "Use conversational prompts to create events, manage shoots, and query your data." },
  { title: "Smart Asset Tagging", description: "Automatic categorization and tagging of media assets using AI vision capabilities." },
  { title: "Copilot Assistance", description: "Context-aware suggestions as you work, helping you make better decisions faster." },
];

export default function IntelligencePage() {
  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          <Sparkles size={16} />
          Coming Soon
        </div>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
          AI Intelligence
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Supercharge your fashion operations with AI-powered automation, insights, and intelligent assistance.
        </p>
      </div>

      {/* Hero Visual */}
      <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-12 mb-12 text-primary-foreground overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
            <Bot size={48} className="text-accent" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-display text-2xl font-semibold mb-2">Meet Your Fashion Copilot</h2>
            <p className="text-primary-foreground/80 max-w-md">
              An intelligent assistant that understands fashion operations and helps you work smarter, not harder.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-12">
        <h2 className="font-display text-xl font-semibold mb-6">What's Coming</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {upcomingFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-5 bg-card rounded-xl border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Zap size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-8 bg-muted/50 rounded-xl">
        <h3 className="font-display text-xl font-semibold mb-2">Be the first to know</h3>
        <p className="text-muted-foreground mb-6">
          Join the waitlist to get early access to AI features.
        </p>
        <Button variant="accent" size="lg" disabled>
          <span>Join Waitlist</span>
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}
