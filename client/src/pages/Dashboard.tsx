import { useAuth } from "@/_core/hooks/useAuth";
import { Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import ManagerDashboard from "./dashboards/ManagerDashboard";
import CaregiverDashboard from "./dashboards/CaregiverDashboard";
import FamilyPortal from "./dashboards/FamilyPortal";
import InvestorDashboard from "./dashboards/InvestorDashboard";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
      </div>
    );
  }

  if (!user) {
    setLocation("/");
    return null;
  }

  // Route to appropriate dashboard based on user type
  switch (user.userType) {
    case "facility_manager":
      return <ManagerDashboard user={user} />;
    case "caregiver":
      return <CaregiverDashboard user={user} />;
    case "family_member":
      return <FamilyPortal user={user} />;
    case "investor":
      return <InvestorDashboard user={user} />;
    default:
      return <CaregiverDashboard user={user} />;
  }
}
