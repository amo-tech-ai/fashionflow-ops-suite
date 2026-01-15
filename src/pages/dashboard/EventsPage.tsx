import { Calendar, Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import fashionEvent from "@/assets/fashion-event.jpg";

const mockEvents = [
  { id: "1", name: "Spring Collection Launch", date: "Mar 15, 2026", status: "In Progress", venue: "Paris Showroom", type: "Fashion Show" },
  { id: "2", name: "Fashion Week Presentation", date: "Apr 02, 2026", status: "Planning", venue: "Milan Convention", type: "Presentation" },
  { id: "3", name: "Summer Pop-Up", date: "May 10, 2026", status: "Draft", venue: "NYC SoHo", type: "Pop Up" },
];

export default function EventsPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-semibold">Events</h1>
          <p className="text-muted-foreground">Manage fashion shows, presentations, and launches.</p>
        </div>
        <Button variant="hero">
          <Plus size={16} />
          Create Event
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search events..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Filter size={16} />
          Filters
        </Button>
      </div>

      {/* Events Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEvents.map((event) => (
          <div
            key={event.id}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={fashionEvent}
                alt={event.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full ${
                event.status === "In Progress" 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-background/80 text-foreground"
              }`}>
                {event.status}
              </span>
            </div>
            <div className="p-4">
              <span className="text-xs text-muted-foreground">{event.type}</span>
              <h3 className="font-display font-semibold mt-1 mb-2">{event.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                <span>{event.date}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{event.venue}</p>
            </div>
          </div>
        ))}

        {/* Empty State / Add New */}
        <div className="border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center p-8 text-center min-h-[280px]">
          <Calendar size={32} className="text-muted-foreground mb-3" />
          <h3 className="font-medium mb-1">Create New Event</h3>
          <p className="text-sm text-muted-foreground mb-4">Start planning your next fashion event</p>
          <Button variant="outline" size="sm">
            <Plus size={14} />
            Add Event
          </Button>
        </div>
      </div>
    </div>
  );
}
