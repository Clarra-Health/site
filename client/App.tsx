import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import DataPrivacy from "./pages/DataPrivacy";
import WhoWeHelp from "./pages/WhoWeHelp";
import WhoWeHelpYou from "./pages/WhoWeHelpYou";
import WhoWeHelpCliniciansResearchers from "./pages/WhoWeHelpCliniciansResearchers";
import WhoWeHelpPayers from "./pages/WhoWeHelpPayers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="about" element={<About />} />
            <Route path="careers" element={<Placeholder />} />
            <Route path="contact" element={<Contact />} />
            <Route path="get-started" element={<Placeholder />} />
            <Route path="how-it-works" element={<Solutions />} />
            <Route path="who-we-help" element={<WhoWeHelp />} />
            <Route path="who-we-help/you" element={<WhoWeHelpYou />} />
            <Route
              path="who-we-help/clinicians-researchers"
              element={<WhoWeHelpCliniciansResearchers />}
            />
            <Route path="who-we-help/payers" element={<WhoWeHelpPayers />} />
            <Route path="how-we-protect-your-data" element={<DataPrivacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
