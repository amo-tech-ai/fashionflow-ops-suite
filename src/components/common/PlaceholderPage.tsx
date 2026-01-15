import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  backLink?: string;
  backLabel?: string;
}

export function PlaceholderPage({ 
  title, 
  description, 
  backLink = "/", 
  backLabel = "Go back" 
}: PlaceholderPageProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <Construction size={32} className="text-accent" />
        </div>
        <h1 className="font-display text-2xl lg:text-3xl font-semibold mb-3">{title}</h1>
        <p className="text-muted-foreground mb-6">{description}</p>
        <Button variant="outline" asChild>
          <Link to={backLink}>{backLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
