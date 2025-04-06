
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Hotels from "./pages/Hotels";
import FoodGuide from "./pages/FoodGuide";
import WildlifeSafari from "./pages/WildlifeSafari";
import Animals from "./pages/Animals";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
            <Route path="/radhanagari-hotels-homestays" element={<Hotels />} />
            <Route path="/radhanagari-food-guide" element={<FoodGuide />} />
            <Route path="/radhanagari-wildlife-safari" element={<WildlifeSafari />} />
            <Route path="/radhanagari-animals" element={<Animals />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
