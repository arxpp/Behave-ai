import { useState, useRef, useEffect } from 'react';
import { Camera, Upload, AlertCircle, Send } from 'lucide-react';
import { mockEmotionDetection, normalizeEmotions, generateAlert, getAngerSeverity, getSeverityColor, type AlertNotification } from '@/lib/demoUtils';

export default function LiveDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [emotions, setEmotions] = useState<any>(null);
  const [angerLevel, setAngerLevel] = useState(0);
  const [alerts, setAlerts] = useState<AlertNotification[]>([]);
  const [patientName, setPatientName] = useState('John Doe');
  const [isProcessing, setIsProcessing] = useState(false);

  // Start camera stream
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      alert('Unable to access camera. Please check permissions.');
    }
  };

  // Stop camera stream
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsStreaming(false);
    }
  };

  // Capture frame and analyze
  const captureAndAnalyze = () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsProcessing(true);
    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    // Simulate emotion detection
    setTimeout(() => {
      const rawEmotions = mockEmotionDetection();
      const normalized = normalizeEmotions(rawEmotions);
      setEmotions(normalized);
      
      const anger = normalized.anger;
      setAngerLevel(anger);

      // Generate alert if anger level is high
      if (anger > 40) {
        const newAlert = generateAlert(anger, patientName);
        setAlerts(prev => [newAlert, ...prev].slice(0, 5));
      }

      setIsProcessing(false);
    }, 1000);
  };

  // Handle photo upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setIsProcessing(true);
      setTimeout(() => {
        const rawEmotions = mockEmotionDetection();
        const normalized = normalizeEmotions(rawEmotions);
        setEmotions(normalized);
        
        const anger = normalized.anger;
        setAngerLevel(anger);

        if (anger > 40) {
          const newAlert = generateAlert(anger, patientName);
          setAlerts(prev => [newAlert, ...prev].slice(0, 5));
        }

        setIsProcessing(false);
      }, 1000);
    };
    reader.readAsDataURL(file);
  };

  const severity = getAngerSeverity(angerLevel);
  const severityColor = getSeverityColor(severity);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Try CareMind AI Live
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience real-time facial recognition and emotion detection. Use your camera or upload a photo to see how CareMind AI detects anger levels and alerts caregivers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Camera & Controls */}
          <div className="space-y-6">
            {/* Patient Name Input */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Patient Name (for demo)
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter patient name"
              />
            </div>

            {/* Camera Feed */}
            <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
              {isStreaming ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <div className="text-center">
                    <Camera size={48} className="text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Camera feed will appear here</p>
                  </div>
                </div>
              )}
            </div>

            {/* Hidden Canvas for frame capture */}
            <canvas ref={canvasRef} width={640} height={480} className="hidden" />

            {/* Controls */}
            <div className="space-y-3">
              {!isStreaming ? (
                <button
                  onClick={startCamera}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Camera size={20} />
                  Start Camera
                </button>
              ) : (
                <>
                  <button
                    onClick={captureAndAnalyze}
                    disabled={isProcessing}
                    className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {isProcessing ? 'Analyzing...' : 'Capture & Analyze'}
                  </button>
                  <button
                    onClick={stopCamera}
                    className="w-full bg-gray-300 text-foreground py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                  >
                    Stop Camera
                  </button>
                </>
              )}

              {/* Photo Upload */}
              <label className="w-full bg-blue-100 text-primary py-3 rounded-lg font-semibold hover:bg-blue-200 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Upload size={20} />
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Right: Results & Alerts */}
          <div className="space-y-6">
            {/* Anger Level Display */}
            {emotions && (
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Emotion Analysis</h3>

                {/* Anger Level Gauge */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">Anger Level</span>
                    <span className="text-2xl font-bold" style={{ color: severityColor }}>
                      {Math.round(angerLevel)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full transition-all duration-300"
                      style={{ width: `${angerLevel}%`, backgroundColor: severityColor }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 capitalize">
                    Severity: <span style={{ color: severityColor }} className="font-bold">{severity}</span>
                  </p>
                </div>

                {/* All Emotions */}
                <div className="space-y-3">
                  {Object.entries(emotions).map(([emotion, value]) => (
                    <div key={emotion}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="capitalize text-foreground">{emotion}</span>
                        <span className="font-semibold">{Math.round(value as number)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-300"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Alerts Panel */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-red-600" />
                Notifications ({alerts.length})
              </h3>

              {alerts.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No alerts yet. High anger levels will trigger notifications here.
                </p>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-foreground">
                              {alert.type === 'sms' ? '📱 SMS' : '📧 EMAIL'}
                            </span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              {alert.status}
                            </span>
                          </div>
                          <p className="text-sm text-foreground font-semibold mb-2">
                            {alert.patientName} - {alert.location}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            {alert.message}
                          </p>
                          <div className="text-xs text-muted-foreground">
                            {alert.type === 'sms' && <p>To: {alert.phoneNumber}</p>}
                            {alert.type === 'email' && <p>To: {alert.email}</p>}
                            <p>{alert.timestamp.toLocaleTimeString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold" style={{ color: getSeverityColor(getAngerSeverity(alert.angerLevel)) }}>
                            {Math.round(alert.angerLevel)}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm text-blue-900">
            <strong>ℹ️ Demo Note:</strong> This is a demonstration of how CareMind AI works. In production, the system uses advanced machine learning models trained on diverse facial expressions. The emotion detection shown here is simulated for demonstration purposes. Real implementation would use state-of-the-art emotion recognition APIs with 94%+ accuracy.
          </p>
        </div>
      </div>
    </section>
  );
}
