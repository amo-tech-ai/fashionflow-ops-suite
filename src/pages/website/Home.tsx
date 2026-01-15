import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Camera, FolderOpen, Users, Sparkles, Building2 } from "lucide-react";
import heroRunway from "@/assets/hero-runway.jpg";
import fashionShoot from "@/assets/fashion-shoot.jpg";
import fashionEvent from "@/assets/fashion-event.jpg";
import fashionMedia from "@/assets/fashion-media.jpg";

const features = [
  {
    icon: Calendar,
    title: "Events & Fashion Shows",
    description: "Plan runway shows, presentations, and launch events with comprehensive timelines and vendor coordination.",
  },
  {
    icon: Camera,
    title: "Photography & Video Shoots",
    description: "Organize lookbooks, campaigns, and editorial shoots. Manage shot lists, crew, and locations.",
  },
  {
    icon: FolderOpen,
    title: "Media & Asset Management",
    description: "Centralize all visual assets with smart tagging, versioning, and instant access across teams.",
  },
  {
    icon: Building2,
    title: "Vendors & Sponsors",
    description: "Track relationships with venues, production teams, and sponsors. Manage contracts and deliverables.",
  },
  {
    icon: Users,
    title: "CRM Relationships",
    description: "Maintain connections with models, stylists, press, buyers, and industry contacts.",
  },
  {
    icon: Sparkles,
    title: "AI Intelligence",
    description: "Coming soon: Smart suggestions, automated workflows, and intelligent operations assistance.",
    badge: "Coming Soon",
  },
];

const steps = [
  { step: "01", title: "Plan", description: "Define your event or shoot scope, timeline, and requirements." },
  { step: "02", title: "Organize", description: "Coordinate teams, vendors, and assets in one unified workspace." },
  { step: "03", title: "Execute", description: "Manage day-of operations with real-time coordination tools." },
  { step: "04", title: "Deliver", description: "Collect, organize, and distribute final assets seamlessly." },
];

const audiences = [
  "Fashion Brands",
  "Designers",
  "Event Organizers",
  "Creative Teams",
  "Production Houses",
  "Stylists & Agencies",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
                The Operating
                <br />
                System for{" "}
                <span className="text-gradient">
                  Fashion
                  <br />
                  Intelligence
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mb-8">
                Plan fashion shows, manage shoots, coordinate teams, and organize assets — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/auth/signup">
                    Get started
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Book a demo</Link>
                </Button>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="relative animate-fade-in hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src={fashionShoot}
                    alt="Fashion photoshoot"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src={fashionEvent}
                    alt="Fashion event"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src={heroRunway}
                    alt="Fashion runway"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <img
                    src={fashionMedia}
                    alt="Fashion media assets"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
              One Platform.
              <br />
              Every Fashion Workflow.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to delivery, manage every aspect of your fashion operations in a unified workspace.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 lg:p-8 bg-background rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon size={24} className="text-accent" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold">{feature.title}</h3>
                  {feature.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined workflow from planning to delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-display font-bold text-muted/50 mb-4">
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2">
                    <ArrowRight size={20} className="text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
              Built for Fashion Professionals
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Whether you're a solo designer or a global brand, FashionOS scales with your needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="px-6 py-3 rounded-full border border-primary-foreground/20 text-sm font-medium hover:bg-primary-foreground/5 transition-colors"
              >
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-4">
            Ready to transform your
            <br />
            fashion operations?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join forward-thinking brands already using FashionOS to streamline their workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/auth/signup">
                Get started free
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
