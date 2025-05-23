import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

import HomePage from "@/pages/HomePage";
import EntitiesPage from "@/pages/EntitiesPage";
import AboutPage from "@/pages/AboutPage";
import TeamPage from "@/pages/TeamPage";
import AdminLoginPage from "@/pages/AdminLoginPage";
import AdminDashboardPage from "@/pages/AdminDashboardPage";
import DocumentsPage from "@/pages/DocumentsPage";
import ComingSoonPage from "@/pages/ComingSoonPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/entites" component={EntitiesPage} />
      <Route path="/entites/entity/:id" component={EntitiesPage} />
      <Route path="/entites/department/:id" component={EntitiesPage} />
      <Route path="/entites/program/:id" component={EntitiesPage} />
      <Route path="/entites/program/:id/:year" component={EntitiesPage} />
      <Route path="/coming-soon" component={ComingSoonPage} />
      <Route path="/coming-soon/entity/:id" component={ComingSoonPage} />
      <Route path="/a-propos" component={AboutPage} />
      <Route path="/equipe" component={TeamPage} />
      <Route path="/login" component={AdminLoginPage} />
      <Route path="/admin" component={AdminDashboardPage} />
      <Route path="/documents" component={DocumentsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
