import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Calendar, Camera, Clock, TrendingUp } from "lucide-react";
import heroRunway from "@/assets/hero-runway.jpg";
import fashionShoot from "@/assets/fashion-shoot.jpg";
import fashionEvent from "@/assets/fashion-event.jpg";
import fashionMedia from "@/assets/fashion-media.jpg";

// Mock data for dashboard
const activeEvents = [
  { id: "1", name: "Spring Collection Launch", date: "Mar 15, 2026", status: "In Progress", venue: "Paris Showroom" },
  { id: "2", name: "Fashion Week Presentation", date: "Apr 02, 2026", status: "Planning", venue: "Milan Convention" },
];

const activeShoots = [
  { id: "1", name: "Resort Lookbook", date: "Jan 20, 2026", status: "Confirmed", location: "Maldives" },
  { id: "2", name: "Campaign Video", date: "Feb 05, 2026", status: "Planning", location: "NYC Studio" },
];

const recentActivity = [
  { id: "1", type: "event", action: "Updated", title: "Spring Collection Launch", time: "2 hours ago" },
  { id: "2", type: "shoot", action: "Created", title: "Resort Lookbook", time: "5 hours ago" },
  { id: "3", type: "asset", action: "Uploaded", title: "12 new images", time: "Yesterday" },
  { id: "4", type: "contact", action: "Added", title: "Maria Santos (Model)", time: "Yesterday" },
];

const quickStats = [
  { label: "Active Events", value: "4", icon: Calendar, trend: "+2 this month" },
  { label: "Upcoming Shoots", value: "7", icon: Camera, trend: "3 this week" },
  { label: "Team Members", value: "23", icon: TrendingUp, trend: "5 pending invites" },
];

export default function Dashboard() {
  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back. Here's what's happening.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link to="/dashboard/events/new">
              <Plus size={16} />
              Create Event
            </Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/dashboard/shoots/new">
              <Plus size={16} />
              Create Shoot
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="p-5 bg-card rounded-xl border border-border"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <stat.icon size={20} className="text-accent" />
              </div>
              <span className="text-2xl font-display font-semibold">{stat.value}</span>
            </div>
            <p className="text-sm font-medium">{stat.label}</p>
            <p className="text-xs text-muted-foreground">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Active Events */}
        <div className="bg-card rounded-xl border border-border">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h2 className="font-display font-semibold">Active Events</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/events">View all</Link>
            </Button>
          </div>
          <div className="divide-y divide-border">
            {activeEvents.map((event) => (
              <Link
                key={event.id}
                to={`/dashboard/events/${event.id}`}
                className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
              >
                <img
                  src={fashionEvent}
                  alt={event.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.venue}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      event.status === "In Progress" 
                        ? "bg-accent/10 text-accent" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
                <ArrowRight size={16} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>

        {/* Active Shoots */}
        <div className="bg-card rounded-xl border border-border">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h2 className="font-display font-semibold">Upcoming Shoots</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/shoots">View all</Link>
            </Button>
          </div>
          <div className="divide-y divide-border">
            {activeShoots.map((shoot) => (
              <Link
                key={shoot.id}
                to={`/dashboard/shoots/${shoot.id}`}
                className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
              >
                <img
                  src={fashionShoot}
                  alt={shoot.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{shoot.name}</h3>
                  <p className="text-sm text-muted-foreground">{shoot.location}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{shoot.date}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      shoot.status === "Confirmed" 
                        ? "bg-accent/10 text-accent" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {shoot.status}
                    </span>
                  </div>
                </div>
                <ArrowRight size={16} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card rounded-xl border border-border lg:col-span-2">
          <div className="p-5 border-b border-border">
            <h2 className="font-display font-semibold">Recent Activity</h2>
          </div>
          <div className="divide-y divide-border">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  {activity.type === "event" && <Calendar size={16} />}
                  {activity.type === "shoot" && <Camera size={16} />}
                  {activity.type === "asset" && <Clock size={16} />}
                  {activity.type === "contact" && <TrendingUp size={16} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.action}</span>{" "}
                    <span className="text-muted-foreground">{activity.title}</span>
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/dashboard/events"
            className="group p-5 bg-card rounded-xl border border-border hover:border-accent/50 transition-all"
          >
            <Calendar size={24} className="text-accent mb-3" />
            <h3 className="font-medium mb-1">Events</h3>
            <p className="text-xs text-muted-foreground">Manage fashion shows & launches</p>
          </Link>
          <Link
            to="/dashboard/shoots"
            className="group p-5 bg-card rounded-xl border border-border hover:border-accent/50 transition-all"
          >
            <Camera size={24} className="text-accent mb-3" />
            <h3 className="font-medium mb-1">Shoots</h3>
            <p className="text-xs text-muted-foreground">Organize photo & video production</p>
          </Link>
          <Link
            to="/dashboard/media"
            className="group p-5 bg-card rounded-xl border border-border hover:border-accent/50 transition-all"
          >
            <img src={fashionMedia} alt="" className="w-6 h-6 rounded object-cover mb-3" />
            <h3 className="font-medium mb-1">Media</h3>
            <p className="text-xs text-muted-foreground">Access all your visual assets</p>
          </Link>
          <Link
            to="/dashboard/crm"
            className="group p-5 bg-card rounded-xl border border-border hover:border-accent/50 transition-all"
          >
            <TrendingUp size={24} className="text-accent mb-3" />
            <h3 className="font-medium mb-1">CRM</h3>
            <p className="text-xs text-muted-foreground">Manage contacts & relationships</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
