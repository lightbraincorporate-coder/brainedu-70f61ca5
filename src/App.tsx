import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import SecondaryAdminDashboard from "./pages/SecondaryAdminDashboard";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import ProtectedSuperAdminRoute from "./components/ProtectedSuperAdminRoute";
import ProtectedSecondaryAdminRoute from "./components/ProtectedSecondaryAdminRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <Admin />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/super-admin"
        element={
          <ProtectedSuperAdminRoute>
            <SuperAdminDashboard />
          </ProtectedSuperAdminRoute>
        }
      />
      <Route
        path="/secondary-admin"
        element={
          <ProtectedSecondaryAdminRoute>
            <SecondaryAdminDashboard />
          </ProtectedSecondaryAdminRoute>
        }
      />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
