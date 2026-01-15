import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Calendar, 
  Camera, 
  FolderOpen, 
  Users, 
  Sparkles, 
  Building2,
  CheckCircle2,
  Play,
  Star
} from "lucide-react";
import heroRunway from "@/assets/hero-runway.jpg";
import fashionShoot from "@/assets/fashion-shoot.jpg";
import fashionEvent from "@/assets/fashion-event.jpg";
import fashionMedia from "@/assets/fashion-media.jpg";
import fashionBackstage from "@/assets/fashion-backstage.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const features = [
  {
    icon: Calendar,
    title: "Fashion Events & Shows",
    description: "Runways, pop-ups, launches",
  },
  {
    icon: Camera,
    title: "Photography & Video Shoots",
    description: "Editorials, campaigns, social content",
  },
  {
    icon: FolderOpen,
    title: "Media & Asset Library",
    description: "Organize photos and videos",
  },
  {
    icon: Building2,
    title: "Vendors & Sponsors",
    description: "Production, venues, partners",
  },
  {
    icon: Users,
    title: "CRM Relationships",
    description: "Designers, media, sponsors",
  },
  {
    icon: Sparkles,
    title: "AI Intelligence",
    description: "Smart planning and insights",
    badge: "Coming Soon",
  },
];

const steps = [
  { 
    step: "01", 
    title: "Plan", 
    description: "Define your event or shoot" 
  },
  { 
    step: "02", 
    title: "Organize", 
    description: "Assign venues, vendors, assets" 
  },
  { 
    step: "03", 
    title: "Execute", 
    description: "Track progress and deliverables" 
  },
  { 
    step: "04", 
    title: "Deliver", 
    description: "Assets, reports, and outcomes" 
  },
];

const audiences = [
  {
    title: "Fashion Brands & Designers",
    description: "From emerging labels to established houses, manage your creative operations with precision.",
  },
  {
    title: "Event Producers",
    description: "Coordinate runway shows, presentations, and launches with complete visibility.",
  },
  {
    title: "Creative Directors",
    description: "Oversee shoots, campaigns, and visual assets from concept to delivery.",
  },
  {
    title: "Production Teams",
    description: "Streamline vendor coordination, scheduling, and on-ground execution.",
  },
];

const stats = [
  { value: "500+", label: "Fashion Events Managed" },
  { value: "10K+", label: "Assets Organized" },
  { value: "50+", label: "Brands Trust Us" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
        
        <div className="container relative mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                  <Sparkles size={14} className="text-foreground" />
                  <span className="text-sm font-medium text-foreground">AI-Powered Operations Platform</span>
                </div>
                
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight mb-6">
                  One system to plan fashion shows, manage shoots, and run creative operations
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  FashionOS helps brands organize events, production, media, and partnerships — from idea to delivery.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Button variant="hero" size="lg" asChild className="group">
                  <Link to="/auth/signup">
                    Get started
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <Link to="/dashboard" className="gap-2">
                    <Play size={16} />
                    View platform
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-muted-foreground">{String.fromCharCode(64 + i)}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">50+ brands</span> already onboard
                </div>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-12 gap-4">
                {/* Main large image */}
                <div className="col-span-7 row-span-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <img
                    src={heroRunway}
                    alt="Fashion runway show"
                    className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
                
                {/* Stacked images */}
                <div className="col-span-5 space-y-4">
                  <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                    <img
                      src={fashionShoot}
                      alt="Fashion photoshoot"
                      className="w-full h-[240px] object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    <img
                      src={fashionBackstage}
                      alt="Backstage fashion"
                      className="w-full h-[240px] object-cover rounded-2xl shadow-lg grayscale"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 bg-background rounded-xl shadow-xl p-6 border border-border animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="text-foreground" size={24} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-semibold">98%</div>
                    <div className="text-sm text-muted-foreground">On-time delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-semibold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What FashionOS Manages */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6 leading-tight">
              Everything your fashion
              <br />
              <span className="text-gradient">operations need</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to delivery, manage every aspect of your fashion operations in a unified workspace.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-8 bg-background rounded-2xl border border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon size={26} className="text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                  {feature.badge && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-secondary text-muted-foreground font-medium">
                      {feature.badge}
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined workflow from planning to delivery.
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.step} className="relative text-center lg:text-left">
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-border mb-6">
                    <span className="font-display text-2xl font-bold text-foreground">{step.step}</span>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2">
                        <ArrowRight size={16} className="text-muted-foreground/40" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6">
              Your command center for
              <br />
              fashion operations
            </h2>
            <p className="text-lg text-primary-foreground/70">
              A unified dashboard for events, shoots, assets, and team coordination.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10 pointer-events-none" />
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
              <img
                src={dashboardPreview}
                alt="FashionOS Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
            
            {/* Feature callouts */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-foreground">
                <Calendar size={16} />
                <span className="text-sm font-medium">Event Management</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-foreground">
                <Camera size={16} />
                <span className="text-sm font-medium">Shoot Tracking</span>
              </div>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-foreground">
                <FolderOpen size={16} />
                <span className="text-sm font-medium">Asset Library</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Fashion Teams */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6 leading-tight">
                Built for
                <br />
                <span className="text-gradient">fashion teams</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you're a solo designer or a global brand, FashionOS adapts to how you work.
              </p>

              <div className="space-y-8">
                {audiences.map((audience, index) => (
                  <div 
                    key={audience.title} 
                    className="flex gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Star size={18} className="text-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1">{audience.title}</h3>
                      <p className="text-muted-foreground">{audience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={fashionEvent}
                  alt="Fashion event"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <img
                  src={fashionMedia}
                  alt="Media assets"
                  className="w-full h-64 object-cover rounded-2xl mt-8"
                />
              </div>
              
              {/* Floating testimonial */}
              <div className="absolute -bottom-8 left-4 right-4 lg:-left-8 lg:right-auto lg:max-w-sm bg-background rounded-xl shadow-xl p-6 border border-border">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "FashionOS transformed how we manage our seasonal shows. Everything is in one place."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted" />
                  <div>
                    <div className="text-sm font-semibold">Creative Director</div>
                    <div className="text-xs text-muted-foreground">Leading Fashion House</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
              Start organizing your fashion
              <br />
              operations in one place
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Join forward-thinking brands already using FashionOS to streamline their creative workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/auth/signup">
                  Get started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={16} />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={16} />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={16} />
                <span>Enterprise-ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
