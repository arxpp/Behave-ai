import { User } from "@shared/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Users, TrendingUp, Clock } from "lucide-react";

interface ManagerDashboardProps {
  user: User;
}

export default function ManagerDashboard({ user }: ManagerDashboardProps) {
  const stats = [
    { label: "Active Patients", value: "24", icon: Users, color: "bg-blue-500" },
    { label: "Active Alerts", value: "3", icon: AlertCircle, color: "bg-red-500" },
    { label: "Avg Response Time", value: "45s", icon: Clock, color: "bg-green-500" },
    { label: "Incident Reduction", value: "35%", icon: TrendingUp, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Facility Manager Dashboard</h1>
          <p className="text-slate-600 mt-2">Welcome back, {user.name}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Alerts */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Active Alerts</CardTitle>
              <CardDescription>Real-time patient behavioral alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { patient: "John Doe", severity: "high", time: "2 min ago" },
                  { patient: "Margaret Smith", severity: "medium", time: "5 min ago" },
                  { patient: "Robert Johnson", severity: "critical", time: "8 min ago" },
                ].map((alert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="font-medium text-slate-900">{alert.patient}</p>
                      <p className="text-sm text-slate-600">{alert.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      alert.severity === "critical" ? "bg-red-100 text-red-700" :
                      alert.severity === "high" ? "bg-orange-100 text-orange-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View All Patients</Button>
              <Button className="w-full bg-green-600 hover:bg-green-700">Staff Management</Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">View Analytics</Button>
              <Button className="w-full bg-slate-600 hover:bg-slate-700">Settings</Button>
            </CardContent>
          </Card>
        </div>

        {/* Caregiver Performance */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Caregiver Performance</CardTitle>
            <CardDescription>Response times and intervention effectiveness</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200">
                  <tr>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Caregiver</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Avg Response</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Effectiveness</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Alerts Handled</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Sarah Johnson", response: "32s", effectiveness: "94%", alerts: "28" },
                    { name: "Mike Chen", response: "45s", effectiveness: "88%", alerts: "24" },
                    { name: "Lisa Martinez", response: "38s", effectiveness: "91%", alerts: "26" },
                  ].map((caregiver, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">{caregiver.name}</td>
                      <td className="py-3 px-4">{caregiver.response}</td>
                      <td className="py-3 px-4">{caregiver.effectiveness}</td>
                      <td className="py-3 px-4">{caregiver.alerts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
