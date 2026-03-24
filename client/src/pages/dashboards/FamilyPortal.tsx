import { User } from "@shared/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Phone, MessageCircle } from "lucide-react";

interface FamilyPortalProps {
  user: User;
}

export default function FamilyPortal({ user }: FamilyPortalProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Family Portal</h1>
          <p className="text-slate-600 mt-2">Monitor your loved one's wellbeing and stay connected</p>
        </div>

        {/* Patient Status Card */}
        <Card className="mb-6 border-2 border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Margaret Smith</CardTitle>
                <CardDescription className="text-blue-100">Your Mother • Room 204</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-sm">Current Status</p>
                <p className="text-2xl font-bold flex items-center gap-2 mt-1">
                  <Heart className="w-6 h-6 text-red-300" />
                  Calm
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-slate-600">Mood Level</p>
                <p className="text-2xl font-bold text-green-600 mt-1">Calm</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-600">Last Check</p>
                <p className="text-lg font-bold text-blue-600 mt-1">5 min ago</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-slate-600">Caregiver</p>
                <p className="text-lg font-bold text-purple-600 mt-1">Sarah J.</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-slate-600">Facility</p>
                <p className="text-lg font-bold text-orange-600 mt-1">Sunset Care</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Button className="h-14 bg-blue-600 hover:bg-blue-700 text-white text-base gap-2">
            <Phone className="w-5 h-5" />
            Call Facility
          </Button>
          <Button className="h-14 bg-green-600 hover:bg-green-700 text-white text-base gap-2">
            <MessageCircle className="w-5 h-5" />
            Send Message
          </Button>
        </div>

        {/* Recent Activity */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "Today, 2:30 PM", activity: "Mood check completed - Calm", status: "✓" },
                { date: "Today, 10:15 AM", activity: "Participated in art therapy", status: "✓" },
                { date: "Yesterday, 3:45 PM", activity: "Mood check completed - Slightly anxious", status: "✓" },
                { date: "Yesterday, 1:20 PM", activity: "Caregiver intervention - Engaged in conversation", status: "✓" },
                { date: "2 days ago", activity: "Weekly family call scheduled", status: "📅" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg">
                  <div className="text-xl">{item.status}</div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{item.activity}</p>
                    <p className="text-sm text-slate-600">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Schedule */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              This Week's Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { day: "Monday", activity: "Art Therapy", time: "2:00 PM" },
                { day: "Tuesday", activity: "Music Session", time: "10:00 AM" },
                { day: "Wednesday", activity: "Garden Walk", time: "3:00 PM" },
                { day: "Thursday", activity: "Family Video Call", time: "4:00 PM" },
                { day: "Friday", activity: "Reminiscence Therapy", time: "11:00 AM" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">{item.day}</p>
                    <p className="text-sm text-slate-600">{item.activity}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Contacts */}
        <Card>
          <CardHeader>
            <CardTitle>Important Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Facility Main Line", phone: "(555) 123-4567" },
                { name: "Care Manager - Sarah", phone: "(555) 234-5678" },
                { name: "Emergency Line", phone: "(555) 999-0000" },
              ].map((contact, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-slate-900">{contact.name}</p>
                  <Button variant="outline" size="sm">{contact.phone}</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-slate-700">
            <strong>Privacy Notice:</strong> This portal uses HIPAA-compliant encryption. All data is secure and only you and authorized facility staff can access this information.
          </p>
        </div>
      </div>
    </div>
  );
}
