import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React from "react";

// Import the service pages
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import BrandDevelopment from "./pages/BrandDevelopment";
import SponsorshipManagement from "./pages/SponsorshipManagement";
import MarketingSolutions from "./pages/TechSolutions";
import TechSolutions from "./pages/TechSolutions";
import EventOrganization from "./pages/EventOrganization";

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
            path="/services/website-development"
            element={<WebsiteDevelopment />}
          />
          <Route
            path="/services/event-organization"
            element={<EventOrganization />}
          />
          <Route
            path="/services/brand-development"
            element={<BrandDevelopment />}
          />
          <Route
            path="/services/sponsorship-management"
            element={<SponsorshipManagement />}
          />
          <Route
            path="/services/marketing-solutions"
            element={<MarketingSolutions />}
          />
          <Route
            path="/services/360-tech-solutions"
            element={<TechSolutions />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
