import { useEffect, Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load admin pages
const AdminAuth = lazy(() => import("./pages/AdminAuth"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // --- Google Tag Manager dataLayer Initialization ---
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(...args);
    }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // TODO: Replace with your actual GTM/GA4 ID
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />

            {/* Admin routes with lazy loading */}
            <Route
              path="/admin/auth"
              element={
                <Suspense fallback={<div>Carregando...</div>}>
                  <AdminAuth />
                </Suspense>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <Suspense fallback={<div>Carregando...</div>}>
                  <AdminDashboard />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
