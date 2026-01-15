import { Users, Plus, Search, Filter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mockContacts = [
  { id: "1", name: "Maria Santos", role: "Model", company: "Elite Models", email: "maria@elite.com", type: "Model" },
  { id: "2", name: "James Chen", role: "Photographer", company: "Studio Nine", email: "james@studionine.com", type: "Photographer" },
  { id: "3", name: "Sophie Laurent", role: "Stylist", company: "Freelance", email: "sophie@email.com", type: "Stylist" },
  { id: "4", name: "Alessandro Ricci", role: "Venue Manager", company: "Grand Palazzo", email: "a.ricci@palazzo.it", type: "Vendor" },
  { id: "5", name: "Emma Williams", role: "Fashion Editor", company: "Vogue UK", email: "e.williams@vogue.co.uk", type: "Press" },
  { id: "6", name: "Michael Brown", role: "Brand Director", company: "Luxe Group", email: "m.brown@luxe.com", type: "Sponsor" },
];

const contactTypes = ["All", "Model", "Photographer", "Stylist", "Vendor", "Press", "Sponsor"];

export default function CRMPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-semibold">CRM</h1>
          <p className="text-muted-foreground">Manage contacts, vendors, and relationships.</p>
        </div>
        <Button variant="hero">
          <Plus size={16} />
          Add Contact
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search contacts..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Filter size={16} />
          Filters
        </Button>
      </div>

      {/* Contact Type Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {contactTypes.map((type, index) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              index === 0
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Contacts List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="divide-y divide-border">
          {mockContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-medium">
                {contact.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{contact.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {contact.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{contact.role} · {contact.company}</p>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <a href={`mailto:${contact.email}`} className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Mail size={16} className="text-muted-foreground" />
                </a>
                <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Phone size={16} className="text-muted-foreground" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-card rounded-lg border border-border">
          <span className="text-2xl font-display font-semibold">156</span>
          <p className="text-sm text-muted-foreground">Total Contacts</p>
        </div>
        <div className="p-4 bg-card rounded-lg border border-border">
          <span className="text-2xl font-display font-semibold">24</span>
          <p className="text-sm text-muted-foreground">Models</p>
        </div>
        <div className="p-4 bg-card rounded-lg border border-border">
          <span className="text-2xl font-display font-semibold">18</span>
          <p className="text-sm text-muted-foreground">Vendors</p>
        </div>
        <div className="p-4 bg-card rounded-lg border border-border">
          <span className="text-2xl font-display font-semibold">12</span>
          <p className="text-sm text-muted-foreground">Sponsors</p>
        </div>
      </div>
    </div>
  );
}
