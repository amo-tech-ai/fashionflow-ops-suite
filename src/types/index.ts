// Core entity types for FashionOS

export interface Organization {
  id: string;
  name: string;
  created_at: string;
}

export interface Brand {
  id: string;
  organization_id: string;
  name: string;
  logo_url?: string;
  created_at: string;
}

export interface BrandUser {
  id: string;
  brand_id: string;
  user_id: string;
  role: 'owner' | 'admin' | 'member' | 'viewer';
  created_at: string;
}

export interface Event {
  id: string;
  brand_id: string;
  name: string;
  description?: string;
  event_type: 'fashion_show' | 'presentation' | 'pop_up' | 'launch' | 'other';
  start_date: string;
  end_date?: string;
  venue_id?: string;
  status: 'draft' | 'planning' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
}

export interface Shoot {
  id: string;
  brand_id: string;
  name: string;
  description?: string;
  shoot_type: 'lookbook' | 'campaign' | 'editorial' | 'ecommerce' | 'video' | 'other';
  shoot_date: string;
  location?: string;
  status: 'draft' | 'planning' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
}

export interface Asset {
  id: string;
  brand_id: string;
  name: string;
  asset_type: 'image' | 'video' | 'document' | 'other';
  file_url: string;
  thumbnail_url?: string;
  metadata?: Record<string, unknown>;
  created_at: string;
}

export interface Contact {
  id: string;
  brand_id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  contact_type: 'model' | 'photographer' | 'stylist' | 'makeup' | 'vendor' | 'sponsor' | 'press' | 'buyer' | 'other';
  created_at: string;
}

export interface Vendor {
  id: string;
  brand_id: string;
  name: string;
  vendor_type: 'venue' | 'catering' | 'equipment' | 'production' | 'other';
  contact_info?: Record<string, string>;
  created_at: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  children?: NavItem[];
}

// Dashboard types
export interface QuickAction {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

export interface ActivityItem {
  id: string;
  type: 'event' | 'shoot' | 'asset' | 'contact';
  action: string;
  title: string;
  timestamp: string;
}
