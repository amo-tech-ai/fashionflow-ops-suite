import { Camera, Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import fashionShoot from "@/assets/fashion-shoot.jpg";

const mockShoots = [
  { id: "1", name: "Resort Lookbook", date: "Jan 20, 2026", status: "Confirmed", location: "Maldives", type: "Lookbook" },
  { id: "2", name: "Campaign Video", date: "Feb 05, 2026", status: "Planning", location: "NYC Studio", type: "Video" },
  { id: "3", name: "Editorial Spread", date: "Feb 18, 2026", status: "Draft", location: "Paris Atelier", type: "Editorial" },
];

export default function ShootsPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-semibold">Shoots</h1>
          <p className="text-muted-foreground">Organize photography and video productions.</p>
        </div>
        <Button variant="hero">
          <Plus size={16} />
          Create Shoot
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search shoots..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Filter size={16} />
          Filters
        </Button>
      </div>

      {/* Shoots Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockShoots.map((shoot) => (
          <div
            key={shoot.id}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={fashionShoot}
                alt={shoot.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full ${
                shoot.status === "Confirmed" 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-background/80 text-foreground"
              }`}>
                {shoot.status}
              </span>
            </div>
            <div className="p-4">
              <span className="text-xs text-muted-foreground">{shoot.type}</span>
              <h3 className="font-display font-semibold mt-1 mb-2">{shoot.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Camera size={14} />
                <span>{shoot.date}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{shoot.location}</p>
            </div>
          </div>
        ))}

        {/* Empty State / Add New */}
        <div className="border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center p-8 text-center min-h-[280px]">
          <Camera size={32} className="text-muted-foreground mb-3" />
          <h3 className="font-medium mb-1">Create New Shoot</h3>
          <p className="text-sm text-muted-foreground mb-4">Start planning your next production</p>
          <Button variant="outline" size="sm">
            <Plus size={14} />
            Add Shoot
          </Button>
        </div>
      </div>
    </div>
  );
}
