import { FolderOpen, Search, Filter, Grid, List, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroRunway from "@/assets/hero-runway.jpg";
import fashionShoot from "@/assets/fashion-shoot.jpg";
import fashionEvent from "@/assets/fashion-event.jpg";
import fashionMedia from "@/assets/fashion-media.jpg";

const mockAssets = [
  { id: "1", name: "Runway Final.jpg", type: "image", size: "4.2 MB", date: "Jan 10, 2026", src: heroRunway },
  { id: "2", name: "BTS_Shoot.jpg", type: "image", size: "3.8 MB", date: "Jan 08, 2026", src: fashionShoot },
  { id: "3", name: "Event_Setup.jpg", type: "image", size: "2.9 MB", date: "Jan 05, 2026", src: fashionEvent },
  { id: "4", name: "Lookbook_Spread.jpg", type: "image", size: "5.1 MB", date: "Jan 03, 2026", src: fashionMedia },
  { id: "5", name: "Campaign_Hero.jpg", type: "image", size: "4.7 MB", date: "Dec 28, 2025", src: heroRunway },
  { id: "6", name: "Studio_Test.jpg", type: "image", size: "2.3 MB", date: "Dec 25, 2025", src: fashionShoot },
];

export default function MediaPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-semibold">Media Library</h1>
          <p className="text-muted-foreground">Manage and organize all your visual assets.</p>
        </div>
        <Button variant="hero">
          <Upload size={16} />
          Upload Assets
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search assets..." className="pl-9" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter size={16} />
            Filters
          </Button>
          <div className="flex border border-border rounded-lg overflow-hidden">
            <Button variant="ghost" size="icon" className="rounded-none">
              <Grid size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-none border-l border-border">
              <List size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {mockAssets.map((asset) => (
          <div
            key={asset.id}
            className="group relative aspect-square rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all cursor-pointer"
          >
            <img
              src={asset.src}
              alt={asset.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-sm font-medium text-primary-foreground truncate">{asset.name}</p>
                <p className="text-xs text-primary-foreground/70">{asset.size}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Upload More */}
        <div className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center text-center hover:border-accent/50 transition-colors cursor-pointer">
          <Upload size={24} className="text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">Upload more</p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 p-4 bg-muted/50 rounded-lg flex flex-wrap gap-6">
        <div>
          <span className="text-2xl font-display font-semibold">247</span>
          <p className="text-sm text-muted-foreground">Total Assets</p>
        </div>
        <div>
          <span className="text-2xl font-display font-semibold">1.2 GB</span>
          <p className="text-sm text-muted-foreground">Storage Used</p>
        </div>
        <div>
          <span className="text-2xl font-display font-semibold">12</span>
          <p className="text-sm text-muted-foreground">Collections</p>
        </div>
      </div>
    </div>
  );
}
