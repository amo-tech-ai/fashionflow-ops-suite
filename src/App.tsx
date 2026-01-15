import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { WebsiteLayout } from "@/components/layout/WebsiteLayout";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

// Website pages
import Home from "@/pages/website/Home";
import ServicesPage from "@/pages/website/ServicesPage";
import EventsInfoPage from "@/pages/website/EventsInfoPage";
import ShootsInfoPage from "@/pages/website/ShootsInfoPage";
import CRMInfoPage from "@/pages/website/CRMInfoPage";
import AIInfoPage from "@/pages/website/AIInfoPage";
import ContactPage from "@/pages/website/ContactPage";

// Dashboard pages
import Dashboard from "@/pages/dashboard/Dashboard";
import EventsPage from "@/pages/dashboard/EventsPage";
import ShootsPage from "@/pages/dashboard/ShootsPage";
import MediaPage from "@/pages/dashboard/MediaPage";
import CRMPage from "@/pages/dashboard/CRMPage";
import IntelligencePage from "@/pages/dashboard/IntelligencePage";
import SettingsPage from "@/pages/dashboard/SettingsPage";

// Auth pages
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";

import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Website routes */}
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/events" element={<EventsInfoPage />} />
            <Route path="/shoots" element={<ShootsInfoPage />} />
            <Route path="/crm" element={<CRMInfoPage />} />
            <Route path="/ai" element={<AIInfoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="shoots" element={<ShootsPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="crm" element={<CRMPage />} />
            <Route path="intelligence" element={<IntelligencePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Auth routes */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
