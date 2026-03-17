import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/sections/Overview";
import EpicsSection from "./components/sections/EpicsSection";
import WorkflowSection from "./components/sections/WorkflowSection";
import SprintSection from "./components/sections/SprintSection";
import RolesSection from "./components/sections/RolesSection";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "epics":
        return <EpicsSection />;
      case "workflow":
        return <WorkflowSection />;
      case "sprint":
        return <SprintSection />;
      case "roles":
        return <RolesSection />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-y-auto pt-16 lg:pt-0">
        <div className="max-w-6xl mx-auto px-4 py-8 lg:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Dashboard} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
