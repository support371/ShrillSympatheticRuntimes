import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Affiliate from "@/pages/Affiliate";
import InvestmentPlan from "@/pages/InvestmentPlan";
import Packages from "@/pages/Packages";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import QFS from "@/pages/QFS";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import DemoDashboard from "@/pages/DemoDashboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/affiliate" component={Affiliate} />
      <Route path="/investment-plan" component={InvestmentPlan} />
      <Route path="/packages" component={Packages} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/qfs" component={QFS} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/demo/dashboard" component={DemoDashboard} />
      <Route path="/client/portfolio" component={Dashboard} />
      
      {/* Legacy Redirects could be handled here with a wrapper if needed, 
          but wouter doesn't support query param matching in Route easily. 
          We'll assume direct navigation for now. */}
          
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
