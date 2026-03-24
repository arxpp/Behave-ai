import { User } from "@shared/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Clock, Phone } from "lucide-react";

interface CaregiverDashboardProps {
  user: User;
}

export default function CaregiverDashboard({ user }: CaregiverDashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Caregiver Dashboard</h1>
          <p className="text-slate-600 mt-2">Hello, {user.name} - Your assigned patients and alerts</p>
        </div>

        {/* Active Alerts - Priority */}
        <Card className="mb-6 border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-900">
              <AlertCircle className="w-6 h-6" />
              Active Patient Alerts
            </CardTitle>
            <CardDescription>Immediate action required</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { patient: "John Doe", room: "201", severity: "CRITICAL", emotion: "Extreme Anger (92%)", time: "Just now", action: "Escalate" },
                { patient: "Robert Johnson", room: "305", severity: "HIGH", emotion: "High Distress (78%)", time: "2 min ago", action: "Respond" },
              ].map((alert, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-red-500">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-slate-900">{alert.patient}</p>
                      <span className="text-xs bg-slate-200 px-2 py-1 rounded">Room {alert.room}</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{alert.emotion}</p>
                    <p className="text-xs text-slate-500">{alert.time}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">{alert.action}</Button>
                    <Button variant="outline">Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Patients */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">My Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "John Doe", status: "Alert", color: "text-red-600" },
                  { name: "Margaret Smith", status: "Calm", color: "text-green-600" },
                  { name: "Robert Johnson", status: "Alert", color: "text-red-600" },
                  { name: "Patricia Lee", status: "Calm", color: "text-green-600" },
                ].map((patient, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded">
                    <p className="font-medium text-slate-900">{patient.name}</p>
                    <span className={`text-xs font-bold ${patient.color}`}>{patient.status}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Today's Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-slate-600">Alerts Handled</p>
                <p className="text-2xl font-bold text-slate-900">8</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-green-600">32s</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Effectiveness</p>
                <p className="text-2xl font-bold text-blue-600">94%</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start gap-2 bg-green-600 hover:bg-green-700">
                <CheckCircle className="w-4 h-4" />
                Mark Alert Resolved
              </Button>
              <Button className="w-full justify-start gap-2 bg-blue-600 hover:bg-blue-700">
                <Clock className="w-4 h-4" />
                Log Intervention
              </Button>
              <Button className="w-full justify-start gap-2 bg-purple-600 hover:bg-purple-700">
                <Phone className="w-4 h-4" />
                Call Supervisor
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Interventions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Interventions</CardTitle>
            <CardDescription>Your actions and outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200">
                  <tr>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Patient</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Time</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Action</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { patient: "John Doe", time: "09:15 AM", action: "Engaged conversation", outcome: "Anger reduced to 45%" },
                    { patient: "Margaret Smith", time: "08:45 AM", action: "Offered comfort item", outcome: "Calmed down" },
                    { patient: "Robert Johnson", time: "08:20 AM", action: "Redirected activity", outcome: "Distress reduced" },
                  ].map((intervention, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">{intervention.patient}</td>
                      <td className="py-3 px-4">{intervention.time}</td>
                      <td className="py-3 px-4">{intervention.action}</td>
                      <td className="py-3 px-4 text-green-600 font-medium">{intervention.outcome}</td>
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
