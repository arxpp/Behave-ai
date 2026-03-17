import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { allPatients, getAverageAngerLevel, getPeakAngerLevel, getInterventions } from '@/lib/patientData';
import { AlertCircle, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

export default function PatientMonitoring() {
  const [selectedPatientId, setSelectedPatientId] = useState('P001');
  const selectedPatient = allPatients.find(p => p.id === selectedPatientId)!;
  const avgAnger = getAverageAngerLevel(selectedPatient);
  const peakAnger = getPeakAngerLevel(selectedPatient);
  const interventions = getInterventions(selectedPatient);

  const getSeverityColor = (level: number) => {
    if (level < 25) return '#10b981'; // green
    if (level < 50) return '#f59e0b'; // amber
    if (level < 75) return '#ef4444'; // red
    return '#7c2d12'; // dark red
  };

  const getSeverityLabel = (level: number) => {
    if (level < 25) return 'Low';
    if (level < 50) return 'Medium';
    if (level < 75) return 'High';
    return 'Critical';
  };

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Patient Monitoring Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time emotion tracking and behavioral pattern analysis for proactive care management.
          </p>
        </div>

        {/* Patient Selection */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-foreground mb-3">
            Select Patient
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allPatients.map((patient) => (
              <button
                key={patient.id}
                onClick={() => setSelectedPatientId(patient.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedPatientId === patient.id
                    ? 'border-primary bg-blue-50'
                    : 'border-border hover:border-primary'
                }`}
              >
                <div className="font-bold text-foreground">{patient.name}</div>
                <div className="text-sm text-muted-foreground">Room {patient.room}</div>
                <div className="text-xs mt-2">
                  <span className={`px-2 py-1 rounded text-white ${
                    patient.riskLevel === 'high' ? 'bg-red-600' :
                    patient.riskLevel === 'medium' ? 'bg-amber-600' :
                    'bg-green-600'
                  }`}>
                    {patient.riskLevel.toUpperCase()} RISK
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Patient Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={20} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Current Status</span>
            </div>
            <p className="text-3xl font-bold text-blue-900">
              {Math.round(selectedPatient.emotionData[selectedPatient.emotionData.length - 1].angerLevel)}%
            </p>
            <p className="text-xs text-blue-800 mt-1">Anger Level</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-amber-600" />
              <span className="text-sm font-semibold text-amber-900">Average</span>
            </div>
            <p className="text-3xl font-bold text-amber-900">
              {Math.round(avgAnger)}%
            </p>
            <p className="text-xs text-amber-800 mt-1">Today's Average</p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={20} className="text-red-600" />
              <span className="text-sm font-semibold text-red-900">Peak</span>
            </div>
            <p className="text-3xl font-bold text-red-900">
              {Math.round(peakAnger.angerLevel)}%
            </p>
            <p className="text-xs text-red-800 mt-1">at {peakAnger.time}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={20} className="text-green-600" />
              <span className="text-sm font-semibold text-green-900">Interventions</span>
            </div>
            <p className="text-3xl font-bold text-green-900">
              {interventions.length}
            </p>
            <p className="text-xs text-green-800 mt-1">Caregiver Actions</p>
          </div>
        </div>

        {/* Emotion Trend Chart */}
        <div className="bg-white border border-border rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Emotion Trend Over Time</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={selectedPatient.emotionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="time" 
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis label={{ value: 'Emotion Level (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                formatter={(value) => `${Math.round(value as number)}%`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="angerLevel" 
                stroke="#ef4444" 
                name="Anger"
                strokeWidth={3}
                dot={{ fill: '#ef4444', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="happiness" 
                stroke="#10b981" 
                name="Happiness"
                strokeWidth={2}
                dot={{ fill: '#10b981', r: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="sadness" 
                stroke="#3b82f6" 
                name="Sadness"
                strokeWidth={2}
                dot={{ fill: '#3b82f6', r: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="fear" 
                stroke="#f59e0b" 
                name="Fear"
                strokeWidth={2}
                dot={{ fill: '#f59e0b', r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Behavioral Cycle Timeline */}
        <div className="bg-white border border-border rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Complete Behavioral Cycle</h3>
          <div className="space-y-4">
            {selectedPatient.emotionData.map((point, idx) => {
              const severity = point.angerLevel < 25 ? 'low' : 
                             point.angerLevel < 50 ? 'medium' :
                             point.angerLevel < 75 ? 'high' : 'critical';
              const severityColor = getSeverityColor(point.angerLevel);
              
              return (
                <div key={idx} className="flex items-start gap-4">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-white"
                      style={{ backgroundColor: severityColor }}
                    />
                    {idx < selectedPatient.emotionData.length - 1 && (
                      <div
                        className="w-1 h-12"
                        style={{ backgroundColor: severityColor, opacity: 0.3 }}
                      />
                    )}
                  </div>

                  {/* Timeline content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-foreground">{point.time}</span>
                      <span className="text-sm font-bold" style={{ color: severityColor }}>
                        {Math.round(point.angerLevel)}% - {getSeverityLabel(point.angerLevel)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{point.event}</p>
                    {point.intervention && (
                      <div className="mt-2 bg-green-50 border border-green-200 rounded p-2">
                        <p className="text-xs font-semibold text-green-900">
                          ✓ Intervention: {point.intervention}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Patient Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Risk Pattern */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-900 mb-4">⚠️ Risk Pattern Analysis</h3>
            <ul className="space-y-2 text-sm text-red-800">
              <li>• Peak anger occurs around <strong>{peakAnger.time}</strong></li>
              <li>• Average anger level: <strong>{Math.round(avgAnger)}%</strong></li>
              <li>• Total interventions needed: <strong>{interventions.length}</strong></li>
              <li>• Risk level: <strong className="uppercase">{selectedPatient.riskLevel}</strong></li>
              <li>• Condition: <strong>{selectedPatient.condition}</strong></li>
            </ul>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">💡 Care Recommendations</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>✓ Increase monitoring around <strong>{peakAnger.time}</strong></li>
              <li>✓ Have familiar caregivers available during high-risk times</li>
              <li>✓ Prepare calming activities in advance</li>
              <li>✓ Monitor for escalation patterns</li>
              <li>✓ Document interventions and outcomes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
