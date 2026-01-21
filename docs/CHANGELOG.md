# Changelog

All notable changes to FashionOS will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.2.0] - 2026-01-21

### Changed
- **Color Palette Overhaul**: Removed all pink/purple/bright accent colors
- Updated to neutral palette (black, white, warm grays, beige)
- Button variants updated to use neutral tones
- All accent colors now use warm gray tones
- Design tokens in `index.css` and `tailwind.config.ts` updated

### Fixed
- Consistent color usage across all components
- Proper semantic token usage in Home page

---

## [0.1.0] - 2026-01-21

### Added

#### Core Infrastructure
- React 18.3.1 with TypeScript 5.8.3
- Vite 5.4.19 build system
- Tailwind CSS 3.4.17 styling
- React Router DOM 6.30.1 routing
- TanStack Query 5.83.0 for server state
- shadcn/ui component library (50+ components)

#### Design System
- Custom typography with Playfair Display (display) and Inter (body)
- Neutral color palette with warm tones
- Custom button variants: `hero`, `accent`, `outline-accent`, `minimal`
- CSS design tokens in `index.css`
- Tailwind configuration with custom colors

#### Layouts
- **WebsiteLayout**: Header + Footer wrapper for public pages
- **DashboardLayout**: 3-panel layout with sidebar, main content, intelligence panel
- **DashboardSidebar**: Navigation with brand selector
- **IntelligencePanel**: AI Copilot placeholder (right panel)

#### Public Website Pages
- **Home**: Full marketing landing page with:
  - Hero section with images and trust indicators
  - Stats bar with key metrics
  - Feature cards (6 features)
  - "How It Works" 4-step flow
  - Platform preview with dashboard screenshot
  - "Built for Fashion Teams" audience section
  - Final CTA with trust badges
- **ServicesPage**: Placeholder
- **EventsInfoPage**: Placeholder
- **ShootsInfoPage**: Placeholder
- **CRMInfoPage**: Placeholder
- **AIInfoPage**: Placeholder
- **ContactPage**: Placeholder

#### Dashboard Pages
- **Dashboard**: Command center with:
  - Quick stats (events, shoots, team)
  - Active events list
  - Upcoming shoots list
  - Recent activity feed
  - Quick access cards
- **EventsPage**: Placeholder
- **ShootsPage**: Placeholder
- **MediaPage**: Placeholder
- **CRMPage**: Placeholder
- **IntelligencePage**: Placeholder
- **SettingsPage**: Placeholder

#### Authentication Pages
- **LoginPage**: UI-only login form
- **SignupPage**: UI-only signup form

#### Assets
- `hero-runway.jpg` - Fashion runway hero image
- `fashion-shoot.jpg` - Photography shoot image
- `fashion-event.jpg` - Fashion event image
- `fashion-media.jpg` - Media/assets image
- `fashion-backstage.jpg` - Backstage fashion image
- `dashboard-preview.jpg` - Dashboard screenshot preview

#### Types
- Core TypeScript interfaces:
  - `Organization`
  - `Brand`
  - `Event`
  - `Shoot`
  - `Asset`
  - `Contact`
  - `Vendor`
  - `NavItem`
  - `QuickAction`
  - `ActivityItem`

#### Components
- Common: `PlaceholderPage`
- 50+ shadcn/ui components (buttons, dialogs, forms, etc.)
- Custom `NavLink` component

#### Configuration
- ESLint with TypeScript support
- Vitest testing setup
- PostCSS with Tailwind
- Path aliases (`@/*`)

### Technical Details

#### Routing Structure
```
/ (WebsiteLayout)
├── /services
├── /events
├── /shoots
├── /crm
├── /ai
└── /contact

/dashboard (DashboardLayout)
├── /events
├── /shoots
├── /media
├── /crm
├── /intelligence
└── /settings

/auth
├── /login
└── /signup
```

#### Responsive Breakpoints
- Mobile: Default
- Tablet (sm): 640px
- Desktop (lg): 1024px

#### 3-Panel Layout Specs
- Left Sidebar: 256px (w-64)
- Center Content: Flexible
- Right Intelligence: 320px (w-80)

---

## Roadmap

### [0.3.0] - Planned
- [ ] Authentication integration (Lovable Cloud)
- [ ] Database setup with Supabase
- [ ] User session management
- [ ] Protected routes

### [0.4.0] - Planned
- [ ] Events CRUD functionality
- [ ] Shoots CRUD functionality
- [ ] Media upload and management
- [ ] CRM contact management

### [0.5.0] - Planned
- [ ] AI Intelligence features
- [ ] Smart scheduling
- [ ] Automated suggestions
- [ ] Workflow automation

---

## Migration Notes

### From 0.1.0 to 0.2.0
- Color classes using `fashion-pink` or accent colors need to be updated
- Check any custom components using pink/purple tones
- Verify button variants display correctly with neutral palette
