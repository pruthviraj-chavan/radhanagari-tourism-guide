
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages for better performance
const Hotels = lazy(() => import("./pages/Hotels"));
const FoodGuide = lazy(() => import("./pages/FoodGuide"));
const WildlifeSafari = lazy(() => import("./pages/WildlifeSafari"));
// Removed Animals import
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000 // 5 minutes
    }
  }
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet>
        <meta name="keywords" content="Radhanagari, wildlife sanctuary, hotels, safari, bison, kolhapur, maharashtra, tourist guide, radhanagari dam, accommodation" />
        <meta name="author" content="Radhanagari Tourism" />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/radhanagari-hotels-homestays" element={
              <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                <Hotels />
              </Suspense>
            } />
            <Route path="/radhanagari-food-guide" element={
              <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                <FoodGuide />
              </Suspense>
            } />
            <Route path="/radhanagari-wildlife-safari" element={
              <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                <WildlifeSafari />
              </Suspense>
            } />
            {/* Removed Animals route */}
            <Route path="/blog" element={
              <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                <Blog />
              </Suspense>
            } />
            <Route path="/blog/:slug" element={
              <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                <BlogPost />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                <Contact />
              </Suspense>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
