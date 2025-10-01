import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React from "react";

// Import the new service pages
import EventOrganization from "./pages/EventOrganization";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import DigitalMarketing from "./pages/DigitalMarketing";
import BrandDevelopment from "./pages/BrandDevelopment";
import InfluencerPartnerships from "./pages/InfluencerPartnerships";
import AnalyticsReporting from "./pages/AnalyticsReporting";

// import DockDemo from "./components/DockDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Service routes */}
          <Route
            path="/services/event-organization"
            element={<EventOrganization />}
          />
          <Route
            path="/services/social-media-management"
            element={<SocialMediaManagement />}
          />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="/services/brand-development"
            element={<BrandDevelopment />}
          />
          <Route
            path="/services/influencer-partnerships"
            element={<InfluencerPartnerships />}
          />
          <Route
            path="/services/analytics-reporting"
            element={<AnalyticsReporting />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
