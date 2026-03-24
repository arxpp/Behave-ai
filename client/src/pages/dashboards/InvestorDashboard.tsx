import { User } from "@shared/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, Users, DollarSign } from "lucide-react";

interface InvestorDashboardProps {
  user: User;
}

export default function InvestorDashboard({ user }: InvestorDashboardProps) {
  const metrics = [
    { label: "Active Facilities", value: "47", change: "+12%", icon: Users, color: "bg-blue-500" },
    { label: "Patients Monitored", value: "1,240", change: "+28%", icon: Users, color: "bg-green-500" },
    { label: "Incident Reduction", value: "42%", change: "+8%", icon: TrendingUp, color: "bg-purple-500" },
    { label: "ROI (YTD)", value: "$2.4M", change: "+35%", icon: DollarSign, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Investor Dashboard</h1>
          <p className="text-slate-600 mt-2">Behave AI Performance & Market Metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-slate-600">{metric.label}</p>
                      <p className="text-2xl font-bold text-slate-900 mt-2">{metric.value}</p>
                      <p className="text-sm text-green-600 font-medium mt-1">{metric.change} this quarter</p>
                    </div>
                    <div className={`${metric.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Market Opportunity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Market Opportunity</CardTitle>
              <CardDescription>Total addressable market analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-slate-600">Global Dementia Care Market</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">$80B+</p>
                <p className="text-xs text-slate-600 mt-2">Growing at 7.8% CAGR</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-slate-600">Behave AI Addressable Market</p>
                <p className="text-2xl font-bold text-green-600 mt-1">$12B</p>
                <p className="text-xs text-slate-600 mt-2">Care facilities in developed markets</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-slate-600">Current Market Penetration</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">2.1%</p>
                <p className="text-xs text-slate-600 mt-2">47 facilities across 3 countries</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Performance</CardTitle>
              <CardDescription>Revenue & profitability metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600">Annual Revenue (Projected)</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">$4.2M</p>
                <p className="text-xs text-green-600 mt-2">↑ 156% YoY</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600">Gross Margin</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">78%</p>
                <p className="text-xs text-slate-600 mt-2">SaaS model with high scalability</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600">Customer Acquisition Cost</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">$8,400</p>
                <p className="text-xs text-slate-600 mt-2">Payback period: 4.2 months</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Facility Performance */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Top Performing Facilities
            </CardTitle>
            <CardDescription>Based on incident reduction and user adoption</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200">
                  <tr>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Facility Name</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Location</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Patients</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">Incident Reduction</th>
                    <th className="text-left py-2 px-4 font-medium text-slate-700">ARR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Sunset Care Home", location: "California, USA", patients: "85", reduction: "48%", arr: "$127K" },
                    { name: "Golden Years Facility", location: "New York, USA", patients: "92", reduction: "45%", arr: "$138K" },
                    { name: "Caring Hands Center", location: "Toronto, Canada", patients: "68", reduction: "42%", arr: "$102K" },
                    { name: "Heritage Care", location: "London, UK", patients: "76", reduction: "38%", arr: "$114K" },
                    { name: "Meadow View Home", location: "Sydney, Australia", patients: "54", reduction: "35%", arr: "$81K" },
                  ].map((facility, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">{facility.name}</td>
                      <td className="py-3 px-4 text-slate-600">{facility.location}</td>
                      <td className="py-3 px-4">{facility.patients}</td>
                      <td className="py-3 px-4 text-green-600 font-medium">{facility.reduction}</td>
                      <td className="py-3 px-4 font-medium text-slate-900">{facility.arr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Key Milestones */}
        <Card>
          <CardHeader>
            <CardTitle>Key Milestones & Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { quarter: "Q1 2026", milestone: "Expand to 75 facilities", status: "On Track" },
                { quarter: "Q2 2026", milestone: "Launch mobile caregiver app", status: "In Progress" },
                { quarter: "Q3 2026", milestone: "FDA clearance for clinical use", status: "Planned" },
                { quarter: "Q4 2026", milestone: "Series B funding round", status: "Planned" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div>
                    <p className="font-medium text-slate-900">{item.milestone}</p>
                    <p className="text-sm text-slate-600">{item.quarter}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === "On Track" ? "bg-green-100 text-green-700" :
                    item.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                    "bg-slate-100 text-slate-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
