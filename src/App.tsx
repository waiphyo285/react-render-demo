
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CSR from "./pages/CSR";
import SPA from "./pages/SPA";
import Static from "./pages/Static";
import DataFetching from "./pages/DataFetching";
import Hybrid from "./pages/Hybrid";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/spa" element={<SPA />} />
          <Route path="/static" element={<Static />} />
          <Route path="/data-fetching" element={<DataFetching />} />
          <Route path="/hybrid" element={<Hybrid />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
